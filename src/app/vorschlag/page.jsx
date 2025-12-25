"use client";
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
    <div className="flex min-h-screen flex-col items-center justify-center px-6 pb-20 pt-32 font-sans">
      <div className="pointer-events-none absolute left-1/2 top-20 -z-10 h-[40rem] w-[40rem] -translate-x-1/2 rounded-full bg-purple-300/30 opacity-30 mix-blend-multiply blur-[120px] dark:bg-purple-900/20 dark:opacity-40 dark:mix-blend-screen"></div>

      <div className="mb-10 max-w-2xl text-center">
        <h1 className="mb-4 text-4xl font-bold text-slate-900 dark:text-white">
          Filmvorschlag
        </h1>
        <p className="text-lg text-slate-600 dark:text-slate-300">
          Hast du einen Film gesehen, der mich umhauen wird?{" "}
          <br className="hidden sm:block" />
          Schreib ihn mir!
        </p>
      </div>

      <div className="relative w-full max-w-lg overflow-hidden rounded-3xl border border-white/50 bg-white/60 p-8 shadow-xl backdrop-blur-xl dark:border-white/10 dark:bg-slate-900/60 md:p-10">
        {status !== "success" && (
          <form
            onSubmit={handleSubmit}
            className={`transition-opacity duration-300 ${status === "loading" ? "pointer-events-none opacity-50" : "opacity-100"}`}
          >
            <div className="mb-6">
              <label
                htmlFor="title"
                className="mb-2 block flex items-center gap-2 text-sm font-semibold text-slate-700 dark:text-slate-300"
              >
                <Film className="h-4 w-4 text-blue-600 dark:text-blue-400" />{" "}
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
                className="w-full rounded-xl border border-slate-200 bg-white/50 px-4 py-3 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-200 dark:border-slate-700 dark:bg-slate-800/50 dark:text-white dark:placeholder-slate-500 dark:focus:border-blue-400 dark:focus:ring-blue-900/50"
              />
            </div>

            <div className="mb-6">
              <label
                htmlFor="genre"
                className="mb-2 block text-sm font-semibold text-slate-700 dark:text-slate-300"
              >
                Genre (Optional)
              </label>
              <select
                id="genre"
                name="genre"
                value={formData.genre}
                onChange={handleChange}
                className="w-full cursor-pointer appearance-none rounded-xl border border-slate-200 bg-white/50 px-4 py-3 text-slate-600 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-200 dark:border-slate-700 dark:bg-slate-800/50 dark:text-slate-200 dark:focus:border-blue-400 dark:focus:ring-blue-900/50"
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
                className="mb-2 block flex items-center gap-2 text-sm font-semibold text-slate-700 dark:text-slate-300"
              >
                <MessageSquare className="h-4 w-4 text-purple-600 dark:text-purple-400" />{" "}
                Warum muss ich ihn sehen?
              </label>
              <textarea
                id="comment"
                name="comment"
                rows="3"
                value={formData.comment}
                onChange={handleChange}
                placeholder="Der Plot Twist am Ende ist..."
                className="w-full resize-none rounded-xl border border-slate-200 bg-white/50 px-4 py-3 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-200 dark:border-slate-700 dark:bg-slate-800/50 dark:text-white dark:placeholder-slate-500 dark:focus:border-blue-400 dark:focus:ring-blue-900/50"
              ></textarea>
            </div>

            <button
              type="submit"
              // disabled={status === "loading"}
              disabled={true}
              className="flex w-full items-center justify-center gap-2 rounded-xl bg-slate-900 py-4 font-bold text-white shadow-lg transition-all hover:scale-[1.02] hover:bg-slate-800 active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-70 dark:bg-blue-600 dark:hover:bg-blue-500"
            >
              {status === "loading" ? (
                <>
                  <Loader2 className="h-5 w-5 animate-spin" /> Wird gesendet...
                </>
              ) : (
                <>
                  Vorschlag senden <Send className="h-5 w-5" />
                </>
              )}
            </button>
          </form>
        )}

        {status === "success" && (
          <div className="animate-in fade-in zoom-in absolute inset-0 flex flex-col items-center justify-center bg-white/50 p-8 text-center backdrop-blur-md duration-300 dark:bg-slate-900/50">
            <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-green-100 shadow-sm dark:bg-green-900/30">
              <CheckCircle className="h-10 w-10 text-green-600 dark:text-green-400" />
            </div>

            <h3 className="mb-2 text-2xl font-bold text-slate-900 dark:text-white">
              Vielen Dank!
            </h3>

            <p className="mb-8 text-slate-600 dark:text-slate-300">
              Ich habe deinen Tipp <strong>"{formData.title}"</strong> notiert
              und schaue mir den Trailer an.
            </p>

            <button
              onClick={handleReset}
              className="rounded-full px-6 py-2 font-medium text-slate-700 transition hover:bg-slate-200 dark:text-slate-300 dark:hover:bg-slate-800"
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
