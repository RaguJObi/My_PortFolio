import { Project } from '../components/ProjectCard';

export const projects: Project[] = [
  {
    id: 1,
    title: 'E-Commerce Platform',
    description: 'A full-featured e-commerce platform with cart, checkout, and payment integration.',
    image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    tags: ['React', 'Node.js', 'MongoDB', 'Stripe'],
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com',
    category: 'fullstack'
  },
  {
    id: 2,
    title: 'Fitness Tracking App',
    description: 'Mobile app for tracking workouts, nutrition, and fitness progress with social features.',
    image: 'https://images.pexels.com/photos/416778/pexels-photo-416778.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    tags: ['React Native', 'Firebase', 'Redux', 'Charts'],
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com',
    category: 'mobile'
  },
  {
    id: 3,
    title: 'Real Estate Dashboard',
    description: 'Admin dashboard for real estate agents with analytics, client management, and property listings.',
    image: 'https://images.pexels.com/photos/323705/pexels-photo-323705.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    tags: ['React', 'TypeScript', 'Tailwind CSS', 'Chart.js'],
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com',
    category: 'web'
  },
  {
    id: 4,
    title: 'Recipe Sharing Platform',
    description: 'Community platform for sharing and discovering recipes with user authentication and comments.',
    image: 'https://images.pexels.com/photos/1109197/pexels-photo-1109197.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    tags: ['Vue.js', 'Express', 'PostgreSQL', 'AWS'],
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com',
    category: 'fullstack'
  },
  {
    id: 5,
    title: 'Travel Planning App',
    description: 'Mobile app for planning trips, creating itineraries, and discovering local attractions.',
    image: 'https://images.pexels.com/photos/2325446/pexels-photo-2325446.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    tags: ['React Native', 'GraphQL', 'Google Maps API'],
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com',
    category: 'mobile'
  },
  {
    id: 6,
    title: 'Portfolio Generator',
    description: 'Web app that helps developers create customizable portfolio websites with minimal setup.',
    image: 'https://images.pexels.com/photos/270360/pexels-photo-270360.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    tags: ['Next.js', 'TypeScript', 'TailwindCSS', 'Vercel'],
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com',
    category: 'web'
  }
];

export const skills = [
  {
    name: 'Frontend Development',
    percentage: 95,
    color: 'indigo',
    items: ['React', 'Vue.js', 'Next.js', 'TypeScript', 'TailwindCSS', 'SASS']
  },
  {
    name: 'Mobile Development',
    percentage: 90,
    color: 'teal',
    items: ['React Native', 'Flutter', 'Swift', 'Mobile UI/UX', 'App Store/Play Store']
  },
  {
    name: 'Backend Development',
    percentage: 85,
    color: 'emerald',
    items: ['Node.js', 'Express', 'MongoDB', 'PostgreSQL', 'RESTful APIs', 'GraphQL']
  },
  {
    name: 'DevOps & Cloud',
    percentage: 80,
    color: 'amber',
    items: ['AWS', 'Docker', 'CI/CD', 'Kubernetes', 'Serverless']
  },
  {
    name: 'UI/UX Design',
    percentage: 75,
    color: 'rose',
    items: ['Figma', 'Adobe XD', 'Wireframing', 'Prototyping', 'User Research']
  }
];

export const experiences = [
  {
    title: 'Senior Full Stack Developer',
    company: 'TechInnovate',
    period: '2022 - Present',
    description: 'Led development of enterprise-level applications, mentored junior developers, and implemented modern CI/CD practices.'
  },
  {
    title: 'Mobile App Developer',
    company: 'MobileVision',
    period: '2020 - 2022',
    description: 'Designed and developed cross-platform mobile applications using React Native and Flutter for various clients in healthcare and fintech sectors.'
  },
  {
    title: 'Frontend Developer',
    company: 'WebSolutions',
    period: '2018 - 2020',
    description: 'Created responsive, accessible web interfaces for client projects using React, Vue.js, and modern CSS frameworks.'
  },
  {
    title: 'Junior Web Developer',
    company: 'StartupLaunch',
    period: '2016 - 2018',
    description: 'Assisted in building MVPs for early-stage startups, focusing on rapid prototyping and iterative development.'
  }
];

export const services = [
  {
    title: 'Web Development',
    description: 'Modern, responsive websites and web applications with a focus on performance and user experience.',
    icon: 'Monitor'
  },
  {
    title: 'Mobile App Development',
    description: 'Cross-platform mobile applications using React Native with native-like performance and feel.',
    icon: 'Smartphone'
  },
  {
    title: 'Full Stack Solutions',
    description: 'End-to-end development from database design to user interface, with seamless integration between components.',
    icon: 'Layers'
  },
  {
    title: 'UI/UX Design',
    description: 'User-centered design solutions that balance aesthetics with functionality and ease of use.',
    icon: 'Palette'
  }
];