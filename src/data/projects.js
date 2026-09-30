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
    "summary": "I worked on texture analysis, hyperspectral imaging, NERA computer vision, and rigor mortis tracking.",
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
    "intro": "At Shinkei, I worked on equipment for studying fish quality and on the NERA computer-vision module. I got to take these projects through CAD, assembly, testing, and software development. Here are the systems I worked on!",
    "sections": [
      {
        "title": "TPA analyser: custom procurement and commissioning",
        "text": "I worked with a vendor in China to procure a custom texture profile analyser, then helped assemble, calibrate, and test it. The machine came with a microprinter as its only output, so the next part of my project was getting those readings onto a computer."
      },
      {
        "title": "TPA analyser: a digital load-cell feed",
        "text": "I tapped into the printer output through a serial connection and used PuTTY to read it. After working out the output speed and COM-port settings, I had a live feed from the internal load cell on my laptop! I then integrated that feed into my own UI. The connection is read-only; it does not control the machine’s motion.",
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
        "title": "My wonderfully pink user interface — Texture Lab",
        "text": "I made this UI incredibly pink because the R&D scientist thought it would be cute :) Texture Lab brings the connection settings and live load-cell feed together so we can watch the measurements on a computer. The output rate is still too slow to fully capture a fast compression curve, so calculating texture properties from it would need further validation.",
        "image": "shinkei/texture-lab-interface.webp",
        "alt": "Shinkei Texture Lab read-only connection and live-force interface",
        "caption": "The Texture Lab interface. This screenshot shows the disconnected state, rather than a recorded test.",
        "gallery": [
          {
            "image": "shinkei/texture-pink-ui-laptop.webp",
            "alt": "Bright pink Texture Lab interface open on a laptop",
            "caption": "My wonderfully pink Texture Lab UI running on my laptop."
          }
        ]
      },
      {
        "title": "HSI: commissioning and workflow optimization",
        "text": "I commissioned the Resonon hyperspectral imager and worked on the acquisition settings and workflow. I also worked on a pilot study exploring the relationship between fish spoilage and spectral data. This brought the equipment setup and experimental work together.",
        "image": "shinkei/hsi-texture-lab.webp",
        "alt": "Resonon hyperspectral imaging apparatus and texture-analysis equipment on a laboratory bench",
        "caption": "The HSI and texture-analysis equipment after setup in the lab."
      },
      {
        "title": "HSI: pilot-study acquisition",
        "text": "These initial scans helped me refine the imaging workflow for the spoilage-correlation pilot study. The view below shows the acquisition software; it is not a final correlation result.",
        "image": "shinkei/hyperspectral-imaging-setup.webp",
        "alt": "Hyperspectral acquisition software displaying a fish sample and an RGB pixel-index plot",
        "caption": "An initial scan in the HSI software. The RGB pixel-index plot shown here is not a calibrated spectral result."
      },
      {
        "title": "NERA: visual detection module",
        "text": "I worked on the design, fabrication, installation, and deployment of the NERA computer-vision module, along with hardware and software troubleshooting. A big part of the work was making sure the cameras could see the fish clearly in the actual operating environment.",
        "gallery": [
          {
            "image": "shinkei/nera-overview.webp",
            "alt": "CAD assembly of the NERA visual detection module",
            "caption": "The NERA visual detection module in CAD."
          },
          {
            "image": "shinkei/nera-collection.webp",
            "alt": "Fish positioned on a wire support for NERA image collection",
            "caption": "The image-collection setup."
          },
          {
            "image": "shinkei/nera-lighting.webp",
            "alt": "Illuminated fish sample inside the NERA module",
            "caption": "Checking the sample under the module lighting."
          }
        ]
      },
      {
        "title": "NERA: assembly and deployment",
        "text": "I helped assemble NERA2, terminate wires, widen cable openings, and prepare the shipping crate. After deploying CV2 in Tacoma, we used test runs to identify visibility problems with the bottom camera and polycarbonate panels.",
        "gallery": [
          {
            "image": "shinkei/nera-wiring.webp",
            "alt": "Terminated cable connections on a workbench",
            "caption": "Terminating the connections during assembly."
          },
          {
            "image": "shinkei/nera-deployment.webp",
            "alt": "NERA equipment during deployment work",
            "caption": "On site for assembly and deployment."
          },
          {
            "image": "shinkei/nera-assembly.webp",
            "alt": "NERA equipment being prepared near a workshop loading area",
            "caption": "Preparing the equipment for deployment."
          },
          {
            "image": "shinkei/nera-panel.webp",
            "alt": "NERA enclosure panel with a circular opening",
            "caption": "Working on the enclosure."
          }
        ]
      },
      {
        "title": "NERA: camera position and wire-rack design",
        "text": "I explored wire supports in place of polycarbonate to give the cameras a more direct view of the flesh and gut cavity. The bottom camera was affected by fish slime and condensation from the spray system. Moving the camera above the fish addressed that issue and removed the need for the solenoids in that arrangement, but required a new layout and more work on side visibility. I also added a cantilevered loading channel for the upright wire rack and clamp system.",
        "gallery": [
          {
            "image": "shinkei/nera-wire-rack.webp",
            "alt": "NERA CAD model showing a wire rack and loading support",
            "caption": "The wire-rack and loading-support layout."
          },
          {
            "image": "shinkei/nera-view-clear.webp",
            "alt": "Fish sample viewed through the NERA support arrangement",
            "caption": "One of the imaging views used to assess visibility."
          },
          {
            "image": "shinkei/nera-view-fog.webp",
            "alt": "Hazy camera image of a fish sample in NERA",
            "caption": "A visibility issue seen during testing."
          }
        ]
      },
      {
        "title": "NERA: support height and clamp iterations",
        "text": "With the fish centered in the machine, the dorsal region was difficult to see. I tested changes to the support-beam height and worked on the clamp layout. The first clamp design left too little room for the flesh, and fish in rigor tended to close in the top-camera orientation. These photos and CAD views show the iterations I worked through.",
        "gallery": [
          {
            "image": "shinkei/nera-clamp.webp",
            "alt": "Fish sample held in the NERA clamp and wire rack",
            "caption": "Testing how the clamp held the sample."
          },
          {
            "image": "shinkei/nera-height.webp",
            "alt": "Fish sample positioned beneath the NERA lighting and support beams",
            "caption": "Testing the support layout and sample position."
          },
          {
            "image": "shinkei/nera-side-view.webp",
            "alt": "End view through the NERA support assembly",
            "caption": "Checking the side view through the supports."
          },
          {
            "image": "shinkei/nera-layout.webp",
            "alt": "NERA CAD assembly with highlighted support geometry",
            "caption": "Adjusting the rack geometry in CAD."
          },
          {
            "image": "shinkei/nera-cad-front.webp",
            "alt": "Front perspective of the NERA support and clamp assembly",
            "caption": "The support and clamp assembly in CAD."
          },
          {
            "image": "shinkei/nera-cad-side.webp",
            "alt": "Side perspective of the NERA support and clamp assembly",
            "caption": "A second view of the assembly."
          }
        ]
      },
      {
        "title": "Rigor mortis: from CAD to the machine",
        "text": "I changed the limit-switch brackets so we could adjust the starting positions to make the setup easier to adjust. I also worked on the mechanical structure and HMI mount. These are the CAD views and some of the hands-on fitting work behind those changes.",
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
        "title": "Rigor mortis: controls and reliability",
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
        }
      },
      {
        "title": "What I took away",
        "text": "I loved getting to work across mechanical design, experimental equipment, and software in the same internship. I built experience with NX, sheet metal, fabrication, food-safe design, and research procedures, and got to see how those pieces come together on the actual machines."
      }
    ]
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
    "summary": "I’m building a small drum roaster to record what happens during a roast and compare it with the finished coffee.",
    "role": "Independent project developer; structural welding",
    "team": "Personal interdisciplinary research project",
    "tools": [
      "Fusion 360 / mechanical layout",
      "Welding",
      "Teensy 4.1 planning",
      "Python / data analysis",
      "Sensor integration planning"
    ],
    "intro": "Working with coffee at Keurig Dr Pepper made me curious about how small changes during roasting show up in the cup. I’m building this roaster so I can measure more of those changes myself. I’ve started welding the structure; the electronics, heating system, and data collection are still being planned.",
    "sections": [
      {
        "title": "What I want to measure",
        "text": "The idea is to log temperature, drum speed, sound, humidity-related signals, and power during the roast, then compare them with the finished beans. I’d like to see which measurements help predict roast color and, eventually, how the coffee tastes. First I need a machine that can roast repeatably."
      },
      {
        "title": "The mechanical layout",
        "text": "The current layout uses a perforated drum, a belt-driven motor outside the hot chamber, and a blower feeding heated air through a plenum. The beans will dump into a separate cooling tray. I want the drum, vanes, sensors, and control enclosure to be easy to remove as the design changes.",
        "diagram": true,
        "facts": [
          [
            "150 g",
            "Nominal batch target"
          ],
          [
            "120 × 125 mm",
            "Starting drum ID × length"
          ],
          [
            "12 mm",
            "Proposed shaft diameter"
          ]
        ],
        "note": "These are current design targets. Motor torque, fits, bearing temperatures, and final dimensions still need checking."
      },
      {
        "title": "Fabrication so far",
        "text": "I’ve welded parts of the mechanical structure. These photos show that work and the panels during fabrication. The assembled drum drive and heated roast tests are still ahead of me.",
        "image": "coffee-roaster/structural-welding-detail.webp",
        "alt": "Zahin welding a joint in the roaster structure",
        "caption": "Welding the roaster structure."
      },
      {
        "title": "Control and logging plan",
        "text": "For V1 I’m planning to use one Teensy 4.1 for sensor timing and actuator control, with a laptop handling logging, plots, and later analysis. The laptop can request a drum speed, but the Teensy will check the request against the control limits. I want measured RPM and power logged alongside commanded speed and heater duty so I can see when the hardware behaves differently from the command."
      },
      {
        "title": "Tentative electrical layout",
        "text": "This is my current block-level plan. The heater power path is separate from the low-voltage sensors and controls, with an independent hardware shutdown path. Exact supplies, driver interfaces, protection ratings, and connections still need to be worked out.",
        "gallery": [
          {
            "image": "coffee-roaster/tentative-electrical-architecture.svg",
            "alt": "Tentative electrical block diagram separating mains heater power, 24 volt power, Teensy sensor inputs, actuator drivers, laptop, and camera",
            "caption": "Planning diagram, not a wiring schematic or a tested circuit. Open it at full size to read the signal and power paths.",
            "wide": true
          }
        ]
      },
      {
        "title": "Main parts I’m planning around",
        "tableHeaders": [
          "Subsystem",
          "Current selection / open decision"
        ],
        "table": [
          [
            "Controller",
            "1 × Teensy 4.1; 3.3 V-compatible signal interfaces."
          ],
          [
            "Drum drive",
            "NEMA23 stepper, belt/pulley reduction, and a driver matched to motor current."
          ],
          [
            "Shaft and bearings",
            "12 mm shaft; 2 × F6001-2RS bearings proposed. Thermal isolation and fits still need checking."
          ],
          [
            "Heat",
            "120 V ceramic-core replacement element, approximately 1.5–1.6 kW; zero-cross SSR and heatsink."
          ],
          [
            "Airflow and cooling",
            "2 × 24 V centrifugal blowers: roast airflow and separate downdraft cooling/chaff extraction. Exact models and driver interfaces pending."
          ],
          [
            "Bean handling",
            "Servo-operated doors, perforated cooling grate, and chaff trap."
          ],
          [
            "Power and protection",
            "Sized 24 V supply, regulated logic/servo rails, branch protection, hardware E-stop and independent over-temperature cutoff."
          ]
        ],
        "text": "The BOM is still a planning list. I’m choosing the motor, bearings, heater, and blowers early because their dimensions affect the CAD layout."
      },
      {
        "title": "Sensor list",
        "tableHeaders": [
          "Measurement",
          "Planned hardware"
        ],
        "table": [
          [
            "Temperature",
            "4–5 Type K probes with MAX31856 interfaces: inlet, chamber, bean region, exhaust, and an optional extra channel."
          ],
          [
            "Sound and vibration",
            "I2S MEMS microphone plus an ADXL345- or MPU6050-class sensor outside the hot zone."
          ],
          [
            "Humidity",
            "2 × SHT31: ambient and a cooled exhaust sampling location."
          ],
          [
            "Actual drum speed",
            "Incremental shaft encoder to compare measured RPM with commanded RPM."
          ],
          [
            "DC power",
            "INA226 monitor(s) on suitable low-voltage branches only."
          ],
          [
            "Heater power",
            "Separate isolated, AC-rated measurement hardware still to be selected."
          ],
          [
            "Mass loss",
            "Load cell and HX711 on an off-machine weighing fixture."
          ]
        ],
        "text": "Temperature and other slow channels will share timestamps. Audio needs a separate higher-rate buffer. Exhaust temperature and the mounting location will determine whether the humidity sensor can produce useful measurements."
      },
      {
        "title": "Adding a camera",
        "text": "I’d like to watch the beans through a borosilicate window and use that view to study tumbling and eventually adjust drum speed as the beans expand. The plan includes steady illumination and an air purge across the glass. An OV9281-class camera could support motion tracking, but it is monochrome; color measurement needs a different sensor and calibration. The camera would connect directly to the laptop for V1."
      },
      {
        "title": "Cooling and chaff",
        "text": "The beans will fall onto a perforated tray with a separate blower pulling air down through the bed. A trap between the tray and blower will catch chaff. Keeping this separate lets the roast-airflow system and cooling tray do their own jobs."
      },
      {
        "title": "What I’ll test next",
        "text": "The next step is to assemble the shaft, bearings, and drive and check alignment and bean agitation without heat. Then I’ll test the heater and airflow, followed by complete roast cycles and synchronized logging.",
        "steps": [
          [
            "Rotation",
            "Check alignment, actual RPM, vibration, and tumbling."
          ],
          [
            "Heat and airflow",
            "Measure temperature response and check the hardware shutdown path."
          ],
          [
            "Complete roast",
            "Integrate loading, dumping, chaff collection, and cooling."
          ],
          [
            "Measurements",
            "Check calibration and repeatability before training any prediction model."
          ]
        ]
      },
      {
        "title": "Checking the finished roast",
        "text": "I’m looking at objective colorimetry or diffuse reflectance as an initial way to measure the finished beans. Agtron is still a possible later reference, but I would need paired measurements to calibrate against it. I haven’t completed roast trials or validated a prediction model yet."
      },
      {
        "title": "Component details still to resolve",
        "text": "The electrical review changed two items in the draft BOM: the INA226 cannot be connected directly to the mains heater, and the OV9281 cannot provide RGB color data. The Teensy also needs compatible signal levels, including any encoder, blower-driver, or stepper-driver interfaces.",
        "references": [
          {
            "label": "TI INA226 specifications",
            "url": "https://www.ti.com/product/INA226"
          },
          {
            "label": "OMNIVISION OV9281 specifications",
            "url": "https://www.ovt.com/products/ov9281/"
          },
          {
            "label": "PJRC Teensy 4.1 specifications",
            "url": "https://www.pjrc.com/store/teensy41.html"
          }
        ]
      }
    ]
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
            "caption": "How gas remains trapped in roasted coffee and escapes after grinding."
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
            "caption": "The venting-probe concept and finished-package pressure comparison. Open the image to inspect the chart."
          }
        ]
      },
      {
        "title": "Where it landed",
        "text": "The small-scale tests helped inform a retrofit for the production equipment. I liked that this project connected a CAD model and lab experiment to an actual manufacturing decision, with the pressure-test assay tying the pieces together."
      }
    ],
    "coverCaption": "Assembly and section views of the modular laboratory silo."
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
        "caption": "The pressure-test rig, with the housing, gauge, and connections visible."
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
    "coverCaption": "The package-pressure test rig, built using a pool-filter housing and custom parts."
  },
  {
    "slug": "process-fault-classifier",
    "number": "05",
    "title": "Process fault diagnosis with machine learning",
    "subtitle": "A PyTorch classifier for chemical-process data",
    "category": "MACHINE LEARNING / PROCESS DATA",
    "period": "CHE 320 · Course project",
    "status": "Corrected baseline evaluated",
    "image": "process-fault-classifier/architecture-comparison.webp",
    "alt": "Training and validation accuracy comparison for neural networks with 64, 128, and 256 hidden neurons",
    "coverCaption": "Corrected rerun: the 128-neuron model had the highest validation accuracy. The test split was evaluated after model selection.",
    "summary": "I built a PyTorch neural network to classify faults from simulated chemical-plant sensor data.",
    "role": "Python implementation, model comparison, and analysis",
    "team": "Individual CHE 320 course project using supplied dataset splits",
    "tools": [
      "Python",
      "PyTorch",
      "pandas / NumPy",
      "scikit-learn",
      "MLP classification"
    ],
    "intro": "This project connected my chemical engineering coursework with machine learning. The question was pretty straightforward: given a set of process measurements, could a neural network tell which fault was happening?",
    "sections": [
      {
        "title": "What the model was trying to do",
        "text": "The Tennessee Eastman Process dataset represents a simulated chemical plant. Each row has measurements such as temperatures, pressures, flows, and compositions, along with control variables. The task was to classify each row into one of 21 labels: normal operation or one of 20 fault categories. This was an offline course experiment using supplied data."
      },
      {
        "title": "Getting the data ready",
        "text": "I used the provided training, validation, and test files. The corrected pipeline explicitly selects fault_id as the target and removes it from the input features. It checks the feature columns and labels, then fits StandardScaler on the training data and applies those same scaling parameters to validation and test data.",
        "facts": [
          [
            "52",
            "Input features"
          ],
          [
            "21",
            "Output classes"
          ],
          [
            "7,842",
            "Training samples"
          ]
        ],
        "note": "The supplied splits also contain 871 validation samples and 968 test samples. All rows are retained in the corrected run."
      },
      {
        "title": "Keeping the network simple",
        "text": "I used one hidden layer with a ReLU activation and compared widths of 64, 128, and 256 neurons. Each model trained for 50 epochs with Adam, a learning rate of 0.001, batch size 128, and cross-entropy loss. I reset the seed to 42 for each model and selected the width with the highest validation accuracy.",
        "steps": [
          [
            "Prepare",
            "Load the named target and 52 features; standardize using the training split."
          ],
          [
            "Compare",
            "Train each hidden width under the same settings and compare validation accuracy."
          ],
          [
            "Evaluate",
            "Run the selected model on the test split and inspect per-class errors."
          ]
        ],
        "stepsStatus": "COMPLETED RERUN"
      },
      {
        "title": "What changing the width actually did",
        "text": "The larger networks fit the training data better, but validation accuracy peaked at 128 neurons. Increasing the width to 256 did not help on that split. That made 128 the selection for the final test evaluation.",
        "tableHeaders": [
          "Hidden width",
          "Training / validation accuracy"
        ],
        "table": [
          [
            "64 neurons",
            "75.73% training / 68.77% validation"
          ],
          [
            "128 neurons",
            "78.54% training / 70.95% validation"
          ],
          [
            "256 neurons",
            "81.64% training / 70.38% validation"
          ]
        ]
      },
      {
        "title": "Results, including the difficult classes",
        "text": "The selected model correctly classified 690 of 968 test samples, for 71.28% accuracy. It got every test example right for fault IDs 1, 2, 6, and 7, but struggled with normal operation and fault IDs 3, 9, and 15. Looking at those individual classes tells a much more useful story than the headline accuracy alone.",
        "facts": [
          [
            "71.28%",
            "Test accuracy"
          ],
          [
            "70.95%",
            "Validation accuracy"
          ],
          [
            "70.58%",
            "Macro F1"
          ]
        ],
        "note": "Metrics are from one corrected CPU run on the supplied splits. Macro F1 weights each class equally.",
        "gallery": [
          {
            "image": "process-fault-classifier/confusion-matrix.webp",
            "alt": "Test confusion matrix for all 21 labels, showing strong classification for several faults and confusion among normal operation and faults 3, 9, and 15",
            "caption": "Counts in each cell show where the test predictions landed. Open the full-size chart to inspect individual fault IDs.",
            "wide": true
          }
        ]
      },
      {
        "title": "A correction worth documenting",
        "text": "While preparing this project for the portfolio, a review caught a label-column mistake in the original script: it used the last sensor column as the target instead of fault_id. That also left the actual fault label among the inputs. The original report’s accuracy therefore did not measure fault diagnosis. The code was corrected and rerun, and all results on this page come from that rerun."
      },
      {
        "title": "What I would work on next",
        "text": "The selected model has a 7.59 percentage-point gap between training and validation accuracy, so there is still a generalization problem to work on. My next steps would be to investigate the confused classes, compare against simpler baselines, and test regularization with repeated validation runs. I would also check how the supplied splits were constructed before making claims about performance on new process runs."
      },
      {
        "title": "Code and results",
        "text": "The corrected script and full numerical results are available below. The script expects train.csv, val.csv, and test.csv beside it and uses the course-provided data files.",
        "links": [
          {
            "label": "View corrected Python code",
            "path": "assets/process-fault-classifier/CHE320_ML_Project.py"
          },
          {
            "label": "View full evaluation results",
            "path": "assets/process-fault-classifier/verified_results.json"
          }
        ]
      }
    ]
  },
  {
    "slug": "ourobio-indigo-extraction",
    "number": "06",
    "title": "Indigo extraction at Ourobio",
    "subtitle": "Recovering pigment from fermentation biomass",
    "category": "OUROBIO / SEPARATIONS / ANALYTICAL METHODS",
    "period": "Summer 2024",
    "status": "Internship research",
    "image": "ourobio/dmso-separation.webp",
    "alt": "Blue indigo solutions above light-colored biomass pellets in centrifuge tubes",
    "coverCaption": "Indigo in solution after separating the biomass during DMSO extraction trials.",
    "summary": "I worked on measuring and extracting indigo pigment from fermentation biomass, then getting it into a dry, cleaner product.",
    "role": "Quantification method development and extraction experiments",
    "team": "Ourobio research and development team",
    "tools": [
      "Chromatography / PDA detection",
      "Calibration curves",
      "Solvent extraction",
      "Centrifugation",
      "Precipitation and washing"
    ],
    "intro": "Ourobio could produce indigo alongside PHB through fermentation. My summer project was about getting the pigment out of that mixture and figuring out how much indigo we actually had. I worked on the measurement method and the extraction process together.",
    "sections": [
      {
        "title": "First, a way to measure the indigo",
        "text": "The existing UV/Vis measurements were giving us problems, so I worked on a chromatography-based quantification method using the LC-MS system. I prepared indigo standards in DMSO and compared their integrated absorbance peak areas at 615 nm. The calibration curve in my report had an R² of 0.99.",
        "gallery": [
          {
            "image": "ourobio/indigo-calibration.webp",
            "alt": "Indigo concentration versus integrated peak area calibration curve with reported R squared of 0.99",
            "caption": "The calibration curve from my internship report. The quantified signal was the absorbance peak area at 615 nm."
          },
          {
            "image": "ourobio/chromatography-peak-table.webp",
            "alt": "Chromatography peak table with PDA channels at 615 and 235 nanometers",
            "caption": "An example peak table used to evaluate the samples."
          }
        ]
      },
      {
        "title": "Why the first extraction method was frustrating",
        "text": "I started with an aqueous reduction-and-reoxidation approach. The results were inconsistent: some samples did not recover the pigment properly, while others still contained too much biomass. I tried a range of concentrations, but the separation was not reliable enough to keep using that method.",
        "image": "ourobio/aqueous-extraction-trials.webp",
        "alt": "A row of centrifuge tubes showing varying results from aqueous indigo extraction trials",
        "caption": "Aqueous extraction trials at different starting concentrations."
      },
      {
        "title": "Switching to solvent extraction",
        "text": "DMSO let us dissolve the indigo and separate the insoluble biomass by centrifugation. I compared solvent trials and checked how much pigment stayed with the pellet. The lighter pellets in the DMSO trials were a useful visual sign, and the analytical measurements helped us check what we were seeing.",
        "gallery": [
          {
            "image": "ourobio/solvent-comparison.webp",
            "alt": "Purple solvent trial samples with dark pellets remaining in centrifuge tubes",
            "caption": "Comparison trials where more pigment remained with the pellet."
          },
          {
            "image": "ourobio/dmso-separation.webp",
            "alt": "Blue indigo solutions with light biomass pellets after DMSO separation",
            "caption": "DMSO trials with much lighter biomass pellets."
          }
        ]
      },
      {
        "title": "Getting the pigment back out",
        "text": "After separating the biomass, I worked on precipitating the indigo using ethanol and water, then washing the recovered solids before drying. Solvent ratios, starting concentration, mixing time, and residual DMSO all affected the result. It took several rounds of experiments to get a more consistent procedure."
      },
      {
        "title": "Where the work ended up",
        "text": "By the end of the internship, the report put the extracted pigment at roughly 70–80% purity. PHB was a suspected remaining impurity. That was a useful improvement, but there was still work to do on purification and solvent use before treating it as a finished production process.",
        "facts": [
          [
            "70–80%",
            "Reported final pigment purity"
          ],
          [
            "0.99",
            "Reported calibration R²"
          ]
        ],
        "note": "Results from my summer 2024 internship report. Purity is not the same as extraction yield."
      },
      {
        "title": "What still needed work",
        "text": "The next questions were how much biomass could be processed per volume of solvent, whether the solvent could be reused, and how to remove more of the remaining impurity. My work covered lab-scale experiments and a revised extraction procedure; a production-scale process was still further down the line."
      }
    ]
  }
];
