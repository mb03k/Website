const BackgroundBlobs = () => {
  return (
    <div className="absolute inset-0 -z-10 w-full h-full pointer-events-none overflow-hidden">
      <div
        className="absolute top-[-10%] left-[-10%] w-2/3 h-2/3 rounded-full 
                      bg-indigo-300/40 mix-blend-multiply blur-3xl opacity-70 
                      dark:bg-indigo-600/20 dark:mix-blend-screen dark:opacity-50"
      ></div>

      <div
        className="absolute top-[-10%] right-[-10%] w-2/3 h-2/3 rounded-full 
                      bg-cyan-300/40 mix-blend-multiply blur-3xl opacity-70 
                      dark:bg-cyan-500/20 dark:mix-blend-screen dark:opacity-50"
      ></div>

      <div
        className="absolute bottom-[-10%] left-[-10%] w-2/3 h-2/3 rounded-full 
                      bg-fuchsia-300/40 mix-blend-multiply blur-3xl opacity-70 
                      dark:bg-fuchsia-600/20 dark:mix-blend-screen dark:opacity-50"
      ></div>

      <div
        className="absolute bottom-[-10%] right-[-10%] w-2/3 h-2/3 rounded-full 
                      bg-amber-200/40 mix-blend-multiply blur-3xl opacity-70 
                      dark:bg-amber-600/20 dark:mix-blend-screen dark:opacity-50"
      ></div>
    </div>
  );
};

export default BackgroundBlobs;
