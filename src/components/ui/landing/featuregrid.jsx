import Link from "next/link";
import { DATASET } from "@/src/data/features";

export default function FeatureGrid() {
  return (
    <div className="container relative z-10 mx-auto px-6">
      <div className="grid gap-8 md:grid-cols-3">
        {DATASET.map((feature, index) => (
          <Link
            href={feature.link}
            key={index}
            className="group cursor-pointer rounded-2xl border border-white/50 bg-white/60 p-6 shadow-sm backdrop-blur-md transition-all duration-300 hover:bg-white/75 hover:shadow-md dark:border-white/10 dark:bg-slate-800/40 dark:hover:border-white/20 dark:hover:bg-slate-800/60"
          >
            <div
              className={`mb-4 flex h-10 w-10 items-center justify-center rounded-lg ${feature.bg} ${feature.color}`}
            >
              {feature.icon}
            </div>

            <h3 className="mb-1 font-bold text-slate-900 transition-colors group-hover:text-blue-600 dark:text-slate-100 dark:group-hover:text-blue-400">
              {feature.title}
            </h3>
            <p className="text-sm text-slate-600 dark:text-slate-400">
              {feature.text}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
}
