"use client";

import { LogOut } from "lucide-react";
import { useRouter } from "next/navigation";

export default function LogoutButton() {
  const router = useRouter();

  const handleLogout = async () => {
    await fetch("/api/logout", { method: "POST" });
    router.refresh();
  };

  return (
    <button
      onClick={handleLogout}
      className="rounded-full bg-slate-100 p-2 text-slate-800 transition-all hover:scale-110 hover:bg-red-100 hover:text-red-600 dark:bg-slate-800 dark:text-red-400 dark:hover:bg-red-900/30"
      aria-label="Ausloggen"
      title="Ausloggen"
    >
      <LogOut className="h-5 w-5" />
    </button>
  );
}
