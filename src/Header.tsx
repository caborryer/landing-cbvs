import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone } from 'lucide-react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 32);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    setIsMenuOpen(false);
  };

  const navItems = [
    { label: 'Inicio',    id: 'home' },
    { label: 'Nosotros',  id: 'about' },
    { label: 'Servicios', id: 'services' },
    { label: 'Contacto',  id: 'contact' },
    { label: 'Noticias', id: 'news' },
    { label: 'Galeria',  id: 'gallery' },
  ];

  return (
    <>
      {/* ── Fluid Island Nav (desktop) ── */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 flex justify-between items-center px-6 transition-all duration-700`}
        style={{ transitionTimingFunction: 'cubic-bezier(0.32,0.72,0,1)' }}
        role="banner"
      >
        {/* Logo pill */}
        <motion.button
          onClick={() => scrollToSection('home')}
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.32, 0.72, 0, 1] }}
          className="flex items-center gap-3 group mt-4"
        >
          <div className="w-14 h-16 flex-shrink-0 transition-transform duration-500 group-hover:scale-105"
            style={{ transitionTimingFunction: 'cubic-bezier(0.34,1.56,0.64,1)' }}>
            <img src="/escudo.png" alt="Escudo Bomberos San Jerónimo" className="w-full h-full object-contain drop-shadow-[0_2px_16px_rgba(198,40,40,0.5)]" />
          </div>
          <div className="flex flex-col items-start leading-none">
            <span
              className="text-base md:text-lg font-bold tracking-[0.12em] text-white uppercase"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              Bomberos Voluntarios
            </span>
            <span className="text-[10px] tracking-[0.3em] uppercase text-[var(--color-fire-accent)] font-medium">
              San Jerónimo · Antioquia
            </span>
          </div>
        </motion.button>

        {/* Floating pill nav */}
        <motion.nav
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.32, 0.72, 0, 1] }}
          aria-label="Navegación principal"
          className={`hidden md:flex items-center gap-1 mt-4 rounded-full px-2 py-2 border transition-all duration-700 ${
            scrolled
              ? 'bg-[var(--color-dark)]/80 backdrop-blur-xl border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.6)]'
              : 'bg-white/5 backdrop-blur-md border-white/8'
          }`}
          style={{ transitionTimingFunction: 'cubic-bezier(0.32,0.72,0,1)' }}
        >
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className="relative px-5 py-2 text-[11px] font-semibold tracking-[0.18em] uppercase text-gray-400 hover:text-white transition-colors duration-300 rounded-full hover:bg-white/8 group"
              style={{ fontFamily: 'var(--font-sans)' }}
            >
              {item.label}
              <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-0 h-px bg-[var(--color-fire)] transition-all duration-300 group-hover:w-4 rounded-full" />
            </button>
          ))}

          {/* CTA – Button-in-Button */}
          <a
            href="tel:+573235057984"
            className="group ml-2 flex items-center gap-2 bg-[var(--color-fire)] hover:bg-[var(--color-fire-dark)] text-white px-5 py-2.5 rounded-full text-[11px] font-bold tracking-[0.15em] uppercase transition-all duration-500 shadow-[0_0_20px_rgba(198,40,40,0.35)] hover:shadow-[0_0_36px_rgba(198,40,40,0.6)] active:scale-[0.97]"
            style={{ transitionTimingFunction: 'cubic-bezier(0.32,0.72,0,1)', fontFamily: 'var(--font-sans)' }}
          >
            <span className="w-6 h-6 rounded-full bg-white/15 flex items-center justify-center transition-transform duration-300 group-hover:scale-110 group-hover:-translate-y-px">
              <Phone className="w-3 h-3" />
            </span>
            Emergencias
          </a>
        </motion.nav>

        {/* Hamburger (mobile) */}
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden mt-4 w-10 h-10 flex flex-col items-center justify-center gap-[5px] relative z-[60]"
          aria-label="Toggle menu"
        >
          <span className={`w-6 h-px bg-white transition-all duration-400 ${isMenuOpen ? 'rotate-45 translate-y-[6.5px]' : ''}`}
            style={{ transitionTimingFunction: 'cubic-bezier(0.32,0.72,0,1)' }} />
          <span className={`w-6 h-px bg-white transition-all duration-400 ${isMenuOpen ? '-rotate-45 -translate-y-[6.5px]' : ''}`}
            style={{ transitionTimingFunction: 'cubic-bezier(0.32,0.72,0,1)' }} />
        </motion.button>
      </header>

      {/* ── Mobile fullscreen overlay ── */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.32, 0.72, 0, 1] }}
            className="fixed inset-0 z-40 bg-[var(--color-dark)]/95 backdrop-blur-3xl flex flex-col items-center justify-center gap-8 px-8"
          >
            {navItems.map((item, i) => (
              <motion.button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 12 }}
                transition={{ duration: 0.4, delay: i * 0.07, ease: [0.32, 0.72, 0, 1] }}
                className="text-4xl font-bold uppercase tracking-widest text-white hover:text-[var(--color-fire-accent)] transition-colors duration-300"
                style={{ fontFamily: 'var(--font-display)' }}
              >
                {item.label}
              </motion.button>
            ))}
            <motion.a
              href="tel:+573235057984"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4, delay: navItems.length * 0.07 + 0.05, ease: [0.32, 0.72, 0, 1] }}
              className="mt-4 flex items-center gap-3 bg-[var(--color-fire)] text-white px-8 py-4 rounded-full font-bold tracking-widest uppercase text-sm shadow-[0_0_30px_rgba(198,40,40,0.5)]"
              style={{ fontFamily: 'var(--font-sans)' }}
            >
              <Phone className="w-4 h-4" />
              323 505 7984
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
