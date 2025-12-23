import { Route, Routes } from 'react-router-dom';

import Main from './pages/Main';
import Projects from './pages/Projects';
import Header from './components/layout/header';
import Footer from './components/layout/footer';



function App() {
  return (
    <div className="flex flex-col min-h-screen bg-slate-50 text-slate-800 font-sans selection:bg-blue-100">
      
        <Header />

        <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/projects" element={<Projects />} />
        </Routes>

        <Footer />

    </div>
  );
}

export default App;