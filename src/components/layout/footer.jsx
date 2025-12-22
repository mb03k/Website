import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-slate-400 py-8 mt-auto">
      <div className="container mx-auto px-6 flex flex-col items-center gap-6">
        
        {/* 3 Links */}
        <div className="flex gap-8 text-sm font-medium">
          <a href="#" className="hover:text-white transition">Datenschutz</a>
          <a href="#" className="hover:text-white transition">Kontakt</a>
          <a href="#" className="hover:text-white transition">Impressum</a>
        </div>

        {/* Lizenz */}
        <div className="text-xs text-slate-500 text-center border-t border-slate-800 pt-6 w-full max-w-md">
          Lizenziert unter <a href="https://creativecommons.org/licenses/by-nc-sa/4.0/" target="_blank" rel="noreferrer" className="underline hover:text-slate-300">CC BY-NC-SA 4.0</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;