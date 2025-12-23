import { Route, Routes } from "react-router-dom";

import Main from "./pages/Main";
import Projects from "./pages/Projects";
import Header from "./components/layout/header";
import Footer from "./components/layout/footer";
import Canvas from "./pages/Canvas";
import Movies from "./pages/Movies";
import { ROUTES } from "./routes/routes";

function App() {
  return (
    <div className="flex flex-col min-h-screen bg-slate-50 text-slate-800 font-sans selection:bg-blue-100">
      <Header />

      <Routes>
        <Route path={ROUTES.HOME} element={<Main />} />
        <Route path={ROUTES.PROJECTS} element={<Projects />} />
        <Route path={ROUTES.CANVAS} element={<Canvas />} />
        <Route path={ROUTES.MOVIES} element={<Movies />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
