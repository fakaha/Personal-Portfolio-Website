import movieProject from "../assets/movieProject.webp";
import courseProject from "../assets/courseProject.webp";
import qurankuProject from "../assets/project4.webp";
import emporiumProject from "../assets/emporium-z.webp";
import apiProject from "../assets/projectapi1.webp";
import linkuProject from "../assets/sipendek.webp";
import akanaProject from "../assets/akana.webp";
import sagaraProject from "../assets/sagararental.webp";

export const projects = [
  {
    title: "Movie Website",
    category: "Front-End",
    description:
      "Movie website that lists and searches movies using a public API.",
    tech: ["Bootstrap", "JavaScript", "React"],
    url: "https://challenge-06-zulfa-fakaha.vercel.app/",
    image: movieProject,
    imageAlt: "Movie website interface",
  },
  {
    title: "Online Course Platform",
    category: "Front-End",
    description:
      "Online course website with buying and watching for its users, powered by a custom API.",
    note: "Built as the front-end lead for the final project of Independent Study Batch 5.",
    tech: ["Bootstrap", "JavaScript", "React"],
    url: "https://fpbinar-kel7.vercel.app/",
    image: courseProject,
    imageAlt: "Online course platform interface",
  },
  {
    title: "Quranku",
    category: "Front-End",
    description:
      "Quran reading website for its users, reading chapters through a public API.",
    tech: ["Tailwind CSS", "JavaScript", "React"],
    url: "https://quranku-tau.vercel.app/",
    image: qurankuProject,
    imageAlt: "Quran reading website interface",
  },
  {
    title: "Emporium-Z",
    category: "Front-End",
    description:
      "Store website with login, registration and a working cart, backed by a public API.",
    tech: ["Tailwind CSS", "JavaScript", "React", "Redux"],
    url: "https://emporium-z.vercel.app/",
    image: emporiumProject,
    imageAlt: "Store website interface",
  },
  {
    title: "E-Commerce Web API",
    category: "Back-End",
    description:
      "A small e-commerce API covering user registration, login, product and category management, and order management.",
    tech: ["TypeScript", "Node.js", "Express", "MongoDB", "Mongoose"],
    url: "https://sanberbe60-zul.vercel.app/docs/#/",
    image: apiProject,
    imageAlt: "API documentation screen",
  },
  {
    title: "Sipendek",
    category: "Full-Stack",
    description: "A straightforward link shortener: paste a long URL, get a short one back.",
    tech: ["JavaScript", "Node.js", "Express", "React", "MongoDB", "Mongoose"],
    url: "https://lin-ku.vercel.app/",
    image: linkuProject,
    imageAlt: "Link shortener interface",
  },
  {
    title: "Akana Jawara Indonesia",
    category: "Full-Stack",
    description:
      "Promotional website for a Yogyakarta travel agency: tour schedules, ticket booking, destinations and tourism events across Indonesia, plus a travel article blog.",
    tech: ["PHP", "Laravel", "Bootstrap"],
    url: "https://akanajawaraindonesia.com/",
    image: akanaProject,
    imageAlt: "Akana Jawara Indonesia website",
  },
  {
    title: "Sagara Rental",
    category: "Full-Stack",
    description:
      "Camping equipment rental with online payments through Xendit and no renter account needed, plus an admin page for owners to manage equipment and offline loans.",
    tech: ["JavaScript", "Tailwind CSS", "Express", "React", "MongoDB", "Xendit"],
    url: "https://sagara-rental.vercel.app/",
    image: sagaraProject,
    imageAlt: "Camping equipment rental website",
  },
];