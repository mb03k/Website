import { Route, Routes } from "react-router-dom";
import { ROUTES } from "./routes/routes";

import Main from "./pages/Main";
import Projects from "./pages/Projects";
import Header from "./components/layout/header";
import Footer from "./components/layout/footer";
import Canvas from "./pages/Canvas";
import Movies from "./pages/Movies";
import Movieproposal from "./pages/Movieproposal";
import EmployerLogin from "./pages/Portfolio";
import ScrollToTop from "./features/ScrollToTop";
import Algorithm from "./pages/Algorithm";

function App() {
  return (
    <div className="flex flex-col min-h-screen text-slate-800 font-sans selection:bg-blue-100">
      <Header />

      <ScrollToTop />
      <Routes>
        <Route path={ROUTES.HOME} element={<Main />} />
        <Route path={ROUTES.PROJECTS} element={<Projects />} />
        <Route path={ROUTES.CANVAS} element={<Canvas />} />
        <Route path={ROUTES.MOVIES} element={<Movies />} />
        <Route path={ROUTES.MOVIEPROPOSAL} element={<Movieproposal />} />
        <Route path={ROUTES.PORTFOLIO} element={<EmployerLogin />} />
        <Route path={ROUTES.ALGORITHMEN} element={<Algorithm />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
