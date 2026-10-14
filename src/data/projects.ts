import ethiomaterialMobile from '../assets/ethiomaterial.jpg';
import ethiomaterialWeb from '../assets/ethiomaterial (2).jpg';
import wegoCover from '../assets/wegoaddistour.jpg';
import daycareAdmin from '../assets/allinoneadmin.jpg';
import daycareCaregiver from '../assets/allinone_caregiver.jpg';
import daycareParent from '../assets/Allinone_parent mobile.jpg';
import kurazCover from '../assets/Kuraz.jpg';
import mohaCover from '../assets/moha.png';
import chipchipCover from '../assets/chipchip.png';
import academixCover from '../assets/academix.jpg';
import meadCover from '../assets/mead.jpg';
import datingCover from '../assets/dating.jpg';
import signoffCover from '../assets/signoff.jpg';

export type ProjectCategory =
  | 'All'
  | 'Frontend'
  | 'Full Stack'
  | 'Backend'
  | 'UI/UX'
  | 'Mobile'
  | 'Other';

export type ProjectDiscipline = Exclude<ProjectCategory, 'All'>;

export interface Project {
  id: number;
  slug: string;
  title: string;
  category: ProjectDiscipline;
  disciplines: ProjectDiscipline[];
  description: string;
  longDescription: string;
  image: string;
  gallery: string[];
  technologies: string[];
  features: string[];
  challenges: string[];
  responsibilities: string[];
  problem: string;
  solution: string;
  outcome: string;
  github: string;
  liveDemo: string;
  featured?: boolean;
  year: string;
  role: string;
  organization: string;
  projectType: string;
  access: string;
  accent: string;
}

export const projectCategories: ProjectCategory[] = [
  'All',
  'Frontend',
  'Full Stack',
  'Backend',
  'UI/UX',
  'Mobile',
  'Other',
];

export const isPublicLink = (url?: string) => Boolean(url && url !== '#');

export const projectMatchesCategory = (project: Project, category: ProjectCategory) => {
  if (category === 'All') {
    return true;
  }

  return project.category === category || project.disciplines.includes(category);
};

export const projects: Project[] = [
  {
    id: 1,
    slug: 'ethiomaterial',
    title: 'EthioMaterial',
    category: 'Frontend',
    disciplines: ['Frontend', 'UI/UX', 'Mobile'],
    description:
      'Construction marketplace for Meson Technologies, plus a mobile app I am designing and building with the team: price comparison, payments, and chat.',
    longDescription:
      'EthioMaterial connects construction-material suppliers, buyers, and architects in one marketplace. I designed the product and built the web frontend at Meson Technologies, with support associated with Ethio Alliance and the French Embassy. With the team, I am also designing and building the mobile app. The app improves the marketplace with price comparison, payments, chat, and a faster way to move from a material to a decision.',
    image: ethiomaterialWeb,
    gallery: [ethiomaterialWeb, ethiomaterialMobile],
    technologies: [
      'React',
      'TypeScript',
      'Tailwind CSS',
      'Redux Toolkit',
      'React Router',
      'Axios',
      'REST APIs',
      'Figma',
      'FigJam',
    ],
    features: [
      'Supplier registration, profiles, listings, and verification',
      'Material search, filters, comparison, and product details',
      'Admin review of suppliers, materials, and marketplace content',
      'Technical documentation for architects and construction professionals',
      'Separate buyer, supplier, and administrator workflows',
      'Mobile app in progress with the team',
      'Price comparison across materials',
      'Payments inside the buying flow',
      'Chat between people using the marketplace',
    ],
    challenges: [
      'Presenting dense construction-product information without slowing buyers down',
      'Keeping buyer, supplier, and admin experiences consistent',
      'Turning marketplace rules into clear forms, states, and navigation',
    ],
    responsibilities: [
      'Designed user flows, wireframes, prototypes, and interface layouts',
      'Translated those designs into reusable frontend components',
      'Built responsive pages and interactive marketplace workflows',
      'Integrated the interface with backend REST APIs',
      'Worked on forms, data presentation, navigation, and role-specific screens',
      'Designed the mobile app and built it with the team, including price comparison, payments, and chat',
    ],
    problem:
      'Construction buyers, suppliers, and architects were finding materials through scattered channels, with little shared structure for product details, verification, or technical documentation.',
    solution:
      'A centralized marketplace with search and filters, supplier and material administration, and separate workflows for buyers, suppliers, and administrators.',
    outcome:
      'The website is live at ethiomaterial.com. The mobile app, built with the team, extends it with price comparison, payments, and chat.',
    github: '',
    liveDemo: 'https://ethiomaterial.com',
    featured: true,
    year: '2026–present',
    role: 'Frontend, UI/UX & Mobile App',
    organization: 'Meson Technologies',
    projectType: 'Marketplace website and mobile app',
    access: 'Live',
    accent: 'from-stone-800 via-amber-700 to-orange-500',
  },
  {
    id: 4,
    slug: 'wego-addis-tour',
    title: 'WegoAddis Tour',
    category: 'Full Stack',
    disciplines: ['Full Stack', 'Frontend', 'Backend'],
    description:
      'Tourism website for exploring Ethiopian destinations, with tour details, inquiries, content management, and a live deployment.',
    longDescription:
      'WegoAddis Tour helps visitors explore destinations and tour experiences in Ethiopia. I took the work from Figma through frontend, backend, database-backed content, and deployment on wegoaddistour.com. Visitors can read tour packages and destination details, and the site supports inquiry and reservation-related workflows plus an admin side for tour content.',
    image: wegoCover,
    gallery: [wegoCover],
    technologies: [
      'React',
      'Node.js',
      'Express.js',
      'MongoDB',
      'JavaScript',
      'REST APIs',
      'Figma',
      'Git',
    ],
    features: [
      'Tour packages, destinations, and travel information',
      'Tour detail pages for comparing experiences',
      'Inquiry and reservation-related workflows',
      'Administrative content management for tours',
      'Responsive layouts for mobile, tablet, and desktop',
      'Production deployment on the public domain',
    ],
    challenges: [
      'Turning a tourism design into a site that staff can update after launch',
      'Connecting public pages with server-side content and reservation flows',
      'Shipping a stable production release on the live domain',
    ],
    responsibilities: [
      'Translated Figma designs into a working website',
      'Built frontend pages and reusable components',
      'Implemented server-side functionality and API integration',
      'Worked with database-backed content and reservation workflows',
      'Tested, fixed issues, and deployed the site',
    ],
    problem:
      'Travelers needed a clear way to understand Ethiopian tour experiences, and the operator needed the site online with content they could manage.',
    solution:
      'A MERN tourism website with destination and tour pages, inquiry flows, an admin side for content, and a production deployment.',
    outcome:
      'WegoAddis Tour is publicly available at wegoaddistour.com, with the design, application, and release handled through to launch.',
    github: '',
    liveDemo: 'https://wegoaddistour.com',
    featured: true,
    year: '2025',
    role: 'Full-Stack Developer — Freelance / Contract',
    organization: 'WegoAddis Tour',
    projectType: 'Tour and travel booking website',
    access: 'Live',
    accent: 'from-emerald-950 via-teal-700 to-amber-500',
  },
  {
    id: 5,
    slug: 'all-in-one-daycare',
    title: 'All-in-One Daycare',
    category: 'Frontend',
    disciplines: ['Frontend', 'UI/UX'],
    description:
      'Final-year system for parents, caregivers, and administrators, led across design, web, and React Native.',
    longDescription:
      'All-in-One Daycare Management System is a childcare platform from Addis Ababa Science and Technology University. It connects parent-facing services, caregiver operations, and administration so families and daycare centers can share child-related information with more transparency. I was team lead for a five-person team over about three months, and I owned the user experience, web frontend, and the parent-facing React Native application while coordinating with the Laravel backend.',
    image: daycareAdmin,
    gallery: [daycareAdmin, daycareCaregiver, daycareParent],
    technologies: [
      'Next.js',
      'React',
      'TypeScript',
      'Tailwind CSS',
      'React Native',
      'PHP',
      'Laravel',
      'REST APIs',
      'Figma',
    ],
    features: [
      'Parent accounts and child-related information',
      'Communication between parents and daycare staff',
      'Caregiver and administrator interfaces with role-specific work',
      'Attendance and activity management in the implemented modules',
      'Payment-related and service workflows',
      'A React Native app alongside the web portals',
    ],
    challenges: [
      'Designing one product language for parents, caregivers, and administrators',
      'Keeping web and mobile parent experiences aligned',
      'Coordinating frontend needs with backend work across a five-person team',
    ],
    responsibilities: [
      'Led coordination for a five-member team',
      'Designed user flows, wireframes, prototypes, and interfaces',
      'Developed frontend pages and reusable components',
      'Built the parent-facing experience and React Native application',
      'Aligned parent, caregiver, and administrator interfaces with the API',
    ],
    problem:
      'Parents and daycare centers depended on fragmented updates, which made childcare information harder to trust and harder to act on.',
    solution:
      'Three connected experiences — parent web and mobile, caregiver tools, and an administrator dashboard — sharing one backend.',
    outcome:
      'The thesis system showed how UI/UX, frontend, mobile, and team leadership can land in one multi-role product.',
    github: '',
    liveDemo: '',
    featured: true,
    year: '2025',
    role: 'Team Lead, UI/UX Designer & Frontend Developer',
    organization: 'Addis Ababa Science and Technology University',
    projectType: 'Final-year academic project',
    access: 'Academic',
    accent: 'from-rose-900 via-pink-700 to-amber-400',
  },
  {
    id: 6,
    slug: 'moha-maintenance',
    title: 'MOHA Maintenance System',
    category: 'Frontend',
    disciplines: ['Frontend', 'UI/UX'],
    description:
      'Internal maintenance, inventory, and reporting interfaces for MOHA Soft Drinks headquarters and its branches.',
    longDescription:
      'At MOHA Soft Drinks headquarters I designed and built internal interfaces for maintenance, inventory, and reporting. The work covered operations associated with roughly seven to eight branches, so the screens had to make branch-level information easier to scan, update, and report. I also supported the existing company website alongside this internal system.',
    image: mohaCover,
    gallery: [mohaCover],
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Axios', 'REST APIs', 'Figma', 'Git'],
    features: [
      'Maintenance workflows for internal activities',
      'Inventory records and operational data',
      'Reporting screens for business information',
      'Interfaces used in a multi-branch context',
      'Forms for reviewing and updating internal records',
    ],
    challenges: [
      'Organizing maintenance and inventory data across several branches',
      'Making reporting useful for internal staff who are not looking for a marketing site',
    ],
    responsibilities: [
      'Designed UI/UX layouts and user flows for internal users',
      'Developed and maintained frontend pages',
      'Built reporting and inventory interfaces',
      'Integrated screens with available backend APIs',
    ],
    problem:
      'Maintenance, inventory, and reporting across headquarters and branches were harder to manage without structured internal screens.',
    solution:
      'Role-focused web interfaces for maintenance activities, inventory records, and operational reports.',
    outcome:
      'Internal users gained clearer pages for day-to-day maintenance and inventory work across the branch network.',
    github: '',
    liveDemo: '',
    year: '2025',
    role: 'Frontend Developer & UI/UX Designer',
    organization: 'MOHA Soft Drinks',
    projectType: 'Internal business and maintenance system',
    access: 'Internal',
    accent: 'from-red-950 via-red-700 to-orange-400',
  },
  {
    id: 8,
    slug: 'redesign-of-chipchip',
    title: 'Redesign of ChipChip',
    category: 'UI/UX',
    disciplines: ['UI/UX'],
    description:
      'Group-buying commerce interface with product listings, group orders, invitations, and in-app conversation.',
    longDescription:
      'ChipChip is a mobile commerce experience built around buying alone or buying as a group. I designed the interface in Figma: product grids with individual and group prices, group creation, invitations, rewards for sharing, address capture, orders, and a group chat. The screens focus on making a group purchase understandable in a few steps.',
    image: chipchipCover,
    gallery: [chipchipCover],
    technologies: ['Figma', 'FigJam', 'Auto Layout', 'Prototyping', 'Mobile UI'],
    features: [
      'Product grid with Buy Alone and Buy Group prices',
      'Group creation and a 24-hour invite flow',
      'Sharing rewards and address capture',
      'Cart, orders, and profile navigation',
      'Group chat for people buying together',
    ],
    challenges: [
      'Explaining group price versus individual price without extra instructions',
      'Keeping shopping, groups, and chat in one mobile navigation model',
    ],
    responsibilities: [
      'Created wireframes, layouts, and interactive prototypes',
      'Organized page hierarchy and user flows',
      'Applied reusable patterns and Auto Layout',
      'Refined the interface for visual consistency',
    ],
    problem:
      'Group buying asks people to understand two prices, a shared order, and a deadline. A normal catalog layout does not carry that.',
    solution:
      'A mobile interface that pairs each product with both prices, then leads into group setup, invites, and conversation.',
    outcome:
      'The design gives ChipChip a clear shopping path from product discovery to group coordination.',
    github: '',
    liveDemo: '',
    year: '2025',
    role: 'UI/UX Designer',
    organization: 'Academic Project',
    projectType: 'Mobile commerce UI/UX',
    access: 'Design case study',
    accent: 'from-lime-900 via-green-600 to-emerald-400',
  },
  {
    id: 9,
    slug: 'kuraz-internship',
    title: 'Kuraz Internship Program',
    category: 'Frontend',
    disciplines: ['Frontend'],
    description:
      'Frontend internship work on the Kuraz internship program interface and API-connected React screens.',
    longDescription:
      'During my frontend internship at Kuraz I implemented React interfaces for the internship program, including the welcome, apply, and sign-in entry points, and I connected components to REST APIs. The internship was practice in taking interface requirements into maintainable screens inside an existing product.',
    image: kurazCover,
    gallery: [kurazCover],
    technologies: ['React', 'JavaScript', 'Tailwind CSS', 'Axios', 'REST APIs', 'Git'],
    features: [
      'Internship program welcome, apply, and sign-in entry',
      'Reusable React components',
      'Responsive page structure',
      'Components connected to REST APIs',
    ],
    challenges: [
      'Matching an existing product’s visual system',
      'Wiring interface components to APIs without breaking surrounding screens',
    ],
    responsibilities: [
      'Built and maintained React components',
      'Implemented responsive layouts',
      'Translated interface requirements into working screens',
      'Connected UI components to REST APIs',
    ],
    problem:
      'The internship program needed a clear front door for applicants and a frontend that could talk to existing APIs.',
    solution:
      'React screens for the program entry flow, built as reusable components and connected with Axios.',
    outcome:
      'The internship produced production-style frontend work: components, layout, and API integration on a real product.',
    github: '',
    liveDemo: '',
    year: '2024',
    role: 'Frontend Developer Intern',
    organization: 'Kuraz',
    projectType: 'Frontend internship',
    access: 'Internship',
    accent: 'from-yellow-600 via-amber-500 to-slate-900',
  },
  {
    id: 11,
    slug: 'efuye-gela',
    title: 'Spin the Wheel',
    category: 'Frontend',
    disciplines: ['Frontend'],
    description:
      'Truth-or-dare spinner for Efuye Gela. People spin, get a question, answer, and score while they get to know each other.',
    longDescription:
      'Spin the Wheel is an icebreaker game built for Efuye Gela. Two people play together: they spin the wheel, land on a truth or dare prompt, answer or complete it, and pick up a score. The point is introduction, not a dating feed. I built the screens around the wheel, the prompt, and a simple score so the game stays easy to start.',
    image: datingCover,
    gallery: [datingCover],
    technologies: ['React', 'JavaScript', 'CSS', 'Game UI'],
    features: [
      'Spin the wheel to land on a prompt',
      'Truth or dare questions for two players',
      'Score tracking as the game goes on',
      'Ready-to-play and how-to-play screens',
    ],
    challenges: [
      'Making the spin, the question, and the score read as one turn',
      'Keeping the game light enough for people who have just met',
    ],
    responsibilities: [
      'Built the spinner game for Efuye Gela',
      'Designed the play, prompt, and score screens',
      'Implemented the turn flow for two players',
    ],
    problem:
      'People meeting through Efuye Gela needed a simple way to introduce themselves, not a long form.',
    solution:
      'A two-player spinner that deals truth-or-dare questions and keeps score.',
    outcome:
      'The game gives Efuye Gela a shared activity: spin, answer, score, and get to know the other person.',
    github: '',
    liveDemo: '',
    year: '2025',
    role: 'Web Developer',
    organization: 'Efuye Gela',
    projectType: 'Icebreaker spinner game',
    access: 'Product case study',
    accent: 'from-fuchsia-950 via-purple-700 to-pink-400',
  },
  {
    id: 12,
    slug: 'mead',
    title: 'MAED',
    category: 'Full Stack',
    disciplines: ['Full Stack', 'Backend'],
    description:
      'Restaurant reservation website for MAED Ethiopian Cuisine in Addis Ababa, built with PHP.',
    longDescription:
      'MAED is a restaurant website for an Ethiopian cuisine kitchen in Addis Ababa. Guests can open the menu, gallery, and about pages, then make a reservation from the site. I built the reservation system in PHP so bookings go through the kitchen instead of a phone-only process.',
    image: meadCover,
    gallery: [meadCover],
    technologies: ['PHP', 'HTML', 'CSS', 'JavaScript', 'MySQL'],
    features: [
      'Restaurant home, menu, gallery, about, and contact pages',
      'Reservation flow for booking a table',
      'Addis Ababa location and contact information',
    ],
    challenges: [
      'Turning a restaurant website into something staff can actually take bookings from',
    ],
    responsibilities: [
      'Built the restaurant website and reservation system in PHP',
      'Implemented the public pages and booking flow',
    ],
    problem:
      'The restaurant needed online reservations, not only a brochure site.',
    solution:
      'A PHP restaurant website with menu pages and a reservation system.',
    outcome:
      'MAED can take table bookings from the website alongside the usual restaurant pages.',
    github: '',
    liveDemo: '',
    year: '2025',
    role: 'Full-Stack Developer',
    organization: 'MAED Ethiopian Cuisine',
    projectType: 'Restaurant reservation system',
    access: 'Client project',
    accent: 'from-amber-950 via-yellow-700 to-stone-400',
  },
  {
    id: 15,
    slug: 'Academix-school-management',
    title: 'Academix School Management',
    category: 'Frontend',
    disciplines: ['Frontend'],
    description:
      'School management project with React on the frontend and Django on the backend, built as a web contributor.',
    longDescription:
      'The GDSC School Management System is a school operations project I contributed to on the web side. The stack pairs a React frontend with a Django backend so school information can be managed through a browser instead of separate documents.',
    image: academixCover,
    gallery: [academixCover],
    technologies: ['React', 'Django', 'Web development'],
    features: [
      'Web interface for school management tasks',
      'React frontend connected to a Django backend',
    ],
    challenges: [
      'Connecting a React interface to Django-backed school records',
    ],
    responsibilities: [
      'Contributed to web development for the school management project',
      'Worked across the React interface and its Django backend',
    ],
    problem:
      'School information needed a shared web system rather than scattered manual tracking.',
    solution:
      'A React and Django application for managing school information in the browser.',
    outcome:
      'The project added full-stack practice with React and Django in an education context.',
    github: '',
    liveDemo: '',
    year: '2024',
    role: 'Web Development Contributor',
    organization: 'Google Developer Student Clubs',
    projectType: 'School management system',
    access: 'Academic / community',
    accent: 'from-blue-950 via-blue-700 to-amber-400',
  },
  {
    id: 17,
    slug: 'signoff',
    title: 'SignOff',
    category: 'Full Stack',
    disciplines: ['Full Stack', 'Backend'],
    description:
      'Personal software project with a Node.js server and its own GitHub repository, in active development.',
    longDescription:
      'SignOff is a personal software project from my own development workspace. I set up the GitHub repository and the Node.js server so the product has a working foundation, and I am continuing the application from there. It sits apart from client and academic work: a product I am building directly, from project setup through the server.',
    image: signoffCover,
    gallery: [signoffCover],
    technologies: ['Node.js', 'JavaScript', 'GitHub'],
    features: [
      'Node.js server foundation',
      'GitHub repository and project setup',
      'Personal product development in progress',
    ],
    challenges: [
      'Starting from an empty repository and a running server, then shaping the product on that base',
    ],
    responsibilities: [
      'Created the project repository',
      'Set up and ran the Node.js server',
      'Continued development of the application independently',
    ],
    problem:
      'I wanted a personal product with its own codebase, separate from client and university systems.',
    solution:
      'A Node.js application with the repository, server startup, and ongoing development owned end to end.',
    outcome:
      'SignOff is an active personal project, with the server and repository in place as the base for the rest of the product.',
    github: '',
    liveDemo: '',
    year: '2026',
    role: 'Developer',
    organization: 'Personal project',
    projectType: 'Personal software product',
    access: 'In development',
    accent: 'from-neutral-950 via-neutral-800 to-cyan-500',
  },
];
