import React, { useState } from "react";
import { Star, Filter, Clapperboard } from "lucide-react";

// --- 1. DEINE DATEN ---
// Bilder: Am besten in 'public/images/' speichern oder externe URLs nutzen.
const moviesData = [
  {
    id: 1,
    title: "Inception",
    image: "https://image.tmdb.org/t/p/w500/9gk7admal4zl67YrxIo2hMULR96.jpg", // Beispielbild
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
    image: "https://image.tmdb.org/t/p/w500/xv9X48iT6d0k8d8T6V9k8d8T6V9.jpg", // Fake URL für Beispiel
    rating: 3.5,
    category: "Trash",
    comment: "So schlecht, dass es fast schon wieder gut ist.",
  },
];

const Movies = () => {
  const [activeCategory, setActiveCategory] = useState("Alle");

  // Automatisch alle Kategorien aus den Daten sammeln + "Alle" hinzufügen
  const categories = [
    "Alle",
    ...new Set(moviesData.map((movie) => movie.category)),
  ];

  // Filtern der Filme
  const filteredMovies =
    activeCategory === "Alle"
      ? moviesData
      : moviesData.filter((movie) => movie.category === activeCategory);

  // Helfer für Rating-Farben
  const getRatingColor = (rating) => {
    if (rating >= 8) return "bg-green-100 text-green-700 border-green-200";
    if (rating >= 5) return "bg-yellow-100 text-yellow-700 border-yellow-200";
    return "bg-red-100 text-red-700 border-red-200";
  };

  return (
    <div className="min-h-screen bg-slate-50 pt-32 pb-20 px-6 font-sans">
      {/* Header Bereich */}
      <div className="container mx-auto max-w-6xl mb-12">
        <div className="flex items-center gap-3 mb-4">
          <div className="p-3 bg-rose-100 text-rose-600 rounded-xl">
            <Clapperboard className="w-6 h-6" />
          </div>
          <h1 className="text-4xl font-bold text-slate-900">
            Watchlist & Ranking
          </h1>
        </div>
        <p className="text-slate-600 text-lg max-w-2xl">
          Filme, die mich bewegt, begeistert oder enttäuscht haben. Hier ist
          mein persönliches Ranking.
        </p>
      </div>

      {/* Filter Buttons */}
      <div className="container mx-auto max-w-6xl mb-10 overflow-x-auto pb-4">
        <div className="flex gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all whitespace-nowrap
                ${
                  activeCategory === cat
                    ? "bg-slate-900 text-white shadow-md scale-105"
                    : "bg-white text-slate-600 hover:bg-slate-200 border border-slate-200"
                }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Movies Grid */}
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredMovies.map((movie) => (
            <div
              key={movie.id}
              className="group bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              {/* Bild Container */}
              <div className="relative aspect-[2/3] overflow-hidden bg-slate-200">
                {/* Das Bild - Wenn du keine hast, nimm einen Platzhalter */}
                <img
                  src={
                    movie.image || "https://placehold.co/400x600?text=No+Image"
                  }
                  alt={movie.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />

                {/* Kategorie Badge im Bild */}
                <span className="absolute top-3 left-3 bg-black/60 backdrop-blur-md text-white text-xs px-2 py-1 rounded-md font-medium border border-white/20">
                  {movie.category}
                </span>
              </div>

              {/* Inhalt */}
              <div className="p-5">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-bold text-slate-900 text-lg leading-tight">
                    {movie.title}
                  </h3>

                  {/* Rating Badge */}
                  <div
                    className={`flex items-center gap-1 px-2 py-1 rounded-lg border text-xs font-bold ${getRatingColor(movie.rating)}`}
                  >
                    <Star className="w-3 h-3 fill-current" />
                    {movie.rating}
                  </div>
                </div>

                <p className="text-slate-500 text-sm line-clamp-3">
                  {movie.comment}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Leerer Zustand (falls Filter nichts findet) */}
        {filteredMovies.length === 0 && (
          <div className="text-center py-20 text-slate-400">
            <Filter className="w-12 h-12 mx-auto mb-4 opacity-50" />
            <p>Keine Filme in dieser Kategorie gefunden.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Movies;
