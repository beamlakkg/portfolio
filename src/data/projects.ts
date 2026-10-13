import kurazCover from '../assets/4.png';
import chipchipCover from '../assets/8.png';

export type ProjectCategory =
  | 'All'
  | 'Frontend'
  | 'Full Stack'
  | 'Backend'
  | 'UI/UX'
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
    disciplines: ['Frontend', 'UI/UX'],
    description:
      'Construction marketplace for Meson Technologies, plus a mobile app I am designing and building with the team: price comparison, payments, and chat.',
    longDescription:
      'EthioMaterial connects construction-material suppliers, buyers, and architects in one marketplace. I designed the product and built the web frontend at Meson Technologies, with support associated with Ethio Alliance and the French Embassy. With the team, I am also designing and building the mobile app. The app improves the marketplace with price comparison, payments, chat, and a faster way to move from a material to a decision.',
    image: '',
    gallery: [],
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
    year: '2025–2026',
    role: 'Frontend, UI/UX & Mobile App',
    organization: 'Meson Technologies',
    projectType: 'Marketplace website and mobile app',
    access: 'Live',
    accent: 'from-stone-800 via-amber-700 to-orange-500',
  },
  {
    id: 2,
    slug: 'medhinlink',
    title: 'MedhinLink',
    category: 'Frontend',
    disciplines: ['Frontend'],
    description:
      'Insurance administration platform for managing companies, products, policies, KYC, claims, licensing, and finance operations.',
    longDescription:
      'MedhinLink is an insurance technology platform used by authorized staff to manage insurance companies, products, coverage, policies, customer verification, claims, and financial operations. I developed and maintained the administrative frontend at Birrama Technologies: reusable components, forms, tables, protected routes, and API integration. My contribution is the frontend and its connection to backend services. Authentication, Fayda KYC, and Telebirr payment services are integrated workflows in the product.',
    image: '',
    gallery: [],
    technologies: [
      'Next.js 16',
      'React',
      'TypeScript',
      'React Context',
      'Axios',
      'REST APIs',
      'GitLab',
      'Turbopack',
    ],
    features: [
      'Login, protected routes, and authenticated admin sessions',
      'Insurance company, product, coverage, and policy administration',
      'Waiting periods, grace periods, and installment-related policy workflows',
      'KYC review screens associated with Fayda verification',
      'Claims management and finance interfaces',
      'Home-page banners, licensing, and registration workflows',
      'Telebirr payment callback handling in the admin experience',
    ],
    challenges: [
      'Keeping a large set of insurance modules consistent for daily operators',
      'Handling access tokens, refresh tokens, and the /auth/me session flow',
      'Presenting policy, claims, and finance data without burying the next action',
    ],
    responsibilities: [
      'Built and maintained the administrative frontend',
      'Implemented reusable components, forms, tables, navigation, and page layouts',
      'Integrated modules with backend APIs using Axios',
      'Managed authentication state, token refresh, and shared state with React Context',
      'Worked on license and registration, coverage, and policy-content workflows',
    ],
    problem:
      'Insurance operations were spread across companies, products, policies, identity checks, claims, and payments, which made day-to-day administration hard to follow.',
    solution:
      'One administrative application with protected routes, structured records, and screens for coverage, policies, KYC, claims, licensing, and finance.',
    outcome:
      'Authorized staff can move through insurance operations from a single frontend, with session handling and API-backed modules for the workflows they use in production.',
    github: '',
    liveDemo: '',
    featured: true,
    year: '2025–2026',
    role: 'Frontend Developer',
    organization: 'Birrama Technologies',
    projectType: 'Insurance administration platform',
    access: 'Private production',
    accent: 'from-slate-900 via-blue-800 to-cyan-600',
  },
  {
    id: 3,
    slug: 'agent-management',
    title: 'Agent Management System',
    category: 'Frontend',
    disciplines: ['Frontend'],
    description:
      'Internal insurance application for organizing agent records and the administrative work connected to them.',
    longDescription:
      'The Agent Management System is an internal business application at Birrama Technologies for organizing insurance-agent information and related administrative activities. I built the frontend for viewing and updating agent records, presenting operational data, and connecting those screens to backend services. It belongs to the same insurance-operations work as MedhinLink, with its own agent-focused workflows.',
    image: '',
    gallery: [],
    technologies: ['React', 'TypeScript', 'Axios', 'REST APIs', 'GitLab'],
    features: [
      'Agent record viewing and management',
      'Create and update flows for agent information',
      'Tables, forms, and operational summaries',
      'Administrative navigation across related insurance activities',
      'API-backed retrieval and updates',
    ],
    challenges: [
      'Making agent operations readable for staff who work in the records every day',
      'Keeping the internal interface consistent with the wider insurance admin system',
    ],
    responsibilities: [
      'Developed the frontend for the internal management application',
      'Built administrative layouts and reusable UI components',
      'Implemented data-driven screens and forms',
      'Integrated the interface with APIs',
    ],
    problem:
      'Agent information and related insurance activities needed a structured internal tool instead of informal record keeping.',
    solution:
      'An administrative interface for agent records, with forms, tables, and navigation tied to backend services.',
    outcome:
      'Operations staff have a dedicated place to review and update agent information as part of Birrama’s insurance systems.',
    github: '',
    liveDemo: '',
    year: '2025–2026',
    role: 'Frontend Developer',
    organization: 'Birrama Technologies',
    projectType: 'Agent management and insurance operations',
    access: 'Private production',
    accent: 'from-indigo-950 via-indigo-700 to-sky-500',
  },
  {
    id: 4,
    slug: 'wego-addis-tour',
    title: 'WegoAddis Tour',
    category: 'Full Stack',
    disciplines: ['Full Stack', 'Frontend'],
    description:
      'Tourism website for exploring Ethiopian destinations, with tour details, inquiries, content management, and a live deployment.',
    longDescription:
      'WegoAddis Tour helps visitors explore destinations and tour experiences in Ethiopia. I took the work from Figma through frontend, backend, database-backed content, and deployment on wegoaddistour.com. Visitors can read tour packages and destination details, and the site supports inquiry and reservation-related workflows plus an admin side for tour content.',
    image: '',
    gallery: [],
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
    image: '',
    gallery: [],
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
    image: '',
    gallery: [],
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
    id: 7,
    slug: 'moha-website',
    title: 'MOHA Website',
    category: 'Frontend',
    disciplines: ['Frontend'],
    description:
      'Frontend maintenance for the MOHA Soft Drinks website: layouts, fixes, and content-facing updates.',
    longDescription:
      'Alongside the internal maintenance system, I maintained the existing MOHA Soft Drinks website. The work was practical frontend care: updating pages, repairing layout issues, refining responsive behavior, and keeping the public site consistent with what the business needed to publish.',
    image: '',
    gallery: [],
    technologies: ['React', 'Responsive UI', 'Git'],
    features: [
      'Updates to existing marketing and information pages',
      'Layout and responsive fixes',
      'Content and interface adjustments requested by the business',
    ],
    challenges: [
      'Improving a live website without breaking pages that were already in use',
    ],
    responsibilities: [
      'Maintained and updated existing website pages',
      'Improved page layouts and usability',
      'Fixed frontend issues and refined responsive behavior',
    ],
    problem:
      'The public website needed ongoing frontend care so pages stayed functional and consistent with business updates.',
    solution:
      'Targeted page, layout, and responsive updates on the existing site.',
    outcome:
      'Public pages stayed maintainable while internal product work continued at headquarters.',
    github: '',
    liveDemo: '',
    year: '2025',
    role: 'Web Developer / Frontend Developer',
    organization: 'MOHA Soft Drinks',
    projectType: 'Company website maintenance',
    access: 'Company website',
    accent: 'from-orange-950 via-orange-700 to-amber-400',
  },
  {
    id: 8,
    slug: 'chipchip',
    title: 'ChipChip',
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
    organization: 'ChipChip',
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
    id: 10,
    slug: 'internship-management',
    title: 'Internship Management System',
    category: 'Frontend',
    disciplines: ['Frontend'],
    description:
      'Web application for organizing internship listings, applications, and student records during the Fullstack internship.',
    longDescription:
      'The Internship Management System is a web application from my Fullstack Technologies internship. It replaces fully manual coordination with a centralized place for internship listings, applications, student records, and status tracking. I contributed frontend interfaces, page layouts, and the forms and views that make those records usable for staff.',
    image: '',
    gallery: [],
    technologies: ['Web application UI', 'Forms & dashboards', 'REST-oriented workflows'],
    features: [
      'Internship listings and their details',
      'Application submission and tracking',
      'Intern records and application details',
      'Administrative management of internship information',
      'Status tracking for application progress',
    ],
    challenges: [
      'Turning a manual internship process into screens people can scan quickly',
      'Keeping student, listing, and application information in one flow',
    ],
    responsibilities: [
      'Contributed to the web application during the internship',
      'Worked on frontend interfaces and page layouts',
      'Organized information into forms, views, and administrative workflows',
    ],
    problem:
      'Internship coordination depended on manual follow-up, so listings, applications, and student records were hard to track together.',
    solution:
      'A web application that gathers listings, applications, student records, and status into one administrative interface.',
    outcome:
      'The internship produced a practical management interface and stronger experience building forms and workflows for real operations.',
    github: '',
    liveDemo: '',
    year: '2024',
    role: 'Software Developer / Intern',
    organization: 'Fullstack Technologies',
    projectType: 'Internship management web application',
    access: 'Internship',
    accent: 'from-violet-950 via-violet-700 to-fuchsia-500',
  },
  {
    id: 11,
    slug: 'efuye-gela',
    title: 'Efuye Gela',
    category: 'Frontend',
    disciplines: ['Frontend'],
    description:
      'Community website for discovering shared content and participating in an online social space.',
    longDescription:
      'Efuye Gela is a social community website. I built the frontend in Next.js and React so people can move through community-oriented pages, read shared content, and participate without a complicated information structure. The interface is responsive and organized into reusable components so later community features can sit on the same layout.',
    image: '',
    gallery: [],
    technologies: ['Next.js', 'React', 'TypeScript', 'Responsive UI'],
    features: [
      'Community-oriented pages and content presentation',
      'Navigation aimed at participation',
      'Responsive layouts',
      'Reusable frontend components',
    ],
    challenges: [
      'Making a community product feel approachable on first visit',
      'Structuring the frontend so new interactions can be added cleanly',
    ],
    responsibilities: [
      'Developed the website with modern frontend technologies',
      'Built page structure, interface components, and responsive layouts',
      'Turned the community concept into a usable web experience',
    ],
    problem:
      'The community needed a shared online place that feels straightforward to browse and join.',
    solution:
      'A Next.js frontend with clear page hierarchy, reusable components, and layouts that work across devices.',
    outcome:
      'Efuye Gela has a maintainable community frontend ready for the interactions the product grows into.',
    github: '',
    liveDemo: '',
    year: '2025',
    role: 'Web Developer',
    organization: 'Efuye Gela',
    projectType: 'Social and community platform',
    access: 'Product case study',
    accent: 'from-fuchsia-950 via-purple-700 to-pink-400',
  },
  {
    id: 12,
    slug: 'materials-ecommerce',
    title: 'Materials E-commerce',
    category: 'Frontend',
    disciplines: ['Frontend', 'UI/UX'],
    description:
      'Online store interface for browsing materials, designed and implemented with a collaborator.',
    longDescription:
      'I designed and built the frontend of an e-commerce materials store with a friend. The work covers product listing, product detail, shopping-oriented navigation, and responsive pages that present material information clearly. It is a design-to-code project focused on how people find and understand products.',
    image: '',
    gallery: [],
    technologies: ['Figma', 'React', 'Responsive UI', 'Component design'],
    features: [
      'Product listing and detail interfaces',
      'Shopping-oriented navigation and hierarchy',
      'Responsive storefront pages',
      'Clear presentation of product information',
    ],
    challenges: [
      'Giving material products enough detail without crowding the listing',
      'Carrying a Figma structure into reusable frontend pages',
    ],
    responsibilities: [
      'Designed the storefront interface',
      'Implemented responsive frontend pages',
      'Translated the design into working components',
    ],
    problem:
      'Shoppers needed a straightforward way to browse materials and open a product without losing context.',
    solution:
      'A responsive storefront with listing and detail views and a navigation model built for shopping.',
    outcome:
      'The project produced a complete design-to-code storefront for presenting material products online.',
    github: '',
    liveDemo: '',
    year: '2025',
    role: 'UI/UX Designer & Frontend Developer',
    organization: 'Independent collaboration',
    projectType: 'E-commerce storefront',
    access: 'Case study',
    accent: 'from-zinc-900 via-stone-600 to-yellow-600',
  },
  {
    id: 13,
    slug: 'addispay',
    title: 'Addispay',
    category: 'UI/UX',
    disciplines: ['UI/UX'],
    description:
      'Mobile application interface work covering screen design, navigation, and the flows I implemented.',
    longDescription:
      'Addispay is a mobile application I contributed to through interface design and application work. The portfolio entry focuses on the mobile screens, navigation, and implementation I completed: structuring flows so people can move through the product on a phone with a clear hierarchy.',
    image: '',
    gallery: [],
    technologies: ['Mobile UI', 'Figma', 'Screen design', 'Navigation flows'],
    features: [
      'Mobile screen design',
      'Navigation between core app sections',
      'Interface implementation for the completed flows',
    ],
    challenges: [
      'Keeping a mobile flow short enough to follow on a small screen',
    ],
    responsibilities: [
      'Designed mobile screens and navigation',
      'Contributed to the application interface for the flows I owned',
    ],
    problem:
      'The product needed a mobile interface people could move through without guessing the next step.',
    solution:
      'Structured mobile screens and navigation for the parts of Addispay I designed and implemented.',
    outcome:
      'Addispay added mobile UI/UX practice to the web products in this portfolio, with screens shaped around phone navigation.',
    github: '',
    liveDemo: '',
    year: '2025',
    role: 'Mobile UI/UX & Application Contributor',
    organization: 'Addispay',
    projectType: 'Mobile application',
    access: 'Case study',
    accent: 'from-sky-950 via-blue-700 to-cyan-400',
  },
  {
    id: 14,
    slug: 'qlass',
    title: 'Qlass',
    category: 'Frontend',
    disciplines: ['Frontend'],
    description:
      'Frontend internship at Qlass / Classic Technology, building layouts, components, and responsive screens with the team.',
    longDescription:
      'At Qlass, also referred to as Classic Technology, I interned as a frontend developer. I built and refined components, page layouts, and reusable UI, applied responsive styling, and adjusted screens from team feedback. The internship strengthened how I implement an interface inside someone else’s requirements.',
    image: '',
    gallery: [],
    technologies: ['Frontend UI', 'Responsive layouts', 'Reusable components'],
    features: [
      'Page layouts and reusable UI elements',
      'Responsive styling across screens',
      'Interface updates from team review',
    ],
    challenges: [
      'Implementing screens to match changing team feedback',
      'Keeping components consistent across the pages I touched',
    ],
    responsibilities: [
      'Developed and refined frontend components',
      'Implemented page layouts and reusable UI',
      'Applied responsive styling',
      'Worked from team requirements and review',
    ],
    problem:
      'The product needed consistent frontend screens delivered as part of a development team.',
    solution:
      'Component-based pages with responsive layout, revised against team feedback.',
    outcome:
      'The internship added team-based frontend delivery on top of independent project work.',
    github: '',
    liveDemo: '',
    year: '2024',
    role: 'Frontend Developer Intern',
    organization: 'Qlass / Classic Technology',
    projectType: 'Frontend internship',
    access: 'Internship',
    accent: 'from-slate-900 via-slate-700 to-cyan-500',
  },
  {
    id: 15,
    slug: 'gdsc-school-management',
    title: 'GDSC School Management',
    category: 'Full Stack',
    disciplines: ['Full Stack', 'Frontend'],
    description:
      'School management project with React on the frontend and Django on the backend, built as a web contributor.',
    longDescription:
      'The GDSC School Management System is a school operations project I contributed to on the web side. The stack pairs a React frontend with a Django backend so school information can be managed through a browser instead of separate documents.',
    image: '',
    gallery: [],
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
    id: 16,
    slug: 'zemenay-blog',
    title: 'Zemenay Hackathon Blog',
    category: 'Frontend',
    disciplines: ['Frontend'],
    description:
      'Hackathon blog project. Our team placed second.',
    longDescription:
      'Zemenay was a hackathon project built as a blog. I contributed to the product during the event, and the team placed second. The work was fast, collaborative, and focused on shipping a readable publishing experience within the hackathon window.',
    image: '',
    gallery: [],
    technologies: ['Web development', 'Hackathon delivery'],
    features: [
      'Blog-style content presentation',
      'A complete hackathon submission',
    ],
    challenges: [
      'Shipping a coherent product inside a hackathon deadline',
    ],
    responsibilities: [
      'Contributed to the blog project during the hackathon',
      'Collaborated with the team through to submission',
    ],
    problem:
      'The hackathon asked for a working blog, delivered as a team under a fixed deadline.',
    solution:
      'A blog product scoped tightly enough to finish and present.',
    outcome:
      'The team placed second at the Zemenay hackathon.',
    github: '',
    liveDemo: '',
    year: '2024',
    role: 'Project Contributor',
    organization: 'Zemenay Hackathon',
    projectType: 'Hackathon blog',
    access: 'Hackathon — 2nd place',
    accent: 'from-amber-900 via-orange-600 to-yellow-400',
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
    image: '',
    gallery: [],
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
