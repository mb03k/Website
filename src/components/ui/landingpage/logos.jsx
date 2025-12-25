import React, { useState } from "react";

import { OUTER_ROUTES } from "../../../routes/routes";
import { IMAGE_PATH } from "../../../routes/links";
import { CircleQuestionMark } from "lucide-react";
import ThemeToggle from "../../layout/ThemeToggle";
import Modal from "../popup";

const Logos = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <div>
      <div className="relative z-10 mt-24 mb-16 px-4">
        <div
          className="max-w-4xl mx-auto p-8 md:p-12 rounded-3xl 
                                bg-white/40 dark:bg-slate-900/40 backdrop-blur-lg 
                                border border-white/20 dark:border-white/5 shadow-xl 
                                flex flex-col items-center"
        >
          <div className="flex flex-col md:flex-row justify-center items-center gap-10 md:gap-16 w-full">
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
                className="h-20 md:h-24 w-auto object-contain cursor-pointer transition-all duration-300 
                                        group-hover:scale-110 group-hover:drop-shadow-lg"
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
                className="h-20 md:h-24 w-auto object-contain cursor-pointer transition-all duration-300 
                                        group-hover:scale-110 group-hover:drop-shadow-lg"
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
                className="h-20 md:h-24 w-auto object-contain cursor-pointer transition-all duration-300 
                                        group-hover:scale-110 group-hover:drop-shadow-lg"
              />
            </a>
          </div>

          <div className="w-24 h-px bg-slate-300/50 dark:bg-slate-700/50 my-10" />

          <div className="flex justify-center">
            <button
              onClick={() => setIsModalOpen(true)}
              aria-label="Weitere Informationen / Kontakt"
              className="group rounded-full transition-all duration-300 
                                        text-slate-400 hover:text-blue-600 bg-transparent hover:bg-blue-100/50
                                        dark:text-slate-500 dark:hover:text-blue-400 dark:hover:bg-blue-900/30
                                        hover:scale-110 active:scale-95"
            >
              <CircleQuestionMark className="w-8 h-auto opacity-70 group-hover:opacity-100 transition-opacity" />
            </button>
          </div>
        </div>
      </div>

      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="Was sind diese bunten Buttons?"
      >
        <div className="mt-2 space-y-4">
          <div>
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
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
