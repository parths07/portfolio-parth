// ────────────────────────────────────────────────────────────────────────────
// Personal
// ────────────────────────────────────────────────────────────────────────────

export const personal = {
  name: "Parth Soni",
  role: "Full Stack Software Engineer",
  focus: "Backend-focused",
  email: "soniparthofficial@gmail.com",
  location: "India",
  available: true,
  github: "https://github.com/parths07",
  linkedin: "https://www.linkedin.com/in/parth-soni-a708b11b2/",
  tagline: "Backend-first. AI-powered. Always shipping.",
} as const;

// ────────────────────────────────────────────────────────────────────────────
// Tech Stack (marquee)
// ────────────────────────────────────────────────────────────────────────────

export const techStack: string[] = [
  "Node.js",
  "RAG (Retrieval-Augmented Generation)",
  "Express.js",
  "Prompt Engineering",
  "NestJS",
  "LangChain",
  "Next.js",
  "Gemini API",
  "React.js",
  "Groq API",
  "MongoDB",
  "Vector Embeddings",
  "Redis",
  "Prompt Techniques",
  "Docker",
  "AI Tools",
  "AWS Lambda",
  "TypeScript",
  "PostgreSQL",
  "Python",
  "AI Dev-Tools"
];

// ────────────────────────────────────────────────────────────────────────────
// Experience
// ────────────────────────────────────────────────────────────────────────────

export interface Experience {
  company: string;
  role: string;
  type: string;
  duration: string;
  current: boolean;
  points: string[];
}

export const experience: Experience[] = [
  {
    company: "Solvative",
    role: "Full Stack Developer",
    type: "Full-time",
    duration: "Nov 2023 – Present",
    current: true,
    points: [
      "Balance strategic technical initiatives with hands-on implementation - managing sprint plannings and architectural decisions while actively contributing to core backend development",
      "Improved API performance by up to 50% through advanced MongoDB aggregation pipelines and query optimization",
      "Built prompt-driven AI agents using Gemini API, abstracting complex business logic into reusable agent tools to automate workflows",
      "Architected serverless workflows using AWS Lambda for complex business processes with improved scalability",
      "Managed deployments across development, staging, and production environments with minimal downtime",
      "Developed data migration scripts to safely transform existing data models",
      "Integrated third-party services including SendGrid (email) and Twilio (SMS notifications)",
    ],
  },
  {
    company: "Actyv.ai",
    role: "Full Stack Developer (Associate SDE 1)",
    type: "Full-time",
    duration: "Jul 2023 – Nov 2023",
    current: false,
    points: [
      "Contributed to enterprise-grade financial technology solutions across the full stack with focus on performance optimization",
      "Implemented server-side pagination and advanced search functionalities, significantly optimizing data retrieval and application performance",
      "Developed document download feature via REST API and built reusable React.js frontend components following best practices",
      "Collaborated on API design and integration between NestJS backend and React frontend across multiple product features",
    ],
  },
  {
    company: "Actyv.ai",
    role: "Full Stack Developer (MERN) Intern",
    type: "Internship",
    duration: "Jan 2023 – Jun 2023",
    current: false,
    points: [
      "Contributed to backend API development using Node.js and Express.js, implementing RESTful endpoints with proper error handling and validation",
      "Developed frontend UI components in React.js, improving user experience through responsive design and intuitive interfaces",
      "Participated in code reviews and pair programming sessions, learning industry best practices in full-stack development",
    ],
  },
];

// ────────────────────────────────────────────────────────────────────────────
// Projects
// ────────────────────────────────────────────────────────────────────────────

export interface Project {
  title: string;
  description: string;
  stack: string[];
  liveUrl?: string;
  githubUrl?: string;
}

export const projects: Project[] = [
  {
    title: "AI Quiz Generator",
    description:
      "A full-stack AI-powered quiz platform where users upload PDF documents and instantly generate custom quizzes. Supports multiple difficulty levels, page-wise content extraction, and contextually relevant questions powered by Gemini API. Built for students, educators, and anyone who wants to learn smarter.",
    stack: ["Next.js", "Node.js", "MongoDB", "Gemini API"],
    liveUrl: "https://ai-quiz-generator-drab.vercel.app/",
  },
  {
    title: "MediAssist",
    description:
      "An AI-powered hospital booking system with LLM tool calling and intelligent symptom-based doctor routing. Features real-time slot conflict detection, multi-model AI fallback chain, JWT-secured admin dashboard, and comprehensive booking analytics — all with a guest-friendly booking flow.",
    stack: ["Next.js", "Groq API", "MongoDB"],
    liveUrl: "https://mediassist-healthbuddy.vercel.app/",
  },
  {
    title: "Employee Reward and Recognition System",
    description:
      "A peer-to-peer recognition platform built on the MERN stack enabling employees to send rewards, track transactions, and manage balances. Designed RESTful APIs for authentication, reward distribution, and transaction management with MongoDB for efficient data storage.",
    stack: ["Node.js", "React.js", "MongoDB"],
  },
];

// ────────────────────────────────────────────────────────────────────────────
// Education
// ────────────────────────────────────────────────────────────────────────────

export interface Education {
  degree: string;
  institution: string;
  shortName: string;
  location: string;
  cgpa: number;
  maxCgpa: number;
  year: string;
  highlights: string[];
}

export const education: Education[] = [
  {
    degree: "Master of Science (M.Sc.) — Information Technology",
    institution: "Dhirubhai Ambani Institute of Information & Communication Technology (DA-IICT)",
    shortName: "DA-IICT",
    location: "Gandhinagar, India",
    cgpa: 7.88,
    maxCgpa: 10,
    year: "2021 – 2023",
    highlights: ["Distributed Systems", "Machine Learning", "Advanced Databases"],
  },
  {
    degree: "Post Graduate Diploma in Computer Application (PGDCA)",
    institution: "Sardar Patel University (SPU)",
    shortName: "SPU",
    location: "Vallabh Vidhyanagar, India",
    cgpa: 8.74,
    maxCgpa: 10,
    year: "2020 – 2021",
    highlights: ["Software Engineering", "Web Technologies", "DBMS"],
  },
  {
    degree: "Bachelor of Science (B.Sc.) — Computer Science",
    institution: "Sardar Patel University (SPU)",
    shortName: "SPU",
    location: "Vallabh Vidhyanagar, India",
    cgpa: 7.4,
    maxCgpa: 10,
    year: "2017 – 2020",
    highlights: ["Data Structures", "Algorithms", "Operating Systems"],
  },
];

// ────────────────────────────────────────────────────────────────────────────
// About bio (paragraphs)
// ────────────────────────────────────────────────────────────────────────────

export const aboutBio: string[] = [
  "I'm a backend-first Full Stack Software Engineer with 3+ years of experience building scalable APIs, distributed systems, and AI-powered applications. Proficient in Node.js, Express.js, Next.js, React.js, and MongoDB, with strong expertise in building scalable RESTful APIs and optimizing database performance.",
  "I have hands-on experience integrating AI-powered solutions using LLMs like Gemini API, implementing RAG-based systems, and leveraging Generative AI to automate workflows and enhance system capabilities. I'm actively involved in requirement analysis, technical estimation, and timeline planning to ensure predictable, high-quality deliveries.",
  "Known for a problem-solving mindset, clean and maintainable coding practices, and a proactive ownership-driven approach. I enjoy debugging deep performance issues, collaborating across complex codebases, and shipping solutions that are both reliable and innovative. Based in India 🇮🇳 ; always exploring new AI tools and planning the next side project that ships real value.",
];

// ────────────────────────────────────────────────────────────────────────────
// Section order (matches SPEC)
// ────────────────────────────────────────────────────────────────────────────

export const sectionOrder = [
  "Hero",
  "TechMarquee",
  "Experience",
  "Projects",
  "About",
  "Contact",
  "Footer",
] as const;
