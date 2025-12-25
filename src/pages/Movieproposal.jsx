import React, { useState } from "react";
import { Send, Film, MessageSquare, CheckCircle, Loader2 } from "lucide-react";

const Movieproposal = () => {
  const [formData, setFormData] = useState({
    title: "",
    genre: "",
    comment: "",
  });

  const [status, setStatus] = useState("idle"); // idle | loading | success

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("loading");

    setTimeout(() => {
      setStatus("success");
      console.log("Vorschlag erhalten:", formData);
    }, 1500);
  };

  const handleReset = () => {
    setFormData({ title: "", genre: "", comment: "" });
    setStatus("idle");
  };

  return (
    <div className="min-h-screen pt-32 pb-20 px-6 font-sans flex flex-col items-center justify-center">
      <div
        className="absolute top-20 left-1/2 -translate-x-1/2 w-[40rem] h-[40rem] 
                      bg-purple-300/30 mix-blend-multiply blur-[120px] opacity-30 
                      dark:bg-purple-900/20 dark:mix-blend-screen dark:opacity-40
                      -z-10 pointer-events-none rounded-full"
      ></div>

      <div className="text-center mb-10 max-w-2xl">
        <h1 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">
          Filmvorschlag
        </h1>
        <p className="text-slate-600 dark:text-slate-300 text-lg">
          Hast du einen Film gesehen, der mich umhauen wird?{" "}
          <br className="hidden sm:block" />
          Schreib ihn mir!
        </p>
      </div>

      <div
        className="w-full max-w-lg relative overflow-hidden p-8 md:p-10 rounded-3xl shadow-xl
                      bg-white/60 backdrop-blur-xl border border-white/50 
                      dark:bg-slate-900/60 dark:border-white/10"
      >
        {status !== "success" && (
          <form
            onSubmit={handleSubmit}
            className={`transition-opacity duration-300 ${status === "loading" ? "opacity-50 pointer-events-none" : "opacity-100"}`}
          >
            <div className="mb-6">
              <label
                htmlFor="title"
                className="block text-sm font-semibold mb-2 flex items-center gap-2
                           text-slate-700 dark:text-slate-300"
              >
                <Film className="w-4 h-4 text-blue-600 dark:text-blue-400" />{" "}
                Filmtitel *
              </label>
              <input
                type="text"
                id="title"
                name="title"
                required
                value={formData.title}
                onChange={handleChange}
                placeholder="A Nymphoid Barbarian in Dinosaur Hell"
                className="w-full px-4 py-3 rounded-xl outline-none transition
                           bg-white/50 border border-slate-200 
                           focus:border-blue-500 focus:ring-2 focus:ring-blue-200
                           dark:bg-slate-800/50 dark:border-slate-700 dark:text-white 
                           dark:focus:border-blue-400 dark:focus:ring-blue-900/50 dark:placeholder-slate-500"
              />
            </div>

            <div className="mb-6">
              <label
                htmlFor="genre"
                className="block text-sm font-semibold mb-2 text-slate-700 dark:text-slate-300"
              >
                Genre (Optional)
              </label>
              <select
                id="genre"
                name="genre"
                value={formData.genre}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl outline-none transition appearance-none cursor-pointer
                           bg-white/50 border border-slate-200 text-slate-600
                           focus:border-blue-500 focus:ring-2 focus:ring-blue-200
                           dark:bg-slate-800/50 dark:border-slate-700 dark:text-slate-200 
                           dark:focus:border-blue-400 dark:focus:ring-blue-900/50"
              >
                <option value="" disabled className="dark:bg-slate-900">
                  Wähle ein Genre...
                </option>
                <option value="Sci-Fi" className="dark:bg-slate-900">
                  Sci-Fi
                </option>
                <option value="Drama" className="dark:bg-slate-900">
                  Drama
                </option>
                <option value="Comedy" className="dark:bg-slate-900">
                  Comedy
                </option>
                <option value="Thriller" className="dark:bg-slate-900">
                  Thriller
                </option>
                <option value="Horror" className="dark:bg-slate-900">
                  Horror
                </option>
                <option value="Action" className="dark:bg-slate-900">
                  Action
                </option>
                <option value="Andere" className="dark:bg-slate-900">
                  Andere
                </option>
              </select>
            </div>

            <div className="mb-8">
              <label
                htmlFor="comment"
                className="block text-sm font-semibold mb-2 flex items-center gap-2
                           text-slate-700 dark:text-slate-300"
              >
                <MessageSquare className="w-4 h-4 text-purple-600 dark:text-purple-400" />{" "}
                Warum muss ich ihn sehen?
              </label>
              <textarea
                id="comment"
                name="comment"
                rows="3"
                value={formData.comment}
                onChange={handleChange}
                placeholder="Der Plot Twist am Ende ist..."
                className="w-full px-4 py-3 rounded-xl outline-none transition resize-none
                           bg-white/50 border border-slate-200 
                           focus:border-blue-500 focus:ring-2 focus:ring-blue-200
                           dark:bg-slate-800/50 dark:border-slate-700 dark:text-white 
                           dark:focus:border-blue-400 dark:focus:ring-blue-900/50 dark:placeholder-slate-500"
              ></textarea>
            </div>

            <button
              type="submit"
              disabled={status === "loading"}
              className="w-full py-4 rounded-xl font-bold shadow-lg transition-all flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed
                         bg-slate-900 text-white hover:bg-slate-800 hover:scale-[1.02] active:scale-[0.98]
                         dark:bg-blue-600 dark:hover:bg-blue-500"
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

        {status === "success" && (
          <div
            className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center animate-in fade-in zoom-in duration-300
                          backdrop-blur-md bg-white/50 dark:bg-slate-900/50"
          >
            <div
              className="w-20 h-20 rounded-full flex items-center justify-center mb-6 shadow-sm
                            bg-green-100 dark:bg-green-900/30"
            >
              <CheckCircle className="w-10 h-10 text-green-600 dark:text-green-400" />
            </div>

            <h3 className="text-2xl font-bold mb-2 text-slate-900 dark:text-white">
              Vielen Dank!
            </h3>

            <p className="text-slate-600 dark:text-slate-300 mb-8">
              Ich habe deinen Tipp <strong>"{formData.title}"</strong> notiert
              und schaue mir den Trailer an.
            </p>

            <button
              onClick={handleReset}
              className="px-6 py-2 font-medium rounded-full transition
                         text-slate-700 hover:bg-slate-200 
                         dark:text-slate-300 dark:hover:bg-slate-800"
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
