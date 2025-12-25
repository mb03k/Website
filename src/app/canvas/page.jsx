'use client';

import React from "react";

const Canvas = () => {
  return (
    <div className="relative isolate flex min-h-screen w-full flex-col items-center justify-center overflow-hidden bg-slate-50">
      <div className="pointer-events-none absolute inset-0 -z-10 h-full w-full">
        <div className="absolute left-[-10%] top-[-10%] h-2/3 w-2/3 rounded-full bg-indigo-300/40 opacity-70 mix-blend-multiply blur-3xl"></div>

        <div className="absolute right-[-10%] top-[-10%] h-2/3 w-2/3 rounded-full bg-cyan-300/40 opacity-70 mix-blend-multiply blur-3xl"></div>

        <div className="absolute bottom-[-10%] left-[-10%] h-2/3 w-2/3 rounded-full bg-fuchsia-300/40 opacity-70 mix-blend-multiply blur-3xl"></div>

        <div className="absolute bottom-[-10%] right-[-10%] h-2/3 w-2/3 rounded-full bg-amber-200/40 opacity-70 mix-blend-multiply blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-2xl px-6 text-center">
        <span className="mb-6 inline-block rounded-full border border-white/60 bg-white/50 px-3 py-1 text-sm font-semibold text-slate-700 shadow-sm backdrop-blur-sm">
          Neuigkeiten v2.0
        </span>
        <h1 className="mb-6 text-4xl font-bold tracking-tight text-slate-900 md:text-6xl">
          Schönheit durch <br />
          <span className="bg-gradient-to-r from-indigo-600 to-fuchsia-600 bg-clip-text text-transparent">
            Farben und Licht
          </span>
        </h1>
        <p className="mb-8 text-lg leading-relaxed text-slate-600">
          Dies ist ein Beispieltext, der zeigt, dass der Inhalt perfekt lesbar
          bleibt. Der Hintergrund ist präsent und ästhetisch, drängt sich aber
          nicht auf. Die vier Farben verschmelzen sanft in der Mitte.
        </p>

        <div className="flex justify-center gap-4">
          <button className="rounded-lg bg-slate-900 px-6 py-3 font-medium text-white shadow-lg shadow-indigo-500/20 transition hover:bg-slate-800">
            Loslegen
          </button>
          <button className="rounded-lg border border-slate-200 bg-white px-6 py-3 font-medium text-slate-900 shadow-sm transition hover:bg-slate-50">
            Mehr erfahren
          </button>
        </div>
      </div>
    </div>
  );
};

export default Canvas;
