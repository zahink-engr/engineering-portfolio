"""CHE 320: Tennessee Eastman Process fault diagnosis.

Select hidden width on validation accuracy, then evaluate the selected model
once on the supplied test split. Outputs are saved beside this script.
"""
from pathlib import Path
import json
import random
import numpy as np
import pandas as pd
import torch
from torch import nn
from torch.utils.data import DataLoader, TensorDataset
from sklearn.preprocessing import StandardScaler
from sklearn.metrics import accuracy_score, classification_report, confusion_matrix

ROOT = Path(__file__).resolve().parent
LABEL_COLUMN = "fault_id"
HIDDEN_SIZES = [64, 128, 256]
EPOCHS = 50
BATCH_SIZE = 128
LEARNING_RATE = 1e-3
RANDOM_SEED = 42
DEVICE = torch.device("cpu")
torch.set_num_threads(2)
torch.use_deterministic_algorithms(True)


def load_data(name, expected_columns=None):
    df = pd.read_csv(ROOT / f"{name}.csv")
    if LABEL_COLUMN not in df:
        raise ValueError(f"{name}: missing {LABEL_COLUMN}")
    features = df.drop(columns=[LABEL_COLUMN])
    if expected_columns is not None and list(features.columns) != expected_columns:
        raise ValueError(f"{name}: feature columns differ from training")
    labels = df[LABEL_COLUMN].to_numpy()
    if not np.isfinite(features.to_numpy()).all() or not np.isfinite(labels).all():
        raise ValueError(f"{name}: nonfinite data")
    if not np.equal(labels, labels.astype(int)).all() or (labels < 0).any():
        raise ValueError(f"{name}: invalid fault labels")
    return features.to_numpy(dtype=np.float32), labels.astype(int), list(features.columns)


class MLP(nn.Module):
    def __init__(self, input_dim, hidden_dim, output_dim):
        super().__init__()
        self.net = nn.Sequential(nn.Linear(input_dim, hidden_dim), nn.ReLU(),
                                 nn.Linear(hidden_dim, output_dim))

    def forward(self, x):
        return self.net(x)


def evaluate(model, X, y):
    model.eval()
    with torch.inference_mode():
        predictions = model(torch.tensor(X, dtype=torch.float32)).argmax(1).numpy()
    return float(accuracy_score(y, predictions)), predictions


def main():
    X_train, y_train, columns = load_data("train")
    X_val, y_val, _ = load_data("val", columns)
    classes = sorted(np.unique(y_train).tolist())
    if classes != list(range(21)) or len(columns) != 52:
        raise ValueError("Expected 21 fault labels (0–20) and 52 sensor/control features")
    if not set(y_val).issubset(classes):
        raise ValueError("Validation has unseen labels")
    scaler = StandardScaler()
    X_train = scaler.fit_transform(X_train)
    X_val = scaler.transform(X_val)
    results, best_model, best_val, best_hidden = [], None, -1, None
    for hidden in HIDDEN_SIZES:
        random.seed(RANDOM_SEED)
        np.random.seed(RANDOM_SEED)
        torch.manual_seed(RANDOM_SEED)
        generator = torch.Generator().manual_seed(RANDOM_SEED)
        loader = DataLoader(TensorDataset(torch.tensor(X_train), torch.tensor(y_train)),
                            batch_size=BATCH_SIZE, shuffle=True, generator=generator)
        model = MLP(len(columns), hidden, len(classes)).to(DEVICE)
        optimizer = torch.optim.Adam(model.parameters(), lr=LEARNING_RATE)
        loss_fn = nn.CrossEntropyLoss()
        for epoch in range(EPOCHS):
            model.train()
            for X, y in loader:
                optimizer.zero_grad()
                loss = loss_fn(model(X), y)
                loss.backward()
                optimizer.step()
        train_acc, _ = evaluate(model, X_train, y_train)
        val_acc, _ = evaluate(model, X_val, y_val)
        results.append({"hidden_size":hidden,"train_accuracy":train_acc,"validation_accuracy":val_acc})
        print(f"Hidden {hidden}: train {train_acc:.4%}, validation {val_acc:.4%}", flush=True)
        if val_acc > best_val:
            best_model, best_val, best_hidden = model, val_acc, hidden
    # Test data is evaluated only after model selection is complete.
    X_test, y_test, _ = load_data("test", columns)
    if not set(y_test).issubset(classes):
        raise ValueError("Test has unseen labels")
    X_test = scaler.transform(X_test)
    test_acc, predictions = evaluate(best_model, X_test, y_test)
    report = classification_report(y_test, predictions, labels=classes, output_dict=True, zero_division=0)
    output = {"label_column":LABEL_COLUMN,"feature_count":len(columns),"classes":classes,
              "split_sizes":{"train":len(y_train),"validation":len(y_val),"test":len(y_test)},
              "seed":RANDOM_SEED,"epochs":EPOCHS,"batch_size":BATCH_SIZE,"learning_rate":LEARNING_RATE,
              "pytorch_version":torch.__version__,"device":"cpu","architectures":results,
              "selection_rule":"Highest validation accuracy; test evaluated after selection",
              "selected_hidden_size":best_hidden,"test_accuracy":test_acc,
              "classification_report":report,"confusion_matrix":confusion_matrix(y_test,predictions,labels=classes).tolist()}
    (ROOT / "verified_results.json").write_text(json.dumps(output,indent=2),encoding="utf-8")
    print(f"Selected hidden width: {best_hidden}; test accuracy: {test_acc:.4%}", flush=True)
    print(classification_report(y_test,predictions,labels=classes,zero_division=0),flush=True)


if __name__ == "__main__":
    main()
