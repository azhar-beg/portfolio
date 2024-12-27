import { IndustrialExperience, Project, Skill, SocialLink } from '@/types';

export const aboutMe = {
  name: "Azhar Beg",
  title: "Full Stack Developer",
"introduction": "I am a software developer with 3.5 years of experience in frontend and backend technologies, including JavaScript, React, Next.js, Node.js, Java, Kotlin, Kafka, and Spring Boot. I excel in driving business value through key feature development, production support, and complex database design while collaborating effectively with cross-functional teams. My journey began with ThoughtWorks' STEP program, where I built a solid programming foundation. I am passionate about mentoring others, writing clean code, and engaging in continuous learning and open-source projects.",
  "description": "With 3.5 years of experience in software development, I specialize in creating scalable applications using modern technologies. I am dedicated to clean code, enhancing user experience, and solving complex problems.",
  photoUrl: "/assets/profile1.jpg",
  resumeUrl: "/assets/resume.pdf"
};

export const industrialExperience: IndustrialExperience[] = [
  {
    id: 0,
    company: "Thoughtworks",
    role: "STEP Intern",
    duration: "Feb 2021 - July 2023",
    description:[
      "Began my journey with the STEP program, learning flowcharts and a custom language to understand arithmetic functions, sparking my interest in programming.",
      "Learned Bash and created various small projects like a todo app and Tic-Tac-Toe, writing scripts to boost productivity.",
      "Mastered HTML and CSS, creating web pages and exploring different styling techniques.",
      "Delved into JavaScript, building small projects and learning networking, culminating in a terminal-based chat app using Node.js.",
      "Combined HTML, CSS, and JavaScript to build a range of projects including games and a personal blogging page using the Hugo framework.",
      "Gained expertise in frameworks like Express.js for web application development."
    ],
    domain: "Software Development",
    technologies: ["JavaScript", "Node.js", "Express.js", "HTML", "CSS", "Bash"]
  },
  {
    id: 1,
    company: "Thoughtworks",
    role: "Grad Consultant",
    duration: "Oct. 2022 - May 2023",
    description: [
      "Developed and maintained UI components.",
      "Improved system performance.",
      "Worked with the Backstage framework.",
      "Implemented APIs using Java and Spring Boot.",
      "Collaborated on database management."
    ],
    domain: "FinTech",
    technologies: ["React", "Node.js", "TypeScript", "Spring Boot", "Java"]
  },
  {
    id: 2,
    company: "Thoughtworks",
    role: "Consultant",
    duration: "July 2023 - Oct. 2023",
    description: [
      "Spearheaded the development of multiple features within the team.",
      "Ensured alignment with business goals and technical requirements.",
      "Actively contributed to both UI and backend development using JavaScript, React, Next.js, Kotlin, Spring Boot, and Kafka.",
      "Monitored and debugged applications in production.",
      "Assisted clients in resolving critical issues and ensuring system stability.",
      "Collaborated with cross-functional teams to deliver high-quality software solutions.",
      "Utilized tools like GitHub Copilot to enhance productivity.",
      "Upskilled team members through mentorship and training sessions."
    ],
    domain: "FinTech / Lending Platform",
    technologies: ["Kotlin", "Spring Boot", "MongoDB", "Docker", "React", "Next.js", "Kafka", "Reactive programming", "JavaScript"]
  },
  {
    id: 3,
    company: "Thoughtworks",
    role: "Senior Consultant",
    duration: "Oct. 2023 - Present",
    description: [
      "Working closely with clients to develop multiple features within the team.",
      "Currently focusing on an e-commerce platform using TypeScript and React.",
      "Helping to implement a UI for an order management system by developing high-performance interfaces while maintaining clean code practices and unit testing."
    ],
    domain: "E-commerce",
    technologies: ["TypeScript", "React", "Redux"]
  }
];


export const projects: Project[] = [
  {
    id: 1,
    title: "Cluedo Game",
    description: "An interactive online version of the classic murder mystery game, Cluedo. Players must deduce the murderer, the weapon, and the location of the crime through strategic questioning and elimination. The game is built using JavaScript, Express, Node.js, and vanilla HTML/CSS for a seamless user experience.",
    technologies: ["JavaScript", "Express", "Node.js", "HTML", "CSS"],
    imageUrl: "/assets/cluedo.jpg",
    githubUrl: "https://github.com/step-8/cluedo-karamchand",
    liveUrl: "https://cluedo-karamchand.onrender.com/"
  },
    {
    id: 2,
    title: "Flight Status Board",
    description: "A mock React application that displays a flight status board. This project showcases skills in React, React Router, and user interface design, providing users with an intuitive way to check flight statuses in real-time.",
    technologies: ["TypeScript", "React", "HTML", "CSS"],
    imageUrl: "/assets/image.png",
    githubUrl: "https://github.com/azhar-beg/flight-status-board",
    liveUrl: "https://flight-status-board-1.netlify.app/"
  }
];

export const skills: Skill[] = [
  {
    name: "React",
    icon: "react",
    category: "frontend"
  },
  {
    name: "TypeScript",
    icon: "typescript",
    category: "frontend"
  },
  {
    name: "Node.js",
    icon: "nodejs",
    category: "backend"
  },
  {
    name: "Java",
    icon: "java",
    category: "backend"
  },
  {
    name: "MongoDB",
    icon: "mongodb",
    category: "database"
  },
  {
    name: "Docker",
    icon: "docker",
    category: "tools"
  },
  {
    name: "next.js",
    icon: "nextjs",
    category: "frontend"
  },
  {
    name: "Spring Boot",
    icon: "spring",
    category: "backend"
  },
  {
    name: "git",
    icon: "git",
    category: "tools"
  },
  {
    name: "Kafka",
    icon: "kafka",
    category: "backend"
  },
  {
    name: "Postgress",
    icon: "postgress",
    category: "database"
  }, 
  {
    name: "JavaScript",
    icon: "javascript",
    category: "frontend"
  },
  {
    name: "Kotlin",
    icon: "kotlin",
    category: "backend"
  },
  {
    name: "Express",
    icon: "express",
    category: "backend"
  },
  {
    name: "css",
    icon: "css",
    category: "frontend"
  },
  {
    name: "html",
    icon: "html",
    category: "frontend"
  },
  {
    name: "Bash",
    icon: "bash",
    category: "tools"
  }
];

export const socialLinks: SocialLink[] = [
  {
    platform: "GitHub",
    url: "https://github.com/azhar-beg",
    icon: "github"
  },
  {
    platform: "LinkedIn",
    url: "https://www.linkedin.com/in/azhar-beg-45626224a/",
    icon: "linkedin"
  },
  {
    platform: "Email",
    url: "mailto:azharbeg095@gmail.com",
    icon: "mail"
  }
];