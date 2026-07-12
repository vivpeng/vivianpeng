export const projects = [
  {
    id: 1,
    title: "Motion",
    teaser: "An organizer made to assist non-profits in managing volunteers and shifts. 1st place winner in the beginner stream at UBC WiCS's YouCode Hackathon!",
    description: [
        {
            heading: "Inspiration",
            text: "Drawing from a past internship experience with a non-profit, one teammate recalled that coordinating volunteers who make non-profits possible is a mess of spreadsheets, outdated and unspecialized software, and expensive tools locked behind paywalls. Upon further research, we found that existing volunteer management tools often additionally require reaching out to a sales professional for software access."
        },
        {
            heading: "What it does",
            text: `Motion is an accessible, user-friendly website designed for nonprofit organizations to manage volunteers and positions for events and community initiatives, with a simple drag-and-drop interface. It includes functionality to add volunteers based on availability, skills, and contact info, as well as define volunteer positions based on schedules, volunteer capacity, and required skills. Other features include a "view all" functionality that provides an overview of all positions and volunteers, an auto-assign feature that automatically assigns volunteers to positions based on skills and availability, and a search bar that allows users to search volunteer positions. Additionally, it has a sign-in which saves user accounts using their email.`
        },
        {
            heading: "How we built it",
            text: "This project uses HTML, CSS, and JavaScript. Accounts are saved on Supabase (PostgreSQL database)."
        },
        {
            heading: "Fun fact",
            text: "Motion won 1st place in the beginner stream at UBC WiCS's YouCode Hackathon!"
        }
    ],
    tech: ["JavaScript", "HTML", "CSS", "Supabase"],
    images: ["/images/motion/motion-1.png", "/images/motion/motion-2.png", "/images/motion/motion-3.png", "/images/motion/motion-4.png", "/images/motion/motion-5.png", "/images/motion/motion-6.png", "/images/motion/motion-7.png"],
    github: "https://github.com/vivpeng/youcode-2026",
    demo: "https://youtu.be/p8Kdu08og0k",
    website: "https://vivpeng.github.io/youcode-2026/",
  },
  {
    id: 2,
    title: "Exchangify",
    description:
      "Short description of what this project does and why it's interesting.",
    tech: ["Python"],
    images: ["/images/project2.png"],
    github: "",
    demo: "",
  },
  {
    id: 3,
    title: "Vancouver Cafe Hopper",
    description:
      "Short description of what this project does and why it's interesting.",
    tech: ["Java", "JSON"],
    images: ["/images/project3.png"],
    github: "https://github.com/vivpeng/cafe-hopper",
    demo: "",
  },
  {
    id: 4,
    title: "Portfolio Website",
    description:
      "Short description of what this project does and why it's interesting.",
    tech: ["React", "Tailwind CSS", "JavaScript", "HTML"],
    images: ["/images/project4.png"],
    github: "",
    demo: "",
  },
  {
    id: 5,
    title: "Toffee's Quest",
    description:
      "Short description of what this project does and why it's interesting.",
    tech: ["Java"],
    images: ["/images/project5.png"],
    github: "https://github.com/vivpeng/toffees-quest",
    demo: "",
  },
];