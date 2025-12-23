import React, { useState } from "react";
import { Send, Film, MessageSquare, CheckCircle, Loader2 } from "lucide-react";

const Movieproposal = () => {
  // State für die Formulardaten
  const [formData, setFormData] = useState({
    title: "",
    genre: "",
    comment: "",
  });

  // State für den Status (tippt, lädt, gesendet)
  const [status, setStatus] = useState("idle"); // idle | loading | success

  // Eingaben verarbeiten
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Absenden simulieren
  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("loading");

    // Wir simulieren eine Netzwerkverzögerung von 1.5 Sekunden
    setTimeout(() => {
      setStatus("success");
      // Hier würde normalerweise der API Call stehen
      console.log("Vorschlag erhalten:", formData);
    }, 1500);
  };

  // Zurücksetzen für neuen Vorschlag
  const handleReset = () => {
    setFormData({ title: "", genre: "", comment: "" });
    setStatus("idle");
  };

  return (
    <div className="min-h-screen bg-slate-50 pt-32 pb-20 px-6 font-sans flex flex-col items-center justify-center">
      {/* Hintergrund Deko (optional, passend zu deinem Style) */}
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[40rem] h-[40rem] bg-indigo-200 rounded-full blur-[120px] opacity-30 -z-10 pointer-events-none"></div>

      {/* Header */}
      <div className="text-center mb-10 max-w-2xl">
        <h1 className="text-4xl font-bold text-slate-900 mb-4">
          Filmvorschlag
        </h1>
        <p className="text-slate-600 text-lg">
          Hast du einen Film gesehen, der mich umhauen wird?{" "}
          <br className="hidden sm:block" />
          Schreib ihn mir!
        </p>
      </div>

      {/* Die Karte / Das Formular */}
      <div className="w-full max-w-lg bg-white/70 backdrop-blur-xl border border-white/50 shadow-xl rounded-3xl p-8 md:p-10 relative overflow-hidden">
        {/* ZUSTAND 1: Formular */}
        {status !== "success" && (
          <form
            onSubmit={handleSubmit}
            className={`transition-opacity duration-300 ${status === "loading" ? "opacity-50 pointer-events-none" : "opacity-100"}`}
          >
            {/* Input: Titel */}
            <div className="mb-6">
              <label
                htmlFor="title"
                className="block text-sm font-semibold text-slate-700 mb-2 flex items-center gap-2"
              >
                <Film className="w-4 h-4 text-blue-600" /> Filmtitel *
              </label>
              <input
                type="text"
                id="title"
                name="title"
                required
                value={formData.title}
                onChange={handleChange}
                placeholder="A Nymphoid Barbarian in Dinosaur Hell"
                className="w-full px-4 py-3 rounded-xl bg-white border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition"
              />
            </div>

            {/* Input: Genre */}
            <div className="mb-6">
              <label
                htmlFor="genre"
                className="block text-sm font-semibold text-slate-700 mb-2"
              >
                Genre (Optional)
              </label>
              <select
                id="genre"
                name="genre"
                value={formData.genre}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl bg-white border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition appearance-none cursor-pointer text-slate-600"
              >
                <option value="" disabled>
                  Wähle ein Genre...
                </option>
                <option value="Sci-Fi">Sci-Fi</option>
                <option value="Drama">Drama</option>
                <option value="Comedy">Comedy</option>
                <option value="Thriller">Thriller</option>
                <option value="Horror">Horror</option>
                <option value="Action">Action</option>
                <option value="Andere">Andere</option>
              </select>
            </div>

            {/* Input: Kommentar */}
            <div className="mb-8">
              <label
                htmlFor="comment"
                className="block text-sm font-semibold text-slate-700 mb-2 flex items-center gap-2"
              >
                <MessageSquare className="w-4 h-4 text-purple-600" /> Warum muss
                ich ihn sehen?
              </label>
              <textarea
                id="comment"
                name="comment"
                rows="3"
                value={formData.comment}
                onChange={handleChange}
                placeholder="Der Plot Twist am Ende ist..."
                className="w-full px-4 py-3 rounded-xl bg-white border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition resize-none"
              ></textarea>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={true}
              className="w-full bg-slate-900 text-white font-bold py-4 rounded-xl shadow-lg hover:bg-slate-800 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {status === "loading" ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" /> Wird gesendet...
                </>
              ) : (
                <>
                  Vorschlag senden <Send className="w-5 h-5" />
                </>
              )}
            </button>
          </form>
        )}

        {/* ZUSTAND 2: Erfolgsmeldung */}
        {status === "success" && (
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-white/90 backdrop-blur-md p-8 text-center animate-in fade-in zoom-in duration-300">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-6 shadow-sm">
              <CheckCircle className="w-10 h-10 text-green-600" />
            </div>
            <h3 className="text-2xl font-bold text-slate-900 mb-2">
              Vielen Dank!
            </h3>
            <p className="text-slate-600 mb-8">
              Ich habe deinen Tipp <strong>"{formData.title}"</strong> notiert
              und schaue mir den Trailer an.
            </p>
            <button
              onClick={handleReset}
              className="px-6 py-2 bg-slate-100 text-slate-700 font-medium rounded-full hover:bg-slate-200 transition"
            >
              Noch einen vorschlagen
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Movieproposal;
