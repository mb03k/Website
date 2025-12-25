"use client";

import React, { useEffect, useState } from "react";
import { flushSync } from "react-dom";
import { Moon, Sun } from "lucide-react";

const ThemeToggle = () => {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ||
      (window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light")
  );

  useEffect(() => {
    const root = window.document.documentElement;
    if (theme === "dark") {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [theme]);

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";

    if (!document.startViewTransition) {
      setTheme(newTheme);
      return;
    }

    document.startViewTransition(() => {
      flushSync(() => {
        setTheme(newTheme);
      });
    });
  };

  return (
    <button
      onClick={toggleTheme}
      className="rounded-full bg-slate-100 p-2 text-slate-800 transition-all hover:scale-110 dark:bg-slate-800 dark:text-yellow-400"
      aria-label="Design wechseln"
    >
      {theme === "dark" ? (
        <Sun className="h-5 w-5" />
      ) : (
        <Moon className="h-5 w-5" />
      )}
    </button>
  );
};

export default ThemeToggle;
