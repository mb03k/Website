import {
  IMAGE_ROUTES,
  OUTER_ROUTES,
} from "@/src/features/routing/ProjectImageRoutes";

export interface Project {
  title: string;
  description: string;
  imageUrl: string;
  techStack: string[];
  liveLink?: string;
  repoLink?: string;
  date: string;
  universityLogo?: string;
}

export const PROJECTS: Project[] = [
  {
    title: "Softwareprojekt I und II",
    description:
      "Ein umfassendes Admin-Dashboard zur Verwaltung von Produkten und Bestellungen.",
    imageUrl: IMAGE_ROUTES.SWP,
    techStack: [
      "OpenWebUI",
      "Svelte",
      "Python",
      "Docker",
      "Supabase",
      "FastAPI",
      "Playwright",
      "Git",
    ],
    liveLink: "https://demo.de",
    repoLink: OUTER_ROUTES.SWP,
    date: "2025",
    universityLogo: "/logos/logo_htwk.png",
  },
  {
    title: "Hexabot",
    description:
      "Interaktive Visualisierung von Sortieralgorithmen. Nutzer können die Geschwindigkeit steuern und Schritte einzeln durchgehen.",
    imageUrl: IMAGE_ROUTES.HEXABOT,
    techStack: ["React", "Zustand", "Framer Motion"],
    repoLink: OUTER_ROUTES.HEXABOT,
    date: "2025",
  },
  {
    title: "Website React",
    description:
      "Interaktive Visualisierung von Sortieralgorithmen. Nutzer können die Geschwindigkeit steuern und Schritte einzeln durchgehen.",
    imageUrl: IMAGE_ROUTES.WEBSITE_REACT,
    techStack: ["React", "Zustand", "Framer Motion"],
    repoLink: OUTER_ROUTES.WEBSITE_REACT,
    date: "2025",
  },
  {
    title: "Website PHP",
    description:
      "Interaktive Visualisierung von Sortieralgorithmen. Nutzer können die Geschwindigkeit steuern und Schritte einzeln durchgehen.",
    imageUrl: IMAGE_ROUTES.WEBSITE_PHP,
    techStack: ["React", "Zustand", "Framer Motion"],
    repoLink: OUTER_ROUTES.WEBSITE_PHP,
    date: "2025",
  },
  {
    title: "Image Mover",
    description:
      "Interaktive Visualisierung von Sortieralgorithmen. Nutzer können die Geschwindigkeit steuern und Schritte einzeln durchgehen.",
    imageUrl: IMAGE_ROUTES.IMAGE_MOVER,
    techStack: ["Python"],
    repoLink: OUTER_ROUTES.IMAGE_MOVER,
    date: "2025",
  },
  {
    title: "Bluetooth Audio Controller",
    description:
      "Interaktive Visualisierung von Sortieralgorithmen. Nutzer können die Geschwindigkeit steuern und Schritte einzeln durchgehen.",
    imageUrl: IMAGE_ROUTES.BLUETOOTH_AUDIO_CONTROLLER,
    techStack: ["C"],
    date: "2025",
  },
  {
    title: "Binähruhr",
    description:
      "Interaktive Visualisierung von Sortieralgorithmen. Nutzer können die Geschwindigkeit steuern und Schritte einzeln durchgehen.",
    imageUrl: IMAGE_ROUTES.BINARY_CLOCK,
    techStack: ["React", "Zustand", "Framer Motion"],
    date: "2024",
  },
  {
    title: "Schach",
    description: "LIEBLINGSspiel",
    imageUrl: IMAGE_ROUTES.CHESS,
    techStack: ["React", "Zustand", "Framer Motion"],
    repoLink: OUTER_ROUTES.CHESS,
    date: "2024",
  },
  {
    title: "Dame",
    description:
      "Interaktive Visualisierung von Sortieralgorithmen. Nutzer können die Geschwindigkeit steuern und Schritte einzeln durchgehen.",
    imageUrl: IMAGE_ROUTES.DAME,
    techStack: ["React", "Zustand", "Framer Motion"],
    repoLink: OUTER_ROUTES.DAME,
    date: "2024",
  },
  {
    title: "Taschenrechner",
    description:
      "Interaktive Visualisierung von Sortieralgorithmen. Nutzer können die Geschwindigkeit steuern und Schritte einzeln durchgehen.",
    imageUrl: IMAGE_ROUTES.CALCULATOR,
    techStack: ["React", "Zustand", "Framer Motion"],
    repoLink: OUTER_ROUTES.CALCULATOR,
    date: "2024",
  },
  {
    title: "Würfel",
    description:
      "Interaktive Visualisierung von Sortieralgorithmen. Nutzer können die Geschwindigkeit steuern und Schritte einzeln durchgehen.",
    imageUrl: IMAGE_ROUTES.WUERFEL,
    techStack: ["React", "Zustand", "Framer Motion"],
    date: "2024",
  },
  {
    title: "Drone",
    description:
      "Interaktive Visualisierung von Sortieralgorithmen. Nutzer können die Geschwindigkeit steuern und Schritte einzeln durchgehen.",
    imageUrl: IMAGE_ROUTES.DRONE,
    techStack: ["React", "Zustand", "Framer Motion"],
    date: "2024",
  },
  {
    title: "Multimengen",
    description:
      "Interaktive Visualisierung von Sortieralgorithmen. Nutzer können die Geschwindigkeit steuern und Schritte einzeln durchgehen.",
    imageUrl: IMAGE_ROUTES.MULTIMENGEN,
    techStack: ["React", "Zustand", "Framer Motion"],
    date: "2024",
  },
];
