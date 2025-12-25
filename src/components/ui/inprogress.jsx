import React from "react";
import { Link } from "react-router-dom";
import { Hammer, HardHat, ArrowLeft, Construction } from "lucide-react";
import { ROUTES } from "../../routes/routes";

const InProgress = () => {
  return (
    <div className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 pb-20 pt-32 font-sans">
      {/* --- BACKGROUND BLOBS --- */}
      <div className="pointer-events-none absolute inset-0 -z-10 h-full w-full">
        <div className="absolute left-1/4 top-1/4 h-96 w-96 animate-pulse rounded-full bg-orange-300/30 opacity-60 mix-blend-multiply blur-[120px] dark:bg-orange-600/20 dark:opacity-40 dark:mix-blend-screen"></div>
        <div className="absolute bottom-1/4 right-1/4 h-96 w-96 rounded-full bg-blue-300/30 opacity-60 mix-blend-multiply blur-[120px] dark:bg-blue-600/20 dark:opacity-40 dark:mix-blend-screen"></div>
      </div>

      {/* --- CARD --- */}
      <div className="relative w-full max-w-lg rounded-3xl border border-white/50 bg-white/60 p-8 text-center shadow-2xl backdrop-blur-xl md:p-12 dark:border-white/10 dark:bg-slate-900/60">
        {/* Animated Icon Wrapper */}
        <div className="relative mb-8 inline-flex">
          <div className="rounded-2xl bg-orange-100 p-5 text-orange-600 shadow-inner dark:bg-orange-900/30 dark:text-orange-400">
            <Construction className="h-12 w-12" />
          </div>

          {/* Kleines hämmerndes Icon oben drauf */}
          <div className="absolute -right-3 -top-3 rounded-full border border-slate-100 bg-white p-2 shadow-md dark:border-slate-700 dark:bg-slate-800">
            <Hammer className="h-5 w-5 animate-bounce text-slate-600 dark:text-slate-300" />
          </div>
        </div>

        {/* Text Content */}
        <h1 className="mb-4 text-3xl font-bold text-slate-900 md:text-4xl dark:text-white">
          Hier wird noch gebaut!
        </h1>

        <p className="mb-8 text-lg leading-relaxed text-slate-600 dark:text-slate-300">
          Diese Seite ist aktuell noch in der Werkstatt. Ich feile gerade an den
          letzten Details, damit alles perfekt aussieht.
        </p>

        {/* Fake Progress Bar (nur für Optik) */}
        <div className="mb-10 h-3 w-full overflow-hidden rounded-full bg-slate-200 dark:bg-slate-700">
          <div className="relative h-3 w-2/3 animate-[shimmer_2s_infinite] rounded-full bg-gradient-to-r from-orange-400 to-red-500">
            <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(45deg,rgba(255,255,255,0.2)_25%,transparent_25%,transparent_50%,rgba(255,255,255,0.2)_50%,rgba(255,255,255,0.2)_75%,transparent_75%,transparent)] bg-[length:1rem_1rem]"></div>
          </div>
        </div>

        {/* Back Button */}
        <Link
          to={ROUTES.HOME || "/"} // Fallback auf "/", falls ROUTES nicht importiert
          className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-8 py-3 font-semibold text-white transition-all duration-300 hover:scale-105 hover:bg-slate-800 hover:shadow-lg dark:bg-white dark:text-slate-900 dark:hover:bg-slate-200"
        >
          <ArrowLeft className="h-4 w-4" />
          Zurück zur Startseite
        </Link>
      </div>

      {/* Footer Note (Optional) */}
      <div className="mt-8 font-mono text-sm text-slate-400 dark:text-slate-500">
        Status: Compiling dreams...
      </div>
    </div>
  );
};

export default InProgress;
