import React, { useState } from "react";
import { Star, Filter, Clapperboard } from "lucide-react";
import BackgroundBlobs from "../components/ui/landingpage/coloredbackground";

const moviesData = [
  {
    id: 1,
    title: "Inception",
    image: "https://image.tmdb.org/t/p/w500/9gk7admal4zl67YrxIo2hMULR96.jpg",
    rating: 9.5,
    category: "Sci-Fi",
    comment: "Ein Meisterwerk. Hans Zimmers Musik ist unglaublich.",
  },
  {
    id: 2,
    title: "Der Pate",
    image: "https://image.tmdb.org/t/p/w500/3bhkrj58Vtu7enYsRolD1fZdja1.jpg",
    rating: 10,
    category: "Crime",
    comment: "Ein Angebot, das man nicht ablehnen kann.",
  },
  {
    id: 3,
    title: "Grand Budapest Hotel",
    image: "https://image.tmdb.org/t/p/w500/eWdyYQreja6JGCzqHWXpWHDrrPo.jpg",
    rating: 8.0,
    category: "Comedy",
    comment: "Visuell einfach einzigartig.",
  },
  {
    id: 4,
    title: "Sharknado",
    image: "https://image.tmdb.org/t/p/w500/xv9X48iT6d0k8d8T6V9k8d8T6V9.jpg",
    rating: 3.5,
    category: "Trash",
    comment: "So schlecht, dass es fast schon wieder gut ist.",
  },
];

const Movies = () => {
  const [activeCategory, setActiveCategory] = useState("Alle");

  const categories = [
    "Alle",
    ...new Set(moviesData.map((movie) => movie.category)),
  ];

  const filteredMovies =
    activeCategory === "Alle"
      ? moviesData
      : moviesData.filter((movie) => movie.category === activeCategory);

  // Helfer für Rating-Farben (Jetzt mit Darkmode Klassen!)
  const getRatingColor = (rating) => {
    if (rating >= 8)
      return "bg-green-100 text-green-700 border-green-200 dark:bg-green-900/30 dark:text-green-400 dark:border-green-800";
    if (rating >= 5)
      return "bg-yellow-100 text-yellow-700 border-yellow-200 dark:bg-yellow-900/30 dark:text-yellow-400 dark:border-yellow-800";
    return "bg-red-100 text-red-700 border-red-200 dark:bg-red-900/30 dark:text-red-400 dark:border-red-800";
  };

  return (
    <div className="min-h-screen pt-32 pb-20 px-6 font-sans relative overflow-hidden">
      <BackgroundBlobs />
      <div className="container mx-auto max-w-6xl mb-12">
        <div className="flex items-center gap-3 mb-4">
          <div className="p-3 rounded-xl bg-rose-100 text-rose-600 dark:bg-rose-900/30 dark:text-rose-300">
            <Clapperboard className="w-6 h-6" />
          </div>
          <h1 className="text-4xl font-bold text-slate-900 dark:text-white">
            Watchlist & Ranking
          </h1>
        </div>
        <p className="text-slate-600 dark:text-slate-400 text-lg max-w-2xl">
          Filme, die mich bewegt, begeistert oder enttäuscht haben. Hier ist
          mein persönliches Ranking.
        </p>
      </div>

      <div className="container mx-auto max-w-6xl mb-10 overflow-x-auto pb-4">
        <div className="flex gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all whitespace-nowrap border
                    ${
                      activeCategory === cat
                        ? "bg-slate-900 text-white border-slate-900 dark:bg-white dark:text-slate-900 dark:border-white shadow-md scale-105"
                        : "bg-white/50 text-slate-600 border-slate-200 hover:bg-white dark:bg-slate-800/40 dark:text-slate-300 dark:border-slate-700 dark:hover:bg-slate-700"
                    }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredMovies.map((movie) => (
            <div
              key={movie.id}
              className="group rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 backdrop-blur-md
                              bg-white/60 border border-white/50
                              dark:bg-slate-800/40 dark:border-white/10"
            >
              <div className="relative aspect-[2/3] overflow-hidden bg-slate-200 dark:bg-slate-800">
                <img
                  src={
                    movie.image || "https://placehold.co/400x600?text=No+Image"
                  }
                  alt={movie.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />

                <span className="absolute top-3 left-3 bg-black/60 backdrop-blur-md text-white text-xs px-2 py-1 rounded-md font-medium border border-white/20">
                  {movie.category}
                </span>
              </div>

              <div className="p-5">
                <div className="flex justify-between items-start mb-2 gap-2">
                  <h3 className="font-bold text-lg leading-tight text-slate-900 dark:text-white">
                    {movie.title}
                  </h3>

                  <div
                    className={`flex items-center gap-1 px-2 py-1 rounded-lg border text-xs font-bold whitespace-nowrap ${getRatingColor(movie.rating)}`}
                  >
                    <Star className="w-3 h-3 fill-current" />
                    {movie.rating}
                  </div>
                </div>

                <p className="text-sm line-clamp-3 text-slate-600 dark:text-slate-400">
                  {movie.comment}
                </p>
              </div>
            </div>
          ))}
        </div>

        {filteredMovies.length === 0 && (
          <div className="text-center py-20 text-slate-400 dark:text-slate-500">
            <Filter className="w-12 h-12 mx-auto mb-4 opacity-50" />
            <p>Keine Filme in dieser Kategorie gefunden.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Movies;
