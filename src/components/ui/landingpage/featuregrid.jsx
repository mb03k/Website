import {
  User,
  Rocket,
  Clapperboard,
  Image as ImageIcon,
  Binary,
} from "lucide-react";
import { ROUTES } from "../../../routes/routes";

export const Dataset = [
  {
    title: "About me",
    text: "Hallo, Du!",
    icon: <User className="w-5 h-5" />,
    bg: "bg-orange-100",
    color: "text-orange-600",
    link: ROUTES.ABOUTME,
  },
  {
    title: "Projekte",
    text: "Ein Einblick in meine Arbeit",
    icon: <Rocket className="w-5 h-5" />,
    bg: "bg-blue-100",
    color: "text-blue-600",
    link: ROUTES.PROJECTS,
  },
  {
    title: "Filme",
    text: "Was man so schaut...",
    icon: <Clapperboard className="w-5 h-5" />,
    bg: "bg-rose-100",
    color: "text-rose-600",
    link: ROUTES.MOVIES,
  },
  {
    title: "Bilder",
    text: "Moments of joy",
    icon: <ImageIcon className="w-5 h-5" />,
    bg: "bg-emerald-100",
    color: "text-emerald-600",
    link: ROUTES.IMAGES,
  },
  {
    title: "Algorithmen",
    text: "Visualisierung von Ablaufen",
    icon: <Binary className="w-5 h-5" />,
    bg: "bg-violet-100",
    color: "text-violet-600",
    link: ROUTES.ALGORITHMEN,
  },
];
