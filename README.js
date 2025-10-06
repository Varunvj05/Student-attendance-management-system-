/* Change this file to get your Personal Portfolio */

const greeting = {
  /* Your Summary And Greeting Section */
  title: "Hi all, I'm Varun J",
  subTitle: emoji("A passionate Frontend Developer 🚀 | HTML, CSS, JavaScript"),
  resumeLink: "https://drive.google.com/your-resume-link"
};

const socialMediaLinks = {
  github: "https://github.com/Varunvj05",
  linkedin: "https://www.linkedin.com/in/varun-j-42111414/",
  gmail: "varunroshanvj@gmail.com",
  facebook: "https://www.facebook.com/varun.roshanvj"
};

const skillsSection = {
  title: "What I do",
  skills: [
    emoji("⚡ Build interactive websites using vanilla JS, HTML, CSS"),
    emoji("⚡ Responsive web design with Flexbox and Grid"),
    emoji("⚡ DOM manipulation and event handling"),
  ],
};

const techStack = {
  viewSkillBars: true,
  experience: [
    { Stack: "HTML", progressPercentage: "90%" },
    { Stack: "CSS", progressPercentage: "85%" },
    { Stack: "JavaScript", progressPercentage: "80%" }
  ]
};

const workExperience = [
  {
    role: "Frontend Developer",
    company: "Self Projects",
    date: "2024 – Present",
    desc: "Building and deploying responsive web applications with vanilla JS, HTML, and CSS"
  }
];

const openSource = {
  githubConvertedToken: process.env.REACT_APP_GITHUB_TOKEN,
  githubUserName: "Varunvj05"
};

const bigProjects = [
  {
    projectName: "Student Attendance Management System",
    projectDesc: "A web application to manage student attendance, track history, and maintain student records. Built with HTML, CSS, and JavaScript, using local storage for data persistence.",
    footerLink: [
      { name: "Visit Project", url: "https://github.com/Varunvj05/Student-attendance-management-system-" }
    ]
  }
];

const achievementSection = {
  title: "Achievements & Certifications 🏆",
  achievementsCards: [
    {
      title: "Frontend Development",
      subtitle: "Completed multiple personal projects using HTML, CSS, and JavaScript",
      image: "https://img.icons8.com/color/96/000000/coding.png"
    }
  ]
};

const blogSection = {
  displayMediumBlogs: false,
};

const contactInfo = {
  title: "Contact Me",
  subtitle: "Feel free to reach out via email or LinkedIn",
  email_address: "varunroshanvj@gmail.com",
};

const twitterDetails = {
  userName: "YourTwitterHandle" // o
