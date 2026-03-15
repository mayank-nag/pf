// ─── Single source of truth for all portfolio content ───

export const profile = {
  name: {
    first: 'MAYANK',
    last: 'NAGAR',
  },
  logo: '.MN',
  tagline: 'Software Development · Machine Learning · Mobile Development · Systems',
  heroSub: 'Computer Science student building intelligent software, machine learning projects, and developer tools.',
  email: 'mayankn645@gmail.com',
  resumePath: '/resume.pdf',
  CVPath: '/CV.pdf',
  githubUsername: 'Mayank-nag',
  social: {
    github: 'https://github.com/Mayank-nag',
    linkedin: 'www.linkedin.com/in/mayank-nag',
  },
  about: {
    heading: 'Building\npractical\nsoftware\nsystems.',
    paragraphs: [
      "I'm a Computer Science student focused on building practical software systems and intelligent applications. I enjoy working with Python, modern web technologies, and Linux environments while exploring machine learning and system-level development.",
      'My projects span full-stack web applications, machine learning models, game development, and mobile apps — always with an emphasis on clean architecture, performance, and real-world usability.',
      'I also have a strong interest in cybersecurity, Linux systems, and developer tooling, which complements my core software engineering focus.',
    ],
    stats: [
      { value: 5, label: 'Projects Built' },
      { value: 12, label: 'Technologies Used' },
      { value: 2, label: 'Years Learning' },
      { value: 50, label: 'GitHub Commits' },
    ],
  },
  education: [
    {
      degree: 'B.Tech Computer Science',
      institution: 'Jaipur National University',
      period: '2024 — Present',
    },
    {
      degree: 'Higher Secondary Education',
      institution: 'St. Anselm Pink City Sr. Sec. School',
      period: '2022 — 2024',
    },
  ],
  projects: [
    {
      title: 'Women Safety App',
      description:
        'A responsive safety-focused web application designed to provide quick emergency access and location sharing.',
      features: [
        'Emergency alert system with one-tap SOS',
        'Location-based navigation and live sharing',
        'Mobile-first accessibility design',
      ],
      tech: ['Dart','HTML', 'CSS', 'JavaScript'],
      github: 'https://github.com/Mayank-nag/women_safety_app',
      gradient: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 40%, #0f3460 100%)',
      pattern: 'grid',
      caseStudy: {
        problem: 'Women in unsafe situations need a fast, reliable way to alert contacts and share location without complex app interactions.',
        approach: 'Built a mobile-first web app with minimal UI, one-tap emergency buttons, and integrated geolocation APIs for real-time location sharing.',
        challenges: 'Ensuring reliable geolocation across browsers, designing for high-stress low-attention UX, and maintaining accessibility standards.',
        outcome: 'A working prototype that demonstrates rapid emergency response workflow with clean, accessible design.',
      },
    },
    {
      title: 'Portfolio Website',
      description:
        'Modern developer portfolio built with Vite and Anime.js featuring smooth animations, dark theme, and modular component architecture.',
      features: [
        'Component-based architecture with Vite',
        'Smooth scroll-reveal and entrance animations',
        'Dark/light theme toggle with persistence',
      ],
      tech: ['Vite', 'JavaScript', 'Anime.js', 'CSS'],
      github: 'https://github.com/Mayank-nag/portfolio',
      gradient: 'linear-gradient(135deg, #1a0a00 0%, #3d1500 50%, #5c2200 100%)',
      pattern: 'dots',
      caseStudy: {
        problem: 'Needed a professional, fast-loading developer portfolio that showcases skills and projects effectively.',
        approach: 'Used Vite for fast builds and modular JS components, Anime.js for performant animations, and a clean minimal design system.',
        challenges: 'Balancing animation smoothness with performance, implementing theme switching without flicker, and ensuring full mobile responsiveness.',
        outcome: 'A high-performance portfolio with Lighthouse scores above 90, smooth animations, and fully responsive design.',
      },
    },
    {
      title: 'Game Development — PyGame',
      description:
        'Interactive games built using PyGame implementing physics simulations, collision detection systems, and event-driven architecture.',
      features: [
        'Real-time physics and collision detection',
        'Event-driven game loop architecture',
        'Score tracking and difficulty progression',
      ],
      tech: ['Python', 'PyGame'],
      github: 'https://github.com/Mayank-nag/Game_development_py_games',
      gradient: 'linear-gradient(135deg, #001a0a 0%, #003320 50%, #004d30 100%)',
      pattern: 'lines',
      caseStudy: {
        problem: 'Wanted to understand low-level game development concepts like physics, rendering loops, and state management.',
        approach: 'Built multiple games using PyGame, implementing custom physics engines, sprite management, and event-driven architecture.',
        challenges: 'Managing frame-rate-independent physics, handling complex collision detection, and optimizing rendering performance.',
        outcome: 'Multiple playable games demonstrating strong understanding of game development fundamentals and Python OOP.',
      },
    },
    {
      title: 'Secure Environment Project',
      description:
        'Cybersecurity-focused Python project exploring secure execution environments, sandboxing techniques, and controlled system access.',
      features: [
        'Sandboxed code execution environment',
        'Access control and permission management',
        'Security logging and monitoring',
      ],
      tech: ['Python', 'Cybersecurity', 'Linux'],
      github: 'https://github.com/Mayank-nag/Secure_env_projec',
      gradient: 'linear-gradient(135deg, #0d0d2b 0%, #1a1a40 50%, #2d2d6b 100%)',
      pattern: 'grid',
      caseStudy: {
        problem: 'Running untrusted code requires isolation to prevent system compromise and data exfiltration.',
        approach: 'Developed a Python-based sandboxing solution with restricted system calls, permission management, and monitoring.',
        challenges: 'Balancing security restrictions with usability, preventing privilege escalation, and implementing comprehensive logging.',
        outcome: 'A functional secure environment demonstrating sandboxing principles applicable to real-world security systems.',
      },
    },
    {
      title: 'Mango AI Classification',
      description:
        'Deep learning system using TensorFlow and computer vision to classify mango varieties with high accuracy from images.',
      features: [
        'CNN-based image classification pipeline',
        'Data augmentation for improved accuracy',
        'Model evaluation with precision/recall metrics',
      ],
      tech: ['Python', 'TensorFlow', 'OpenCV'],
      github: 'https://github.com/Mayank-nag/_Mangoid_',
      gradient: 'linear-gradient(135deg, #1a1200 0%, #332600 50%, #4d3900 100%)',
      pattern: 'dots',
      caseStudy: {
        problem: 'Manual identification of mango varieties is time-consuming and error-prone for agricultural quality control.',
        approach: 'Built a CNN model using TensorFlow with data augmentation, transfer learning, and OpenCV preprocessing pipeline.',
        challenges: 'Limited training data, class imbalance between varieties, and optimizing model size for potential mobile deployment.',
        outcome: 'A trained model achieving reliable classification accuracy, with a clean training pipeline and evaluation metrics.',
      },
    },
    
  ],
  skillGroups: [
    {
      icon: '⚡',
      title: 'Programming',
      description: 'Core language proficiency in systems and application development.',
      skills: ['Python', 'C', 'C++'],
    },
    {
      icon: '◈',
      title: 'Web Development',
      description: 'Building modern, responsive interfaces and full-stack applications.',
      skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Next.js'],
    },
    {
      icon: '✦',
      title: 'Machine Learning',
      description: 'Data science, deep learning, visualization, and model development.',
      skills: ['TensorFlow', 'Pandas', 'Matplotlib', 'OpenCV'],
    },
    {
      icon: '📱',
      title: 'Mobile Development',
      description: 'Building cross-platform and native mobile applications with modern frameworks.',
      skills: ['React Native', 'Flutter', 'Android', 'Mobile UI', 'API Integration'],
    },
    {
      icon: '▸',
      title: 'Systems',
      description: 'Linux administration, shell scripting, and system-level operations.',
      skills: ['Linux', 'Ubuntu', 'Bash', 'Terminal'],
    },
    {
      icon: '◎',
      title: 'Databases',
      description: 'Relational and cloud database design, queries, and integration.',
      skills: ['MySQL', 'Firebase'],
    },
    {
      icon: '🔒',
      title: 'Cybersecurity',
      description: 'Offensive & defensive security tooling, penetration testing, and network analysis.',
      skills: ['Kali Linux', 'Nmap', 'Burp Suite', 'Wireshark'],
    },
  ],
  blog: [
    {
      title: 'Beginner Guide to Nmap',
      summary: 'A comprehensive walkthrough of Nmap network scanning, from basic host discovery to advanced port scanning techniques.',
      tag: 'Cybersecurity',
    },
    {
      title: 'Understanding SQL Injection',
      summary: 'Deep dive into SQL injection attack vectors, prevention strategies, and secure coding practices for web applications.',
      tag: 'Security',
    },
    {
      title: 'How Wireshark Analyzes Network Packets',
      summary: 'Practical guide to packet analysis with Wireshark — capturing, filtering, and interpreting network traffic.',
      tag: 'Networking',
    },
    {
      title: 'Building a Mango Classification Model',
      summary: 'End-to-end walkthrough of training a CNN for image classification using TensorFlow and OpenCV.',
      tag: 'Machine Learning',
    },
  ],
};
