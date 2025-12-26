"use client";

import React, { useState } from "react";
import { Star, Filter, Clapperboard } from "lucide-react";
import BackgroundBlobs from "@/src/components/ui/coloredbackground";

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

  const getRatingColor = (rating) => {
    if (rating >= 8)
      return "bg-green-100 text-green-700 border-green-200 dark:bg-green-900/30 dark:text-green-400 dark:border-green-800";
    if (rating >= 5)
      return "bg-yellow-100 text-yellow-700 border-yellow-200 dark:bg-yellow-900/30 dark:text-yellow-400 dark:border-yellow-800";
    return "bg-red-100 text-red-700 border-red-200 dark:bg-red-900/30 dark:text-red-400 dark:border-red-800";
  };

  return (
    <div className="relative min-h-screen overflow-hidden px-6 pb-20 pt-32 font-sans">
      <BackgroundBlobs />
      <div className="container mx-auto mb-12 max-w-6xl">
        <div className="mb-4 flex items-center gap-3">
          <div className="rounded-xl bg-rose-100 p-3 text-rose-600 dark:bg-rose-900/30 dark:text-rose-300">
            <Clapperboard className="h-6 w-6" />
          </div>
          <h1 className="text-4xl font-bold text-slate-900 dark:text-white">
            Watchlist & Ranking
          </h1>
        </div>
        <p className="max-w-2xl text-lg text-slate-600 dark:text-slate-400">
          Filme, die mich bewegt, begeistert oder enttäuscht haben. Hier ist
          mein persönliches Ranking.
        </p>
      </div>

      <div className="container mx-auto mb-10 max-w-6xl overflow-x-auto pb-4">
        <div className="flex gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`whitespace-nowrap rounded-full border px-4 py-2 text-sm font-medium transition-all ${
                activeCategory === cat
                  ? "scale-105 border-slate-900 bg-slate-900 text-white shadow-md dark:border-white dark:bg-white dark:text-slate-900"
                  : "border-slate-200 bg-white/50 text-slate-600 hover:bg-white dark:border-slate-700 dark:bg-slate-800/40 dark:text-slate-300 dark:hover:bg-slate-700"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {filteredMovies.map((movie) => (
            <div
              key={movie.id}
              className="group overflow-hidden rounded-2xl border border-white/50 bg-white/60 shadow-sm backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl dark:border-white/10 dark:bg-slate-800/40"
            >
              <div className="relative aspect-[2/3] overflow-hidden bg-slate-200 dark:bg-slate-800">
                <img
                  src={
                    movie.image || "https://placehold.co/400x600?text=No+Image"
                  }
                  alt={movie.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />

                <span className="absolute left-3 top-3 rounded-md border border-white/20 bg-black/60 px-2 py-1 text-xs font-medium text-white backdrop-blur-md">
                  {movie.category}
                </span>
              </div>

              <div className="p-5">
                <div className="mb-2 flex items-start justify-between gap-2">
                  <h3 className="text-lg font-bold leading-tight text-slate-900 dark:text-white">
                    {movie.title}
                  </h3>

                  <div
                    className={`flex items-center gap-1 whitespace-nowrap rounded-lg border px-2 py-1 text-xs font-bold ${getRatingColor(movie.rating)}`}
                  >
                    <Star className="h-3 w-3 fill-current" />
                    {movie.rating}
                  </div>
                </div>

                <p className="line-clamp-3 text-sm text-slate-600 dark:text-slate-400">
                  {movie.comment}
                </p>
              </div>
            </div>
          ))}
        </div>

        {filteredMovies.length === 0 && (
          <div className="py-20 text-center text-slate-400 dark:text-slate-500">
            <Filter className="mx-auto mb-4 h-12 w-12 opacity-50" />
            <p>Keine Filme in dieser Kategorie gefunden.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Movies;
