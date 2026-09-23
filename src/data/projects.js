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
    "summary": "Mechanical redesign, imaging setup, and data acquisition for experimental fish-quality systems.",
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
    "intro": "I worked on three connected measurement problems: tracking rigor mortis, setting up hyperspectral imaging, and bringing texture-analyzer measurements onto a computer. The work combined mechanical changes with software, instrumentation, and operator-facing improvements.",
    "sections": [
        {
            "title": "Problem & team context",
            "text": "Fish-quality research depends on repeatable physical setups and usable measurements. During my internship, I improved an existing rigor mortis system, helped establish imaging and texture-analysis equipment, and developed acquisition procedures. These were contributions within the broader engineering and research team, rather than sole ownership of the underlying platforms."
        },
        {
            "title": "Rigor mortis: mechanical iteration",
            "text": "I revised the mechanical structure and added adjustability to the limit-switch brackets used to set starting positions. This work connected CAD changes to setup and troubleshooting on the physical system. I also worked on the HMI mount and screen arrangement to make the system easier to operate.",
            "image": "shinkei/adjustable-limit-switch-bracket.webp",
            "alt": "Siemens NX view of an adjustable limit-switch bracket attached to a support member",
            "caption": "Limit-switch bracket CAD from slide 3. Adjustability supported changes to the starting position."
        },
        {
            "title": "Rigor mortis: reliability & operation",
            "text": "Script changes addressed camera-health checks, starting-position and detection checks, overactuation limits, and run logs. I also worked on camera calibration, automatic uploads, run settings, and the interface between two Raspberry Pis. Ethernet, power-supply reliability, and a KVM switch were part of the operator and troubleshooting work.",
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
            ]
        },
        {
            "title": "Rigor mortis: acquisition & analysis",
            "text": "I overhauled the run and analysis scripts. The documented workflow paired image acquisition with camera correction, tracking, detection review, and verified output records. The detailed workflow in the presentation uses SAM 2.1 to track markers across the image sequence.",
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
            "stepsStatus": "DOCUMENTED WORKFLOW"
        },
        {
            "title": "Hyperspectral imaging: setup",
            "text": "I installed, set up, and tested a Resonon hyperspectral imaging system, including procedure development and settings optimization. This established equipment and methods for future correlation studies of fish quality. The presentation documents setup and initial imaging, not a validated quality-prediction model.",
            "image": "shinkei/hsi-texture-lab.webp",
            "alt": "Resonon hyperspectral imaging apparatus and texture-analysis equipment on a laboratory bench",
            "caption": "Imaging and texture-analysis equipment in the laboratory. My contribution included installation, setup, and test procedures."
        },
        {
            "title": "Hyperspectral imaging: initial acquisition",
            "text": "The acquisition view shows a fish sample in the imaging software during setup. It provides a record of the measurement interface and scan configuration used while establishing the system. Further correlation studies were future work.",
            "image": "shinkei/hyperspectral-imaging-setup.webp",
            "alt": "Hyperspectral acquisition software displaying a fish sample and an RGB pixel-index plot",
            "caption": "Initial imaging view from slide 6. The displayed RGB traces are not presented as a calibrated spectrum or a validated spoilage result."
        },
        {
            "title": "Texture analysis: equipment & measurement",
            "text": "I coordinated with the vendor, helped procure and assemble the texture profile analyzer, and developed data-collection procedures. Initial calibration and testing exposed a practical limitation: the instrument’s receipt-printer output was not a convenient way to collect individual measurement points for computer-based analysis."
        },
        {
            "title": "Texture analysis: digital acquisition",
            "text": "I implemented a read-only output interface and identified the serial connection settings needed to bring live internal load-cell readings onto a laptop. This converted an instrument-output problem into a usable digital acquisition path. The modification was for reading measurements, not commanding the machine’s motion.",
            "image": "shinkei/texture-analyzer-data-interface.webp",
            "alt": "Rear of the texture analyzer with serial interface hardware and a USB connection",
            "caption": "Texture-analyzer interface hardware during development. The presentation records successful live readout to a laptop."
        },
        {
            "title": "Texture analysis: measurement limits",
            "text": "The Texture Lab interface exposed connection settings and a live-force view. Its documented bandwidth limit means the readout should not be treated as a fully resolved fast-compression curve. Derived texture properties require the appropriate instrument result and validation, rather than integrating an undersampled trace.",
            "image": "shinkei/texture-lab-interface.webp",
            "alt": "Shinkei Texture Lab read-only connection and live-force interface",
            "caption": "Interface screenshot from slide 13, shown in a disconnected state. This illustrates the UI, not a recorded test result."
        },
        {
            "title": "Outcomes & engineering practice",
            "text": "The internship produced mechanical and usability changes to the rigor system, a revised acquisition and review workflow, imaging equipment ready for further studies, and a successful digital readout path for the texture analyzer. I gained experience connecting NX and sheet-metal design to fabrication, installation, troubleshooting, documentation, and experimental methods."
        }
    ],
    "takeaway": "A measurement system needs more than a sensor: its mechanics, acquisition workflow, review process, and operator interface all affect the usefulness of the data."
},
  {
    slug: 'coffee-roaster', number: '02', title: 'Automated coffee roaster', subtitle: 'An instrumented research platform', category: 'MACHINE DESIGN / SENSING / CONTROLS', period: 'Independent project · In progress', status: 'Mechanical fabrication underway', visual: 'roaster', image: 'coffee-roaster/mechanical-structure-progress.webp', alt: 'Roaster mechanical structure and separate panels arranged on a workshop bench', coverCaption: 'Mechanical structure during fabrication, with separate panels on the bench. Work in progress.',
    summary: 'Developing a benchtop roaster to study the relationship between process signals and final roast color.',
    role: 'Independent project developer; structural welding', team: 'Personal interdisciplinary research project', tools: ['Mechanical architecture', 'Welding', 'Instrumentation planning', 'Experimental methodology'],
    intro: 'Experience with coffee sensory evaluation at Keurig Dr Pepper motivated a research question: can measurements during roasting help predict the final optical roast state?',
    sections: [
      { title: 'Objective', text: 'Develop a modular research platform that combines controlled roasting with synchronized process measurements. The long-term goal is to connect temperature, agitation, acoustic events, humidity-related signals, and power input to quantitatively measured roast outcomes.' },
      { title: 'Architecture direction', text: 'The proposed V1 architecture uses a rotating drum between structural plates, an external motor with a timing-belt drive, electrically heated airflow, and a separate cooling tray. A detachable control enclosure is planned to keep instrumentation accessible and away from the hot chamber.', diagram: true },
      { title: 'Mechanical fabrication', text: 'I welded parts of the roaster’s mechanical structure as part of the prototype build. The photographs document this fabrication work and the structure in progress, before a complete operating system is established.', image: 'coffee-roaster/structural-welding-detail.webp', alt: 'Close-up of Zahin welding a joint in the roaster mechanical structure', caption: 'Welding a joint in the mechanical structure. Fabrication work by Zahin Kabir.' },
      { title: 'Mechanical design', text: 'A rigid drum skeleton with a perforated stainless-steel shell is the preferred concept. Structural rings, a rear disk, and vane rails carry loads rather than relying on flexible mesh. Replaceable vane geometry and an accessible front plate support iteration.', facts: [['150 g', 'Nominal batch design target'], ['120 × 125 mm', 'Provisional drum ID × working length'], ['30–70 RPM', 'Proposed variable-speed range']], note: 'These are prototype starting values, not finalized dimensions or demonstrated performance.' },
      { title: 'Key engineering decisions', table: [['Rigid skeleton + perforated shell', 'Maintain drum stiffness while allowing airflow.'], ['Motor and bearings outside the hottest region', 'Reduce thermal exposure and preserve service access.'], ['Adjustable drum speed and vane geometry', 'Treat agitation as an experimental variable.'], ['Separate cooling tray', 'Make post-discharge cooling part of the repeatable process.']] },
      { title: 'Instrumentation plan', text: 'Proposed temperature measurements cover the inlet, chamber, bean region, and exhaust. Additional channels include encoder feedback, acoustic sensing, humidity-related measurements, and heater power. Sensor selection, calibration, and integration remain development work.', table: [['Temperature', 'Thermal trajectory and rate of rise'], ['Encoder', 'Drum speed and agitation conditions'], ['Acoustics', 'Candidate first- and second-crack event features'], ['Humidity + mass', 'Moisture-related process information and mass loss'], ['Power', 'Energy input as a modeling variable']] },
      { title: 'Controls & data acquisition', text: 'The proposed division of responsibilities places deterministic control and safety functions on embedded hardware, with logging, visualization, and analysis on a laptop. Synchronized acquisition and future predictive or closed-loop control are planned; they are not presented as implemented capabilities.' },
      { title: 'Experimental methodology', text: 'Development is staged so that each experiment answers a specific question before more complexity is added. Geometry and rotation come first, followed by thermal behavior, complete roast cycles, and multimodal data collection.', steps: [['Geometry / rotation', 'Evaluate alignment, vibration, noise, and agitation.'], ['Thermal prototype', 'Characterize temperature trajectory and thermal uniformity.'], ['Functional roaster', 'Integrate loading, discharge, chaff handling, and cooling.'], ['Instrumented research', 'Collect synchronized signals and validate optical predictions.']] },
      { title: 'Validation & current status', text: 'Mechanical fabrication is underway, including welding of the roaster structure. Instrumentation, control integration, and roast validation remain planned. The proposed validation route uses objective colorimetry or diffuse reflectance to measure optical roast state. Any future prediction of Agtron values will require calibration against paired Agtron measurements.' },
      { title: 'Next steps', text: 'Continue mechanical fabrication and integration, then evaluate alignment, rotation, and agitation in the assembled prototype. Subsequent work will establish calibration procedures and repeatability before predictive modeling or closed-loop control.' }
    ],
    takeaway: 'Design the machine so that its geometry, sensors, and experiments can change as the research develops.'
  },
  {
    slug: 'coffee-degassing', number: '03', title: 'Modular coffee degassing system', subtitle: 'A lab-scale model for process decisions', category: 'KDP / EXPERIMENTAL EQUIPMENT', period: 'Keurig Dr Pepper · Rotation II', status: 'Lab-scale validation', visual: 'degassing', image: 'kdp-degassing/modular-silo.webp', alt: 'Section view and assembly of a modular laboratory coffee degassing silo',
    summary: 'Designed and modeled a modular lab-scale silo to investigate coffee degassing and inform manufacturing decisions.',
    role: 'Modular silo design and modeling; validation assay project lead', team: 'Keurig Dr Pepper engineering teams', tools: ['SolidWorks', 'Modular design', 'Lab-scale testing', 'Experimental analysis'],
    intro: 'A small experimental system made it possible to investigate a larger processing problem before committing to changes in manufacturing equipment.',
    sections: [
      { title: 'Problem', text: 'Roasted coffee releases retained gases over time. Storage conditions influence that release, and residual gas can affect finished-package pressure. The project examined how a laboratory system could help evaluate the degassing process.' },
      { title: 'Design approach', text: 'I designed and modeled a modular silo in SolidWorks. The public project record shows both the overall assembly and a section view, connecting the experimental volume to the physical construction.', image: 'kdp-degassing/modular-silo.webp', alt: 'Public CAD views of the modular degassing silo', caption: 'Modular silo assembly and section view. Recovered from the original public portfolio.' },
      { title: 'Testing & analysis', text: 'The modular silo was validated at lab scale. Finished-package pressure measurements provided an additional way to compare process conditions. I led the validation assay project, using the package pressure tester co-designed with the R&D Process Engineering team.' },
      { title: 'Engineering decision', text: 'Experimental findings informed a retrofit approach for larger equipment. The project connected laboratory validation to a manufacturing decision while accounting for the constraints of existing production systems. Production dimensions, settings, site-specific results, and cost comparisons are omitted.' },
      { title: 'Outcome', text: 'Lab-scale validation informed a production retrofit decision. The project connected prototype design, experimentation, and package-pressure comparisons to the practical constraints of existing manufacturing equipment.' }
    ], takeaway: 'Use a focused prototype to turn a process question into evidence for an engineering decision.'
  },
  {
    slug: 'package-pressure-tester', number: '04', title: 'Package pressure tester', subtitle: 'Practical hardware for a measurement problem', category: 'KDP / TEST-EQUIPMENT DEVELOPMENT', period: 'Keurig Dr Pepper', status: 'Built & used for testing', visual: 'pressure', image: 'pressure-tester/test-rig.webp', alt: 'Two views of the package pressure test apparatus with chamber and gauge',
    summary: 'Co-designed a test rig to compare package pressure under controlled chamber conditions.',
    role: 'Co-designer; validation assay project lead', team: 'KDP R&D Process Engineering team', tools: ['Test-equipment design', '3D-printed parts', 'Experimental methods', 'Pressure measurement'],
    intro: 'A measurement tool connected package behavior to the pressure conditions encountered between manufacturing and use.',
    sections: [
      { title: 'Measurement problem', text: 'Differences between ambient pressure at packing and use can affect package behavior. The engineering need was a repeatable way to compare finished packages under chamber conditions and support manufacturing and quality decisions.' },
      { title: 'Mechanical approach', text: 'I co-designed the tester with the R&D Process Engineering team. The apparatus repurposed a pool-filter housing and incorporated 3D-printed components, combining available hardware with purpose-built parts.', image: 'pressure-tester/test-rig.webp', alt: 'Public photographs of the pressure test rig', caption: 'Test apparatus from the original public portfolio. The housing, gauge, and connections are visible.' },
      { title: 'Experimental methodology', text: 'The assay compared internal package pressure in relation to local barometric pressure and chamber pressure. The tool supported finished-goods comparisons across KDP sites and the validation work associated with the degassing project.' },
      { title: 'Validation & use', text: 'The tool supported pressure benchmarks and manufacturing decisions. Its use in the degassing project connected a purpose-built measurement capability to the evaluation of a larger process change.' },
      { title: 'Engineering lesson', text: 'Useful test equipment starts with a clearly defined measurement question. Mechanical fixtures, the pressure environment, and the assay procedure must be considered together for the resulting comparisons to be meaningful.' }
    ], takeaway: 'Build the measurement capability needed to evaluate the process.'
  }
];
