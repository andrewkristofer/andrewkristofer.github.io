/**
 * Generates public/andrew-kristofer-jian-cv.pdf from the CV data.
 * Run with: npm run cv:pdf
 */
import PDFDocument from 'pdfkit';
import { createWriteStream, mkdirSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const outDir = join(__dirname, '..', 'public');
mkdirSync(outDir, { recursive: true });
const outPath = join(outDir, 'andrew-kristofer-jian-cv.pdf');

const doc = new PDFDocument({
  size: 'A4',
  margins: { top: 54, bottom: 54, left: 54, right: 54 },
  info: {
    Title: 'Andrew Kristofer Jian - CV',
    Author: 'Andrew Kristofer Jian',
    Subject: 'Computer Engineering Graduate - Curriculum Vitae',
  },
});

const stream = createWriteStream(outPath);
doc.pipe(stream);

const VIOLET = '#7c3aed';
const DARK = '#1e293b';
const MUTED = '#475569';
const RULE = '#cbd5e1';

function section(title) {
  doc.moveDown(0.9);
  doc
    .font('Helvetica-Bold')
    .fontSize(12)
    .fillColor(VIOLET)
    .text(title.toUpperCase(), { characterSpacing: 1.2 });
  doc
    .moveTo(doc.page.margins.left, doc.y + 3)
    .lineTo(doc.page.width - doc.page.margins.right, doc.y + 3)
    .lineWidth(1.2)
    .strokeColor(VIOLET)
    .stroke();
  doc.moveDown(0.55);
}

function bullet(text) {
  const x = doc.page.margins.left;
  const y = doc.y;
  doc.circle(x + 2.5, y + 4.5, 1.8).fillColor(VIOLET).fill();
  doc
    .font('Helvetica')
    .fontSize(9.5)
    .fillColor(DARK)
    .text(text, x + 12, y, { width: doc.page.width - x * 2 - 12, align: 'left' });
  doc.moveDown(0.35);
}

function entryLine(left, right) {
  doc.font('Helvetica-Bold').fontSize(10.5).fillColor(DARK).text(left, { continued: true });
  doc
    .font('Helvetica-Oblique')
    .fontSize(9.5)
    .fillColor(MUTED)
    .text(right, { align: 'right' });
}

// ---- Header ----
doc.font('Helvetica-Bold').fontSize(22).fillColor(DARK).text('Andrew Kristofer Jian');
doc
  .font('Helvetica-Bold')
  .fontSize(11)
  .fillColor(VIOLET)
  .text('Computer Engineering Graduate');
doc.moveDown(0.3);
doc
  .font('Helvetica')
  .fontSize(9)
  .fillColor(MUTED)
  .text(
    'Kabupaten Bekasi, West Java (Willing to Relocate)  ·  +62 878-8182-0317  ·  andrewjian4@gmail.com',
  )
  .text('linkedin.com/in/andrewkristoferjian  ·  github.com/andrewkristofer');
doc.moveDown(0.4);
doc
  .moveTo(doc.page.margins.left, doc.y)
  .lineTo(doc.page.width - doc.page.margins.right, doc.y)
  .lineWidth(1.5)
  .strokeColor(RULE)
  .stroke();

// ---- Profile ----
section('Profile Summary');
doc
  .font('Helvetica')
  .fontSize(9.5)
  .fillColor(DARK)
  .text(
    'Highly analytical Computer Engineering graduate from Universitas Indonesia with a comprehensive technical foundation in Data Science, IT Security, Web Programming, and Computer Networks. Proven track record in optimizing enterprise-scale operational pipelines and SQL databases during an internship at PT Adaro Logistics. Possesses a Project Management Certified Practitioner (PMCP) credential, demonstrating strong capabilities in cross-functional collaboration and task execution. Backed by global credentials from Oracle, Google, and Cisco, equipped with structured problem-solving skills and a strong research mindset.',
    { align: 'left' },
  );

// ---- Education ----
section('Education');
entryLine('Universitas Indonesia · Bachelor of Engineering in Computer Engineering', 'Depok, Indonesia');
doc
  .font('Helvetica-Oblique')
  .fontSize(9.5)
  .fillColor(MUTED)
  .text('Aug 2022 to Jul 2026  ·  Cumulative GPA: 3.46 / 4.00');
doc.moveDown(0.3);

// ---- Experience ----
section('Professional Experience');
entryLine('PT Adaro Logistics · Software Engineer (Intern)', 'Remote');
doc
  .font('Helvetica-Oblique')
  .fontSize(9.5)
  .fillColor(MUTED)
  .text('Jul 2025 to Oct 2025');
doc.moveDown(0.3);
bullet(
  'Developed and optimized enterprise logistics web applications utilizing modern programming languages (including PHP and JavaScript) and relational databases (SQL).',
);
bullet(
  'Streamlined backend data pipelines and database queries, significantly reducing system load times and ensuring real-time data accuracy for high-scale daily operations.',
);
bullet(
  'Conducted extensive system monitoring and integrated UI/backend troubleshooting, effectively identifying root causes of anomalies to maintain operational reliability.',
);

// ---- Projects ----
section('Academic & Research Projects');
entryLine('Federated Learning-Based Intrusion Detection System', 'Undergraduate Thesis');
doc.moveDown(0.3);
bullet(
  'Evaluated and benchmarked multiple Machine Learning algorithms on the massive CIC-IDS2017 dataset, conducting in-depth comparative analysis to extract the architectural strengths of the top three performing models.',
);
bullet(
  'Synthesized these analytical insights to design and propose a novel, privacy-preserving Intrusion Detection System (IDS) utilizing Federated Learning, identifying network threats with an 87.96% accuracy rate without centralizing sensitive payload data.',
);

// ---- Certifications ----
section('Licenses & Professional Certifications');
bullet('Cisco CCNA Series (Introduction to Networks, Switching, Enterprise) · Cisco, Jul 2024');
bullet('Cybersecurity Specializations (Google Cloud, Microsoft, IBM, Cisco) · Nov 2025');
bullet('Oracle Cloud Infrastructure 2025 Certified Data Science & Gen AI Pro · Oracle, Oct 2025');
bullet('Machine Learning with Python · Cognitive Class / IBM, Mar 2025');
bullet('Project Management Certified Practitioner (PMCP) · PT Sinergi Daya Mitra, May 2026');

// ---- Skills ----
section('Skills & Competencies');
bullet('Web Programming & Database: PHP, SQL (MySQL/PostgreSQL), JavaScript/TypeScript, Python.');
bullet('IT Security & Network: Cisco Networking Protocols, Threat Analysis, Privacy-Preserving Architecture.');
bullet('Project Management & Soft Skills: IT Project Lifecycle, Analytical Thinking, Cross-functional Collaboration.');

doc.end();
stream.on('finish', () => {
  console.log(`CV PDF written to ${outPath}`);
});
