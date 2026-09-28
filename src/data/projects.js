export const projects = [
  {
    "slug": "shinkei-systems",
    "number": "01",
    "title": "Shinkei Systems",
    "subtitle": "Mechanical systems for fish-quality research",
    "category": "ROBOTICS / MECHANICAL DESIGN / EXPERIMENTATION",
    "period": "Summer 2026",
    "status": "Internship",
    "visual": "shinkei",
    "image": "shinkei/rigor-mechanical-assembly.webp",
    "alt": "Exploded CAD view of the rigor mortis system shelf and supporting mechanical components",
    "coverCaption": "Rigor mortis system: mechanical assembly shown in my summer 2026 internship presentation.",
    "summary": "I worked on the hardware and software behind rigor mortis tracking, hyperspectral imaging, and texture analysis.",
    "role": "R&D / Quality Mechanical Engineering Intern",
    "team": "Shinkei engineering and research team; improvements to existing systems",
    "tools": [
      "Siemens NX",
      "Sheet metal",
      "Python / analysis workflows",
      "Raspberry Pi",
      "Hyperspectral imaging",
      "Serial data acquisition"
    ],
    "intro": "A lot of my summer at Shinkei was spent getting research equipment to work the way we needed it to. That meant switching between CAD, wiring, Python, and the actual machines. Here are the rigor mortis, hyperspectral imaging, and texture-analysis projects I worked on.",
    "sections": [
      {
        "title": "What I worked on",
        "text": "The R&D team needed repeatable ways to measure changes in fish quality. I worked on an existing rigor mortis system, set up new imaging equipment, and helped get a texture analyzer running. Some days that meant changing a bracket. Other days it meant figuring out why a camera or a serial connection was not cooperating."
      },
      {
        "title": "Rigor mortis: from CAD to the machine",
        "text": "I changed the limit-switch brackets so we could adjust the starting positions instead of fighting a fixed setup. I also worked on the mechanical structure and HMI mount. These are the CAD views and some of the hands-on fitting work behind those changes.",
        "image": "shinkei/adjustable-limit-switch-bracket.webp",
        "alt": "Siemens NX view of an adjustable limit-switch bracket attached to a support member",
        "caption": "The adjustable limit-switch bracket in NX.",
        "gallery": [
          {
            "image": "shinkei/rigor-bracket-detail.webp",
            "alt": "CAD close-up of a bracket mounted to a plate",
            "caption": "Another view of the bracket and its mounting points."
          },
          {
            "image": "shinkei/rigor-bracket-built.webp",
            "alt": "Fabricated limit-switch bracket on the rigor system",
            "caption": "The bracket on the actual hardware."
          },
          {
            "image": "shinkei/rigor-bracket-fitting.webp",
            "alt": "Hands fitting a bracket against the rigor system plate",
            "caption": "Checking the fit during assembly."
          }
        ]
      },
      {
        "title": "Rigor mortis: making runs less fragile",
        "text": "Most of the fixes were in the run script: camera-health checks, starting-position and detection checks, overactuation limits, and logs that made troubleshooting much easier. I also worked through inconsistent pinout wiring, camera calibration, automatic uploads, and the two-Pi setup. A KVM switch let us control both computers from one screen.",
        "table": [
          [
            "Adjustable switch positions",
            "Make initial positioning easier to configure."
          ],
          [
            "Health checks and actuation limits",
            "Check acquisition conditions and constrain motion in the run script."
          ],
          [
            "Diagnostic reports and run logs",
            "Preserve information for root-cause analysis."
          ],
          [
            "HMI and KVM access",
            "Improve interaction with the two-computer setup."
          ]
        ],
        "gallery": [
          {
            "image": "shinkei/rigor-hmi.webp",
            "alt": "Touchscreen mounted on the rigor mortis system",
            "caption": "The mounted screen and operator setup."
          },
          {
            "image": "shinkei/rigor-wiring.webp",
            "alt": "Raspberry Pi and relay wiring inside the rigor system",
            "caption": "Working through the wiring and connections."
          },
          {
            "image": "shinkei/rigor-system-diagram.webp",
            "alt": "Diagram showing power, cameras, actuators, and the two Raspberry Pis connected through a KVM switch",
            "caption": "The system diagram from my presentation, including the two-Pi arrangement.",
            "wide": true
          }
        ]
      },
      {
        "title": "Rigor mortis: tracking the fish",
        "text": "I overhauled the run and analysis scripts to turn the camera images into measurements we could review. The workflow corrects fisheye distortion, tracks the markers with SAM 2.1, and flags detections that look unusual. Someone can then accept or exclude those detections before the plots and measurements are finalized.",
        "steps": [
          [
            "Acquire & prepare",
            "Collect image sequences, pair the camera folders, correct fisheye distortion, and crop unused edges."
          ],
          [
            "Seed & track",
            "Initialize the visible markers and track them through the sequence with SAM 2.1."
          ],
          [
            "Review detections",
            "Flag unusual mask size, shape, motion, or overlap; accept or exclude detections during review."
          ],
          [
            "Measure & export",
            "Produce marker measurements and rigor/time-to-rigor plots, incorporating review decisions."
          ]
        ],
        "stepsStatus": "DOCUMENTED WORKFLOW",
        "animation": {
          "src": "shinkei/rigor-tracking.gif",
          "poster": "shinkei/rigor-tracking-poster.webp",
          "alt": "Animated rigor mortis image sequence showing colored tracking markers on the fish",
          "caption": "The original tracking animation from my rigor mortis slide. Open it to watch the sequence; close it to hide the motion."
        },
        "gallery": [
          {
            "image": "shinkei/rigor-analysis-visual.webp",
            "alt": "Orange and yellow fish-shaped visualization on a black background",
            "caption": "An analysis visualization included alongside the workflow in my presentation."
          }
        ]
      },
      {
        "title": "Hyperspectral imaging: setup",
        "text": "The Resonon hyperspectral camera arrived during my internship, so I installed it, got it set up, and started testing it. I worked on the settings and procedures we would need for future fish-quality correlation studies. This part of the project was about getting the equipment and acquisition process ready.",
        "image": "shinkei/hsi-texture-lab.webp",
        "alt": "Resonon hyperspectral imaging apparatus and texture-analysis equipment on a laboratory bench",
        "caption": "The HSI and texture-analysis equipment after setup in the lab."
      },
      {
        "title": "Hyperspectral imaging: initial acquisition",
        "text": "Here is one of the initial acquisition views from the imaging software. I used these early scans to work through setup and scan configuration before the later correlation studies.",
        "image": "shinkei/hyperspectral-imaging-setup.webp",
        "alt": "Hyperspectral acquisition software displaying a fish sample and an RGB pixel-index plot",
        "caption": "An initial scan in the HSI software. The RGB pixel-index plot shown here is not a calibrated spectral result."
      },
      {
        "title": "Texture analysis: first, get the machine here",
        "text": "There was quite a bit of back-and-forth with the vendor before the texture analyzer finally arrived. I helped get it procured, assembled, calibrated, and tested. Then we ran into the next problem: it printed its results on tiny receipt paper. That was not especially helpful when we wanted the measurements on a computer."
      },
      {
        "title": "Texture analysis: getting data off receipt paper",
        "text": "My plan was to read the printer output through a serial connection and bring it into PuTTY. I worked out the output speed and COM-port settings, and got the internal load-cell readings onto my laptop. Success :D The interface only reads the output; it does not control the machine’s motion.",
        "image": "shinkei/texture-analyzer-data-interface.webp",
        "alt": "Rear of the texture analyzer with serial interface hardware and a USB connection",
        "caption": "The serial interface connected to the back of the analyzer.",
        "gallery": [
          {
            "image": "shinkei/texture-printer-connector.webp",
            "alt": "Printer module and connector used during texture-analyzer interface development",
            "caption": "The printer hardware I was working with."
          },
          {
            "image": "shinkei/texture-interface-bench.webp",
            "alt": "Serial interface components and wiring being tested at a desk",
            "caption": "Working through the interface on the bench."
          },
          {
            "image": "shinkei/texture-terminal-readout.webp",
            "alt": "PuTTY terminal showing force readings from the texture analyzer",
            "caption": "The moment the analyzer output made it onto the laptop."
          }
        ]
      },
      {
        "title": "Texture Lab (yes, it is very pink)",
        "text": "I made this UI incredibly pink because the R&D scientist thought it would be cute :) It puts the connection settings and live-force readout in one place. There is still a real measurement limit here: the output rate cannot fully capture a fast compression curve, so I would not use an undersampled trace to calculate texture properties without validating that measurement first.",
        "image": "shinkei/texture-lab-interface.webp",
        "alt": "Shinkei Texture Lab read-only connection and live-force interface",
        "caption": "The Texture Lab interface. This screenshot shows the disconnected state, rather than a recorded test.",
        "gallery": [
          {
            "image": "shinkei/texture-pink-ui-laptop.webp",
            "alt": "Bright pink Texture Lab interface open on a laptop",
            "caption": "The very pink UI running on my laptop."
          }
        ]
      },
      {
        "title": "What I took away",
        "text": "I got to follow changes all the way from NX and sheet metal to installation and troubleshooting. I also spent a lot of time on the less glamorous parts of research equipment: reliable connections, useful logs, clear procedures, and interfaces people actually want to use. Those details made up a big part of this internship."
      }
    ],
    "takeaway": "Getting a sensor reading is one part of the job. Getting the whole setup to run reliably, and making the data easy to check, takes a lot more work."
  },
  {
    "slug": "coffee-roaster",
    "number": "02",
    "title": "Automated coffee roaster",
    "subtitle": "An instrumented research platform",
    "category": "MACHINE DESIGN / SENSING / CONTROLS",
    "period": "Independent project · In progress",
    "status": "Mechanical fabrication underway",
    "visual": "roaster",
    "image": "coffee-roaster/mechanical-structure-progress.webp",
    "alt": "Roaster mechanical structure and separate panels arranged on a workshop bench",
    "coverCaption": "Mechanical structure during fabrication, with separate panels on the bench. Work in progress.",
    "summary": "Developing a benchtop roaster to study the relationship between process signals and final roast color.",
    "role": "Independent project developer; structural welding",
    "team": "Personal interdisciplinary research project",
    "tools": [
      "Mechanical architecture",
      "Welding",
      "Instrumentation planning",
      "Experimental methodology"
    ],
    "intro": "Experience with coffee sensory evaluation at Keurig Dr Pepper motivated a research question: can measurements during roasting help predict the final optical roast state?",
    "sections": [
      {
        "title": "Objective",
        "text": "Develop a modular research platform that combines controlled roasting with synchronized process measurements. The long-term goal is to connect temperature, agitation, acoustic events, humidity-related signals, and power input to quantitatively measured roast outcomes."
      },
      {
        "title": "Architecture direction",
        "text": "The proposed V1 architecture uses a rotating drum between structural plates, an external motor with a timing-belt drive, electrically heated airflow, and a separate cooling tray. A detachable control enclosure is planned to keep instrumentation accessible and away from the hot chamber.",
        "diagram": true
      },
      {
        "title": "Mechanical fabrication",
        "text": "I welded parts of the roaster’s mechanical structure as part of the prototype build. The photographs document this fabrication work and the structure in progress, before a complete operating system is established.",
        "image": "coffee-roaster/structural-welding-detail.webp",
        "alt": "Close-up of Zahin welding a joint in the roaster mechanical structure",
        "caption": "Welding a joint in the mechanical structure. Fabrication work by Zahin Kabir."
      },
      {
        "title": "Mechanical design",
        "text": "A rigid drum skeleton with a perforated stainless-steel shell is the preferred concept. Structural rings, a rear disk, and vane rails carry loads rather than relying on flexible mesh. Replaceable vane geometry and an accessible front plate support iteration.",
        "facts": [
          [
            "150 g",
            "Nominal batch design target"
          ],
          [
            "120 × 125 mm",
            "Provisional drum ID × working length"
          ],
          [
            "30–70 RPM",
            "Proposed variable-speed range"
          ]
        ],
        "note": "These are prototype starting values, not finalized dimensions or demonstrated performance."
      },
      {
        "title": "Key engineering decisions",
        "table": [
          [
            "Rigid skeleton + perforated shell",
            "Maintain drum stiffness while allowing airflow."
          ],
          [
            "Motor and bearings outside the hottest region",
            "Reduce thermal exposure and preserve service access."
          ],
          [
            "Adjustable drum speed and vane geometry",
            "Treat agitation as an experimental variable."
          ],
          [
            "Separate cooling tray",
            "Make post-discharge cooling part of the repeatable process."
          ]
        ]
      },
      {
        "title": "Instrumentation plan",
        "text": "Proposed temperature measurements cover the inlet, chamber, bean region, and exhaust. Additional channels include encoder feedback, acoustic sensing, humidity-related measurements, and heater power. Sensor selection, calibration, and integration remain development work.",
        "table": [
          [
            "Temperature",
            "Thermal trajectory and rate of rise"
          ],
          [
            "Encoder",
            "Drum speed and agitation conditions"
          ],
          [
            "Acoustics",
            "Candidate first- and second-crack event features"
          ],
          [
            "Humidity + mass",
            "Moisture-related process information and mass loss"
          ],
          [
            "Power",
            "Energy input as a modeling variable"
          ]
        ]
      },
      {
        "title": "Controls & data acquisition",
        "text": "The proposed division of responsibilities places deterministic control and safety functions on embedded hardware, with logging, visualization, and analysis on a laptop. Synchronized acquisition and future predictive or closed-loop control are planned; they are not presented as implemented capabilities."
      },
      {
        "title": "Experimental methodology",
        "text": "Development is staged so that each experiment answers a specific question before more complexity is added. Geometry and rotation come first, followed by thermal behavior, complete roast cycles, and multimodal data collection.",
        "steps": [
          [
            "Geometry / rotation",
            "Evaluate alignment, vibration, noise, and agitation."
          ],
          [
            "Thermal prototype",
            "Characterize temperature trajectory and thermal uniformity."
          ],
          [
            "Functional roaster",
            "Integrate loading, discharge, chaff handling, and cooling."
          ],
          [
            "Instrumented research",
            "Collect synchronized signals and validate optical predictions."
          ]
        ]
      },
      {
        "title": "Validation & current status",
        "text": "Mechanical fabrication is underway, including welding of the roaster structure. Instrumentation, control integration, and roast validation remain planned. The proposed validation route uses objective colorimetry or diffuse reflectance to measure optical roast state. Any future prediction of Agtron values will require calibration against paired Agtron measurements."
      },
      {
        "title": "Next steps",
        "text": "Continue mechanical fabrication and integration, then evaluate alignment, rotation, and agitation in the assembled prototype. Subsequent work will establish calibration procedures and repeatability before predictive modeling or closed-loop control."
      }
    ],
    "takeaway": "Design the machine so that its geometry, sensors, and experiments can change as the research develops."
  },
  {
    "slug": "coffee-degassing",
    "number": "03",
    "title": "Modular coffee degassing system",
    "subtitle": "A lab-scale model for process decisions",
    "category": "KDP / EXPERIMENTAL EQUIPMENT",
    "period": "Keurig Dr Pepper · Rotation II",
    "status": "Lab-scale validation",
    "visual": "degassing",
    "image": "kdp-degassing/modular-silo.webp",
    "alt": "Section view and assembly of a modular laboratory coffee degassing silo",
    "summary": "I designed a modular lab-scale silo in SolidWorks to test how we could help roasted coffee degas.",
    "role": "Modular silo design and modeling; validation assay project lead",
    "team": "Keurig Dr Pepper engineering teams",
    "tools": [
      "SolidWorks",
      "Modular design",
      "Lab-scale testing",
      "Experimental analysis"
    ],
    "intro": "Coffee keeps releasing gas after roasting. At Keurig Dr Pepper, I worked on a small modular silo to study that process before making changes to much larger equipment.",
    "sections": [
      {
        "title": "Why coffee needs time to degas",
        "text": "Roasting creates gases that stay trapped in the coffee and gradually escape. Grind the beans, and those gases can release more quickly. If too much gas is still there when the coffee is packed, it can build pressure inside the pod and cause problems with the seal and brewing.",
        "gallery": [
          {
            "image": "kdp-degassing/why-coffee-degasses.webp",
            "alt": "Original slide explaining gas trapped in roasted coffee and released after grinding",
            "caption": "The coffee-degassing context slide from my original portfolio."
          },
          {
            "image": "kdp-degassing/silo-versus-bag.webp",
            "alt": "Original comparison of gas permeability in storage bags and large silos",
            "caption": "Why a process that worked with permeable bags did not translate directly to enclosed silos."
          },
          {
            "image": "kdp-degassing/silo-gas-accumulation.webp",
            "alt": "Original silo diagram showing carbon dioxide accumulation around the coffee",
            "caption": "The gas-accumulation problem I was trying to investigate. The times shown are the original project’s baseline and target."
          }
        ]
      },
      {
        "title": "Building a smaller version to test",
        "text": "I designed and modeled the modular silo in SolidWorks so we could investigate the degassing behavior at lab scale. The larger facility had different storage conditions from the rest of the network, especially the enclosed silos. A smaller setup gave us a way to study that problem before choosing a production change.",
        "image": "kdp-degassing/modular-silo.webp",
        "alt": "Public CAD views of the modular degassing silo",
        "caption": "My modular silo design: assembly, section view, and the earlier concept sketch."
      },
      {
        "title": "Testing it (and a connected project)",
        "text": "I validated the modular silo at lab scale and used finished-package pressure comparisons as part of the validation work. Fun fact: I also led the project for that assay! It used the pressure tester I co-designed with the R&D Process Engineering team, which has its own project page here."
      },
      {
        "title": "What we decided to change",
        "text": "The lab work pointed toward retrofitting the larger silos with a venting probe. The approach used nitrogen injection and pressurized gas release/agitation to help reduce gas accumulation. In the original project comparison, that was the lowest-cost option.",
        "gallery": [
          {
            "image": "kdp-degassing/venting-probe-comparison.webp",
            "alt": "Original venting-probe design slide with finished-goods pressure box plots for control and probe trials",
            "caption": "The venting-probe concept and pressure comparison from my original portfolio. Open the image for a closer look at the source chart."
          }
        ]
      },
      {
        "title": "Where it landed",
        "text": "The small-scale tests helped inform a retrofit for the production equipment. I liked that this project connected a CAD model and lab experiment to an actual manufacturing decision, with the pressure-test assay tying the pieces together."
      }
    ],
    "takeaway": "The lab-scale silo gave us a practical way to test the idea before changing much larger equipment."
  },
  {
    "slug": "package-pressure-tester",
    "number": "04",
    "title": "Package pressure tester",
    "subtitle": "Practical hardware for a measurement problem",
    "category": "KDP / TEST-EQUIPMENT DEVELOPMENT",
    "period": "Keurig Dr Pepper",
    "status": "Built & used for testing",
    "visual": "pressure",
    "image": "pressure-tester/test-rig.webp",
    "alt": "Two views of the package pressure test apparatus with chamber and gauge",
    "summary": "I co-designed a package pressure tester using a pool-filter housing and 3D-printed parts.",
    "role": "Co-designer; validation assay project lead",
    "team": "KDP R&D Process Engineering team",
    "tools": [
      "Test-equipment design",
      "3D-printed parts",
      "Experimental methods",
      "Pressure measurement"
    ],
    "intro": "This started with a pretty practical question: could pressure differences between where a pod was packed and where it was brewed help explain the problems consumers were seeing?",
    "sections": [
      {
        "title": "Why we needed the tester",
        "text": "Consumer complaints pointed to pressure-related brewing problems. The local barometric pressure at a packing facility can differ from the pressure where someone brews their coffee, so we needed a consistent way to compare finished packages and set useful benchmarks across KDP sites."
      },
      {
        "title": "Yes, that is a pool filter",
        "text": "I co-designed the tester with the R&D Process Engineering team using a pool-filter housing and 3D-printed parts. We repurposed hardware that was already available and added the pieces needed for the pressure assay.",
        "image": "pressure-tester/test-rig.webp",
        "alt": "Public photographs of the pressure test rig",
        "caption": "The pressure-test rig from my original portfolio, with the housing, gauge, and connections visible."
      },
      {
        "title": "What we measured",
        "text": "The assay compared package pressure against local barometric pressure and the chamber pressure used during testing. That gave the team a way to compare finished goods across sites and account for the conditions around the package."
      },
      {
        "title": "How we used it",
        "text": "The team used the tester to establish pressure benchmarks and support fill-pressure adjustments across the network. I also led the validation assay project used for the modular degassing silo, so this tool ended up supporting that work too."
      },
      {
        "title": "What I learned",
        "text": "The fixture and the procedure have to work together. Building the chamber was only part of the job; we also needed to be clear about the pressure comparison we were making so the results could inform a decision."
      }
    ],
    "takeaway": "A pool-filter housing, some custom parts, and a clear measurement question became a useful test tool."
  }
];
