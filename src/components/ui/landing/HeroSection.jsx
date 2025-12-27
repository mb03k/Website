import { ReactNode } from "react";

function VersionBadge() {
  const version = process.env.NEXT_PUBLIC_APP_VERSION || "1.0.0";
  return (
    <div className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50/80 px-3 py-1 text-blue-600 shadow-sm backdrop-blur-sm dark:border-blue-800 dark:bg-blue-900/30 dark:text-blue-300">
      <span className="relative flex h-2 w-2">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-blue-400 opacity-75"></span>
        <span className="relative inline-flex h-2 w-2 rounded-full bg-blue-500 dark:bg-blue-400"></span>
      </span>
      Version v{version}
    </div>
  );
}

export default function HeroSection() {
  return (
    <div className="container relative z-10 mx-auto mb-20 max-w-3xl text-center">
      <VersionBadge />

      <h1 className="mb-6 mt-6 text-5xl font-extrabold leading-tight text-slate-900 dark:text-white md:text-7xl">
        Build your own{" "}
        <span className="bg-gradient-to-r from-blue-600 to-violet-600 bg-clip-text text-transparent dark:from-blue-400 dark:to-violet-400">
          dreams
        </span>
        .
      </h1>

      <p className="mx-auto mb-4 max-w-2xl text-xl leading-relaxed text-slate-600 dark:text-slate-400 md:text-2xl">
        weristmatthes.de in ganz neuem Style
      </p>

      <p className="mx-auto mb-8 max-w-2xl text-xl leading-relaxed text-slate-600 dark:text-slate-400 md:text-2xl">
        Schau Dich gerne um!
      </p>
    </div>
  );
}
