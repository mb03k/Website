import { Link } from "react-router-dom";
import { Zap, Layout, Globe, ArrowRight } from "lucide-react";

const Main = () => {
  return (
    <main className="flex-grow pt-32 pb-20 px-6">
      <div className="container mx-auto text-center max-w-3xl mb-20">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-xs font-semibold mb-6">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
          </span>
          Neu veröffentlicht v1.0
        </div>
        <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 mb-6 leading-tight">
          Minimalismus trifft auf{" "}
          <span className="text-blue-600">Performance</span>.
        </h1>
        <p className="text-lg text-slate-600 mb-8 leading-relaxed">
          Eine simple Vorlage für dein nächstes React-Projekt.
        </p>
      </div>

      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="p-6 rounded-2xl bg-white shadow-sm border border-slate-100">
            <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600 mb-4">
              <Zap className="w-5 h-5" />
            </div>
            <h3 className="font-bold mb-1">Blitzschnell</h3>
            <p className="text-sm text-slate-600">Optimiert für V8 Engines.</p>
          </div>
          <div className="p-6 rounded-2xl bg-white shadow-sm border border-slate-100">
            <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center text-purple-600 mb-4">
              <Layout className="w-5 h-5" />
            </div>
            <h3 className="font-bold mb-1">Responsive</h3>
            <p className="text-sm text-slate-600">Mobile First Ansatz.</p>
          </div>
          <div className="p-6 rounded-2xl bg-white shadow-sm border border-slate-100">
            <div className="w-10 h-10 bg-teal-100 rounded-lg flex items-center justify-center text-teal-600 mb-4">
              <Globe className="w-5 h-5" />
            </div>
            <h3 className="font-bold mb-1">Modern</h3>
            <p className="text-sm text-slate-600">React 18 & Tailwind.</p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Main;
