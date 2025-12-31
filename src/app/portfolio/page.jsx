"use client";

import React from "react";
import { useState } from "react";
import { Lock, ArrowRight } from "lucide-react";

import BackgroundBlobs from "@/src/components/ui/BackgroundBlobs";

const EmployerLogin = () => {
  const [inputPassword, setInputPassword] = useState("");
  const [status, setStatus] = useState("");

  const checkPassword = async () => {
    try {
      const response = await fetch("/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ password: inputPassword }),
      });

      const data = await response.json();
      console.log(data);

      if (data.success) {
        setStatus("✅ " + data.message);
      } else {
        setStatus("❌ " + data.message);
      }
    } catch (error) {
      setStatus("❌ Ein Fehler ist aufgetreten." + error);
    }
  };

  return (
    <div className="flex min-h-screen w-full flex-col items-center bg-slate-50 px-4 pb-12 pt-24 transition-colors duration-300 dark:bg-slate-950 md:pt-32">
      <div className="relative w-full max-w-sm rounded-3xl border border-white/20 bg-white/60 p-8 shadow-xl backdrop-blur-xl dark:border-white/10 dark:bg-slate-900/60">
        <BackgroundBlobs />
        <div>
          <h1>Moin ich bins, matthes</h1>
        </div>
      </div>
    </div>
  );
};

export default EmployerLogin;
