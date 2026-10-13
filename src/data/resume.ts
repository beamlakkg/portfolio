export const RESUME_PDF_URL = '/assets/Bemalak_cv.pdf';

export interface ProfessionalExperience {
  id: number;
  role: string;
  company: string;
  startDate: string;
  endDate: string;
  location: string;
  description: string;
  achievements: string[];
  technologies: string[];
}

export interface Internship {
  id: number;
  role: string;
  company: string;
  startDate: string;
  endDate: string;
  description: string;
  technologies: string[];
}

export interface Education {
  id: number;
  degree: string;
  institution: string;
  startDate: string;
  endDate: string;
  location: string;
  description: string;
  status?: string;
  focusAreas?: string[];
}

export interface Achievement {
  id: number;
  title: string;
  organization: string;
  date: string;
  description?: string;
}

export const professionalExperience: ProfessionalExperience[] = [
  {
    id: 1,
    role: 'Frontend Developer, UI/UX Designer & Systems Integration',
    company: 'Meson Technologies',
    startDate: '2025',
    endDate: '2026',
    location: 'Addis Ababa, Ethiopia',
    description:
      'Designed and built EthioMaterial, a construction materials marketplace developed with support associated with Ethio Alliance and the French Embassy.',
    achievements: [
      'Designed user flows, wireframes, prototypes, and the marketplace interface in Figma',
      'Built responsive React and TypeScript screens for buyers, suppliers, and administrators',
      'Integrated the frontend with REST APIs for listings, search, and role-specific workflows',
    ],
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Redux Toolkit', 'Figma', 'Axios'],
  },
  {
    id: 2,
    role: 'Frontend Developer',
    company: 'Birrama Technologies',
    startDate: '2025',
    endDate: '2026',
    location: 'Addis Ababa, Ethiopia',
    description:
      'Developed the administrative frontend for MedhinLink and the Agent Management System, covering insurance operations from policies and claims to agent records.',
    achievements: [
      'Built admin modules for companies, coverage, policies, KYC review, claims, licensing, and finance',
      'Implemented authentication state, token refresh, and protected routes',
      'Connected forms, tables, and dashboards to backend APIs with Axios',
    ],
    technologies: ['Next.js', 'React', 'TypeScript', 'React Context', 'Axios', 'GitLab'],
  },
  {
    id: 3,
    role: 'Full-Stack Developer — Freelance',
    company: 'WegoAddis Tour',
    startDate: '2025',
    endDate: '2025',
    location: 'Addis Ababa, Ethiopia',
    description:
      'Turned the tourism design into a deployed website for destinations, tour details, inquiries, and content management.',
    achievements: [
      'Translated Figma designs into a React frontend',
      'Built the Node.js, Express, and MongoDB backend for content and reservations',
      'Tested the product and released it at wegoaddistour.com',
    ],
    technologies: ['React', 'Node.js', 'Express.js', 'MongoDB', 'Figma'],
  },
  {
    id: 4,
    role: 'Frontend Developer & UI/UX Designer',
    company: 'MOHA Soft Drinks',
    startDate: '2025',
    endDate: '2026',
    location: 'Addis Ababa, Ethiopia',
    description:
      'Designed and developed internal maintenance, inventory, and reporting interfaces for headquarters and multiple branches, and maintained the public website.',
    achievements: [
      'Designed internal flows for maintenance, inventory, and reporting',
      'Built React interfaces and connected them to available APIs',
      'Updated the existing company website and fixed responsive issues',
    ],
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Figma', 'REST APIs'],
  },
];

export const internships: Internship[] = [
  {
    id: 1,
    role: 'Frontend Developer Intern',
    company: 'Kuraz',
    startDate: 'June 2024',
    endDate: 'September 2024',
    description:
      'Built React components for the Kuraz internship program, including apply and sign-in entry points, and connected interfaces to REST APIs.',
    technologies: ['React', 'JavaScript', 'Tailwind CSS', 'Axios'],
  },
  {
    id: 2,
    role: 'Software Developer Intern',
    company: 'Fullstack Technologies',
    startDate: 'During studies',
    endDate: 'Completed',
    description:
      'Contributed to an internship management web application for listings, applications, student records, and status tracking.',
    technologies: ['Web interfaces', 'Forms', 'Administrative workflows'],
  },
  {
    id: 3,
    role: 'Frontend Developer Intern',
    company: 'Qlass / Classic Technology',
    startDate: 'During studies',
    endDate: 'Completed',
    description:
      'Developed frontend components, page layouts, and responsive screens from team requirements and review.',
    technologies: ['Frontend UI', 'Responsive layouts', 'Reusable components'],
  },
];

export const education: Education[] = [
  {
    id: 1,
    degree: 'Bachelor of Science in Software Engineering',
    institution: 'Addis Ababa Science and Technology University (AASTU)',
    startDate: '2022',
    endDate: '2026',
    location: 'Addis Ababa, Ethiopia',
    status: 'Graduate',
    description:
      'Software engineering graduate, with a focus on web and mobile applications, system design, and products built with a team.',
    focusAreas: ['Web Development', 'Mobile Development', 'Databases', 'System Design'],
  },
  {
    id: 2,
    degree: 'Bachelor of Management',
    institution: 'Unity University',
    startDate: '2023',
    endDate: 'Present',
    location: 'Addis Ababa, Ethiopia',
    status: 'Final year',
    description:
      'Bachelor of Management at Unity University, currently in the final year.',
    focusAreas: ['Management', 'Project Management', 'Business Analysis', 'Leadership'],
  },
  {
    id: 3,
    degree: 'Frontend Web Development Bootcamp (React)',
    institution: 'Google Developers Club',
    startDate: '2024',
    endDate: '2024',
    location: 'Addis Ababa, Ethiopia',
    description:
      'Six-month bootcamp on frontend web development with React.js, projects, and hackathons.',
    focusAreas: ['React.js', 'JavaScript', 'Web Development'],
  },
];

export const achievements: Achievement[] = [
  {
    id: 1,
    title: 'Presidential Mentorship',
    organization: 'Institute of International Education (IIE)',
    date: '2024',
    description:
      'Mentee in a mentorship associated with Sahle-Work Zewde and the Institute of International Education.',
  },
  {
    id: 2,
    title: 'Zemenay Hackathon — Second Place',
    organization: 'Zemenay Hackathon',
    date: '2024',
    description: 'Contributed to a blog product. The team placed second.',
  },
];
