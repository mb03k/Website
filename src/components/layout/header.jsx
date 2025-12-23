import React from "react";
import { Layout, Github, Gitlab, ChessPawn, House } from "lucide-react";
import { OUTER_ROUTES, ROUTES } from "../../routes/routes";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md border-b border-slate-200 z-50">
      <div className="container mx-auto px-6 h-16 flex items-center justify-between relative">
        <Link
          to={ROUTES.HOME} // <--- Hier statt "/"
          className="no-underline group text-xl font-bold text-blue-600 flex items-center gap-2 transition-all duration-300 hover:text-blue-800 hover:scale-105"
        >
          <House className="w-6 h-6 transition-transform duration-300 group-hover:-rotate-12" />
          <span className="hidden sm:inline">SimpleSite</span>
        </Link>

        <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
          {/* <button className="bg-slate-900 text-white px-6 py-2 rounded-full text-sm font-medium hover:bg-slate-700 transition shadow-lg shadow-slate-200"> */}
          <Link
            to={ROUTES.PROJECTS}
            className="bg-slate-900 text-white px-6 py-2 rounded-full text-sm font-medium hover:bg-slate-700 transition shadow-lg shadow-slate-200"
          >
            Portfolio
          </Link>
          {/* </button> */}
        </div>

        <div className="flex items-center gap-4 text-slate-500">
          <a
            href={OUTER_ROUTES.CHESSCOM}
            target="_blank"
            rel="noreferrer"
            className="hover:text-green-600 transition hover:scale-110"
          >
            <ChessPawn className="w-7 h-7" />
          </a>

          <a
            href={OUTER_ROUTES.GITHUB}
            target="_blank"
            rel="noreferrer"
            className="hover:text-orange-600 transition hover:scale-110"
          >
            <Gitlab className="w-7 h-7" />
          </a>

          <a
            href={OUTER_ROUTES.GITLAB}
            target="_blank"
            rel="noreferrer"
            className="hover:text-black transition hover:scale-110"
          >
            <Github className="w-7 h-7" />
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Header;
