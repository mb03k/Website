"use client";
import { useRouter } from "next/navigation";
import { useState, useTransition } from "react";

import BackgroundBlobs from "@/src/components/ui/BackgroundBlobs";
import { Lock, ArrowRight } from "lucide-react";
import { ROUTES } from "@/src/features/routing/routes";

export default function LoginPage() {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const res = await fetch("/api/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ password }),
    });

    if (res.ok) {
      window.location.href = ROUTES.PORTFOLIO;
    } else {
      setError("Falsches Passwort.");
    }
  };

  return (
    <div className="flex min-h-screen w-full flex-col items-center bg-slate-50 px-4 pb-12 pt-24 transition-colors duration-300 dark:bg-slate-950 md:pt-32">
      <div className="relative w-full max-w-sm rounded-3xl border border-white/20 bg-white/60 p-8 shadow-xl backdrop-blur-xl dark:border-white/10 dark:bg-slate-900/60">
        <BackgroundBlobs />
        <div className="mb-6 flex justify-center">
          <div className="rounded-full bg-blue-100/50 p-4 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400">
            <Lock className="h-8 w-8" />
          </div>
        </div>

        <div className="mb-8 text-center">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
            Login
          </h2>
          <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">
            Bitte geben Sie Ihren Pin ein.
          </p>
        </div>

        <form className="space-y-6" onSubmit={handleSubmit}>
          <div className="relative">
            <input
              type="password"
              placeholder="••••"
              maxLength={6}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-4 text-center text-2xl font-bold tracking-[0.5em] text-slate-900 placeholder-slate-300 shadow-inner transition-all focus:border-transparent focus:outline-none focus:ring-2 focus:ring-blue-500 dark:border-slate-700 dark:bg-slate-800/50 dark:text-white dark:placeholder-slate-600"
            />
          </div>

          <button
            type="submit"
            className="group flex w-full transform items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-violet-600 py-3 font-semibold text-white shadow-lg shadow-blue-500/25 transition-all duration-200 hover:from-blue-500 hover:to-violet-500 active:scale-95"
          >
            Anmelden
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </button>
          {error && <p style={{ color: "red" }}>{error}</p>}
        </form>
      </div>
    </div>
  );
}
