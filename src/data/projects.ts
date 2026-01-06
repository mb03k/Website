import {
  IMAGE_ROUTES,
  OUTER_ROUTES,
} from "@/src/features/routing/ProjectImageRoutes";

export interface Project {
  title: string;
  description: string;
  imageUrl: string;
  techStack: string[];
  videoLink?: string;
  githubLink?: string;
  gitlabLink?: string;
  date: string;
  universityLogo?: string;
}

export const PROJECTS: Project[] = [
  {
    title: "Softwareprojekt I und II",
    description:
      "Entwicklung einer Betreeungsintelligenz (HauKI) für Rechtliche Betreuer",
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
    videoLink:
      "https://drive.google.com/file/d/1tvg1roc18wBTk7I7Sz_bWQQqQjhZ4vK4/view",
    gitlabLink: OUTER_ROUTES.SWP,
    date: "2025",
    universityLogo: IMAGE_ROUTES.HTWK,
  },
  {
    title: "Hexabot",
    description:
      "Ein sechsbeiniger Roboter der autonom via LiDAR-Scanner zu einer vordefinierten Position läuft. Entwicklung unter dem Modul Mobile Robotik (C010)",
    imageUrl: IMAGE_ROUTES.HEXABOT,
    techStack: ["MicroPython", "Raspberry 5", "Servo2040", "Docker", "LiDAR"],
    gitlabLink: OUTER_ROUTES.HEXABOT,
    date: "2025",
    universityLogo: IMAGE_ROUTES.HTWK,
  },
  {
    title: "Website React",
    description:
      "Die Entwicklung einer modernen Website mit Fokus auf leichter Skalierbarkeit und Benutzerfreundlichkeit",
    imageUrl: IMAGE_ROUTES.WEBSITE_REACT,
    techStack: [
      "React",
      "TypeScript",
      "Docker",
      "Cloudflare",
      "Tailwind",
      "TrueNAS",
    ],
    githubLink: OUTER_ROUTES.WEBSITE_REACT,
    date: "2025",
  },
  {
    title: "Website PHP",
    description: "Die erste Entwicklung einer größeren Website für Bewerbungen",
    imageUrl: IMAGE_ROUTES.WEBSITE_PHP,
    techStack: ["PHP", "Javascript", "CSS", "Bootstrap"],
    githubLink: OUTER_ROUTES.WEBSITE_PHP,
    date: "2025",
  },
  {
    title: "Homeserver",
    description:
      "Ein persönliches Projekt, digitale Freiheit nach hause zu bringen. Websitehosting, Mediaserver sowie VSC-Host",
    imageUrl: IMAGE_ROUTES.HOMESERVER,
    techStack: ["DXP2800", "Docker", "Nginx"],
    date: "2025",
  },
  {
    title: "Image Mover",
    description:
      "Lernen von Python anhand einer simplen Idee: Bilder aus einem Ordner in einen anderen kopieren",
    imageUrl: IMAGE_ROUTES.IMAGE_MOVER,
    techStack: ["Python", "Bash"],
    githubLink: OUTER_ROUTES.IMAGE_MOVER,
    date: "2025",
  },
  {
    title: "Bluetooth Audio Controller",
    description:
      "Ein Controller um per Button die Handylautstärke für Musik zu kontrollieren",
    imageUrl: IMAGE_ROUTES.BLUETOOTH_AUDIO_CONTROLLER,
    techStack: ["C", "C++", "ESP32", "Bluetooth Low Energy - BLE"],
    date: "2025",
  },
  {
    title: "Binähruhr",
    description:
      "Entwicklung einer Uhr im Zuge des Moduls Systemnahe Programmierung - mit individuell gefräster Platine und Software",
    imageUrl: IMAGE_ROUTES.BINARY_CLOCK,
    techStack: ["C", "C++", "ATMega48", "KiCad"],
    date: "2024",
    universityLogo: IMAGE_ROUTES.HTWK,
  },
  {
    title: "Schach",
    description:
      "Mein absolutes Lieblingsspiel nachentwickeln. Stehengeblieben, mit Planung auf erneute Umsetzung",
    imageUrl: IMAGE_ROUTES.CHESS,
    techStack: ["Java"],
    githubLink: OUTER_ROUTES.CHESS,
    date: "2024",
  },
  {
    title: "Dame",
    description:
      "Abschlussprojekt für das Modul Anwendungsorientierte Programmierung II",
    imageUrl: IMAGE_ROUTES.DAME,
    techStack: ["Java"],
    githubLink: OUTER_ROUTES.DAME,
    date: "2024",
    universityLogo: OUTER_ROUTES.HTWK,
  },
  {
    title: "Taschenrechner",
    description:
      "Ein rudimentäres Projekt um ein mal einen Taschenrechner gebaut zu haben",
    imageUrl: IMAGE_ROUTES.CALCULATOR,
    techStack: ["Java"],
    githubLink: IMAGE_ROUTES.CALCULATOR,
    date: "2024",
  },
  {
    title: "Würfel",
    description: "Ein digitaler Würfel, im Modul Hardwarepraktikum II ",
    imageUrl: IMAGE_ROUTES.WUERFEL,
    techStack: ["Assembly", "C++"],
    date: "2024",
    universityLogo: IMAGE_ROUTES.HTWK,
  },
];
