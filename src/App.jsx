import React from 'react';
import { ArrowRight, CheckCircle2, Layout, Zap, Globe } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans selection:bg-blue-100">
      
      {/* --- Navbar --- */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md border-b border-slate-200 z-50">
        <div className="container mx-auto px-6 h-16 flex items-center justify-between">
          <div className="text-xl font-bold text-blue-600 flex items-center gap-2">
            <Layout className="w-6 h-6" />
            SimpleSite
          </div>
          <div className="hidden md:flex space-x-8 text-sm font-medium text-slate-600">
            <a href="#features" className="hover:text-blue-600 transition">Features</a>
            <a href="#about" className="hover:text-blue-600 transition">Über uns</a>
            <a href="#contact" className="hover:text-blue-600 transition">Kontakt</a>
          </div>
          <button className="bg-slate-900 text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-slate-700 transition">
            Starten
          </button>
        </div>
      </nav>

      {/* --- Hero Section --- */}
      <section className="pt-32 pb-20 px-6">
        <div className="container mx-auto text-center max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-xs font-semibold mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
            </span>
            Neu veröffentlicht v1.0
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 mb-6 leading-tight">
            Minimalismus trifft auf <span className="text-blue-600">Performance</span>.
          </h1>
          <p className="text-lg text-slate-600 mb-8 leading-relaxed">
            Eine simple Vorlage für dein nächstes React-Projekt. Tailwind CSS ist bereits 
            konfiguriert, damit du sofort loslegen kannst.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="flex items-center justify-center gap-2 bg-blue-600 text-white px-8 py-3 rounded-xl font-semibold hover:bg-blue-700 transition shadow-lg shadow-blue-200">
              Jetzt loslegen <ArrowRight className="w-4 h-4" />
            </button>
            <button className="px-8 py-3 rounded-xl font-semibold text-slate-600 hover:bg-white hover:shadow-md transition border border-transparent hover:border-slate-200">
              Dokumentation
            </button>
          </div>
        </div>
      </section>

      {/* --- Features Grid --- */}
      <section id="features" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12 text-slate-900">Warum diese Vorlage?</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="p-6 rounded-2xl bg-slate-50 hover:bg-slate-100 transition duration-300 border border-slate-100">
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center text-blue-600 mb-4">
                <Zap className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold mb-2">Blitzschnell</h3>
              <p className="text-slate-600">
                Dank Vite lädt deine Seite fast augenblicklich. Optimiert für maximale Performance.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="p-6 rounded-2xl bg-slate-50 hover:bg-slate-100 transition duration-300 border border-slate-100">
              <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center text-purple-600 mb-4">
                <Layout className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold mb-2">Responsive</h3>
              <p className="text-slate-600">
                Sieht auf dem iPhone, iPad und Desktop gleichermaßen gut aus. Mobile-First Ansatz.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="p-6 rounded-2xl bg-slate-50 hover:bg-slate-100 transition duration-300 border border-slate-100">
              <div className="w-12 h-12 bg-teal-100 rounded-xl flex items-center justify-center text-teal-600 mb-4">
                <Globe className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold mb-2">Modern</h3>
              <p className="text-slate-600">
                Gebaut mit den neuesten Standards: React 18+ und Tailwind CSS Utility-Classes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* --- Footer --- */}
      <footer className="bg-slate-900 text-slate-400 py-12">
        <div className="container mx-auto px-6 grid md:grid-cols-4 gap-8 mb-8">
          <div className="col-span-1 md:col-span-2">
            <div className="text-white font-bold text-xl mb-4 flex items-center gap-2">
              <Layout className="w-5 h-5" /> SimpleSite
            </div>
            <p className="max-w-xs text-sm">
              Erstellt mit Liebe zum Detail, React und Tailwind CSS. Open Source und bereit für dein Projekt.
            </p>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Produkt</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-white transition">Features</a></li>
              <li><a href="#" className="hover:text-white transition">Preise</a></li>
              <li><a href="#" className="hover:text-white transition">Showcase</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Rechtliches</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-white transition">Impressum</a></li>
              <li><a href="#" className="hover:text-white transition">Datenschutz</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-slate-800 pt-8 text-center text-sm">
          &copy; {new Date().getFullYear()} SimpleSite Inc. Alle Rechte vorbehalten.
        </div>
      </footer>
    </div>
  );
}

export default App;