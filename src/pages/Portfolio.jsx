import React, { useState } from "react";
import {
  Lock,
  FileText,
  Download,
  CheckCircle,
  AlertCircle,
  ChevronRight,
  Briefcase,
} from "lucide-react";

const EmployerLogin = () => {
  // --- KONFIGURATION ---
  const CORRECT_PIN = "2024"; // Dein geheimer PIN (änderbar)

  // States
  const [pin, setPin] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [accessGranted, setAccessGranted] = useState(false);

  // Login Logik
  const handleLogin = (e) => {
    e.preventDefault();
    setError(false);
    setLoading(true);

    // Künstliche Verzögerung für "Server-Check" Gefühl (wirkt seriöser)
    setTimeout(() => {
      if (pin === CORRECT_PIN) {
        setAccessGranted(true);
      } else {
        setError(true);
        setPin(""); // Feld leeren bei Fehler
      }
      setLoading(false);
    }, 800);
  };

  // --- ZUSTAND 1: GESCHÜTZTER INHALT (Nach Login) ---
  if (accessGranted) {
    return (
      <div className="min-h-screen bg-slate-50 pt-32 pb-20 px-6 font-sans flex justify-center">
        <div className="w-full max-w-3xl bg-white border border-slate-200 shadow-xl rounded-sm p-8 md:p-12 animate-in fade-in slide-in-from-bottom-4 duration-500">
          {/* Header des geschützten Bereichs */}
          <div className="flex items-center gap-3 border-b border-slate-100 pb-6 mb-8">
            <div className="bg-green-100 text-green-700 p-2 rounded-full">
              <CheckCircle className="w-6 h-6" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-slate-800">
                Bewerbungsunterlagen
              </h1>
              <p className="text-slate-500 text-sm">Zugriff autorisiert.</p>
            </div>
          </div>

          {/* Der Inhalt für den Arbeitgeber */}
          <div className="space-y-8">
            {/* Intro Text */}
            <div className="prose prose-slate max-w-none text-slate-600">
              <p>Sehr geehrte Damen und Herren,</p>
              <p>
                vielen Dank für Ihr Interesse an meinem Profil. Hier finden Sie
                meinen vollständigen Lebenslauf sowie relevante Zertifikate zum
                Download. Für Rückfragen stehe ich Ihnen jederzeit gerne zur
                Verfügung.
              </p>
            </div>

            {/* Download Bereich */}
            <div className="grid md:grid-cols-2 gap-4">
              {/* Card 1: CV */}
              <div className="border border-slate-200 p-6 rounded hover:border-blue-500 hover:shadow-md transition cursor-pointer group">
                <div className="flex items-start justify-between mb-4">
                  <div className="p-3 bg-blue-50 text-blue-600 rounded">
                    <FileText className="w-6 h-6" />
                  </div>
                  <Download className="w-5 h-5 text-slate-400 group-hover:text-blue-600 transition" />
                </div>
                <h3 className="font-bold text-slate-800">Lebenslauf (CV)</h3>
                <p className="text-sm text-slate-500 mt-1">
                  PDF, 1.2 MB, Stand: Dez 2023
                </p>
              </div>

              {/* Card 2: Zeugnisse */}
              <div className="border border-slate-200 p-6 rounded hover:border-blue-500 hover:shadow-md transition cursor-pointer group">
                <div className="flex items-start justify-between mb-4">
                  <div className="p-3 bg-slate-100 text-slate-600 rounded">
                    <Briefcase className="w-6 h-6" />
                  </div>
                  <Download className="w-5 h-5 text-slate-400 group-hover:text-blue-600 transition" />
                </div>
                <h3 className="font-bold text-slate-800">Arbeitszeugnisse</h3>
                <p className="text-sm text-slate-500 mt-1">PDF, 2.4 MB</p>
              </div>
            </div>

            {/* Kontakt Button */}
            <div className="pt-6 border-t border-slate-100 flex justify-end">
              <a
                href="mailto:deine@email.de"
                className="inline-flex items-center gap-2 text-blue-700 font-medium hover:underline"
              >
                Kontakt aufnehmen <ChevronRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // --- ZUSTAND 2: LOGIN FORMULAR ---
  return (
    <div className="min-h-screen bg-slate-100 pt-32 pb-20 px-6 font-sans flex flex-col items-center justify-center">
      <div className="w-full max-w-md bg-white shadow-2xl rounded-sm overflow-hidden">
        {/* Blauer Header Balken */}
        <div className="bg-slate-900 px-8 py-6 flex items-center gap-3">
          <Lock className="w-6 h-6 text-blue-400" />
          <h1 className="text-white font-semibold text-lg tracking-wide">
            Geschützter Bereich
          </h1>
        </div>

        <div className="p-8 md:p-10">
          <p className="text-slate-600 mb-8 text-sm leading-relaxed">
            Dieser Bereich enthält vertrauliche Informationen und ist nur für
            autorisierte Personen zugänglich. Bitte geben Sie Ihren Zugangscode
            ein.
          </p>

          <form onSubmit={handleLogin} className="space-y-6">
            {/* Input Feld */}
            <div>
              <label
                htmlFor="pin"
                className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2"
              >
                Zugangscode (PIN)
              </label>
              <div className="relative">
                <input
                  type="password"
                  id="pin"
                  value={pin}
                  onChange={(e) => setPin(e.target.value)}
                  placeholder="••••"
                  className={`w-full text-center text-2xl tracking-[0.5em] font-mono py-3 border-b-2 outline-none transition-colors
                    ${
                      error
                        ? "border-red-500 text-red-600 placeholder-red-200"
                        : "border-slate-300 focus:border-blue-600 text-slate-800"
                    }`}
                  maxLength={6}
                  autoFocus
                />
              </div>

              {/* Fehlermeldung */}
              {error && (
                <div className="flex items-center gap-2 text-red-600 text-sm mt-3 animate-pulse">
                  <AlertCircle className="w-4 h-4" />
                  <span>Der eingegebene Code ist ungültig.</span>
                </div>
              )}
            </div>

            {/* Button */}
            <button
              type="submit"
              disabled={loading || pin.length === 0}
              className="w-full bg-blue-700 text-white font-medium py-3 rounded-sm shadow-md hover:bg-blue-800 active:bg-blue-900 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex justify-center items-center"
            >
              {loading ? (
                <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></span>
              ) : (
                "Authentifizieren"
              )}
            </button>
          </form>

          <div className="mt-8 pt-6 border-t border-slate-100 text-center">
            <p className="text-xs text-slate-400">
              Sie haben keinen Zugangscode?{" "}
              <a href="#" className="underline hover:text-slate-600">
                Kontaktieren Sie mich.
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmployerLogin;
