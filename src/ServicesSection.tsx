import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

// Iconos SVG inline via better-icons (Iconify)
const IconExtinguisher = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5">
    <path fill="currentColor" d="M15 6.5V3a1 1 0 0 0-1-1h-2a1 1 0 0 0-1 1v3.5M9 18h8m1-15h-3"/>
    <path fill="currentColor" d="M11 3a6 6 0 0 0-6 6v11m0-7h4m8-3a4 4 0 0 0-8 0v10a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2Z"/>
  </svg>
);
const IconCar = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5">
    <path fill="currentColor" d="M5 17a2 2 0 1 0 4 0a2 2 0 1 0-4 0m10 0a2 2 0 1 0 4 0a2 2 0 1 0-4 0"/>
    <path fill="currentColor" d="M5 17H3v-6l2-5h9l4 5h1a2 2 0 0 1 2 2v4h-2m-4 0H9m-6-6h15m-6 0V6"/>
  </svg>
);
const IconCertificate = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" className={className} fill="currentColor">
    <path d="M128 140a12 12 0 0 1-12 12H72a12 12 0 0 1 0-24h44a12 12 0 0 1 12 12m-12-52H72a12 12 0 0 0 0 24h44a12 12 0 0 0 0-24m120 79.14V228a12 12 0 0 1-17.95 10.42L196 225.82l-22 12.6A12 12 0 0 1 156 228v-24H40a20 20 0 0 1-20-20V56a20 20 0 0 1 20-20h176a20 20 0 0 1 20 20v32.86a55.87 55.87 0 0 1 0 78.28M196 160a32 32 0 1 0-32-32a32 32 0 0 0 32 32m-40 20v-12.86a56 56 0 0 1 56-92.8V60H44v120Zm56 27.32v-25.66a55.87 55.87 0 0 1-32 0v25.66l10.05-5.74a12 12 0 0 1 11.9 0Z"/>
  </svg>
);
const IconBuilding = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5">
    <path fill="currentColor" d="M12 10h.01M12 14h.01M12 6h.01M16 10h.01M16 14h.01M16 6h.01M8 10h.01M8 14h.01M8 6h.01M9 22v-3a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v3"/>
    <rect fill="currentColor" width="16" height="20" x="4" y="2" rx="2"/>
  </svg>
);

const services = [
  {
    icon: IconExtinguisher,
    title: 'Venta y Recarga de Extintores',
    desc: 'Comercialización y recarga de extintores de todos los tipos. Garantizamos equipos certificados y listos para proteger tu hogar o negocio.',
    accent: 'var(--color-fire)',
    span: 'lg:col-span-2',
    route: '/servicios/extintores',
  },
  {
    icon: IconCar,
    title: 'Venta de Kit de Carretera',
    desc: 'Kits de carretera completos y homologados para tu vehículo. Cumple la normativa vigente y viaja con tranquilidad.',
    accent: 'var(--color-fire-accent)',
    span: 'lg:col-span-1',
    route: '/servicios/kit-carretera',
  },
  {
    icon: IconCertificate,
    title: 'Servicio de Capacitaciones',
    desc: 'Formación en prevención y control de incendios, primeros auxilios y evacuación. Capacitamos empresas, colegios y comunidades.',
    accent: '#60a5fa',
    span: 'lg:col-span-1',
    route: '/servicios/capacitaciones',
  },
  {
    icon: IconBuilding,
    title: 'Inspecciones de Seguridad Locativas',
    desc: 'Revisión técnica de instalaciones para identificar riesgos de incendio. Emitimos conceptos y recomendaciones para cumplir la normativa.',
    accent: '#34d399',
    span: 'lg:col-span-2',
    route: '/servicios/inspecciones',
  },
];

const spring = { type: 'spring', stiffness: 60, damping: 18 };
const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 32, filter: 'blur(6px)' },
  whileInView: { opacity: 1, y: 0, filter: 'blur(0px)' },
  transition: { ...spring, delay },
  viewport: { once: true, margin: '-60px' },
});

export default function ServicesSection() {
  const navigate = useNavigate();
  return (
    <section
      id="services"
      aria-label="Nuestros servicios"
      className="relative py-36 overflow-hidden"
      style={{ background: 'var(--color-dark)' }}
    >
      {/* Ambient glows */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-1/3 w-[500px] h-[500px] rounded-full bg-[var(--color-fire)]/5 blur-[130px]" />
        <div className="absolute bottom-1/4 left-1/4 w-[350px] h-[350px] rounded-full bg-[#60a5fa]/4 blur-[100px]" />
      </div>

      {/* Hairline */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/8 to-transparent" />

      <div className="relative max-w-7xl mx-auto px-6">

        {/* ── Editorial header ── */}
        <motion.div {...fadeUp(0)} className="mb-20 max-w-2xl">
          <h2
            className="text-5xl sm:text-6xl md:text-7xl font-bold uppercase leading-[0.95] tracking-tight text-white"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            Nuestros<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-fire)] to-[var(--color-fire-accent)]">
              Servicios
            </span>
          </h2>
        </motion.div>

        {/* ── Asymmetric Bento Grid (Double-Bezel) ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {services.map((service, idx) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={idx}
                {...fadeUp(idx * 0.09)}
                className={service.span}
              >
                {/* Outer shell */}
                <div
                  onClick={() => navigate(service.route)}
                  className="group relative h-full rounded-3xl border border-white/6 bg-white/3 p-1.5 transition-all duration-700 hover:border-white/12 cursor-pointer"
                  style={{ transitionTimingFunction: 'cubic-bezier(0.32,0.72,0,1)' }}
                >
                  {/* Inner core */}
                  <div
                    className="relative h-full rounded-[calc(1.5rem-6px)] p-8 overflow-hidden flex flex-col gap-6"
                    style={{
                      background: 'var(--color-dark-card)',
                      boxShadow: 'inset 0 1px 1px rgba(255,255,255,0.07)',
                      minHeight: 220,
                    }}
                  >
                    {/* Accent glow orb */}
                    <div
                      className="absolute -top-10 -right-10 w-40 h-40 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                      style={{ background: service.accent, opacity: 0 }}
                    />
                    <div
                      className="absolute -top-10 -right-10 w-40 h-40 rounded-full blur-3xl opacity-[0.07] group-hover:opacity-[0.18] transition-opacity duration-700"
                      style={{ background: service.accent }}
                    />

                    {/* Icon + index row */}
                    <div className="flex items-start justify-between">
                      <div
                        className="w-11 h-11 transition-transform duration-500 group-hover:scale-110"
                        style={{
                          color: service.accent,
                          transitionTimingFunction: 'cubic-bezier(0.34,1.56,0.64,1)',
                        }}
                      >
                        <Icon className="w-full h-full" />
                      </div>
                      <span
                        className="text-[11px] font-semibold tabular-nums text-white/20"
                        style={{ fontFamily: 'var(--font-sans)' }}
                      >
                        0{idx + 1}
                      </span>
                    </div>

                    {/* Text */}
                    <div className="mt-auto">
                      <h3
                        className="text-lg font-bold uppercase tracking-[0.1em] text-white mb-2 leading-tight"
                        style={{ fontFamily: 'var(--font-display)' }}
                      >
                        {service.title}
                      </h3>
                      <p
                        className="text-xs leading-relaxed text-white/40 group-hover:text-white/65 transition-colors duration-500"
                        style={{ fontFamily: 'var(--font-sans)' }}
                      >
                        {service.desc}
                      </p>
                      {/* Click cue */}
                      <div
                        className="mt-5 inline-flex items-center gap-1.5 text-[10px] font-semibold uppercase tracking-[0.18em] opacity-0 group-hover:opacity-100 transition-all duration-400 translate-y-1 group-hover:translate-y-0"
                        style={{ color: service.accent, fontFamily: 'var(--font-sans)', transitionTimingFunction: 'cubic-bezier(0.32,0.72,0,1)' }}
                      >
                        Ver detalle
                        <svg viewBox="0 0 16 16" className="w-3 h-3" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M3 13L13 3M13 3H7M13 3v6" />
                        </svg>
                      </div>
                    </div>

                    {/* Bottom gradient line */}
                    <div
                      className="absolute bottom-0 left-0 h-px w-0 group-hover:w-full transition-all duration-700 rounded-full"
                      style={{
                        background: `linear-gradient(to right, transparent, ${service.accent}, transparent)`,
                        transitionTimingFunction: 'cubic-bezier(0.32,0.72,0,1)',
                      }}
                    />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* ── CTA strip ── */}
        <motion.div {...fadeUp(0.5)} className="mt-16 flex flex-col sm:flex-row items-center justify-between gap-6 rounded-3xl border border-white/6 bg-[var(--color-dark-card)] px-8 py-7"
          style={{ boxShadow: 'inset 0 1px 1px rgba(255,255,255,0.06)' }}>
          <div>
            <p className="text-white font-bold text-lg uppercase tracking-wide" style={{ fontFamily: 'var(--font-display)' }}>
              ¿Necesitas un servicio?
            </p>
            <p className="text-white/40 text-xs mt-1" style={{ fontFamily: 'var(--font-sans)' }}>
              Contáctanos directamente — respondemos de inmediato.
            </p>
          </div>
          <a
            href="tel:+573235057984"
            className="group flex-shrink-0 flex items-center gap-3 bg-[var(--color-fire)] hover:bg-[var(--color-fire-dark)] text-white px-7 py-3.5 rounded-full font-bold tracking-widest uppercase text-xs shadow-[0_0_24px_rgba(198,40,40,0.4)] hover:shadow-[0_0_40px_rgba(198,40,40,0.65)] transition-all duration-500 active:scale-[0.97]"
            style={{ transitionTimingFunction: 'cubic-bezier(0.32,0.72,0,1)', fontFamily: 'var(--font-sans)' }}
          >
            <span className="w-7 h-7 rounded-full bg-white/15 flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:-translate-y-px">
              <svg viewBox="0 0 24 24" className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.27h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9a16 16 0 0 0 5.91 5.91l1.27-.85a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
              </svg>
            </span>
            323 505 7984
          </a>
        </motion.div>
      </div>
    </section>
  );
}
