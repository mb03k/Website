import BackgroundBlobs from "@/src/components/ui/BackgroundBlobs";
import ThemeToggle from "@/src/components/layout/ThemeToggle";
import HeroSection from "@/src/components/ui/landing/HeroSection";
import FeatureGrid from "@/src/components/ui/landing/featuregrid";
import Logos from "@/src/components/ui/landing/logos";

export default function HomePage() {
  return (
    <main className="relative isolate flex-grow overflow-hidden px-6 pb-20 pt-32 transition-colors duration-300 dark:bg-slate-950">
      <BackgroundBlobs />

      <div className="absolute right-6 top-20 z-30 md:right-10 md:top-24">
        <div className="rounded-full border border-white/20 bg-white/30 p-2 shadow-sm backdrop-blur-md dark:border-white/10 dark:bg-black/20">
          <ThemeToggle />
        </div>
      </div>

      <HeroSection />

      <FeatureGrid />

      <Logos />
    </main>
  );
}
