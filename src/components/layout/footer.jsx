import { ROUTES } from "../../routes/routes";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-slate-400 py-8 mt-auto">
      <div className="container mx-auto px-6 flex flex-col items-center gap-6">
        <div className="flex gap-8 text-sm font-medium">
          <Link to={ROUTES.DATENSCHUTZ} className="hover:text-white transition">
            Datenschutz
          </Link>
          <Link to={ROUTES.IMPRESSUM} className="hover:text-white transition">
            Impressum
          </Link>
        </div>

        <div className="text-xs text-slate-500 text-center border-t border-slate-800 pt-6 w-full max-w-md">
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
