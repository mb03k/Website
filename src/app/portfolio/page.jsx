"use client";

import React from "react";
import Image from "next/image";

import { PORTFOLIO_ROUTES } from "@/src/features/routing/portfolio";

const EmployerLogin = () => {
  return (
    <main className="min-h-screen bg-white px-6 py-24 transition-colors duration-300 dark:bg-slate-950 md:px-12 lg:px-24">
      <div className="mx-auto max-w-4xl">
        <h1 className="mb-8 text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white sm:text-5xl">
          Herzlich Willkommen.
        </h1>

        <div className="text-lg leading-relaxed text-slate-600 dark:text-slate-300">
          <div className="float-right mb-4 ml-6 w-32 md:w-48">
            <div className="relative aspect-[4/5] overflow-hidden rounded-xl bg-slate-100 shadow-lg ring-1 ring-slate-900/10 dark:bg-slate-800 dark:ring-white/20">
              <Image
                src={PORTFOLIO_ROUTES.APPLICATION_PHOTO}
                alt="Profilbild"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 128px, 192px"
              />
            </div>
          </div>

          <div className="space-y-6">
            <p>
              Hallo! Ich bin [Dein Name], ein passionierter Entwickler mit einem
              Fokus auf moderne Webtechnologien. Es freut mich sehr, dass du den
              Weg zu meinem geschützten Portfolio gefunden hast.
            </p>
            <p>
              Dieses Projekt hier ist nicht nur eine bloße Auflistung meiner
              Arbeiten, sondern selbst ein Beispiel meiner Fähigkeiten. Es wurde
              mit <strong>Next.js (App Router)</strong>, <strong>React</strong>{" "}
              und <strong>Tailwind CSS</strong> entwickelt. Besonders stolz bin
              ich auf die Implementierung der robusten
              Middleware-Authentifizierung und das Hosting in einem eigenen{" "}
              <strong>TrueNAS Container</strong>.
            </p>
            <p>
              Mein Ziel ist es, performante, sichere und ästhetisch ansprechende
              digitale Erlebnisse zu schaffen. Ich liebe es, komplexe Probleme
              zu lösen und dabei stets die User Experience im Blick zu behalten
              – egal ob im hellen Tageslicht oder spät nachts im Darkmode.
            </p>
            <p className="font-medium text-slate-900 dark:text-white">
              Schau dich gerne um. Ich freue mich darauf, von dir zu hören!
            </p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default EmployerLogin;
