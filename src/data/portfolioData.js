export const personalData = {
  name: "Debaraj Malik",
  role: "Application Developer & Full Stack Lead",
  headline: "Specializing in React Native, Flutter, MERN Stack & Next.js",
  location: "Bhubaneswar, Odisha, India",
  email: "debarajmalik07@gmail.com",
  phone: "+91 9348043462",
  phoneDisplay: "+91 9348043462",
  whatsappUrl: "https://wa.me/919348043462?text=Hi%20Debaraj,%20I%20saw%20your%20portfolio%20and%20would%20like%20to%20connect!",
  linkedin: "https://linkedin.com/in/debaraj07",
  github: "https://github.com/Devraj070",
  summary:
    "React Native, Flutter, MERN Stack, and Next.js developer with hands-on experience building and shipping production web and mobile applications—from client-facing marketing sites to full-stack platforms with authentication, role-based access, and CMS/admin dashboards. Skilled at translating business requirements into scalable, high-performance solutions across the full development lifecycle.",
  currentRole: {
    title: "Software Developer (Team Lead)",
    company: "OdiTech Global Pvt Ltd",
    period: "Jan 2026 - Present",
    status: "Active Leadership",
  },
  stats: [
    { label: "Production Platforms", value: "25+", suffix: "Delivered", highlight: "Web & Mobile" },
    { label: "Google Play Store Apps", value: "4+", suffix: "Published", highlight: "Active Users" },
    { label: "Hands-on Experience", value: "3+", suffix: "Years", highlight: "Full Lifecycle" },
    { label: "Efficiency Boost", value: "30%", suffix: "Optimized", highlight: "Microservices" },
  ],
};

export const skillsData = [
  {
    category: "Mobile App Development",
    icon: "smartphone",
    description: "Architecting native-feel, high-performance cross-platform iOS & Android apps.",
    skills: [
      { name: "React Native", level: "Expert", years: "3+ yrs", tag: "Primary" },
      { name: "Flutter & Dart", level: "Advanced", years: "2+ yrs", tag: "Cross-Platform" },
      { name: "Play Store Deployment", level: "Expert", years: "Production", tag: "DevOps" },
      { name: "Mobile-First Design", level: "Expert", years: "Core", tag: "UI/UX" },
      { name: "Push Notifications & Socket.IO", level: "Advanced", years: "Real-time", tag: "Services" },
    ],
  },
  {
    category: "Frontend & Web Architecture",
    icon: "layout",
    description: "Crafting lightning-fast, SEO-optimized, and interactive web platforms.",
    skills: [
      { name: "Next.js (App Router)", level: "Expert", years: "3+ yrs", tag: "Full-Stack" },
      { name: "React.js", level: "Expert", years: "3+ yrs", tag: "Core" },
      { name: "Tailwind CSS", level: "Expert", years: "3+ yrs", tag: "Styling" },
      { name: "ThreeJS", level: "Intermediate", years: "1+ yr", tag: "3D Graphics" },
      { name: "HTML5 / CSS3 / ES6+", level: "Expert", years: "Foundational", tag: "Web Standards" },
    ],
  },
  {
    category: "Backend & Server Architecture",
    icon: "server",
    description: "Designing resilient RESTful microservices, real-time messaging, and APIs.",
    skills: [
      { name: "Node.js & Express.js", level: "Expert", years: "3+ yrs", tag: "Backend Core" },
      { name: "REST APIs & Webhooks", level: "Expert", years: "High-Throughput", tag: "Integration" },
      { name: "Microservices Architecture", level: "Advanced", years: "Production", tag: "Scalability" },
      { name: "Core & Advanced JAVA", level: "Advanced", years: "Enterprise", tag: "OOP" },
      { name: "Socket.IO Real-Time", level: "Advanced", years: "Real-time", tag: "Live Feeds" },
    ],
  },
  {
    category: "Databases, Cloud & DevOps",
    icon: "database",
    description: "Database modeling, cloud deployments, and production server maintenance.",
    skills: [
      { name: "MongoDB & Mongoose", level: "Expert", years: "3+ yrs", tag: "NoSQL" },
      { name: "VPS Server Deployment", level: "Advanced", years: "Linux/Nginx", tag: "Cloud" },
      { name: "Vercel & CI/CD", level: "Expert", years: "Continuous", tag: "Automation" },
      { name: "Git & GitHub Version Control", level: "Expert", years: "Team Lead", tag: "Workflows" },
    ],
  },
  {
    category: "Security, Payments & AI",
    icon: "shield",
    description: "Hardened authentication, financial transactions, and emerging AI tools.",
    skills: [
      { name: "Razorpay Payment Gateways", level: "Expert", years: "Live Apps", tag: "Fintech" },
      { name: "Authentication (JWT & OAuth)", level: "Expert", years: "Security", tag: "Auth" },
      { name: "Role-Based Access Control (RBAC)", level: "Expert", years: "Enterprise", tag: "Security" },
      { name: "CMS & Admin Dashboards", level: "Expert", years: "Business", tag: "Operations" },
      { name: "Generative AI Integration", level: "Learning & Applying", years: "Modern", tag: "Emerging" },
    ],
  },
];

export const projectsData = [
  {
    id: "waitinger",
    title: "Waitinger Ecosystem (3 Multi-Apps Platform)",
    subtitle: "Diner, Restaurant Partner & Delivery Rider System",
    category: "mobile",
    featured: true,
    badges: ["Google Play Live", "Multi-App Suite", "Real-Time Tracking", "AI Assistant"],
    playStoreLinks: [
      { name: "Waitinger (Diner)", url: "https://play.google.com/store/search?q=Waitinger&c=apps" },
      { name: "Waitinger Partner (Restaurant)", url: "https://play.google.com/store/search?q=Waitinger+Partner&c=apps" },
      { name: "Waitinger Delivery (Rider)", url: "https://play.google.com/store/search?q=Waitinger+Delivery&c=apps" },
    ],
    tech: ["React Native", "Node.js", "MongoDB", "Socket.IO", "Razorpay", "AI Assistant", "Express.js"],
    shortDesc:
      "A complete multi-app food ordering and logistics platform connecting diners, kitchen partner tablets, and delivery riders in real-time.",
    description:
      "Engineered an end-to-end 3-app production ecosystem comprising the Diner App for seamless food ordering, the Restaurant Partner App for live kitchen order management, and the Rider App for turn-by-turn order dispatch and live delivery tracking. Built with a unified Node.js backend using Socket.IO for sub-second synchronization, Razorpay for secured split payments, role-based access control, and an integrated smart AI assistant to accelerate dining selections.",
    highlights: [
      "Engineered 3 interconnected native apps released on Google Play Store",
      "Real-time geolocation tracking for delivery riders using Socket.IO feeds",
      "Integrated secure Razorpay gateway with automated order receipt generation",
      "Embedded an AI ordering assistant to enhance personalized menu recommendations",
      "Configured high-availability Node.js & MongoDB backend handling concurrent order spikes",
    ],
  },
  {
    id: "career-counselling",
    title: "Career Counselling Mobile Platform",
    subtitle: "End-to-End Educational Mentorship & Booking App",
    category: "mobile",
    featured: true,
    badges: ["Google Play Store", "com.careervedas.app", "EdTech", "Fintech Integration"],
    playStoreLinks: [
      { name: "Google Play Store", url: "https://play.google.com/store/apps/details?id=com.careervedas.app" },
    ],
    tech: ["React Native", "MongoDB", "Node.js", "Express.js", "Razorpay", "JWT Auth", "REST APIs"],
    shortDesc:
      "Production career guidance app published on Google Play connecting students with verified career counselors.",
    description:
      "Architected and deployed the official Career Counselling mobile application (com.careervedas.app) to the Google Play Store. Built robust RESTful APIs in Node.js with secure CRUD operations, MongoDB schema design, JWT authentication, and fine-grained role-based access control (Student vs. Counselor vs. Admin). Integrated Razorpay payment workflows for instant session scheduling and consultation bookings.",
    highlights: [
      "Successfully launched to Google Play Store under package com.careervedas.app",
      "Built resilient Node.js REST APIs with input validation and rate limiting",
      "Designed dynamic role-based dashboards for students, counselors, and administrative heads",
      "Integrated Razorpay payment gateway for automated booking fees and invoices",
      "Implemented instant push alerts for session reminders and application updates",
    ],
  },
  {
    id: "gym-management",
    title: "Full-Stack Gym Management SaaS",
    subtitle: "Member Operations, Attendance & Subscription System",
    category: "mobile",
    featured: true,
    badges: ["Flutter Native", "Node.js Backend", "SaaS Platform", "Active Development"],
    playStoreLinks: [],
    tech: ["Flutter", "Dart", "MongoDB", "Node.js", "Express.js", "REST APIs"],
    shortDesc:
      "Comprehensive fitness SaaS platform for managing memberships, QR attendance, workout routines, and payment cycles.",
    description:
      "Developing a high-performance cross-platform gym management application using Flutter and a scalable Node.js/Express/MongoDB backend. Solves operational hurdles for fitness center owners through member onboarding, automated membership recurring reminders, digital QR check-in attendance, customizable exercise regimes, and trainer-client scheduling.",
    highlights: [
      "Crafted intuitive, responsive mobile UI using Flutter with smooth animations",
      "Automated membership expiry warnings and automated fee collection tracking",
      "Interactive workout routine builder with progress and biometric metrics",
      "Secure backend with role-separated views for owners, trainers, and athletes",
      "Offline-first data caching with background server synchronization",
    ],
  },
  {
    id: "client-platforms",
    title: "25+ Shipped Client Web Portals & Commercial Platforms",
    subtitle: "Healthcare, Real Estate, Education & Restaurant Systems",
    category: "fullstack",
    featured: true,
    badges: ["25+ Deliveries", "Next.js App Router", "VPS Deployment", "Vercel Hosted"],
    playStoreLinks: [],
    tech: ["Next.js", "React.js", "Tailwind CSS", "MongoDB", "Node.js", "VPS Nginx", "Vercel"],
    shortDesc:
      "Delivered 25+ production client web platforms with custom booking engines, dynamic pricing, and marketing proposals.",
    description:
      "Owned the end-to-end delivery of 25+ commercial web applications and portals for diverse enterprise clients across restaurants, real estate firms, educational institutions, healthcare clinics, and salons. Engineered custom administrative CMS dashboards, dynamic pricing calculators, automated lead capture pipelines, and digital proposals that directly accelerated client business acquisition.",
    highlights: [
      "100% on-schedule delivery across 25+ client contracts with high customer satisfaction",
      "Engineered dynamic booking flows with instant SMS/Email notifications",
      "Full server setup: configured Linux VPS environments, Nginx reverse proxies, and SSL",
      "SEO-optimized Next.js architectures scoring 95+ on Google Lighthouse metrics",
      "Integrated interactive service pricing pages that boosted client conversion rates",
    ],
  },
];

export const experienceData = [
  {
    title: "Software Developer (Team Lead)",
    company: "OdiTech Global Pvt Ltd",
    period: "Jan 2026 - Present",
    location: "Bhubaneswar, Odisha",
    type: "Full-time • Leadership",
    highlights: [
      "Managing the core development team and spearheading end-to-end engineering of production Android and web applications.",
      "Architecting scalable, modular codebases using React Native, MERN stack, and Next.js, enforcing rigorous clean code standards.",
      "Conducting code reviews, setting up CI/CD pipelines, and driving adoption of modern engineering workflows.",
      "Collaborating with cross-functional product, UX, and business teams to integrate cutting-edge technologies, boosting accessibility and user retention.",
    ],
    tech: ["React Native", "Next.js", "Node.js", "MongoDB", "Tailwind CSS", "Team Leadership"],
  },
  {
    title: "Full Stack Developer",
    company: "SpiderVision Systems",
    period: "Jun 2024 - Dec 2025",
    location: "Bhubaneswar, Odisha",
    type: "Full-time",
    highlights: [
      "Owned end-to-end delivery of client web platforms (Next.js, React, MongoDB) for restaurants, real estate, education, and healthcare clients.",
      "Engineered and deployed interactive marketing proposals, service pricing pages, and dynamic client collateral that empowered business development.",
      "Delivered booking and reservation workflows, payment gateways, and custom administrative CMS dashboards for commercial clients.",
      "Maintained zero-downtime server deployments on VPS and Vercel environments.",
    ],
    tech: ["Next.js", "React.js", "MongoDB", "Express.js", "Tailwind CSS", "VPS Deployment"],
  },
  {
    title: "Web Developer Intern",
    company: "WebBocket Pvt Ltd",
    period: "Nov 2023 - Mar 2024",
    location: "Bhubaneswar, Odisha",
    type: "Internship",
    highlights: [
      "Assisted in developing and maintaining website features, improving code quality and user interface consistency across projects.",
      "Worked closely with senior developers on MERN stack architecture, API endpoints, and responsive CSS styling.",
      "Completed and certified in high-impact MERN Stack project delivery.",
    ],
    tech: ["React.js", "Node.js", "Express.js", "MongoDB", "JavaScript"],
  },
  {
    title: "Advanced Java Trainee",
    company: "OCAC Training Center",
    period: "Apr 2023 - Jun 2023",
    location: "Bhubaneswar, Odisha",
    type: "Training & Development",
    highlights: [
      "Improved application efficiency through targeted, performance-enhancing Java code changes.",
      "Contributed to a cross-functional team that architected and deployed a microservices-based system, improving system responsiveness and maintainability by 30%.",
      "Gained deep expertise in OOP design patterns, multithreading, and distributed system design.",
    ],
    tech: ["Java", "Microservices", "REST APIs", "System Architecture", "OOP"],
  },
];

export const educationData = [
  {
    degree: "Master of Computer Applications (MCA)",
    institution: "GIFT Autonomous College",
    period: "2022 - 2024",
    score: "CGPA: 8.3 / 10",
    description:
      "Advanced coursework in Advanced Software Engineering, Distributed Systems, Cloud Architecture, Mobile Computing, and Database Systems.",
    highlight: "Distinction • Top Tier Academic Record",
  },
  {
    degree: "Bachelor of Computer Applications (BCA)",
    institution: "A.M.I.T College",
    period: "2019 - 2022",
    score: "CGPA: 7.1 / 10",
    description:
      "Foundational computer science curriculum covering Data Structures, Algorithms, Object-Oriented Programming (Java/C++), and Web Development.",
    highlight: "Solid Computer Science Foundation",
  },
];

export const certificationsData = [
  {
    title: "Advanced Java Project Certification",
    issuer: "OCAC Training Centre",
    date: "Jun 2023",
    skills: ["Java Core & Advanced", "Microservices Architecture", "Performance Tuning"],
    description: "Certified for architecting a microservices-based system with 30% enhanced efficiency.",
  },
  {
    title: "MERN Stack Project Certification",
    issuer: "WebBocket Pvt Ltd",
    date: "Mar 2024",
    skills: ["React.js", "Node.js", "Express.js", "MongoDB", "REST APIs"],
    description: "Certified for production-grade full-stack web application development.",
  },
];
