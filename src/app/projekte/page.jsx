import { PROJECTS } from "@/src/data/projects";
import ProjectCard from "@/src/components/ui/projects/ProjectCard";
import BackgroundBlobs from "@/src/components/ui/BackgroundBlobs";
import Link from "next/link";
import { ExternalLink, Github } from "lucide-react";
import Image from "next/image";

export const metadata = {
  title: "Projekte | Matthes",
  description: "Ausgewählte Arbeiten und Software-Projekte.",
};

export default function Projects() {
  return (
    <main className="relative min-h-screen px-6 py-24 md:py-32">
      <div className="fixed inset-0 -z-10 opacity-30">
        <BackgroundBlobs />
      </div>

      <div className="container mx-auto max-w-6xl">
        <div className="mb-16 max-w-2xl">
          <h1 className="mb-4 text-4xl font-bold tracking-tight text-slate-900 dark:text-white md:text-5xl">
            Projekte
          </h1>
          <p className="text-lg text-slate-600 dark:text-slate-400">
            Eine Sammlung meiner privaten und beruflichen Software-Projekte.
            Fokus auf skalierbare Architektur.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {PROJECTS.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </main>
  );
}
