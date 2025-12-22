import React from 'react';
import { Layout, Github, Gitlab, ChessPawn } from 'lucide-react';

const Header = () => {
  return (
    <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md border-b border-slate-200 z-50">
      <div className="container mx-auto px-6 h-16 flex items-center justify-between relative">
        
        <div className="text-xl font-bold text-blue-600 flex items-center gap-2">
            <Layout className="w-6 h-6" />
            <span className="hidden sm:inline">SimpleSite</span>
        </div>

        <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <button className="bg-slate-900 text-white px-6 py-2 rounded-full text-sm font-medium hover:bg-slate-700 transition shadow-lg shadow-slate-200">
                Portfolio
            </button>
        </div>

        <div className="flex items-center gap-4 text-slate-500">
            <a href="https://gitlab.com" target="_blank" rel="noreferrer" className="hover:text-orange-600 transition hover:scale-110">
            <ChessPawn className="w-5 h-5" />
            </a>

            <a href="https://gitlab.com" target="_blank" rel="noreferrer" className="hover:text-orange-600 transition hover:scale-110">
            <Gitlab className="w-5 h-5" />
            </a>

            <a href="https://github.com" target="_blank" rel="noreferrer" className="hover:text-black transition hover:scale-110">
            <Github className="w-5 h-5" />
            </a>
        </div>

      </div>
    </nav>
  );
};

export default Header;