"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { flushSync } from "react-dom";
import { useState } from "react";

export default function ThemeToggle() {
  // 1. Hook von next-themes
  // resolvedTheme ist wichtig, falls theme="system" ist (sagt uns, ob es gerade wirklich dark ist)
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // 2. Hydration Fix: Erst rendern, wenn wir im Client sind
  React.useEffect(() => {
    setMounted(true);
  }, []);

  const toggleTheme = () => {
    // Wenn 'system' eingestellt ist, nehmen wir resolvedTheme, sonst theme
    const currentTheme = theme === "system" ? resolvedTheme : theme;
    const newTheme = currentTheme === "dark" ? "light" : "dark";

    // 3. View Transition Logik (wie in deinem alten Code)
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

  // Verhindert Hydration Mismatch (Server rendert nichts, Client dann den Button)
  if (!mounted) {
    // Optional: Render einen leeren Platzhalter in der gleichen Größe, um Layout-Shift zu vermeiden
    return (
      <div className="h-9 w-9 rounded-full bg-slate-100 dark:bg-slate-800" />
    );
  }

  return (
    <button
      onClick={toggleTheme}
      className="rounded-full bg-slate-100 p-2 text-slate-800 transition-all hover:scale-110 dark:bg-slate-800 dark:text-yellow-400"
      aria-label="Design wechseln"
    >
      {/* Wir nutzen resolvedTheme für das Icon, damit es auch bei "System" Einstellung stimmt */}
      {resolvedTheme === "dark" ? (
        <Sun className="h-5 w-5" />
      ) : (
        <Moon className="h-5 w-5" />
      )}
    </button>
  );
}
