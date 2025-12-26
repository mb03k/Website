import BackgroundBlobs from "@/src/components/ui/coloredbackground";
import ThemeToggle from "@/src/components/layout/ThemeToggle";
import Link from "next/link";
import Logos from "@/src/components/ui/landingpage/logos";
import { Dataset } from "@/src/components/ui/featuregrid";

import "@/public/logos/logo_nextcloud.png";

export default function HomePage() {
  const __APP_VERSION__ = process.env.NEXT_PUBLIC_APP_VERSION;
  return (
    <main className="relative isolate flex-grow overflow-hidden bg-slate-50 px-6 pb-20 pt-32 transition-colors duration-300 dark:bg-slate-950">
      <div>
        {/* blurry background */}
        <BackgroundBlobs />

        <div className="absolute right-6 top-20 z-30 md:right-10 md:top-24">
          <div className="rounded-full border border-white/20 bg-white/30 p-2 shadow-sm backdrop-blur-md dark:border-white/10 dark:bg-black/20">
            <ThemeToggle />
          </div>
        </div>

        <div className="container relative z-10 mx-auto mb-20 max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50/80 px-3 py-1 text-blue-600 shadow-sm backdrop-blur-sm dark:border-blue-800 dark:bg-blue-900/30 dark:text-blue-300">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex h-2 w-2 rounded-full bg-blue-500 dark:bg-blue-400"></span>
            </span>
            Version v{__APP_VERSION__}
          </div>

          <h1 className="mb-6 text-5xl font-extrabold leading-tight text-slate-900 dark:text-white md:text-7xl">
            Build your own{" "}
            <span className="bg-gradient-to-r from-blue-600 to-violet-600 bg-clip-text text-transparent dark:from-blue-400 dark:to-violet-400">
              dreams
            </span>
            .
          </h1>

          {/* Text: Slate-600 zu Slate-300/400 */}
          <p className="mx-auto mb-8 max-w-2xl text-xl leading-relaxed text-slate-600 dark:text-slate-400 md:text-2xl">
            weristmatthes.de in ganz neuem Style
          </p>

          <p className="mx-auto mb-8 max-w-2xl text-xl leading-relaxed text-slate-600 dark:text-slate-400 md:text-2xl">
            Schau Dich gerne um!
          </p>
        </div>
      </div>

      <div className="container relative z-10 mx-auto px-6">
        <div className="grid gap-8 md:grid-cols-3">
          {Dataset.map((feature, index) => (
            <Link
              href={feature.link}
              key={index}
              className="cursor-pointer rounded-2xl border border-white/50 bg-white/60 p-6 shadow-sm backdrop-blur-md transition-all duration-300 hover:bg-white/75 hover:shadow-md dark:border-white/10 dark:bg-slate-800/40 dark:hover:border-white/20 dark:hover:bg-slate-800/60"
            >
              <div
                className={`mb-4 flex h-10 w-10 items-center justify-center rounded-lg ${feature.bg} ${feature.color}`}
              >
                {feature.icon}
              </div>

              <h3 className="mb-1 font-bold text-slate-900 dark:text-slate-100">
                {feature.title}
              </h3>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                {feature.text}
              </p>
            </Link>
          ))}
        </div>
      </div>
      <Logos />
    </main>
  );
}
