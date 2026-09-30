import { projects } from './projects.js';
const shinkei = projects[0];
const shinkeiCard = (title, section, category, image, alt, summary) => ({ ...shinkei, title, anchor: `section-${section}`, category: `SHINKEI / ${category}`, image: `shinkei/${image}`, alt, summary });
export const projectCards = [
  shinkeiCard('NERA computer vision', 5, 'ROBOTICS / R&D', 'nera-overview.webp', 'CAD assembly of the NERA visual detection module', 'I worked on the camera module, wire rack, and clamps, then helped assemble, deploy, and test the system.'),
  { ...projects[1], category: 'PERSONAL / ROBOTICS / ML / R&D' },
  shinkeiCard('TPA analyser & Texture Lab', 0, 'TEST ASSAYS / R&D', 'texture-pink-ui-laptop.webp', 'Pink Texture Lab UI running on a laptop', 'I procured a custom texture analyser, got a digital feed from its load cell, and brought it into my wonderfully pink UI.'),
  shinkeiCard('Hyperspectral imaging', 3, 'SENSING / R&D', 'hsi-texture-lab.webp', 'Hyperspectral imaging equipment on a laboratory bench', 'I commissioned the imager, optimized the workflow, and worked on a pilot study relating fish spoilage to spectral data.'),
  { ...projects[2], category: 'KEURIG DR PEPPER / TEST ASSAYS / R&D' },
  { ...projects[3], category: 'KEURIG DR PEPPER / TEST ASSAYS / R&D' },
  shinkeiCard('Rigor mortis tracking', 9, 'MECHANICAL DESIGN / COMPUTER VISION / R&D', 'rigor-mechanical-assembly.webp', shinkei.alt, 'I updated the mechanical setup and rebuilt the run and analysis workflows for tracking changes in fish over time.'),
  { ...projects[5], category: 'OUROBIO / PROCESS R&D' },
  { ...projects[4], category: 'CHE 320 / MACHINE LEARNING' },
].map((project, index) => ({ ...project, number: String(index + 1).padStart(2, '0') }));
