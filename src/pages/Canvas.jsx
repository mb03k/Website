import React from "react";

const Canvas = () => {
  return (
    <div className="relative min-h-screen w-full bg-slate-50 overflow-hidden flex flex-col items-center justify-center isolate">
      <div className="absolute inset-0 -z-10 w-full h-full pointer-events-none">
        <div
          className="absolute top-[-10%] left-[-10%] w-2/3 h-2/3 rounded-full 
                     bg-indigo-300/40 mix-blend-multiply blur-3xl opacity-70"
        ></div>

        <div
          className="absolute top-[-10%] right-[-10%] w-2/3 h-2/3 rounded-full 
                     bg-cyan-300/40 mix-blend-multiply blur-3xl opacity-70"
        ></div>

        <div
          className="absolute bottom-[-10%] left-[-10%] w-2/3 h-2/3 rounded-full 
                     bg-fuchsia-300/40 mix-blend-multiply blur-3xl opacity-70"
        ></div>

        <div
          className="absolute bottom-[-10%] right-[-10%] w-2/3 h-2/3 rounded-full 
                     bg-amber-200/40 mix-blend-multiply blur-3xl opacity-70"
        ></div>
      </div>

      <div className="relative z-10 max-w-2xl px-6 text-center">
        <span className="inline-block py-1 px-3 rounded-full bg-white/50 border border-white/60 text-sm font-semibold text-slate-700 shadow-sm mb-6 backdrop-blur-sm">
          Neuigkeiten v2.0
        </span>
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-slate-900 mb-6">
          Schönheit durch <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-fuchsia-600">
            Farben und Licht
          </span>
        </h1>
        <p className="text-lg text-slate-600 mb-8 leading-relaxed">
          Dies ist ein Beispieltext, der zeigt, dass der Inhalt perfekt lesbar
          bleibt. Der Hintergrund ist präsent und ästhetisch, drängt sich aber
          nicht auf. Die vier Farben verschmelzen sanft in der Mitte.
        </p>

        <div className="flex gap-4 justify-center">
          <button className="px-6 py-3 rounded-lg bg-slate-900 text-white font-medium hover:bg-slate-800 transition shadow-lg shadow-indigo-500/20">
            Loslegen
          </button>
          <button className="px-6 py-3 rounded-lg bg-white text-slate-900 font-medium border border-slate-200 hover:bg-slate-50 transition shadow-sm">
            Mehr erfahren
          </button>
        </div>
      </div>
    </div>
  );
};

export default Canvas;
