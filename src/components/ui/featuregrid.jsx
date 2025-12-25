import {
  User,
  Rocket,
  Clapperboard,
  Image as ImageIcon,
  Binary,
  TextCursorInput,
} from "lucide-react";

import { ROUTES } from "@/src/features/routing/routes"

export const Dataset = [
  {
    title: "About me",
    text: "Hallo, Du!",
    icon: <User className="h-5 w-5" />,
    bg: "bg-orange-100",
    color: "text-orange-600",
    link: ROUTES.ABOUTME,
  },
  {
    title: "Projekte",
    text: "Ein Einblick in meine Arbeit",
    icon: <Rocket className="h-5 w-5" />,
    bg: "bg-blue-100",
    color: "text-blue-600",
    link: ROUTES.PROJECTS,
  },
  {
    title: "Filme",
    text: "Was man so schaut...",
    icon: <Clapperboard className="h-5 w-5" />,
    bg: "bg-rose-100",
    color: "text-rose-600",
    link: ROUTES.MOVIES,
  },
  {
    title: "Bilder",
    text: "Moments of joy",
    icon: <ImageIcon className="h-5 w-5" />,
    bg: "bg-emerald-100",
    color: "text-emerald-600",
    link: ROUTES.IMAGES,
  },
  {
    title: "Algorithmen",
    text: "Visualisierung von Ablaufen",
    icon: <Binary className="h-5 w-5" />,
    bg: "bg-violet-100",
    color: "text-violet-600",
    link: ROUTES.ALGORITHMEN,
  },
  {
    title: "Filmvorschlag",
    text: "Gib mir einen Filmvorschlag!",
    icon: <TextCursorInput className="h-5 w-5" />,
    bg: "bg-violet-100",
    color: "text-violet-600",
    link: ROUTES.MOVIEPROPOSAL,
  },
];
