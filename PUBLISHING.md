# Publish with GitHub Pages

The site is ready for a GitHub repository. The included `.github/workflows/deploy.yml` builds and checks the Astro site, then publishes `dist/` on each push to `main`. It determines the final site URL and repository prefix automatically.

## 1. Create the online repository

Sign in at https://github.com/new and create a **public** repository named `engineering-portfolio` (or another name you prefer). For this existing local project, leave the online README, .gitignore, and license options unselected.

Public repositories can use GitHub Pages on GitHub Free. The resulting site is normally `https://YOUR-USERNAME.github.io/engineering-portfolio/`. To use the shorter `https://YOUR-USERNAME.github.io/`, name the repository `YOUR-USERNAME.github.io` instead.

## 2. Upload only the website project

Open PowerShell. Replace `YOUR-USERNAME` and the repository name below with your real values, then run:

```powershell
Set-Location -LiteralPath 'C:\Users\Zahin Kabir\Documents\portfolio context\portfolio'
git init -b main
git add .
git commit -m "Add engineering portfolio"
git remote add origin https://github.com/YOUR-USERNAME/engineering-portfolio.git
git push -u origin main
```

Git may open a browser for sign-in. If the first commit asks for your identity, configure your preferred author name and GitHub verified or no-reply email with `git config user.name` and `git config user.email` in this project, then retry the commit.

Run these initialization commands only once. This guide does not assume a repository has already been initialized.

**Use the inner `portfolio` directory, not the parent `portfolio context` directory.** The parent contains the presentation and private review materials. The website's `.gitignore` excludes dependencies, generated output, and local environment files. The workflow builds the website on GitHub, so `node_modules` and `dist` do not need uploading.

## 3. Enable the website

In the GitHub repository, open **Settings → Pages**. Under **Build and deployment → Source**, choose **GitHub Actions**.

Open the repository's **Actions** tab, select **Deploy portfolio to GitHub Pages**, then choose **Run workflow → main → Run workflow**. This also retries the initial push if it ran before Pages was enabled.

After both build and deploy succeed, open **Settings → Pages → Visit site**. Publishing can take several minutes. No purchased domain is required.

## 4. Publish later edits

After reviewing edits locally:

```powershell
Set-Location -LiteralPath 'C:\Users\Zahin Kabir\Documents\portfolio context\portfolio'
git add .
git commit -m "Update portfolio content"
git push
```

The workflow rebuilds and updates the same public site. If a build fails, inspect its logs in Actions; the last successful deployment remains available.

## Current publication status

Prepared locally. No GitHub repository was created, no files were uploaded, and no site was published from this task. The workflow will run only after you upload the project and enable GitHub Pages.

## Official references

- https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-github-pages-site
- https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site
- https://github.com/actions/starter-workflows/blob/main/pages/astro.yml
