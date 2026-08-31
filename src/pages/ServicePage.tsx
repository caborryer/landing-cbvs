import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ElasticGallery, type GalleryItem } from "@/ui/elastic-gallery";

const FLUID = [0.32, 0.72, 0, 1] as const;
const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28, filter: "blur(6px)" },
  animate: { opacity: 1, y: 0, filter: "blur(0px)" },
  transition: { duration: 0.75, delay, ease: FLUID },
});

interface ServiceDetail {
  slug: string;
  title: string;
  tagline: string;
  accentColor: string;
  description: string;
  benefits: string[];
  process: { step: string; desc: string }[];
  cta: string;
  images: GalleryItem[];
}

export default function ServicePage({ service }: { service: ServiceDetail }) {
  const navigate = useNavigate();

  // Scroll to top on mount
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div className="min-h-screen" style={{ background: "var(--color-dark)" }}>

      {/* ── Top bar ── */}
      <div className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4"
        style={{ background: "linear-gradient(to bottom, var(--color-dark) 60%, transparent)" }}>
        <button
          onClick={() => { navigate("/"); setTimeout(() => document.getElementById("services")?.scrollIntoView({ behavior: "smooth" }), 120); }}
          className="group flex items-center gap-2.5 text-white/50 hover:text-white transition-colors duration-300"
          style={{ fontFamily: "var(--font-sans)", transitionTimingFunction: "cubic-bezier(0.32,0.72,0,1)" }}
        >
          <span className="w-8 h-px bg-white/30 group-hover:w-12 group-hover:bg-white transition-all duration-400 rounded-full" />
          <span className="text-[11px] uppercase tracking-[0.2em] font-medium">Volver</span>
        </button>

        <a href="/" className="flex items-center gap-3 group">
          <div className="w-9 h-10 flex-shrink-0">
            <img src="/escudo.png" alt="Escudo Bomberos" className="w-full h-full object-contain" />
          </div>
          <span className="hidden sm:block text-xs uppercase tracking-[0.2em] text-white/40 font-medium"
            style={{ fontFamily: "var(--font-sans)" }}>
            Bomberos San Jerónimo
          </span>
        </a>
      </div>

      {/* ── Hero header ── */}
      <div className="relative pt-32 pb-16 px-6 overflow-hidden">
        {/* Ambient glow */}
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full blur-[140px] opacity-20 pointer-events-none"
          style={{ background: service.accentColor }}
        />
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/8 to-transparent" />

        <div className="relative max-w-7xl mx-auto">

          <motion.h1
            {...fadeUp(0.08)}
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold uppercase leading-[0.92] tracking-tight text-white mb-8"
            style={{ fontFamily: "var(--font-display)" }}
          >
            {service.title}
          </motion.h1>

          <motion.p
            {...fadeUp(0.18)}
            className="max-w-2xl text-base text-white/50 leading-relaxed border-l-2 pl-5"
            style={{
              fontFamily: "var(--font-sans)",
              borderColor: `${service.accentColor}60`,
            }}
          >
            {service.description}
          </motion.p>
        </div>
      </div>

      {/* ── Elastic Gallery ── */}
      <motion.div
        {...fadeUp(0.25)}
        className="max-w-7xl mx-auto px-6 mb-20"
      >
        <ElasticGallery items={service.images} />
      </motion.div>

      {/* ── Benefits + Process grid ── */}
      <div className="max-w-7xl mx-auto px-6 mb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">

          {/* Benefits */}
          <motion.div
            {...fadeUp(0.3)}
            className="rounded-3xl border border-white/6 bg-white/3 p-1.5"
            style={{ boxShadow: "inset 0 1px 1px rgba(255,255,255,0.06)" }}
          >
            <div className="rounded-[calc(1.5rem-6px)] p-8 h-full" style={{ background: "var(--color-dark-card)" }}>
              <h2 className="text-xs font-semibold uppercase tracking-[0.22em] text-white/30 mb-8"
                style={{ fontFamily: "var(--font-sans)" }}>
                ¿Por qué elegirnos?
              </h2>
              <ul className="flex flex-col gap-5">
                {service.benefits.map((b, i) => (
                  <li key={i} className="flex items-start gap-4">
                    <span
                      className="flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-bold mt-0.5"
                      style={{
                        background: `${service.accentColor}20`,
                        color: service.accentColor,
                        fontFamily: "var(--font-sans)",
                      }}
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="text-sm text-white/60 leading-relaxed" style={{ fontFamily: "var(--font-sans)" }}>
                      {b}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Process */}
          <motion.div
            {...fadeUp(0.38)}
            className="rounded-3xl border border-white/6 bg-white/3 p-1.5"
            style={{ boxShadow: "inset 0 1px 1px rgba(255,255,255,0.06)" }}
          >
            <div className="rounded-[calc(1.5rem-6px)] p-8 h-full" style={{ background: "var(--color-dark-card)" }}>
              <h2 className="text-xs font-semibold uppercase tracking-[0.22em] text-white/30 mb-8"
                style={{ fontFamily: "var(--font-sans)" }}>
                Cómo funciona
              </h2>
              <ol className="flex flex-col gap-6 relative">
                <div className="absolute left-3 top-2 bottom-2 w-px bg-white/6" />
                {service.process.map((p, i) => (
                  <li key={i} className="flex items-start gap-5 relative">
                    <span
                      className="flex-shrink-0 w-7 h-7 rounded-full border flex items-center justify-center text-[10px] font-bold z-10"
                      style={{
                        borderColor: `${service.accentColor}50`,
                        background: "var(--color-dark-card)",
                        color: service.accentColor,
                        fontFamily: "var(--font-sans)",
                      }}
                    >
                      {i + 1}
                    </span>
                    <div>
                      <p className="text-sm font-semibold text-white mb-1 uppercase tracking-wide"
                        style={{ fontFamily: "var(--font-display)" }}>
                        {p.step}
                      </p>
                      <p className="text-xs text-white/45 leading-relaxed" style={{ fontFamily: "var(--font-sans)" }}>
                        {p.desc}
                      </p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </motion.div>
        </div>
      </div>

      {/* ── CTA strip ── */}
      <motion.div
        {...fadeUp(0.45)}
        className="max-w-7xl mx-auto px-6 pb-24"
      >
        <div
          className="rounded-3xl border border-white/6 px-8 py-10 flex flex-col sm:flex-row items-center justify-between gap-6"
          style={{
            background: "var(--color-dark-card)",
            boxShadow: "inset 0 1px 1px rgba(255,255,255,0.06)",
          }}
        >
          <div>
            <p className="text-xl font-bold uppercase tracking-wide text-white mb-1"
              style={{ fontFamily: "var(--font-display)" }}>
              {service.cta}
            </p>
            <p className="text-xs text-white/35" style={{ fontFamily: "var(--font-sans)" }}>
              Bomberos Voluntarios de San Jerónimo — Antioquia
            </p>
          </div>
          <a
            href="tel:+573235057984"
            className="group flex-shrink-0 flex items-center gap-3 rounded-full text-white px-6 py-3.5 text-xs font-bold uppercase tracking-widest transition-all duration-500 shadow-lg active:scale-[0.97]"
            style={{
              background: service.accentColor,
              boxShadow: `0 0 28px ${service.accentColor}50`,
              fontFamily: "var(--font-sans)",
              transitionTimingFunction: "cubic-bezier(0.32,0.72,0,1)",
            }}
          >
            <span className="w-7 h-7 rounded-full bg-white/20 flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
              <svg viewBox="0 0 24 24" className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.27h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9a16 16 0 0 0 5.91 5.91l1.27-.85a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
              </svg>
            </span>
            323 505 7984
          </a>
        </div>
      </motion.div>
    </div>
  );
}
