import React, { useEffect } from "react";
import { X } from "lucide-react";

const Modal = ({ isOpen, onClose, title, children }) => {
  // Disables scrolling
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
      <div
        className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      ></div>
      <div className="relative w-full max-w-lg scale-100 transform rounded-2xl border border-white/20 bg-white/80 p-6 shadow-2xl backdrop-blur-xl transition-all dark:border-slate-700 dark:bg-slate-900/80">
        <div className="mb-4 flex items-center justify-between">
          <h3 className="text-xl font-bold text-slate-900 dark:text-white">
            {title}
          </h3>
          <button
            onClick={onClose}
            className="rounded-full p-1 text-slate-500 transition-colors hover:bg-slate-200 dark:hover:bg-slate-700"
          >
            <X className="h-6 w-6" />
          </button>
        </div>

        <div className="text-slate-600 dark:text-slate-300">{children}</div>
      </div>
    </div>
  );
};

export default Modal;
