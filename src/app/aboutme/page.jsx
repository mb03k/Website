'use client';

import React from "react";
import { Sparkles, Code, Cpu, Globe } from "lucide-react";

const AboutMe = () => {
  return (
    <div className="relative flex min-h-screen w-full items-center justify-center overflow-hidden bg-black px-4 py-20 sm:px-6">
      <div className="pointer-events-none absolute left-0 top-0 z-10 h-24 w-full bg-gradient-to-b from-slate-50 via-slate-50/60 to-transparent dark:from-black dark:via-black/60"></div>
      <div className="pointer-events-none absolute inset-0 h-full w-full overflow-hidden">
        <div className="absolute left-[-20%] top-[-20%] h-[80vw] w-[80vw] animate-[pulse_6s_cubic-bezier(0.4,0,0.6,1)_infinite] rounded-full bg-purple-600/30 mix-blend-screen blur-[100px]"></div>
        <div className="absolute bottom-[-20%] right-[-20%] h-[80vw] w-[80vw] animate-[pulse_6s_cubic-bezier(0.4,0,0.6,1)_infinite] rounded-full bg-cyan-600/30 mix-blend-screen blur-[100px] delay-1000"></div>
        <div className="animate-spin-slow absolute left-[30%] top-[30%] h-[60vw] w-[60vw] rounded-full bg-pink-600/20 mix-blend-screen blur-[120px]"></div>
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.05]"></div>
      </div>

      <div className="pointer-events-none absolute left-1/2 top-1/2 z-0 w-full -translate-x-1/2 -translate-y-1/2 select-none text-center">
        <h1 className="bg-gradient-to-b from-white/10 to-transparent bg-clip-text text-[15vw] font-black leading-none text-transparent blur-sm">
          CREATIVE
        </h1>
        <h1 className="-mt-10 bg-gradient-to-t from-white/10 to-transparent bg-clip-text text-[15vw] font-black leading-none text-transparent blur-md">
          MINDSET
        </h1>
      </div>

      <div className="relative z-10 w-full max-w-5xl">
        <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-12">
          <div className="flex flex-col gap-6 lg:col-span-5">
            <div className="group relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-white/5 p-8 shadow-2xl backdrop-blur-2xl transition-all duration-500 hover:border-white/20">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-cyan-500/10 opacity-0 transition-opacity duration-500 group-hover:opacity-100"></div>

              <div className="relative">
                <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-purple-500/30 bg-purple-500/10 px-3 py-1 text-xs font-bold uppercase tracking-wider text-purple-300">
                  <Sparkles className="h-3 w-3" /> About Me
                </div>

                <h2 className="mb-2 text-5xl font-black leading-tight text-white md:text-6xl">
                  Not just <br />
                  <span className="animate-gradient-x bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
                    Code.
                  </span>
                </h2>
                <p className="text-lg text-slate-400">
                  Ich baue digitale Erlebnisse, die im Gedächtnis bleiben.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-3xl border border-white/10 bg-black/40 p-6 text-center backdrop-blur-xl transition-colors hover:bg-white/5">
                <Cpu className="mx-auto mb-2 h-8 w-8 text-cyan-400" />
                <div className="text-2xl font-bold text-white">Full</div>
                <div className="text-xs uppercase tracking-widest text-slate-500">
                  Stack
                </div>
              </div>
              <div className="rounded-3xl border border-white/10 bg-black/40 p-6 text-center backdrop-blur-xl transition-colors hover:bg-white/5">
                <Globe className="mx-auto mb-2 h-8 w-8 text-pink-400" />
                <div className="text-2xl font-bold text-white">100%</div>
                <div className="text-xs uppercase tracking-widest text-slate-500">
                  Passion
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="group relative h-full min-h-[500px] rounded-[2.5rem] border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-8 shadow-[0_8px_32px_0_rgba(0,0,0,0.37)] backdrop-blur-3xl md:p-12">
              <div className="absolute right-0 top-0 h-32 w-32 rounded-bl-full bg-gradient-to-br from-white/20 to-transparent opacity-50"></div>

              <div className="relative space-y-6 text-lg font-light leading-relaxed text-slate-300 md:text-xl">
                <p>
                  <strong className="mb-2 block text-2xl font-bold text-white">
                    Hi, ich bin Matthes.
                  </strong>
                  Manchmal sitze ich vor einem leeren Editor und frage mich, wie
                  aus einfachen Zeilen Code ganze Welten entstehen können. Das
                  ist es, was mich antreibt. Nicht nur das "Dass es
                  funktioniert", sondern das{" "}
                  <span className="font-medium italic text-cyan-300">
                    "Wie es sich anfühlt"
                  </span>
                  .
                </p>

                <p>
                  Meine Reise begann nicht mit dem Wunsch, Informatiker zu
                  werden, sondern mit der Neugier, Dinge zu verstehen. Heute
                  kombiniere ich
                  <span className="mx-1 inline-block rounded border border-purple-500/50 bg-purple-500/20 px-2 py-0 align-middle text-sm text-purple-200">
                    Backend-Logik
                  </span>
                  mit
                  <span className="mx-1 inline-block rounded border border-pink-500/50 bg-pink-500/20 px-2 py-0 align-middle text-sm text-pink-200">
                    Frontend-Magie
                  </span>
                  .
                </p>

                <p className="opacity-80 blur-[0.5px] transition-all duration-500 hover:opacity-100 hover:blur-none">
                  Wenn ich nicht gerade Server konfiguriere oder Pixel schubse,
                  verliere ich mich in Filmen, Schachpartien oder der Suche nach
                  der perfekten UI-Transition. Ich glaube fest daran, dass
                  Technologie unsichtbar sein sollte – sie sollte einfach da
                  sein und das Leben besser machen.
                </p>

                <hr className="my-6 border-white/10" />

                <div className="flex items-center gap-4">
                  <Code className="h-6 w-6 text-slate-500" />
                  <span className="font-mono text-sm text-slate-500">
                    System.out.println("Let's build dreams.");
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
