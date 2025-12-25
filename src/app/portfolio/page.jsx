'use client';

import React from "react";
import { useState } from "react";
import { Lock, ArrowRight } from "lucide-react";

import BackgroundBlobs from "@/src/components/ui/coloredbackground";

const EmployerLogin = () => {
  const [inputPassword, setInputPassword] = useState("");
  const [status, setStatus] = useState("");

  const checkPassword = async () => {
    try {
      const response = await fetch("/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ password: inputPassword }),
      });

      const data = await response.json();
      console.log(data);

      if (data.success) {
        setStatus("✅ " + data.message);
        // Hier könnte man z.B. auf eine andere Seite weiterleiten
      } else {
        setStatus("❌ " + data.message);
      }
    } catch (error) {
      setStatus("❌ Ein Fehler ist aufgetreten." + error);
    }
  };

  return (
    <div className="flex min-h-screen w-full flex-col items-center bg-slate-50 px-4 pb-12 pt-24 transition-colors duration-300 md:pt-32 dark:bg-slate-950">
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

        <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
          <div className="relative">
            <input
              type="password"
              placeholder="••••"
              maxLength={6}
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
        </form>
      </div>

      <div style={{ padding: "50px", textAlign: "center" }}>
        <h1>Login Test</h1>
        <input
          type="password"
          value={inputPassword}
          onChange={(e) => setInputPassword(e.target.value)}
          placeholder="Passwort eingeben"
          style={{ padding: "10px", marginRight: "10px", color: "black" }}
        />
        <button onClick={checkPassword} style={{ padding: "10px 20px" }}>
          Prüfen
        </button>

        {status && (
          <p style={{ marginTop: "20px", fontWeight: "bold" }}>{status}</p>
        )}
      </div>
    </div>
  );
};

export default EmployerLogin;
