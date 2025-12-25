import BackgroundBlobs from "@/src/components/ui/coloredbackground";

export default function HomePage() {
  return (
    <main className="relative isolate flex-grow overflow-hidden bg-slate-50 px-6 pb-20 pt-32 transition-colors duration-300 dark:bg-slate-950">
      {/* blurry background */}
      <BackgroundBlobs />

      <div className="absolute right-6 top-20 z-30 md:right-10 md:top-24">
        <div className="rounded-full border border-white/20 bg-white/30 p-2 shadow-sm backdrop-blur-md dark:border-white/10 dark:bg-black/20">
          {/* <ThemeToggle /> */}
        </div>
      </div>

      <div className="container relative z-10 mx-auto mb-20 max-w-3xl text-center">
        <div className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50/80 px-3 py-1 text-blue-600 shadow-sm backdrop-blur-sm dark:border-blue-800 dark:bg-blue-900/30 dark:text-blue-300">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-blue-400 opacity-75"></span>
            <span className="relative inline-flex h-2 w-2 rounded-full bg-blue-500 dark:bg-blue-400"></span>
          </span>
          {/* Version v{__APP_VERSION__} */}
        </div>

        <h1 className="mb-6 text-5xl font-extrabold leading-tight text-slate-900 md:text-7xl dark:text-white">
          Build your own{" "}
          <span className="bg-gradient-to-r from-blue-600 to-violet-600 bg-clip-text text-transparent dark:from-blue-400 dark:to-violet-400">
            dreams
          </span>
          .
        </h1>

        {/* Text: Slate-600 zu Slate-300/400 */}
        <p className="mx-auto mb-8 max-w-2xl text-xl leading-relaxed text-slate-600 md:text-2xl dark:text-slate-400">
          weristmatthes.de in ganz neuem Style
        </p>

        <p className="mx-auto mb-8 max-w-2xl text-xl leading-relaxed text-slate-600 md:text-2xl dark:text-slate-400">
          Schau Dich gerne um!
        </p>
      </div>

      <div className="container relative z-10 mx-auto px-6">
        <div className="grid gap-8 md:grid-cols-3">
          {/* {Dataset.map((feature, index) => (
            <Link
              to={feature.link}
              key={index}
              className="p-6 rounded-2xl cursor-pointer shadow-sm transition-all duration-300 backdrop-blur-md
                            bg-white/60 border border-white/50 hover:bg-white/75 hover:shadow-md
                            dark:bg-slate-800/40 dark:border-white/10 dark:hover:bg-slate-800/60 dark:hover:border-white/20"
            >
              <div
                className={`w-10 h-10 rounded-lg flex items-center justify-center mb-4 ${feature.bg} ${feature.color}`}
              >
                {feature.icon}
              </div>

              <h3 className="font-bold mb-1 text-slate-900 dark:text-slate-100">
                {feature.title}
              </h3>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                {feature.text}
              </p>
            </Link>
          ))} */}
        </div>
      </div>

      {/* <Logos /> */}
    </main>
  );
}
