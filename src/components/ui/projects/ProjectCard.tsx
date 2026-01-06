import Image from "next/image";
import Link from "next/link";
import { Github, Calendar, Film, Gitlab } from "lucide-react";
import { Project } from "@/src/data/projects";
import {
  IMAGE_ROUTES,
  OUTER_ROUTES,
} from "@/src/features/routing/ProjectImageRoutes";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="group relative flex flex-col overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm transition-all hover:shadow-md dark:border-slate-800 dark:bg-slate-900/50">
      <div className="relative aspect-video w-full overflow-hidden bg-slate-100 dark:bg-slate-800">
        {project.imageUrl ? (
          <Image
            src={project.imageUrl}
            alt={project.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        ) : (
          <div className="flex h-full items-center justify-center text-slate-400">
            Kein Bild
          </div>
        )}
      </div>

      <div className="flex flex-1 flex-col p-6">
        <div className="mb-4 flex items-center justify-between">
          <h3 className="text-xl font-semibold text-slate-900 dark:text-slate-100">
            {project.title}
          </h3>
          <span className="flex items-center gap-1 text-xs font-medium text-slate-500 dark:text-slate-400">
            <Calendar className="h-3 w-3" />
            {project.date}
          </span>
        </div>

        <p className="mb-6 flex-grow text-sm leading-relaxed text-slate-600 dark:text-slate-400">
          {project.description}
        </p>

        <div className="mb-6 flex flex-wrap gap-2">
          {project.techStack.map((tech) => (
            <span
              key={tech}
              className="rounded-full bg-slate-100 px-2.5 py-0.5 text-xs font-medium text-slate-600 dark:bg-slate-800 dark:text-slate-300"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="mt-auto flex items-center gap-4 border-t border-slate-100 pt-4 dark:border-slate-800">
          {project.videoLink && (
            <Link
              href={project.videoLink}
              target="_blank"
              className="flex items-center gap-2 text-sm font-medium text-blue-600 hover:text-blue-700 dark:text-blue-400"
            >
              <Film className="h-4 w-4" />
              Video
            </Link>
          )}
          {project.githubLink && (
            <Link
              href={project.githubLink}
              target="_blank"
              className="flex items-center gap-2 text-sm font-medium text-slate-600 hover:text-slate-900 dark:text-slate-400"
            >
              <Github className="h-4 w-4" />
              Code
            </Link>
          )}
          {project.gitlabLink && (
            <Link
              href={project.gitlabLink}
              target="_blank"
              className="flex items-center gap-2 text-sm font-medium text-slate-600 hover:text-slate-900 dark:text-slate-400"
            >
              <Gitlab className="h-4 w-4" />
              Code
            </Link>
          )}

          {project.universityLogo && (
            <div className="ml-auto" title="Hochschulprojekt">
              <Image
                src={IMAGE_ROUTES.HTWK}
                alt="Hochschule Logo"
                width={10}
                height={10}
                className="h-8 w-auto object-contain opacity-80 grayscale transition-all hover:scale-110 hover:opacity-100 hover:grayscale-0 dark:invert"
              />
            </div>
          )}
        </div>
      </div>
    </article>
  );
}
