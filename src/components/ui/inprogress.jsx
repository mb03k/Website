import React from "react";
import { Link } from "react-router-dom";
import { Hammer, HardHat, ArrowLeft, Construction } from "lucide-react";
import { ROUTES } from "../../routes/routes";

const InProgress = () => {
  return (
    <div className="min-h-screen pt-32 pb-20 px-6 font-sans relative overflow-hidden flex flex-col items-center justify-center">
      {/* --- BACKGROUND BLOBS --- */}
      <div className="absolute inset-0 -z-10 w-full h-full pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-orange-300/30 mix-blend-multiply blur-[120px] opacity-60 dark:bg-orange-600/20 dark:mix-blend-screen dark:opacity-40 animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-blue-300/30 mix-blend-multiply blur-[120px] opacity-60 dark:bg-blue-600/20 dark:mix-blend-screen dark:opacity-40"></div>
      </div>

      {/* --- CARD --- */}
      <div
        className="w-full max-w-lg relative p-8 md:p-12 text-center rounded-3xl shadow-2xl
                      bg-white/60 backdrop-blur-xl border border-white/50 
                      dark:bg-slate-900/60 dark:border-white/10"
      >
        {/* Animated Icon Wrapper */}
        <div className="relative inline-flex mb-8">
          <div className="p-5 rounded-2xl bg-orange-100 text-orange-600 dark:bg-orange-900/30 dark:text-orange-400 shadow-inner">
            <Construction className="w-12 h-12" />
          </div>

          {/* Kleines hämmerndes Icon oben drauf */}
          <div className="absolute -top-3 -right-3 p-2 rounded-full bg-white dark:bg-slate-800 shadow-md border border-slate-100 dark:border-slate-700">
            <Hammer className="w-5 h-5 text-slate-600 dark:text-slate-300 animate-bounce" />
          </div>
        </div>

        {/* Text Content */}
        <h1 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
          Hier wird noch gebaut!
        </h1>

        <p className="text-lg text-slate-600 dark:text-slate-300 mb-8 leading-relaxed">
          Diese Seite ist aktuell noch in der Werkstatt. Ich feile gerade an den
          letzten Details, damit alles perfekt aussieht.
        </p>

        {/* Fake Progress Bar (nur für Optik) */}
        <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-3 mb-10 overflow-hidden">
          <div className="bg-gradient-to-r from-orange-400 to-red-500 h-3 rounded-full w-2/3 animate-[shimmer_2s_infinite] relative">
            <div className="absolute top-0 left-0 bottom-0 right-0 bg-[linear-gradient(45deg,rgba(255,255,255,0.2)_25%,transparent_25%,transparent_50%,rgba(255,255,255,0.2)_50%,rgba(255,255,255,0.2)_75%,transparent_75%,transparent)] bg-[length:1rem_1rem]"></div>
          </div>
        </div>

        {/* Back Button */}
        <Link
          to={ROUTES.HOME || "/"} // Fallback auf "/", falls ROUTES nicht importiert
          className="inline-flex items-center gap-2 px-8 py-3 rounded-full font-semibold transition-all duration-300
                     bg-slate-900 text-white hover:bg-slate-800 hover:scale-105 hover:shadow-lg
                     dark:bg-white dark:text-slate-900 dark:hover:bg-slate-200"
        >
          <ArrowLeft className="w-4 h-4" />
          Zurück zur Startseite
        </Link>
      </div>

      {/* Footer Note (Optional) */}
      <div className="mt-8 text-slate-400 dark:text-slate-500 text-sm font-mono">
        Status: Compiling dreams...
      </div>
    </div>
  );
};

export default InProgress;
