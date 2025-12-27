"use client";

import { useEffect, useState } from "react";

export default function InitialLoader() {
  const [mounted, setMounted] = useState(false);
  const [show, setShow] = useState(true);

  useEffect(() => {
    setMounted(true);
    const timer = setTimeout(() => {
      setShow(false);
    }, 800);

    return () => clearTimeout(timer);
  }, []);

  if (!show) {
    return null; 
  }

  return (
    <div 
      className={`fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-white transition-opacity duration-500 dark:bg-slate-950 ${
        mounted ? "opacity-0" : "opacity-100"
      }`}
    >
      <h1 className="mb-8 text-2xl font-bold tracking-widest text-slate-900 dark:text-white animate-pulse">
        loading...
      </h1>

      <div className="h-1 w-48 overflow-hidden rounded-full bg-slate-200 dark:bg-slate-800">
        <div className="h-full w-full origin-left animate-loader bg-blue-600 dark:bg-blue-500"></div>
      </div>
    </div>
  );
}