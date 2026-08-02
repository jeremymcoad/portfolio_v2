import type { IconName } from './icons';

export const nav = [
  { href: '#hero', label: 'About Me' },
  { href: '#experience', label: 'Experience' },
  { href: '#projects', label: 'Projects' },
  { href: '#contact', label: 'Contact' },
] as const;

export interface BrainCategory {
  id: string;
  side: 'left' | 'right';
  icon: IconName;
  title: string;
  blurb: string;
  detail: string;
  color: string;
  pos: { x: number; y: number };
}

// Positions are in the brain SVG's 0-256 viewBox coordinate space.
export const brainCategories: BrainCategory[] = [
  {
    id: 'work',
    side: 'left',
    icon: 'briefcase',
    title: 'Work',
    blurb: 'Solving problems. Building impact.',
    detail:
      '10+ years leading product strategy and delivery for healthcare technology platforms, turning complex clinical and operational needs into scalable digital products.',
    color: '#38bdf8',
    pos: { x: 100, y: 62 },
  },
  {
    id: 'projects',
    side: 'left',
    icon: 'code',
    title: 'Projects',
    blurb: 'Planning, refining, and building solutions.',
    detail:
      'From patient portals to CRM platforms, I scope, prioritize, and ship features that move the needle for real users and real businesses.',
    color: '#22d3ee',
    pos: { x: 76, y: 95 },
  },
  {
    id: 'tinkering',
    side: 'left',
    icon: 'wrench',
    title: 'Tinkering',
    blurb: 'Fixing, building, and figuring things out.',
    detail:
      "I'm naturally curious about how things work — whether it's software, a guitar amp, or a piece of furniture, I like taking things apart just to understand them.",
    color: '#2dd4bf',
    pos: { x: 66, y: 130 },
  },
  {
    id: 'learning',
    side: 'left',
    icon: 'bookOpen',
    title: 'Learning',
    blurb: 'Always curious. Always growing.',
    detail:
      'Continuously exploring new frameworks, product methodologies, and technologies to sharpen how I build, lead, and make decisions.',
    color: '#818cf8',
    pos: { x: 78, y: 165 },
  },
  {
    id: 'analysis',
    side: 'left',
    icon: 'chartBar',
    title: 'Analysis',
    blurb: 'Data, insights, and strategy.',
    detail:
      'Translating data into decisions — from patient engagement metrics to roadmap prioritization and measurable product outcomes.',
    color: '#a78bfa',
    pos: { x: 100, y: 198 },
  },
  {
    id: 'health',
    side: 'right',
    icon: 'barbell',
    title: 'Health & Fitness',
    blurb: 'Stronger every day. Body fuels mind.',
    detail: 'Staying active keeps my head clear and my energy up for everything else on this list.',
    color: '#4ade80',
    pos: { x: 156, y: 58 },
  },
  {
    id: 'outdoors',
    side: 'right',
    icon: 'tree',
    title: 'Outdoors',
    blurb: 'Nature recharges and inspires.',
    detail: 'Hiking, canoeing, and fresh air keep me grounded and curious, rain or shine.',
    color: '#a3e635',
    pos: { x: 180, y: 88 },
  },
  {
    id: 'music',
    side: 'right',
    icon: 'musicNotes',
    title: 'Playing Music',
    blurb: 'Strings, rhythm & soul.',
    detail: 'Guitar gives me a space to think and reset — a creative outlet outside of screens and sprints.',
    color: '#facc15',
    pos: { x: 190, y: 120 },
  },
  {
    id: 'games',
    side: 'right',
    icon: 'diceFive',
    title: 'Board Games',
    blurb: 'Strategy, fun, and friendly competition.',
    detail: 'I love a good strategy game — the mix of planning and unpredictability never gets old.',
    color: '#fb923c',
    pos: { x: 182, y: 150 },
  },
  {
    id: 'netflix',
    side: 'right',
    icon: 'play',
    title: 'Netflix',
    blurb: 'Stories, laughs, and a little escape.',
    detail: 'A good series (or a rewatch of an old favorite) is my way to unwind after a long day.',
    color: '#f87171',
    pos: { x: 168, y: 175 },
  },
  {
    id: 'dogs',
    side: 'right',
    icon: 'pawPrint',
    title: 'My Dogs',
    blurb: 'Loyal companions. Unconditional love.',
    detail: 'My dogs keep me company through every long workday and every weekend adventure.',
    color: '#f472b6',
    pos: { x: 150, y: 197 },
  },
  {
    id: 'family',
    side: 'right',
    icon: 'usersThree',
    title: 'Family',
    blurb: 'My why. My everything.',
    detail: 'Family is the reason behind everything I build and work toward.',
    color: '#c084fc',
    pos: { x: 128, y: 216 },
  },
];

export const site = {
  name: 'Jeremy Coad',
  role: 'Product Owner',
  meta: {
    title: 'Jeremy Coad | Product Owner',
    description:
      'Product Owner with 10+ years of experience delivering healthcare technology digital products and patient engagement solutions.',
  },
  hero: {
    eyebrow: 'Inside My',
    highlight: 'Mind',
    tagline: "A look at what drives me — personally and professionally.",
  },
  about: {
    paragraphs: [
      'Product Owner with 10+ years of experience delivering digital products and patient engagement solutions, with a strong focus in healthcare technology and patient experience platforms.',
      'Proven ability to lead product strategy, translate complex clinical and operational needs into scalable solutions, and deliver measurable improvements in access, engagement, and revenue cycle performance.',
      'Experienced working in HIPAA-compliant environments, aligning cross-functional stakeholders, and driving outcomes across patient engagement, CRM, and digital health ecosystems.',
    ],
    competencies: [
      'Designing and delivering unified healthcare engagement platforms across fragmented EMR, CRM, and contact center systems',
      'Translating product intent into scalable workflows on CDP-driven architectures (e.g., Twilio Segment) for patient data unification and activation',
      'Improving agent and clinician efficiency through role-based dashboards, streamlined patient context, and reduced system switching',
      'Driving cross-functional delivery as a Product Owner using Agile/Scrum, balancing stakeholder priorities with incremental release planning',
      'Defining end-to-end patient journey experiences across messaging, scheduling, and support channels with a focus on usability and accessibility',
      'Partnering with engineering to shape maintainable product structures, clear acceptance criteria, and production-ready delivery pipelines',
    ],
  },
  experiences: [
    {
      period: '10/2023 - PRESENT',
      title: 'Product Owner · Patient Engagement Platforms',
      brandLogo: 'eyecare-partners.jpg',
      company: 'EyeCare Partners',
      summary:
        'Spearheaded product strategy and delivery for HIPAA-compliant patient engagement systems, including a contact center UI with messaging automation and a patient portal integrated with healthcare EMR systems.',
      highlights: [
        'Defined and prioritized product requirements across stakeholders in Contact Center, Operations, Marketing, Legal/Compliance, and Revenue Cycle Management, aligning cross-functional teams around shared delivery goals',
        'Partnered with DevOps, Enterprise Architecture, Cloud Security, and Infrastructure teams to ensure scalable, secure, and compliant system design',
        'Led agile delivery practices, managed product backlogs, and drove roadmap execution to improve patient experience and operational efficiency across healthcare workflows',
      ],
      tech: ['Product Strategy', 'Product Roadmapping', 'Product Management', 'Agile Methodologies', 'Backlog Management'],
    },
    {
      period: '10/2022 - 9/2023',
      title: 'Customer Relationship Manager - Healthcare Marketing Technology',
      brandLogo: 'eyecare-partners.jpg',
      company: 'EyeCare Partners',
      summary: 'Managed enterprise CRM strategy and marketing automation across a multi-brand healthcare organization.',
      highlights: [
        'Designed and implemented CRM platform (Cordial) supporting patient communication at scale',
        'Built automated patient engagement workflows (appointment reminders, confirmations, follow-ups)',
        'Developed targeted campaigns to improve patient retention, reactivation, and service utilization',
        'Enabled data-driven segmentation and personalization across 350+ locations',
      ],
      tech: ['Customer Relationship Management (CRM)', 'Email Marketing', 'Stakeholder Management', 'Patient Journey Mapping'],
    },
    {
      period: '1/2022 - 7/2022',
      title: 'Marketing Project Manager - Digital Health Initiatives',
      brandLogo: 'eyecare-partners.jpg',
      company: 'EyeCare Partners',
      summary: 'Supported enterprise digital transformation initiatives focused on patient experience and digital presence.',
      highlights: [
        'Led implementation of customer experience platform (Sprinklr) across 55+ healthcare brands',
        'Deployed digital presence management (Yext) to improve patient access and local SEO',
        'Contributed to patient journey mapping and experience optimization initiatives',
        'Supported clinical growth programs, contributing to 1.5% increase in procedure conversion rates',
      ],
      tech: ['Strategic Initiatives', 'Digital Transformation', 'Customer Experience Strategy', 'Product Implementation'],
    },
    {
      period: '1/2022 - 7/2022',
      title: 'Marketing Manager - Eyecare Services',
      brandLogo: 'eiwf.jpg',
      company: 'The Eye Institute of West Florida',
      summary: 'Led digital strategy and patient engagement initiatives for a multi-location specialty practice.',
      highlights: [
        'Increased online appointment bookings by 56% through digital transformation initiatives',
        'Improved patient portal adoption by 30% via UX improvements and communication strategies',
        'Reduced no-show rates by 1.3% using automated patient reminder systems',
        'Implemented CRM and lead management workflows to improve conversion rates',
        'Increased patient satisfaction and online reputation (10x growth in positive reviews)',
        'Optimized paid search campaigns, increasing ROI by 28%',
      ],
      tech: ['Patient Acquisition', 'Patient Experience Optimization', 'Digital Strategy', 'Patient Engagement Strategy'],
    },
  ],
  projects: [
    {
      title: 'Streamlined Patient Scheduling Modal',
      period: '2026',
      summary:
        'Healthcare organizations often relied on fragmented scheduling workflows that forced patients to navigate multiple pages or external systems to book appointments, leading to drop-offs and inconsistent scheduling experiences.',
      solution:
        'Redesigned the online appointment scheduling experience into a streamlined, user-facing modal embedded directly within the marketing website — enter ZIP code, select location, choose a time slot, and submit patient information — integrated in real time with practice management and EMR systems.',
      impact:
        'Increased appointment conversion, improved patient experience with a faster and more intuitive flow, and enhanced operational efficiency through real-time sync with downstream clinical systems.',
      image: 'online-scheduling.jpg',
      tech: ['Next.js', 'Spring Boot', 'Amazon EKS', 'Amazon RDS', 'Google Maps'],
    },
    {
      title: 'Enterprise Patient CRM & Contact Center Platform',
      period: '2025',
      summary:
        'Healthcare organizations often manage patient communications, care coordination, and contact center operations across disconnected systems, leaving agents without a unified view of patient information.',
      solution:
        'Designed and delivered a patient engagement and contact center platform built on the Twilio Segment CDP that unified patient profiles, appointment management, and omnichannel engagement across phone, SMS, email, and web.',
      impact:
        'Improved operational efficiency, reduced average handling times, increased first-contact resolution, and delivered more timely, personalized patient engagement.',
      image: 'contact-center-ui.jpg',
      tech: ['Twilio Segment CDP', 'Twilio Flex', 'Kafka', 'React', 'Node.js'],
    },
    {
      title: 'PM/EMR Integrated Patient Portal',
      period: '2024',
      summary:
        'Patients needed a seamless digital experience connecting appointment scheduling, medical records, prescriptions, and purchasing across multiple disconnected systems.',
      solution:
        'Designed and delivered an integrated patient portal unifying practice management and EMR data into a single self-service experience — scheduling, prescriptions, records, and a connected eCommerce storefront.',
      impact:
        'Enhanced patient engagement with 24/7 self-service access, increased online bookings and digital adoption, and reduced administrative workload for practice staff.',
      image: 'patient-portal.jpg',
      tech: ['Next.js', 'Spring Boot', 'Amazon EKS', 'KeyCloak', 'JWT'],
    },
  ],
  contact: {
    email: 'jeremymatthewcoad@gmail.com',
    github: 'https://github.com/jeremymcoad',
    linkedin: 'https://www.linkedin.com/in/jeremymcoad/',
    resume: 'Jeremy-Coad-Healthcare-Technology-Product-Owner_web.pdf',
  },
} as const;
