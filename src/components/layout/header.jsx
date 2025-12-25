'use client';

import { Github, Gitlab, ChessPawn, House } from "lucide-react";
import { OUTER_ROUTES, ROUTES } from "@/src/features/routing/routes";
import Link from "next/link";
import ThemeToggle from "./ThemeToggle";
import { useRouter } from "next/navigation";
import { ArrowLeft } from "lucide-react";

const Header = () => {
  const router = useRouter();
  return (
    <nav className="fixed top-0 z-50 w-full border-b border-slate-200 bg-white/40 backdrop-blur-md transition-colors duration-300 dark:border-slate-500 dark:bg-slate-900/80">
      <div className="container relative mx-auto flex h-16 items-center justify-between px-6">
        {/*
            using router.back instead of button enables going back to the same y-achsis on the page
            but brings the bug with it that it only goes one page back
            e.g.:
            'home' -> 'movies' -> 'portfolio'. pressing 'home' brings you back to 'movies' 
         */}
        <button
          onClick={() => router.back()}
          className="group text-xl font-bold text-blue-600 no-underline transition-all duration-300 hover:scale-105 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300"
        >
          <div className="-m-4 flex cursor-pointer items-center gap-2 p-4 transition-transform active:scale-95">
            <House className="h-6 w-6 transition-transform duration-300 group-hover:-rotate-12" />
            <span className="hidden sm:inline">Home</span>
          </div>
        </button>

        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform">
          <Link
            href={ROUTES.PORTFOLIO}
            className="rounded-full bg-slate-900 px-6 py-2 text-sm font-medium text-white shadow-lg shadow-slate-200 transition-all hover:bg-slate-700 dark:bg-slate-100 dark:text-slate-900 dark:shadow-none dark:hover:bg-white"
          >
            Portfolio
          </Link>
        </div>

        <div className="flex items-center gap-2 text-slate-500 sm:gap-4 dark:text-slate-400">
          <a
            href={OUTER_ROUTES.CHESSCOM}
            target="_blank"
            rel="noreferrer"
            className="transition-all hover:scale-110 hover:text-green-600 dark:hover:text-green-400"
          >
            <ChessPawn className="h-6 w-6 sm:h-7 sm:w-7" />
          </a>

          <a
            href={OUTER_ROUTES.GITLAB}
            target="_blank"
            rel="noreferrer"
            className="transition-all hover:scale-110 hover:text-orange-600 dark:hover:text-orange-400"
          >
            <Gitlab className="h-6 w-6 sm:h-7 sm:w-7" />
          </a>

          <a
            href={OUTER_ROUTES.GITHUB}
            target="_blank"
            rel="noreferrer"
            className="transition-all hover:scale-110 hover:text-stone-600 dark:hover:text-white"
          >
            <Github className="h-6 w-6 sm:h-7 sm:w-7" />
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Header;
