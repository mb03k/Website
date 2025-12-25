import React from "react";
import { Lock, ArrowRight } from "lucide-react";
import BackgroundBlobs from "../components/ui/landingpage/coloredbackground";

const EmployerLogin = () => {
  return (
    <div
      className="min-h-screen w-full flex flex-col items-center px-4 
                    pt-24 md:pt-32 pb-12
                    bg-slate-50 dark:bg-slate-950 transition-colors duration-300"
    >
      <div
        className="w-full max-w-sm relative p-8 rounded-3xl 
                      bg-white/60 dark:bg-slate-900/60 backdrop-blur-xl 
                      border border-white/20 dark:border-white/10 shadow-xl"
      >
        <BackgroundBlobs />
        <div className="flex justify-center mb-6">
          <div className="p-4 rounded-full bg-blue-100/50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400">
            <Lock className="w-8 h-8" />
          </div>
        </div>

        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
            Login
          </h2>
          <p className="text-sm text-slate-500 dark:text-slate-400 mt-2">
            Bitte geben Sie Ihren Pin ein.
          </p>
        </div>

        <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
          <div className="relative">
            <input
              type="password"
              placeholder="••••"
              maxLength={6}
              className="w-full px-4 py-4 text-center text-2xl tracking-[0.5em] font-bold rounded-xl
                         bg-slate-50 dark:bg-slate-800/50 
                         border border-slate-200 dark:border-slate-700 
                         text-slate-900 dark:text-white placeholder-slate-300 dark:placeholder-slate-600
                         focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent
                         transition-all shadow-inner"
            />
          </div>

          <button
            type="submit"
            className="group w-full flex items-center justify-center gap-2 py-3 rounded-xl 
                       bg-gradient-to-r from-blue-600 to-violet-600 
                       hover:from-blue-500 hover:to-violet-500
                       text-white font-semibold shadow-lg shadow-blue-500/25
                       transform transition-all duration-200 active:scale-95"
          >
            Anmelden
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </button>
        </form>
      </div>
    </div>
  );
};

export default EmployerLogin;
