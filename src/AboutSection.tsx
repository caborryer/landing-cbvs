import { motion } from 'framer-motion';

// Iconos SVG inline de alta calidad via better-icons (Iconify)
const IconHeartHandshake = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5">
    <path d="M19.414 14.414C21 12.828 22 11.5 22 9.5a5.5 5.5 0 0 0-9.591-3.676a.6.6 0 0 1-.818.001A5.5 5.5 0 0 0 2 9.5c0 2.3 1.5 4 3 5.5l5.535 5.362a2 2 0 0 0 2.879.052a2.12 2.12 0 0 0-.004-3a2.124 2.124 0 1 0 3-3a2.124 2.124 0 0 0 3.004 0a2 2 0 0 0 0-2.828l-1.881-1.882a2.41 2.41 0 0 0-3.409 0l-1.71 1.71a2 2 0 0 1-2.828 0a2 2 0 0 1 0-2.828l2.823-2.762"/>
  </svg>
);
const IconMedal = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5">
    <path d="M12 4v3M8 4v6m8-6v6m-4 8.5L9 20l.5-3.5l-2-2l3-.5l1.5-3l1.5 3l3 .5l-2 2L15 20z"/>
  </svg>
);
const IconShieldStar = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" className={className} fill="currentColor">
    <path d="M76.86 115.54a12 12 0 0 1 15.6-6.68l23.54 9.42V96a12 12 0 0 1 24 0v22.28l23.54-9.42a12 12 0 0 1 8.92 22.28L147 141.33l14.6 19.47a12 12 0 1 1-19.2 14.4L128 156l-14.4 19.2a12 12 0 1 1-19.2-14.4l14.6-19.47l-25.46-10.19a12 12 0 0 1-6.68-15.6M228 56v56c0 54.29-26.32 87.22-48.4 105.29c-23.71 19.39-47.44 26-48.44 26.29a12.1 12.1 0 0 1-6.32 0c-1-.28-24.73-6.9-48.44-26.29C54.32 199.22 28 166.29 28 112V56a20 20 0 0 1 20-20h160a20 20 0 0 1 20 20m-24 4H52v52c0 35.71 13.09 64.69 38.91 86.15A126.1 126.1 0 0 0 128 219.38a126.3 126.3 0 0 0 37.09-21.23C190.91 176.69 204 147.71 204 112Z"/>
  </svg>
);
const IconFlame = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" className={className} fill="currentColor">
    <path d="m153.6 29.9l16-21.3c4-5.4 10.4-8.6 17.1-8.6C198.4 0 208 9.6 208 21.3v22.2c0 13.1 5.4 25.7 14.9 34.7l84.7 80.8c48.8 46.6 76.4 111.2 76.4 178.7C384 434 306 512 209.7 512H192C86 512 0 426 0 320v-3.8c0-48.8 19.4-95.6 53.9-130.1l3.5-3.5c4.2-4.2 10-6.6 16-6.6c12.5 0 22.6 10.1 22.6 22.6V288c0 35.3 28.7 64 64 64s64-28.7 64-64v-3.9c0-18-7.2-35.3-19.9-48l-38.6-38.6c-24-24-37.5-56.7-37.5-90.7c0-27.7 9-54.8 25.6-76.9"/>
  </svg>
);

const values = [
  { icon: IconHeartHandshake, title: 'ABNEGACIÓN', description: 'Renunciamos a intereses personales en favor del bienestar y la seguridad de la comunidad que juramos proteger.' },
  { icon: IconMedal,          title: 'DISCIPLINA',  description: 'Mantenemos un estricto orden y rigor en nuestra formación y en cada emergencia a la que respondemos.' },
  { icon: IconShieldStar,     title: 'VALOR',       description: 'Nos enfrentamos a la adversidad y al peligro con determinación, superando el miedo para salvar vidas.' },
  { icon: IconFlame,          title: 'VOCACIÓN',    description: 'El fuego en nuestros corazones es más fuerte que el que combatimos.' },
];

const spring = { type: 'spring', stiffness: 60, damping: 18 };
const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 32, filter: 'blur(6px)' },
  whileInView: { opacity: 1, y: 0, filter: 'blur(0px)' },
  transition: { ...spring, delay },
  viewport: { once: true, margin: '-60px' },
});

export default function AboutSection() {
  return (
    <section
      id="about"
      aria-label="Sobre nosotros – Pilares institucionales"
      className="relative py-36 overflow-hidden"
      style={{ background: 'var(--color-navy)' }}
    >
      {/* Ambient glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 left-1/4 w-[600px] h-[600px] rounded-full bg-[var(--color-fire)]/6 blur-[120px]" />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] rounded-full bg-[var(--color-fire-accent)]/5 blur-[100px]" />
      </div>

      {/* Hairline top */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="relative max-w-7xl mx-auto px-6">

        {/* ── Editorial header ── */}
        <motion.div {...fadeUp(0)} className="mb-20 flex flex-col md:flex-row md:items-end md:justify-between gap-8">
          <div className="max-w-xl">
            <h2
              className="text-5xl sm:text-6xl md:text-7xl font-bold uppercase leading-[0.95] tracking-tight text-white"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              Abnegación,<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-fire-accent)] via-[var(--color-fire-accent)]/80 to-[var(--color-fire)]">
                Disciplina
              </span>{' '}
              y Valor.
            </h2>
          </div>

          <p
            className="md:max-w-xs text-sm text-white/50 leading-relaxed border-l border-[var(--color-fire)]/30 pl-5"
            style={{ fontFamily: 'var(--font-sans)' }}
          >
            Nuestros principios rectores aseguran que cada actuación refleje la inquebrantable vocación de servicio que distingue al Cuerpo de Bomberos de San Jerónimo desde 1999.
          </p>
        </motion.div>

        {/* ── Double-Bezel value cards ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {values.map((value, i) => {
            const Icon = value.icon;
            return (
              <motion.div
                key={value.title}
                {...fadeUp(i * 0.1)}
              >
                {/* Outer shell (Double-Bezel) */}
                <div className="group relative h-full rounded-3xl border border-white/6 bg-white/3 p-1.5 transition-all duration-700 hover:border-[var(--color-fire-accent)]/25 hover:bg-[var(--color-fire-accent)]/4"
                  style={{ transitionTimingFunction: 'cubic-bezier(0.32,0.72,0,1)' }}>

                  {/* Inner core */}
                  <div
                    className="relative h-full rounded-[calc(1.5rem-6px)] p-7 overflow-hidden"
                    style={{
                      background: 'var(--color-dark-card)',
                      boxShadow: 'inset 0 1px 1px rgba(255,255,255,0.08)',
                    }}
                  >
                    {/* Hover glow orb */}
                    <div className="absolute -top-6 -right-6 w-24 h-24 rounded-full bg-[var(--color-fire-accent)]/10 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                    {/* Number label */}
                    <span
                      className="block text-[11px] font-semibold tracking-[0.2em] text-white/20 mb-6 tabular-nums"
                      style={{ fontFamily: 'var(--font-sans)' }}
                    >
                      0{i + 1}
                    </span>

                    {/* Icon */}
                    <div className="mb-6 w-10 h-10 transition-transform duration-500 group-hover:scale-110"
                      style={{ transitionTimingFunction: 'cubic-bezier(0.34,1.56,0.64,1)' }}>
                      <Icon className="w-full h-full text-[var(--color-fire-accent)]" />
                    </div>

                    {/* Title */}
                    <h3
                      className="text-base font-bold uppercase tracking-[0.14em] text-white mb-3"
                      style={{ fontFamily: 'var(--font-display)' }}
                    >
                      {value.title}
                    </h3>

                    {/* Description */}
                    <p
                      className="text-xs leading-relaxed text-white/45 group-hover:text-white/70 transition-colors duration-500"
                      style={{ fontFamily: 'var(--font-sans)' }}
                    >
                      {value.description}
                    </p>

                    {/* Bottom accent line */}
                    <div className="absolute bottom-0 left-0 w-0 h-px bg-gradient-to-r from-[var(--color-fire-accent)] to-[var(--color-fire)] group-hover:w-full transition-all duration-700 rounded-full"
                      style={{ transitionTimingFunction: 'cubic-bezier(0.32,0.72,0,1)' }} />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* ── Stats strip ── */}
        <motion.div
          {...fadeUp(0.4)}
          className="mt-16 flex flex-wrap gap-px rounded-2xl overflow-hidden border border-white/6"
        >
          {[
            { value: '1999', label: 'Año de fundación' },
            { value: '24/7', label: 'Disponibilidad' },
            { value: '100%', label: 'Voluntarios' },
            { value: 'APH', label: 'Atención prehospitalaria' },
          ].map((stat, i) => (
            <div
              key={i}
              className="flex-1 min-w-[120px] flex flex-col items-center justify-center py-8 px-4 text-center"
              style={{ background: 'var(--color-dark-card)' }}
            >
              <span
                className="block text-2xl md:text-3xl font-bold text-white mb-1"
                style={{ fontFamily: 'var(--font-display)' }}
              >
                {stat.value}
              </span>
              <span
                className="text-[10px] uppercase tracking-[0.18em] text-white/35"
                style={{ fontFamily: 'var(--font-sans)' }}
              >
                {stat.label}
              </span>
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
