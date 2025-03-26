/* Personal Portfolio Configuration for Murilo Tozato - UX/UI Designer */

// To change portfolio colors globally go to the _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Replace with your custom animation if desired

// Splash Screen
const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000, // Set animation duration as per your animation
};

// Summary And Greeting Section
const illustration = {
  animated: true, // Set to false to use static SVG
};

const greeting = {
  username: "Murilo Tozato",
  title: "Hello! I'm Murilo",
  subTitle: emoji(
    "A passionate UX/UI Designer with experience in creating immersive digital experiences by blending creativity, gamification, and AI-driven insights."
  ),
  resumeLink: "https://docs.google.com/document/d/1gPEw2K5SaugieCeGg6WuUmQ_iXw8QHCYFk2NB9T0gik/edit?usp=sharing", // Replace with your resume link if available
  displayGreeting: true, // Set false to hide this section, defaults to true
};

// Social Media Links
const socialMediaLinks = {
  linkedin: "https://www.linkedin.com/in/murilotozato/",
  gmail: "muriloht123@gmail.com",
  medium: "https://medium.com/@muriloht123",
  github: "https://github.com/murilotozato",
  // Add additional links if desired (e.g., Twitter, Dribbble)
  display: true, // Set true to display this section, defaults to false
};

// Skills Section
const skillsSection = {
  title: "What I do",
  subTitle: "Creative UX/UI Designer focused on crafting engaging and user-centered digital experiences.",
  skills: [
    emoji("⚡ Designing intuitive and visually compelling user interfaces for web and mobile platforms"),
    emoji("⚡ Integrating gamification and other techniques to enhance user engagement and retention"),
    emoji("⚡ Leveraging foward-thinking insights to create adaptive and personalized user experiences"),
  ],
  /* Use the correct Font Awesome Classname to view your icon
     https://fontawesome.com/icons?d=gallery */
  softwareSkills: [
    {
      skillName: "Figma",
      fontAwesomeClassname: "fab fa-figma",
    },
    {
      skillName: "Adobe XD",
      imagePath: "adobe-xd-icon.png",
    },
    {
      skillName: "Sketch",
      fontAwesomeClassname: "fab fa-sketch",
    },
    {
      skillName: "HTML5",
      fontAwesomeClassname: "fab fa-html5",
    },
    {
      skillName: "CSS3",
      fontAwesomeClassname: "fab fa-css3-alt",
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js",
    },
    {
      skillName: "Automation Tools",
      fontAwesomeClassname: "fas fa-robot",
    },
  ],
  display: true, // Set false to hide this section, defaults to true
};

// Education Section
const educationInfo = {
  display: false, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "EBAC - Escola Britânica de Artes Criativas e Tecnologia",
      logo: require("./assets/images/ebacLogo.png"), // Replace with your institution logo
      subHeader: "Certificate in UX/UI Design",
      duration: "2022 - 2024",
      desc: "Intensive training in user-centered design, design thinking, and digital innovation.",
      descBullets: [
        "Mastered methodologies like Design Thinking and Double Diamond",
        "Developed hands-on projects integrating gamification and AI in design",
      ],
    },
    {
      schoolName: "SENAI",
      logo: require("./assets/images/senaiLogo.png"), // Replace with your institution logo
      subHeader: "Technical Training in Digital Design",
      duration: "2020",
      desc: "Gained foundational skills in digital design and technology.",
    },
  ],
};

// Tech Stack / Proficiency Section (Customized for UX/UI)
const techStack = {
  viewSkillBars: false, // Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Visual Design",
      progressPercentage: "97%",
    },
    {
      Stack: "Interaction Design",
      progressPercentage: "92%",
    },
    {
      Stack: "User Research",
      progressPercentage: "90%",
    },
  ],
  displayCodersrank: false, // Set true to display codersrank badges, defaults to false
};

// Work Experience Section
const workExperiences = {
  display: false, // Set it to true to show workExperiences Section
  experience: [
    {
      role: "UX/UI Designer",
      company: "CloudWalk",
      companylogo: require("./assets/images/facebookLogo.png"), // Add your CloudWalk logo or placeholder
      date: "June 2023 – Present",
      desc: "Designing engaging fintech experiences by integrating AI-driven insights and user-centered design practices to create seamless digital payment solutions.",
      descBullets: [
        "Developed intuitive interfaces that simplify complex financial interactions",
        "Leveraged user research and testing to drive design decisions",
      ],
    },
    {
      role: "UX/UI Designer",
      company: "Innovate Design Studio",
      companylogo: require("./assets/images/quoraLogo.png"), // Replace with a relevant logo
      date: "January 2021 – May 2023",
      desc: "Crafted responsive digital experiences and interactive prototypes for diverse clients, with a focus on gamification and AI integration.",
      descBullets: [
        "Conducted comprehensive user research to inform design strategies",
        "Implemented iterative design processes to enhance user engagement",
      ],
    },
    {
      role: "UX/UI Design Intern",
      company: "Creative Solutions",
      companylogo: require("./assets/images/airbnbLogo.png"), // Replace with a relevant logo
      date: "June 2020 – December 2020",
      desc: "Supported the design team in creating user interfaces and prototypes, gaining hands-on experience in digital product design.",
    },
  ],
};

// Open Source Section (Optional - can include your design contributions or projects)
const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: false // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Cases",
  subtitle: "Explore my design work",
  projects: [
    {
      image: "sumuppix.png", // Add the file "sumuppix.png" in src/assets/images/
      title: "SumUp & Pix - Facilitating Digital Payments",
      description: {
        Problem: "Simplify digital payment processes by integrating SumUp and Pix to reduce transaction friction and boost user trust.",
        Challenge: "Designing a secure yet user-friendly interface that streamlines complex payment flows while ensuring accessibility across multiple devices.",
        Results: "Delivered a seamless, intuitive payment experience that increased user confidence, reduced transaction errors, and enhanced overall accessibility."
      },
      link: "https://www.figma.com/design/id6ng2TdA8pqUM464MWNfQ/SumUP---Pix?node-id=21-2&t=lLGRMXPiXn74ZIx6-1"
    },
    {
      image: "gamifiedTest.png", // Add the file "gamifiedTest.png" in src/assets/images/
      title: "Gamified Vocational Test",
      description: {
        Problem: "Reimagine traditional career assessments to transform them into engaging, interactive journeys that truly resonate with users.",
        Challenge: "Infusing gamification elements into the test while preserving its evaluative integrity, ensuring that increased engagement doesn't compromise result accuracy.",
        Results: "Created an immersive and fun vocational test that boosted user engagement, improved retention, and provided actionable insights into career preferences."
      },
      link: "https://www.figma.com/design/41pGyT3sNUjGTbHlfxuDwV/Projeto-de-Aplicativo-Teste?node-id=51-2&t=lLGRMXPiXn74ZIx6-1"
    },
    {
      image: "aiBanking.png", // Add the file "aiBanking.png" in src/assets/images/
      title: "Innovative AI for Banking Apps",
      description: {
        Problem: "Transform traditional banking interfaces by integrating AI-driven personalization to create adaptive, user-friendly digital experiences.",
        Challenge: "Balancing advanced AI features with the need for simplicity, security, and an intuitive design that caters to a diverse user base.",
        Results: "Proposed a dynamic, AI-powered interface that streamlined complex banking interactions, enhanced personalization, and improved overall user satisfaction."
      },
      link: "https://app.uizard.io/p/54e03da9/overview"
    }
  ],
  display: true
};

// Achievement Section
const achievementSection = {
  title: emoji("Achievements And Certifications"),
  subtitle: "A showcase of my professional certifications, demonstrating my dedication to continuous learning and skill enhancement in UX/UI design.",
  achievementsCards: [
    {
      title: "[Certification Name 1]",  // Replace with your first certification name
      subtitle: "Certified by LinkedIn Learning",
      image: require("./assets/images/googleAssistantLogo.webp"),  // Path to the logo
      imageAlt: "LinkedIn Learning Logo",
      footerLink: [
        {
          name: "View Certificate",
          url: "[Credential URL 1]",  // Replace with your first certification URL
        },
      ],
    },
    {
      title: "[Certification Name 2]",  // Replace with your second certification name
      subtitle: "Certified by LinkedIn Learning",
      image: require("./assets/images/pwaLogo.webp"),
      imageAlt: "LinkedIn Learning Logo",
      footerLink: [
        {
          name: "View Certificate",
          url: "[Credential URL 2]",  // Replace with your second certification URL
        },
      ],
    },
    // Add more entries as needed for additional certifications
  ],
  display: false,  // Ensures the section is visible
};

// Blogs Section
const blogSection = {
  title: "Blogs",
  subtitle: "Sharing insights on UX/UI, design innovation, and the power of gamification.",
  displayMediumBlogs: "true", // Set true to display fetched Medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://medium.com/@muriloht123/my-journey-into-gamified-ux-ui-design-123456789",
      title: "My Journey into Gamified UX/UI Design",
      description: "Exploring the process of transforming traditional tests into engaging, interactive experiences.",
    },
    {
      url: "https://medium.com/@muriloht123/the-future-of-ai-in-digital-design-987654321",
      title: "The Future of AI in Digital Design",
      description: "How artificial intelligence is reshaping user experiences and design workflows.",
    },
  ],
  display: false, // Set false to hide this section, defaults to true
};

// Talks Section
const talkSection = {
  title: "Testimonials",
  subtitle: "What people say about me 💬",
  talks: [
    {
      quote: "I mentored Murilo during his first steps in the world of UX, and I can affirm that he is highly creative and possesses a strong critical sense. Not only does he quickly absorb knowledge, but he also constantly seeks new ways to optimize processes, making them more agile and efficient. I believe he has a brilliant future ahead!",
      name: "Yasmin",
      role: "Senior UX/UI Designer",
      profile_url: "https://www.linkedin.com/in/yasminlogcos/",
      image: "yasmin.jpg"  // Image file name
    },
    {
      quote: "Murilo Tozato was an unexpectedly great colleague with whom I had the honor of growing, developing professionally, and pursuing a career in the same field. He has a character shaped by challenges and an immense drive to grow and dedicate himself.",
      name: "Alexandre",
      role: "Graphic Design Artist",
      profile_url: "https://www.linkedin.com/in/alexandre-oliveira-fernandes-a420b9209/",
      image: "alexandre.jpg"  // Image file name
    }
  ],
  display: true
};

// Podcast Section
const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "Conversations about design, AI, and digital innovation.",
  podcast: [
    "https://anchor.fm/murilotozato-podcast/embed", // Replace with your podcast embed link
  ],
  display: false, // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Download my resume for detailed insights into my experience and skills.",
  display: true, // Set false to hide this section, defaults to true
};

// Contact Info
const contactInfo = {
  title: emoji("Reach out to me:"),
  subtitle: "Let’s create something amazing together!",
  number: "+55 41 99801-6114",
  email_address: "muriloht123@gmail.com",
};

// Twitter Section
const twitterDetails = {
  userName: "murilotozato", // Replace with your Twitter username without @
  display: false, // Set true to display this section, defaults to false
};

const isHireable = true; // Set true if you are looking for opportunities

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection,
};
