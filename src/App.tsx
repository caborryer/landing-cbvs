import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './Header';
import Hero from './Hero';
import AboutSection from './AboutSection';
import ServicesSection from './ServicesSection';
import Footer from './Footer';

// Lazy imports for service pages
import Extintores from './pages/Extintores';
import KitCarretera from './pages/KitCarretera';
import Capacitaciones from './pages/Capacitaciones';
import Inspecciones from './pages/Inspecciones';

function HomePage() {
  return (
    <div className="min-h-full text-white selection:bg-[var(--color-fire)] selection:text-white"
      style={{ background: 'var(--color-dark)' }}>
      <Header />
      <main>
        <Hero />
        <AboutSection />
        <ServicesSection />
      </main>
      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/servicios/extintores" element={<Extintores />} />
        <Route path="/servicios/kit-carretera" element={<KitCarretera />} />
        <Route path="/servicios/capacitaciones" element={<Capacitaciones />} />
        <Route path="/servicios/inspecciones" element={<Inspecciones />} />
      </Routes>
    </BrowserRouter>
  );
}
