import azzurraCover from '../assets/azzurra-cover.png';
import wheelmateCover from '../assets/wheelmate-cover.png';
import episcopeCover from '../assets/episcope-cover.jpg';
import magppieCover from '../assets/magppie-cover.png';

// Featured project lineup: Exactly Azzurra, WheelMate, Episcope, Magppie in this order
export const projects = [
  {
    id: 'azzurra',
    num: '01',
    title: 'AZZURRA',
    category: 'Healthcare E-commerce / Medical Nutrition',
    tagline: 'Healthcare e-commerce & medical nutrition storefront platform',
    description: "A specialized healthcare e-commerce and medical nutrition platform engineered for clinical dietary management, seamless nutritional discovery, and secure patient-first product ordering.",
    technologies: [
      'Next.js / React',
      'Healthcare E-Commerce',
      'Medical Nutrition Catalog',
      'RESTful APIs',
      'Cart & Checkout Architecture',
      'Responsive UI / UX'
    ],
    role: 'Lead Frontend & E-Commerce Developer',
    architecture: [
      'Component-driven medical nutrition showcase reflecting authentic blue-and-white clinical branding within a modern storefront.',
      'Curated clinical dietary filtering, condition-specific nutritional categories, and comprehensive ingredient breakdowns.',
      'Optimized client-side state machine managing dietary carts, ordering flows, and prescription nutritional verification.',
      'High-performance rendering and responsive layout engineered for diverse patient and healthcare consumer accessibility.'
    ],
    visualTheme: {
      accent: '#38BDF8', // Authentic Azzurra blue highlight within the project view
      motif: 'Clinical Nutrition Architecture',
      wireframeStyle: 'storefront'
    },
    demoUrl: 'https://azzurrapharmaconutrition.com/',
    demoLabel: 'Company Website',
    githubUrl: 'https://github.com/mpragyaa/azzurra',
    isVerifiedDemo: true,
    coverImage: azzurraCover
  },
  {
    id: 'wheelmate',
    num: '02',
    title: 'WHEELMATE',
    category: 'AI / Computer Vision / Accessibility',
    tagline: 'Computer vision & ML companion application for wheelchair assistance',
    description: "An accessibility-focused project combining computer vision, machine learning and a companion application for wheelchair assistance.",
    technologies: [
      'OpenCV',
      'Machine Learning',
      'Computer Vision',
      'Companion Application',
      'Wheelchair Integration',
      'Python'
    ],
    role: 'Computer Vision & Companion App Developer',
    architecture: [
      'Real-time obstacle detection and spatial path analysis using camera streams.',
      'Lightweight vision processing pipeline tailored for low-latency mobility feedback.',
      'Mobile companion interface communicating spatial cues and proximity alerts.',
      'Ergonomic, high-contrast user interface designed specifically for wheelchair accessibility.'
    ],
    visualTheme: {
      accent: '#D4D4D8',
      motif: 'Directional Vector Radar',
      wireframeStyle: 'radar'
    },
    demoUrl: null,
    githubUrl: 'https://github.com/mpragyaa/wheelmate',
    isVerifiedDemo: false,
    coverImage: wheelmateCover
  },
  {
    id: 'episcope',
    num: '03',
    title: 'EPISCOPE',
    headline: 'Predicting Epidemics Through Graph Intelligence',
    category: 'AI / Research / Graph Neural Networks',
    tagline: 'Temporal Graph Neural Networks for epidemic forecasting & hotspot detection',
    description: "Temporal Graph Neural Networks for large-scale outbreak forecasting across dynamic social networks with real-time hotspot detection.",
    technologies: [
      'Temporal Graph Neural Networks (TGNN)',
      'PyTorch Geometric',
      'Dynamic Social Networks',
      'Epidemic Outbreak Forecasting',
      'Graph Intelligence',
      'Python'
    ],
    role: 'AI Researcher & Lead Developer',
    architecture: [
      'Spatio-temporal graph convolutional layers modeling multi-hop transmission across dynamic contact networks.',
      'Temporal attention mechanisms capturing time-varying edge densities and incubation latency windows.',
      'Monochromatic hotspot visualizer rendering topological network nodes, edge weights, and transmission clusters.',
      'Evaluated on benchmark epidemiologic graph datasets without speculative or unverified clinical claims.'
    ],
    visualTheme: {
      accent: '#FFFFFF',
      motif: 'Dynamic Temporal Graph Intelligence',
      wireframeStyle: 'graph'
    },
    demoUrl: 'https://epidemic-dashboard.vercel.app/',
    demoLabel: 'Live Deployment',
    githubUrl: 'https://github.com/mpragyaa/episcope',
    isVerifiedDemo: true,
    coverImage: episcopeCover
  },
  {
    id: 'magppie',
    num: '04',
    title: 'MAGPPIE',
    category: 'AI / Digital Product Experience',
    tagline: 'AI experimentation & luxury product presentation for wellness-kitchen brand',
    description: "Work undertaken during an AI internship, exploring the intersection of AI experimentation, web development, product presentation and premium wellness-kitchen branding.",
    technologies: [
      'AI Experimentation',
      'Frontend Web Development',
      'Product Presentation',
      'Visual Narrative Design',
      'Brand Technology Integration'
    ],
    role: 'AI & Web Engineering Intern',
    architecture: [
      'Prototyping AI-driven workflows for automated product categorization and asset generation.',
      'Crafting refined digital showcases reflecting Magppie\'s luxury architectural wellness philosophy.',
      'Responsive web components engineered for high-resolution product photography and material showcases.',
      'Cross-functional collaboration with design and marketing teams on digital touchpoints.'
    ],
    visualTheme: {
      accent: '#FFFFFF',
      motif: 'Monolithic Chrome Geometry',
      wireframeStyle: 'monolith'
    },
    demoUrl: 'https://magppie.com/',
    demoLabel: 'Company Website',
    githubUrl: null,
    isVerifiedDemo: true,
    coverImage: magppieCover
  }
];

// Preserved EzPark source data (excluded from featured showcase)
export const unfeaturedProjects = [
  {
    id: 'ezpark',
    num: '05',
    title: 'EZPARK',
    category: 'Full Stack / Maps',
    tagline: 'Smart parking discovery & management platform with interactive mapping',
    description: "A smart parking discovery and management platform that helps users search for parking near a location, explore parking listings on an interactive map and access relevant parking details.",
    technologies: [
      'Full-Stack Web Development',
      'Interactive Maps',
      'Authentication',
      'Database-Backed Listings',
      'Administrative Management'
    ],
    role: 'Full Stack Web Developer',
    architecture: [
      'Interactive mapping integration with location-based coordinate indexing and parking discovery.',
      'RESTful API endpoints powering authentication, parking availability queries, and reservation states.',
      'Responsive full-stack architecture with relational database schema for listings management.'
    ],
    githubUrl: 'https://github.com/mpragyaa/ezpark'
  }
];

export const capabilitiesData = [
  {
    id: 'build',
    label: 'BUILD',
    headline: 'Full-Stack & Web Engineering',
    summary: 'Web development, frontend interfaces, APIs and full-stack product development.',
    details: [
      'Modern Single-Page Applications (React, Vite, Next.js)',
      'Responsive, high-performance UI systems & CSS architecture',
      'RESTful API design and backend integrations',
      'Component lifecycle optimization & web vitals'
    ],
    skills: ['React', 'JavaScript (ES6+)', 'HTML5 / CSS3', 'Node.js', 'REST APIs', 'Git']
  },
  {
    id: 'ai',
    label: 'AI',
    headline: 'Agentic Systems & Machine Learning',
    summary: 'Agentic AI exploration, RAG, AI APIs and machine-learning applications.',
    details: [
      'Retrieval-Augmented Generation (RAG) pipelines',
      'Temporal Graph Neural Networks & vector embeddings',
      'LLM orchestration & prompt engineering',
      'Computer vision workflows with OpenCV'
    ],
    skills: ['Python', 'Graph Neural Networks', 'PyTorch', 'Vector Search', 'OpenCV', 'Streamlit']
  },
  {
    id: 'code',
    label: 'CODE',
    headline: 'Foundations & Algorithmic Problem Solving',
    summary: 'C++, Python, Java, SQL and problem-solving.',
    details: [
      'Data structures and algorithm design in C++',
      'Relational database modeling, query optimization and SQL',
      'Object-oriented architecture across Java & Python',
      'System design fundamentals & algorithmic efficiency'
    ],
    skills: ['C++', 'Python', 'Java', 'SQL', 'Data Structures', 'OOP Architecture']
  },
  {
    id: 'design',
    label: 'DESIGN',
    headline: 'Visual Hierarchy & Product Thinking',
    summary: 'UI/UX, interface design, visual hierarchy and product thinking.',
    details: [
      'Minimalist, editorial layout & typographic discipline',
      '3D spatial aesthetics and scroll-driven choreography',
      'User-centric wireframing, personas and interaction flows',
      'Dark mode mastery and monochromatic contrast balancing'
    ],
    skills: ['UI/UX Design', 'Figma', 'Visual Hierarchy', 'Typography', 'Micro-interactions', 'Design Systems']
  }
];

export const experienceData = [
  {
    period: '2024',
    role: 'AI & Web Engineering Intern',
    company: 'Magppie Living',
    location: 'New Delhi, India',
    focus: 'AI Experimentation & Luxury Digital Presentation',
    description: 'Work undertaken exploring the intersection of generative AI experimentation, frontend engineering, high-fidelity digital showcases, and architectural luxury wellness brand presentation.'
  },
  {
    period: '2023 — PRESENT',
    role: 'Creative Developer & AI Systems Builder',
    company: 'Independent Engineering & Academic Projects',
    location: 'Delhi, India',
    focus: 'Temporal Graph Networks, Computer Vision & Spatial Interfaces',
    description: 'Architecting research-driven software and interactive applications including Episcope (temporal graph neural networks), WheelMate (assistive computer vision), and Azzurra (healthcare e-commerce).'
  }
];
