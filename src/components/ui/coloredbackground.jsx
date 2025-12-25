const BackgroundBlobs = () => {
  return (
    <div className="pointer-events-none absolute inset-0 -z-10 h-full w-full overflow-hidden">
      <div className="absolute left-[-10%] top-[-10%] h-2/3 w-2/3 rounded-full bg-indigo-300/40 opacity-70 mix-blend-multiply blur-3xl dark:bg-indigo-600/20 dark:opacity-50 dark:mix-blend-screen"></div>

      <div className="absolute right-[-10%] top-[-10%] h-2/3 w-2/3 rounded-full bg-cyan-300/40 opacity-70 mix-blend-multiply blur-3xl dark:bg-cyan-500/20 dark:opacity-50 dark:mix-blend-screen"></div>

      <div className="absolute bottom-[-10%] left-[-10%] h-2/3 w-2/3 rounded-full bg-fuchsia-300/40 opacity-70 mix-blend-multiply blur-3xl dark:bg-fuchsia-600/20 dark:opacity-50 dark:mix-blend-screen"></div>

      <div className="absolute bottom-[-10%] right-[-10%] h-2/3 w-2/3 rounded-full bg-amber-200/40 opacity-70 mix-blend-multiply blur-3xl dark:bg-amber-600/20 dark:opacity-50 dark:mix-blend-screen"></div>
    </div>
  );
};

export default BackgroundBlobs;
