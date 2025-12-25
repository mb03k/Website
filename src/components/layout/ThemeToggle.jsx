import React, { useEffect, useState } from "react";
import { flushSync } from "react-dom"; // WICHTIG: Importieren für sofortiges Update
import { Moon, Sun } from "lucide-react";

const ThemeToggle = () => {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ||
      (window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light"),
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

    // Überprüfen, ob der Browser die View Transitions API unterstützt
    if (!document.startViewTransition) {
      setTheme(newTheme);
      return;
    }

    // Die View Transition starten
    document.startViewTransition(() => {
      // flushSync zwingt React, das Update SOFORT durchzuführen,
      // bevor der Browser den Übergang berechnet.
      flushSync(() => {
        setTheme(newTheme);
      });
    });
  };

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-yellow-400 transition-all hover:scale-110"
      aria-label="Design wechseln"
    >
      {theme === "dark" ? (
        <Sun className="w-5 h-5" />
      ) : (
        <Moon className="w-5 h-5" />
      )}
    </button>
  );
};

export default ThemeToggle;
