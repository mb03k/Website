import { Dataset } from "../components/ui/landingpage/featuregrid";
import { Link } from "react-router-dom";
import { OUTER_ROUTES } from "../routes/routes";
import { IMAGE_PATH } from "../routes/links";
import ThemeToggle from "../components/layout/ThemeToggle";
import BackgroundBlobs from "../components/ui/landingpage/coloredbackground";

const Main = () => {
  return (
    <main className="relative flex-grow pt-32 pb-20 px-6 bg-slate-50 dark:bg-slate-950 overflow-hidden isolate transition-colors duration-300">
      {/* blurry background */}
      <BackgroundBlobs />

      <div className="absolute top-20 right-6 md:top-24 md:right-10 z-30">
        <div className="p-2 rounded-full bg-white/30 dark:bg-black/20 backdrop-blur-md border border-white/20 dark:border-white/10 shadow-sm">
          <ThemeToggle />
        </div>
      </div>

      <div className="relative z-10 container mx-auto text-center max-w-3xl mb-20">
        <div
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full 
                        bg-blue-50/80 border border-blue-100 text-blue-600 shadow-sm backdrop-blur-sm
                        dark:bg-blue-900/30 dark:border-blue-800 dark:text-blue-300"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500 dark:bg-blue-400"></span>
          </span>
          Version v{__APP_VERSION__}
        </div>

        <h1 className="text-5xl md:text-7xl font-extrabold text-slate-900 dark:text-white mb-6 leading-tight">
          Build your own{" "}
          <span
            className="text-transparent bg-clip-text bg-gradient-to-r 
                           from-blue-600 to-violet-600
                           dark:from-blue-400 dark:to-violet-400"
          >
            dreams
          </span>
          .
        </h1>

        {/* Text: Slate-600 zu Slate-300/400 */}
        <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-400 mb-8 leading-relaxed max-w-2xl mx-auto">
          weristmatthes.de in ganz neuem Style
        </p>

        <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-400 mb-8 leading-relaxed max-w-2xl mx-auto">
          Schau dich gerne um!
        </p>
      </div>

      <div className="relative z-10 container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8">
          {Dataset.map((feature, index) => (
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
          ))}
        </div>
      </div>

      <div className="mt-24 mb-10 flex justify-center items-center gap-8 relative z-10">
        {/* Nextcloud */}
        <a
          target="_blank"
          rel="noopener noreferrer"
          href={OUTER_ROUTES.NEXTCLOUD}
        >
          <img
            src={IMAGE_PATH.LOGO_NEXTCLOUD_PNG}
            alt="Nextcloud Logo"
            className="h-20 w-auto object-contain cursor-pointer hover:scale-105 transition-transform duration-300"
          />
        </a>

        {/* Nginx */}
        <a target="_blank" rel="noopener noreferrer" href={OUTER_ROUTES.NGINX}>
          <img
            src={IMAGE_PATH.LOGO_NGINX_PNG}
            alt="Nginx Logo"
            className="h-20 w-auto object-contain cursor-pointer hover:scale-105 transition-transform duration-300"
          />
        </a>

        {/* Jellyfin */}
        <a
          target="_blank"
          rel="noopener noreferrer"
          href={OUTER_ROUTES.JELLIFYN}
        >
          <img
            src={IMAGE_PATH.LOGO_JELLYFIN}
            alt="Jellyfin Logo"
            className="h-20 w-auto object-contain cursor-pointer hover:scale-105 transition-transform duration-300"
          />
        </a>
      </div>
    </main>
  );
};

export default Main;
