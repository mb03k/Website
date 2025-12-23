import {
  Dataset,
  Aboutme,
  Projects,
  Movies,
} from "../components/ui/landingpage/featuregrid";

const Main = () => {
  return (
    <main className="relative flex-grow pt-32 pb-20 px-6 bg-slate-50 overflow-hidden isolate">
      {/* blurry background */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div
          className="absolute top-[-10%] left-[-10%] w-3/4 h-3/4 rounded-full 
                               bg-violet-300/40 mix-blend-multiply blur-3xl opacity-70 animate-blob"
        ></div>

        <div
          className="absolute top-[-10%] right-[-10%] w-3/4 h-3/4 rounded-full 
                               bg-cyan-300/40 mix-blend-multiply blur-3xl opacity-70 animate-blob animation-delay-2000"
        ></div>

        <div
          className="absolute bottom-[-20%] left-[-10%] w-3/4 h-3/4 rounded-full 
                               bg-teal-200/40 mix-blend-multiply blur-3xl opacity-70 animate-blob animation-delay-4000"
        ></div>

        <div
          className="absolute bottom-[-20%] right-[-10%] w-3/4 h-3/4 rounded-full 
                               bg-orange-200/40 mix-blend-multiply blur-3xl opacity-70 animate-blob"
        ></div>
      </div>

      <div className="relative z-10 container mx-auto text-center max-w-3xl mb-20">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50/80 backdrop-blur-sm border border-blue-100 text-blue-600 text-xs font-semibold mb-6 shadow-sm">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
          </span>
          Version v{__APP_VERSION__}
        </div>

        <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 mb-6 leading-tight">
          Build your own{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-violet-600">
            dreams
          </span>
          .
        </h1>

        <p className="text-lg text-slate-600 mb-8 leading-relaxed max-w-2xl mx-auto">
          weristmatthes.de in ganz neuem Style
        </p>
        <p className="text-lg text-slate-600 mb-8 leading-relaxed max-w-2xl mx-auto">
          Schau dich gerne um!
        </p>
      </div>

      <div className="relative z-10 container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8">
          {/* 
          <Aboutme />

          <Movies />

          <Projects /> */}

          {Dataset.map((feature, index) => (
            <div
              key={index}
              className="p-6 rounded-2xl cursor-pointer bg-white/60 backdrop-blur-md shadow-sm border border-white/50 hover:shadow-md transition-shadow duration-300"
            >
              <div
                className={`w-10 h-10 rounded-lg flex items-center justify-center mb-4 ${feature.bg} ${feature.color}`}
              >
                {feature.icon}
              </div>

              <h3 className="font-bold mb-1 text-slate-900">{feature.title}</h3>
              <p className="text-sm text-slate-600">{feature.text}</p>
            </div>
          ))}
          {/* neue karten: algorithmen und readspeed / bilder die ich so gemacht habe? */}
        </div>
      </div>
    </main>
  );
};

export default Main;
