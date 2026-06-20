// All portfolio content lives here. Edit this file to update text without touching component code.

export const profile = {
  name: "Haifa Khan Afridi",
  role: "Software Engineering Student",
  tagline: "Building Full-Stack Developer",
  location: "Islamabad, Pakistan",
  email: "haifaafridi8@gmail.com",
  phone: "+92 333 6242324",
  github: "https://github.com/haifaafridi",
  linkedin: "https://www.linkedin.com/in/haifa-khan-afridi-0b08b9368",
};

export const education = {
  school: "National University of Sciences & Technology (NUST)",
  location: "Islamabad, Pakistan",
  degree: "B.E. Software Engineering",
  gpa: "3.58 / 4.00",
  expected: "Expected 2028",
  coursework: [
    "Data Structures & Algorithms",
    "Object-Oriented Programming",
    "Database Systems",
    "Computer Networks",
  ],
};

export const experience = [
  {
    company: "DevelopersHub",
    location: "Remote",
    title: "Frontend Developer Intern",
    period: "Jun – Jul 2025",
    points: [
      "Built optimized React.js UI modules, reducing page load latency by 20%",
      "Designed responsive, modular, cross-browser components used across production features",
    ],
  },
  {
    company: "Alkhidmat Foundation Pakistan",
    location: "Islamabad, Pakistan",
    title: "IT Operations Intern",
    period: "Jun – Sep 2025",
    points: [
      "Digitized manual reporting workflows, improving operational efficiency and cross-team coordination",
    ],
  },
];

export const projects = [
  {
    id: "fsss",
    name: "First Step Schools System",
    shortName: "FSSS",
    period: "2025 – 2026",
    problem:
      "An NGO running 100+ schools and 1,200+ students was tracking academic progress, attendance, finance, and donor reporting entirely on paper.",
    approach:
      "Built an end-to-end PERN stack application with 6 core modules, enforcing business rules — sequential step progression, compound unique constraints — directly at the database level. Wrapped multi-step writes in Prisma transactions to eliminate race conditions, added JWT auth with bcrypt hashing, Helmet security headers, and login rate limiting. Shipped a 5-report suite with printable PDF output and a full audit log capturing before/after JSON snapshots on every record change.",
    constraints: ["RACE_CONDITION_SAFE", "AUDIT_LOGGED", "100+ SCHOOLS"],
    stack: ["React", "TypeScript", "Node.js", "Express", "PostgreSQL", "Prisma"],
    deployNote: "Deployed on a local-area network using PM2 with auto-restart on boot; built collaboratively with a multi-university partner team over Git branching workflow.",
    link: null,
  },
  {
    id: "cross-exchange",
    name: "Cross-Exchange Trading Automation System",
    shortName: "Trading Automation",
    period: "2025",
    problem:
      "Mirroring live trade signals across exchanges reliably, with no lag and no dropped connections, for automated client delivery.",
    approach:
      "Engineered a dual-layer signal detection pipeline (WebSocket + REST) achieving under 3 seconds of latency, with proportional position sizing. Built stealth browser automation with Playwright to maintain persistent authentication and auto-resubscribe WebSockets on disconnect. Packaged the whole system as an encrypted, standalone executable with automated dependency management for streamlined client delivery.",
    constraints: ["<3s LATENCY", "AUTO-RECONNECT", "ENCRYPTED BUILD"],
    stack: ["Python", "CCXT", "WebSockets", "Playwright"],
    deployNote: null,
    link: null,
  },
  {
    id: "verity",
    name: "Verity — Misinformation Detection Pipeline",
    shortName: "Verity",
    period: "2025",
    problem:
      "Detecting misinformation in text in real time, behind an API that's safe to expose to untrusted input.",
    approach:
      "Developed a real-time NLP inference pipeline using Hugging Face transformer models (BERT/RoBERTa), served through a secure FastAPI backend with strict input validation.",
    constraints: ["REAL-TIME INFERENCE", "INPUT VALIDATED"],
    stack: ["Python", "FastAPI", "Hugging Face", "BERT/RoBERTa"],
    deployNote: null,
    link: null,
  },
];

// Each skill links to the project(s) where it was actually used, with a short note.
// shortName values must match a project's shortName in `projects` above.
export const skills = {
  Languages: [
    { name: "Python", used: ["Trading Automation", "Verity"], note: "Core language for both the trading bot and the NLP pipeline" },
    { name: "TypeScript/JavaScript (ES6+)", used: ["FSSS"], note: "Typed the entire PERN stack frontend and API layer" },
    { name: "Java", used: [], note: "Coursework + early OOP projects" },
    { name: "C++", used: [], note: "Data structures & algorithms coursework" },
    { name: "SQL", used: ["FSSS"], note: "Schema design and queries behind 6 core modules" },
  ],
  Frontend: [
    { name: "React.js", used: ["FSSS"], note: "Built the full multi-module UI for the school system" },
    { name: "Redux", used: ["FSSS"], note: "State management across modules" },
    { name: "Vite", used: ["FSSS"], note: "Dev tooling and build pipeline" },
    { name: "Tailwind CSS", used: ["FSSS"], note: "Styling system for the dashboard UI" },
    { name: "Bootstrap", used: [], note: "Used in earlier frontend internship work" },
    { name: "HTML5/CSS3", used: ["FSSS"], note: "Foundation for every interface built" },
  ],
  "Backend & APIs": [
    { name: "Node.js", used: ["FSSS"], note: "Powers the Express API layer" },
    { name: "Express", used: ["FSSS"], note: "REST API serving all 6 modules" },
    { name: "FastAPI", used: ["Verity"], note: "Backend serving real-time NLP inference" },
    { name: "REST APIs", used: ["FSSS", "Verity"], note: "Designed and secured endpoints in both systems" },
    { name: "WebSockets", used: ["Trading Automation"], note: "Dual-layer live signal detection" },
    { name: "JWT", used: ["FSSS"], note: "Authentication with bcrypt password hashing" },
    { name: "asyncio", used: ["Trading Automation"], note: "Concurrent signal handling under 3s latency" },
  ],
  "Databases & Tools": [
    { name: "PostgreSQL", used: ["FSSS"], note: "Database-level business rule enforcement" },
    { name: "MySQL", used: [], note: "Coursework and practice projects" },
    { name: "Prisma ORM", used: ["FSSS"], note: "Transactions used to eliminate race conditions" },
    { name: "Git", used: ["FSSS"], note: "Branching workflow across a multi-university team" },
    { name: "Playwright", used: ["Trading Automation"], note: "Stealth browser automation with persistent auth" },
    { name: "PM2", used: ["FSSS"], note: "Process management with auto-restart on boot" },
    { name: "Linux", used: ["FSSS"], note: "LAN deployment environment" },
  ],
};


export const credentials = [
  "Meta Full-Stack Developer Specialization",
  "National AI Training Bootcamp — Indus AI Week, Ministry of IT & Telecom (2026)",
  "Data Science Specialization (in progress)",
];
