import {
  Zap,
  Layout,
  Globe,
  User,
  Rocket,
  Clapperboard,
  Image as ImageIcon,
  Binary,
} from "lucide-react";

export const Dataset = [
  {
    title: "About me",
    text: "Wer ich bin und was mich antreibt.",
    icon: <User className="w-5 h-5" />,
    bg: "bg-orange-100",
    color: "text-orange-600",
  },
  {
    title: "Projekte",
    text: "Ein Einblick in meine Arbeit.",
    icon: <Rocket className="w-5 h-5" />,
    bg: "bg-blue-100",
    color: "text-blue-600",
  },
  {
    title: "Filme",
    text: "Meine Favoriten und Empfehlungen.",
    icon: <Clapperboard className="w-5 h-5" />,
    bg: "bg-rose-100",
    color: "text-rose-600",
  },
  {
    title: "Bilder",
    text: "Momente, die ich festgehalten habe.",
    icon: <ImageIcon className="w-5 h-5" />,
    bg: "bg-emerald-100",
    color: "text-emerald-600",
  },
  {
    title: "Algorithmen",
    text: "Code-Snippets und Logik-Rätsel.",
    icon: <Binary className="w-5 h-5" />,
    bg: "bg-violet-100",
    color: "text-violet-600",
  },
];

export const Aboutme = () => {
  return (
    <div className="p-6 rounded-2xl cursor-pointer bg-white/60 backdrop-blur-md shadow-sm border border-white/50 hover:shadow-md transition-shadow duration-300">
      <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600 mb-4">
        <Zap className="w-5 h-5" />
      </div>
      <h3 className="font-bold mb-1 text-slate-900">About me</h3>
      <p className="text-sm text-slate-600">Optimiert für V8 Engines.</p>
    </div>
  );
};

export const Movies = () => {
  return (
    <div className="p-6 rounded-2xl cursor-pointer bg-white/60 backdrop-blur-md shadow-sm border border-white/50 hover:shadow-md transition-shadow duration-300">
      <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center text-purple-600 mb-4">
        <Layout className="w-5 h-5" />
      </div>
      <h3 className="font-bold mb-1 text-slate-900">Filme</h3>
      <p className="text-sm text-slate-600">Mobile First Ansatz.</p>
    </div>
  );
};
export const Projects = () => {
  return (
    <div className="p-6 rounded-2xl cursor-pointer bg-white/60 backdrop-blur-md shadow-sm border border-white/50 hover:shadow-md transition-shadow duration-300">
      <div className="w-10 h-10 bg-teal-100 rounded-lg flex items-center justify-center text-teal-600 mb-4">
        <Globe className="w-5 h-5" />
      </div>
      <h3 className="font-bold mb-1 text-slate-900">Projekte</h3>
      <p className="text-sm text-slate-600">React 18 & Tailwind.</p>
    </div>
  );
};
