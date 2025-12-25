'use client';

import React, { useState } from "react";

import { OUTER_ROUTES } from "@/src/features/routing/routes";
import { IMAGE_PATH } from "@/src/features/routing/links";
import { CircleQuestionMark } from "lucide-react";
import Modal from "../popup";

const Logos = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <div>
      <div className="relative z-10 mb-16 mt-24 px-4">
        <div className="mx-auto flex max-w-4xl flex-col items-center rounded-3xl border border-white/20 bg-white/40 p-8 shadow-xl backdrop-blur-lg md:p-12 dark:border-white/5 dark:bg-slate-900/40">
          <div className="flex w-full flex-col items-center justify-center gap-10 md:flex-row md:gap-16">
            {/* Nginx */}
            <a
              target="_blank"
              rel="noopener noreferrer"
              href={OUTER_ROUTES.NGINX}
              className="group"
            >
              <img
                src={IMAGE_PATH.LOGO_NGINX_PNG}
                alt="Nginx Logo"
                className="h-16 w-auto cursor-pointer object-contain transition-all duration-300 group-hover:scale-110 group-hover:drop-shadow-lg md:h-24"
              />
            </a>

            {/* Nextcloud */}
            <a
              target="_blank"
              rel="noopener noreferrer"
              href={OUTER_ROUTES.NEXTCLOUD}
              className="group"
            >
              <img
                src={IMAGE_PATH.LOGO_NEXTCLOUD_PNG}
                alt="Nextcloud Logo"
                className="h-20 w-auto cursor-pointer object-contain transition-all duration-300 group-hover:scale-110 group-hover:drop-shadow-lg md:h-24"
              />
            </a>

            {/* Jellyfin */}
            <a
              target="_blank"
              rel="noopener noreferrer"
              href={OUTER_ROUTES.JELLIFYN}
              className="group"
            >
              <img
                src={IMAGE_PATH.LOGO_JELLYFIN}
                alt="Jellyfin Logo"
                className="h-16 w-auto cursor-pointer object-contain transition-all duration-300 group-hover:scale-110 group-hover:drop-shadow-lg md:h-24"
              />
            </a>
          </div>

          <div className="my-10 h-px w-24 bg-slate-300/50 dark:bg-slate-700/50" />

          <div className="flex justify-center">
            <button
              onClick={() => setIsModalOpen(true)}
              aria-label="Weitere Informationen / Kontakt"
              className="group rounded-full bg-transparent text-slate-400 transition-all duration-300 hover:scale-110 hover:bg-blue-100/50 hover:text-blue-600 active:scale-95 dark:text-slate-500 dark:hover:bg-blue-900/30 dark:hover:text-blue-400"
            >
              <CircleQuestionMark className="h-auto w-8 opacity-70 transition-opacity group-hover:opacity-100" />
            </button>
          </div>
        </div>
      </div>

      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="Was sind diese bunten Icons?"
      >
        <div className="mt-2 space-y-4">
          <div>
            <p className="leading-relaxed text-slate-600 dark:text-slate-300">
              Mit ihnen kommst du zu anderen coolen Features der Website.
              Allerdings sind diese für Dich ggf. nicht erreichbar.
            </p>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default Logos;
