import { motion } from 'framer-motion';
import escudoImg from '@/assets/escudo.png';

const FLUID = [0.32, 0.72, 0, 1] as const;

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24, filter: 'blur(6px)' },
  whileInView: { opacity: 1, y: 0, filter: 'blur(0px)' },
  transition: { duration: 0.7, delay, ease: FLUID },
  viewport: { once: true, margin: '-40px' },
});

// Social icon SVGs inline (no lucide generics)
const IconFacebook = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" className={className} fill="currentColor">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);
const IconInstagram = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <rect width="20" height="20" x="2" y="2" rx="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);
const IconMail = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <rect width="20" height="16" x="2" y="4" rx="2" />
    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
  </svg>
);

const navLinks = [
  { label: 'Inicio',    id: 'home' },
  { label: 'Nosotros',  id: 'about' },
  { label: 'Servicios', id: 'services' },
  { label: 'Contacto',  id: 'contact' },
];

const services = [
  'Venta y Recarga de Extintores',
  'Venta de Kit de Carretera',
  'Servicio de Capacitaciones',
  'Inspecciones de Seguridad',
];

export default function Footer() {
  const scrollToSection = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });

  return (
    <footer
      className="relative overflow-hidden pt-24 pb-8"
      style={{ background: 'var(--color-dark)' }}
    >
      {/* Top hairline */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      {/* Ambient glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] rounded-full bg-[var(--color-fire)]/5 blur-[120px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6">

        {/* ── Top row: brand + CTA ── */}
        <motion.div
          {...fadeUp(0)}
          className="flex flex-col md:flex-row md:items-center md:justify-between gap-8 mb-20"
        >
          {/* Logo block */}
          <div className="flex items-center gap-4">
            <div className="w-14 h-16 flex-shrink-0">
              <img
                src={escudoImg}
                alt="Escudo oficial Bomberos San Jerónimo"
                className="w-full h-full object-contain drop-shadow-[0_4px_20px_rgba(198,40,40,0.45)]"
              />
            </div>
            <div className="flex flex-col leading-none">
              <span
                className="text-xl font-bold uppercase tracking-[0.1em] text-white"
                style={{ fontFamily: 'var(--font-display)' }}
              >
                Bomberos Voluntarios
              </span>
              <span
                className="text-[10px] tracking-[0.3em] uppercase text-[var(--color-fire-accent)] mt-1"
                style={{ fontFamily: 'var(--font-sans)' }}
              >
                San Jerónimo · Antioquia · Est. 1999
              </span>
            </div>
          </div>

          {/* Emergency CTA */}
          <a
            href="tel:+573235057984"
            className="group self-start md:self-auto flex items-center gap-3 rounded-full border border-[var(--color-fire)]/30 bg-[var(--color-fire)]/8 px-6 py-3.5 text-sm font-semibold text-white hover:bg-[var(--color-fire)]/20 hover:border-[var(--color-fire)]/60 transition-all duration-500"
            style={{ fontFamily: 'var(--font-sans)', transitionTimingFunction: 'cubic-bezier(0.32,0.72,0,1)' }}
          >
            Línea de emergencias — 323 505 7984
          </a>
        </motion.div>

        {/* ── Main grid ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px rounded-2xl overflow-hidden border border-white/6 mb-12">
          {/* Mission */}
          <motion.div
            {...fadeUp(0.05)}
            className="lg:col-span-2 p-8"
            style={{ background: 'var(--color-dark-card)' }}
          >
            <h3
              className="text-[10px] font-semibold uppercase tracking-[0.22em] text-white/30 mb-4"
              style={{ fontFamily: 'var(--font-sans)' }}
            >
              Nuestra misión
            </h3>
            <p
              className="text-sm text-white/50 leading-relaxed max-w-sm"
              style={{ fontFamily: 'var(--font-sans)' }}
            >
              Dedicados a salvaguardar vidas, medio ambiente y bienes de la comunidad de San Jerónimo, con abnegación, disciplina y valor.
            </p>

            {/* Socials */}
            <div className="flex gap-2 mt-8">
              {[
                { Icon: IconFacebook, label: 'Facebook', href: '#' },
                { Icon: IconInstagram, label: 'Instagram', href: '#' },
                { Icon: IconMail, label: 'Correo electrónico', href: 'mailto:contacto@bomberosSJ.com' },
              ].map(({ Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-9 h-9 rounded-full border border-white/10 bg-white/4 flex items-center justify-center text-white/40 hover:text-white hover:border-white/25 hover:bg-white/10 transition-all duration-300"
                  style={{ transitionTimingFunction: 'cubic-bezier(0.32,0.72,0,1)' }}
                >
                  <Icon className="w-3.5 h-3.5" />
                </a>
              ))}
            </div>
          </motion.div>

          {/* Nav links */}
          <motion.div
            {...fadeUp(0.1)}
            className="p-8"
            style={{ background: 'var(--color-dark-card)' }}
          >
            <h3
              className="text-[10px] font-semibold uppercase tracking-[0.22em] text-white/30 mb-5"
              style={{ fontFamily: 'var(--font-sans)' }}
            >
              Navegación
            </h3>
            <ul className="flex flex-col gap-3">
              {navLinks.map(({ label, id }) => (
                <li key={id}>
                  <button
                    onClick={() => scrollToSection(id)}
                    className="text-sm text-white/50 hover:text-white transition-colors duration-300 flex items-center gap-2 group"
                    style={{ fontFamily: 'var(--font-sans)' }}
                  >
                    <span className="w-3 h-px bg-white/20 group-hover:w-5 group-hover:bg-[var(--color-fire)] transition-all duration-300 rounded-full" />
                    {label}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            {...fadeUp(0.15)}
            className="p-8"
            style={{ background: 'var(--color-dark-card)' }}
          >
            <h3
              className="text-[10px] font-semibold uppercase tracking-[0.22em] text-white/30 mb-5"
              style={{ fontFamily: 'var(--font-sans)' }}
            >
              Servicios
            </h3>
            <ul className="flex flex-col gap-3">
              {services.map((s) => (
                <li key={s}>
                  <button
                    onClick={() => scrollToSection('services')}
                    className="text-sm text-white/50 hover:text-white transition-colors duration-300 text-left flex items-start gap-2 group"
                    style={{ fontFamily: 'var(--font-sans)' }}
                  >
                    <span className="w-3 h-px bg-white/20 group-hover:w-5 group-hover:bg-[var(--color-fire-accent)] transition-all duration-300 rounded-full mt-2 flex-shrink-0" />
                    {s}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* ── Bottom bar ── */}
        <motion.div
          {...fadeUp(0.2)}
          className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 border-t border-white/6"
        >
          <p
            className="text-[11px] text-white/25 tracking-wide"
            style={{ fontFamily: 'var(--font-sans)' }}
          >
            © {new Date().getFullYear()} Cuerpo de Bomberos Voluntarios de San Jerónimo. Todos los derechos reservados.
          </p>
          <p
            className="text-[11px] text-white/20 tracking-wide"
            style={{ fontFamily: 'var(--font-sans)' }}
          >
            San Jerónimo · Antioquia · Colombia
          </p>
        </motion.div>

      </div>
    </footer>
  );
}
