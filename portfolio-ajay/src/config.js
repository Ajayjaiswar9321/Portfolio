// ========== PORTFOLIO CONFIGURATION ==========
// Edit this file to quickly update your portfolio information

export const personalInfo = {
  name: 'Ajay Jaiswar',
  role: 'QA Analyst & Frontend Developer',
  location: 'Mumbai, India',
  email: 'ajayjaiswar6340@gmail.com',
  phone: '+91 9321446340',
  
  // Social Links
  social: {
    github: 'https://github.com/yourusername',
    linkedin: 'https://linkedin.com/in/yourusername',
    twitter: 'https://twitter.com/yourusername'
  },
  
  // CV File Path
  cvPath: '/assets/cv/Ajay_Jaiswar_CV.pdf'
}

export const about = {
  greeting: "Hello, I'm",
  description: "I combine quality assurance and development to build reliable, user-focused digital experiences.",
  
  bio: [
    "I'm a passionate QA Analyst and Frontend Developer based in Mumbai, India. With a keen eye for detail and a love for clean code, I bridge the gap between quality assurance and development.",
    "My approach combines rigorous testing methodologies with modern development practices, ensuring every product I work on is both functional and user-friendly."
  ],
  
  highlights: [
    { icon: '🎯', title: 'Experience', value: '2+ Years' },
    { icon: '📍', title: 'Location', value: 'Mumbai, India' },
    { icon: '💻', title: 'Focus', value: 'QA & Frontend' }
  ]
}

export const skills = {
  'QA & Testing': [
    'Manual Testing',
    'Automation Testing',
    'API Testing',
    'Regression Testing',
    'Test Case Design',
    'Bug Tracking',
    'Performance Testing'
  ],
  'Tools & Platforms': [
    'Selenium',
    'JIRA',
    'Postman',
    'Git & GitHub',
    'VS Code',
    'Chrome DevTools',
    'Figma'
  ],
  'Development': [
    'HTML5',
    'CSS3 / SASS',
    'JavaScript (ES6+)',
    'React.js',
    'Responsive Design',
    'REST APIs',
    'SQL Basics'
  ]
}

export const experience = [
  {
    title: 'QA Analyst',
    company: 'AI NEXT STUDIO',
    location: 'Mumbai, India',
    duration: 'Jan 2023 - Present',
    points: [
      'Conducted comprehensive manual and automated testing across web applications',
      'Developed detailed test cases and documentation for multiple projects',
      'Collaborated with developers to identify and resolve bugs efficiently',
      'Implemented testing best practices and improved QA processes'
    ]
  },
  {
    title: 'Software Developer & Tester',
    company: 'Bahar Infocons Pvt Ltd',
    location: 'Mumbai, India',
    duration: 'Jun 2021 - Dec 2022',
    points: [
      'Built responsive frontend interfaces using HTML, CSS, and JavaScript',
      'Performed end-to-end testing and quality assurance',
      'Maintained code quality standards and documentation',
      'Worked in Agile environment with cross-functional teams'
    ]
  }
]

export const projects = [
  {
    title: 'FOOD TAXI',
    subtitle: 'Zomato Clone',
    description: 'A full-featured food delivery web application with restaurant listings, cart functionality, and order tracking. Built with modern frontend technologies.',
    tech: ['HTML', 'CSS', 'JavaScript', 'React'],
    image: '/assets/images/project-foodtaxi.webp',
    liveLink: 'https://your-project-link.com',
    githubLink: 'https://github.com/yourusername/food-taxi'
  },
  {
    title: 'CLICKER',
    subtitle: 'Camera Rental Website',
    description: 'Professional camera and equipment rental platform with booking system, product catalog, and user-friendly interface.',
    tech: ['HTML', 'CSS', 'JavaScript'],
    image: '/assets/images/project-clicker.webp',
    liveLink: 'https://your-project-link.com',
    githubLink: 'https://github.com/yourusername/clicker'
  }
  // Add more projects here
]

// API Configuration
export const api = {
  baseURL: 'http://localhost:5000',
  endpoints: {
    contact: '/api/contact'
  }
}
