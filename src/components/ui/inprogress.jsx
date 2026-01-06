import React from "react";
import { Hammer, ArrowLeft, Construction } from "lucide-react";
import { useRouter } from "next/navigation";

const InProgress = () => {
  const router = useRouter();
  return (
    <div className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 pb-20 pt-32 font-sans">
      <div className="relative w-full max-w-lg rounded-3xl border border-white/50 bg-white/60 p-8 text-center shadow-2xl backdrop-blur-xl dark:border-white/10 dark:bg-slate-900/60 md:p-12">
        <div className="relative mb-8 inline-flex">
          <div className="rounded-2xl bg-orange-100 p-5 text-orange-600 shadow-inner dark:bg-orange-900/30 dark:text-orange-400">
            <Construction className="h-12 w-12" />
          </div>

          <div className="absolute -right-3 -top-3 rounded-full border border-slate-100 bg-white p-2 shadow-md dark:border-slate-700 dark:bg-slate-800">
            <Hammer className="h-5 w-5 animate-bounce text-slate-600 dark:text-slate-300" />
          </div>
        </div>

        <h1 className="mb-4 text-3xl font-bold text-slate-900 dark:text-white md:text-4xl">
          Hier wird noch gebaut!
        </h1>

        <p className="mb-8 text-lg leading-relaxed text-slate-600 dark:text-slate-300">
          Mit der Zeit entstehen hier weitere neue Features. Bleib geduldig!
        </p>

        <div className="mb-10 h-3 w-full overflow-hidden rounded-full bg-slate-200 dark:bg-slate-700">
          <div className="relative h-3 w-2/3 animate-[shimmer_2s_infinite] rounded-full bg-gradient-to-r from-orange-400 to-red-500">
            <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(45deg,rgba(255,255,255,0.2)_25%,transparent_25%,transparent_50%,rgba(255,255,255,0.2)_50%,rgba(255,255,255,0.2)_75%,transparent_75%,transparent)] bg-[length:1rem_1rem]"></div>
          </div>
        </div>

        <button
          onClick={() => router.back()}
          className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-8 py-3 font-semibold text-white transition-all duration-300 hover:scale-105 hover:bg-slate-800 hover:shadow-lg dark:bg-white dark:text-slate-900 dark:hover:bg-slate-200"
        >
          <ArrowLeft className="h-4 w-4" />
          Zurück zur Startseite
        </button>
      </div>
    </div>
  );
};

export default InProgress;
