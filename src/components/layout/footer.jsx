import { ROUTES } from "@/src/features/routing/routes";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="mt-auto bg-slate-900 py-8 text-slate-400">
      <div className="container mx-auto flex flex-col items-center gap-6 px-6">
        <div className="flex gap-8 text-sm font-medium">
          <Link
            href={ROUTES.DATENSCHUTZ}
            className="transition hover:text-white"
          >
            Datenschutz
          </Link>
          <Link href={ROUTES.IMPRESSUM} className="transition hover:text-white">
            Impressum
          </Link>
        </div>

        <div className="w-full max-w-md border-t border-slate-800 pt-6 text-center text-xs text-slate-500">
          Lizenziert unter{" "}
          <a
            href="https://creativecommons.org/licenses/by-nc-sa/4.0/"
            target="_blank"
            rel="noreferrer"
            className="underline hover:text-slate-300"
          >
            CC BY-NC-SA 4.0
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
