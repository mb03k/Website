import { Github, Gitlab, ChessPawn, House } from "lucide-react";
import { OUTER_ROUTES, ROUTES } from "../../routes/routes";
import { Link } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";

const Header = () => {
  return (
    <nav className="fixed top-0 w-full bg-white/40 dark:bg-slate-900/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-500 z-50 transition-colors duration-300">
      <div className="container mx-auto px-6 h-16 flex items-center justify-between relative">
        <Link
          to={ROUTES.HOME}
          className="no-underline group text-xl font-bold text-blue-600 dark:text-blue-400 transition-all duration-300 hover:text-blue-800 dark:hover:text-blue-300 hover:scale-105"
        >
          <div className="p-4 -m-4 cursor-pointer transition-transform active:scale-95 flex items-center gap-2">
            <House className="w-6 h-6 transition-transform duration-300 group-hover:-rotate-12" />
            <span className="hidden sm:inline">Home</span>
          </div>
        </Link>

        <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <Link
            to={ROUTES.PORTFOLIO}
            className="bg-slate-900 text-white dark:bg-slate-100 dark:text-slate-900 
                       px-6 py-2 rounded-full text-sm font-medium 
                       hover:bg-slate-700 dark:hover:bg-white 
                       transition-all shadow-lg shadow-slate-200 dark:shadow-none"
          >
            Portfolio
          </Link>
        </div>

        <div className="flex items-center gap-2 sm:gap-4 text-slate-500 dark:text-slate-400">
          <a
            href={OUTER_ROUTES.CHESSCOM}
            target="_blank"
            rel="noreferrer"
            className="p-2 rounded-full transition-all duration-300 
                       hover:bg-green-100 hover:text-green-600 
                       dark:hover:bg-green-500/20 dark:hover:text-green-400 
                       hover:scale-110"
          >
            <ChessPawn className="w-6 h-6 sm:w-7 sm:h-7" />
          </a>

          <a
            href={OUTER_ROUTES.GITLAB}
            target="_blank"
            rel="noreferrer"
            className="p-2 rounded-full transition-all duration-300 
                       hover:bg-orange-100 hover:text-orange-600 
                       dark:hover:bg-orange-500/20 dark:hover:text-orange-400 
                       hover:scale-110"
          >
            <Gitlab className="w-6 h-6 sm:w-7 sm:h-7" />
          </a>

          <a
            href={OUTER_ROUTES.GITHUB}
            target="_blank"
            rel="noreferrer"
            className="p-2 rounded-full transition-all duration-300 
                       hover:bg-stone-200 hover:text-stone-600 
                       dark:hover:bg-slate-700 dark:hover:text-white 
                       hover:scale-110"
          >
            <Github className="w-6 h-6 sm:w-7 sm:h-7" />
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Header;
