"use client";

import React from "react";
import Image from "next/image";

import { PORTFOLIO_ROUTES } from "@/src/features/routing/portfolio";

const EmployerLogin = () => {
  return (
    <main className="min-h-screen bg-white px-6 py-24 transition-colors duration-300 dark:bg-slate-950 md:px-12 lg:px-24">
      <div className="mx-auto max-w-4xl">
        <h2 className="mb-2 text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white sm:text-5xl">
          Bewerbung um eine Stelle als Werkstudent
        </h2>

        <p className="mb-8 text-xl font-medium text-slate-600 dark:text-slate-400 sm:text-2xl">
          Lipsia Digital Leipzig
        </p>

        <div className="text-lg leading-relaxed text-slate-600 dark:text-slate-300">
          <div className="float-right mb-4 ml-6 w-32 md:w-48">
            <div className="relative aspect-[4/5] overflow-hidden rounded-xl bg-slate-100 shadow-lg ring-1 ring-slate-900/10 dark:bg-slate-800 dark:ring-white/20">
              <Image
                src={PORTFOLIO_ROUTES.APPLICATION_PHOTO}
                alt="Profilbild"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 128px, 192px"
              />
            </div>
          </div>

          <div className="space-y-6">
            <p>Sehr geehrte Damen und Herren,</p>
            <p>
              Mein Name ist Matthes Böttcher und ich studiere voller
              Leidenschaft Informatik im 5. Semester an der HTWK Leipzig.
              <br />
              Auf Ihr Unternehmen bin ich durch einen Freund und Kommilitonen
              aufmerksam geworden. Seine Beschreibungen der technologisch
              spannenden Projekte und des wertschätzenden Miteinanders haben
              mich sofort angesprochen und motiviert, mich bei Ihnen zu
              bewerben.
            </p>
            <p>
              Aktuell studiere ich Informatik, doch mir fehlt der praktische
              Bezug zur Industrie. Ich möchte nicht nur Code schreiben, der
              funktioniert, sondern lernen, wie man skalierbare, wartbare
              Software in einem professionellen Team entwickelt. Ich bringe ein
              solides Grundverständnis für moderne Frameworks und
              Containerisierung mit und brenne darauf, dieses Wissen in Ihren
              echten Kundenprojekten anzuwenden und an ihnen zu wachsen.
            </p>

            <p></p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default EmployerLogin;
