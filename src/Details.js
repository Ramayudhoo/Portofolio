// Enter all your detials in this file
// Logo images
import logogradient from "./assets/logo.svg";
import logo from "./assets/logo2.svg";
// Profile Image
import profile from "./assets/Profile-circle.png";
// Tech stack images
import html from "./assets/techstack/html.png";
import css from "./assets/techstack/css.png";
import js from "./assets/techstack/js.png";
import react from "./assets/techstack/react.png";
import redux from "./assets/techstack/redux.png";
import tailwind from "./assets/techstack/tailwind.png";
import bootstrap from "./assets/techstack/bootstrap.png";
import vscode from "./assets/techstack/vscode.png";
import github from "./assets/techstack/github.png";
import npm from "./assets/techstack/npm.png";
import figma from "./assets/techstack/figma.png";
// Porject Images
import projectImage1 from "./assets/projects/project1.jpg";
import projectImage2 from "./assets/projects/project2.jpg";

// Logos
export const logos = {
  logogradient: logogradient,
  logo: logo,
};

// Enter your Personal Details here
export const personalDetails = {
  name: "Rama Cahaya Yudhoyono",
  tagline: "I Looking for opportunities",
  img: profile,
  about: `Hello! I’m Rama Cahaya Yudhoyono, a fresh graduate passionate about technology and software development. I recently graduated with a degree in Information System from University Gunadarma, where I developed a strong foundation in both frontend and backend development. Throughout my academic journey, I worked on various projects, including mobile applications and web-based solutions, and I am excited to bring these skills into the professional world.

As a developer, I thrive on solving problems and learning new technologies. I specialize in React Native, JavaScript, and React for building user-friendly applications. I’m also familiar with tools like Firebase, Node.js, and Redux for creating scalable solutions.

Although I am new to the professional field, my passion for coding and commitment to continuous learning drive me to stay updated with the latest trends and best practices in software development. I am eager to collaborate on impactful projects and contribute to creating efficient, innovative solutions.

Feel free to connect with me. I am always open to new opportunities and collaborations!`,
};

// Enter your Social Media URLs here
export const socialMediaUrl = {
  linkdein: "https://www.linkedin.com/in/ramayudhoo/",
  github: "https://www.github.com/Ramayudhoo",
  twitter: "https://twitter.com/",
  instagram: "https://www.instagram.com/Ramayudhoo",
};

// Enter your Education Details here
export const eduDetails = [
  {
    Position: "Bachelor in Information System ",
    Company: "University Gunadarma",
    Location: "Depok",
    Type: "Graduate",
    Duration: "Aug 2020 - Sept 2024",
  },
  {
    Position: "Social ",
    Company: `MAN 2 Jakarta`,
    Location: "Ciracas",
    Type: "Graduate",
    Duration: "2018 - 2020 ",
  },
];

// Tech Stack and Tools
export const techStackDetails = {
  html: html,
  css: css,
  js: js,
  react: react,
  redux: redux,
  tailwind: tailwind,
  bootstrap: bootstrap,
  vscode: vscode,
  npm: npm,
  github: github,
  figma: figma,
};

// Enter your Project Details here
export const projectDetails = [
  {
    title: "Point Of Sale (POS)",
    image: projectImage1,
    description: `A mobile and web-based Point of Sale system that simplifies transactions, product management, and daily revenue reporting. Integrated with Midtrans payment gateway and Firebase for seamless operations.`,
    techstack: "React Native, Next.js, Firebase, Midtrans, Redux",
    githubLink: "https://github.com/Ramayudhoo/pos-coba-solo",
  },
  {
    title: "Web Wedding from Workshop at university",
    image: projectImage2,
    description: `A wedding organizer web application built during a campus workshop. The platform allows users to plan, manage, and organize weddings with features such as event scheduling, vendor management, and guest list management.`,
    techstack: "PHP, CodeIgniter, Bootstrap, MySQL",
    githubLink: "https://github.com/Ramayudhoo/wedding_jwp",
  },
 
];

// Enter your Contact Details here
export const contactDetails = {
  email: "Yudoyono7@gmail.com",
};
