import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface AnimatedMarqueeHeroProps {
  tagline: string;
  title: React.ReactNode;
  description: string;
  ctaText: string;
  ctaSecondaryText?: string;
  images: string[];
  onCtaClick?: () => void;
  onCtaSecondaryClick?: () => void;
  className?: string;
}

// ── Easing constants ──
const FLUID = [0.32, 0.72, 0, 1] as const;
const SPRING = { type: "spring", stiffness: 72, damping: 17 } as const;

// ── Primary CTA — rounded pill with Button-in-Button trailing arrow ──
const ActionButton = ({
  children,
  onClick,
}: {
  children: React.ReactNode;
  onClick?: () => void;
}) => (
  <motion.button
    onClick={onClick}
    whileHover={{ scale: 1.03 }}
    whileTap={{ scale: 0.96 }}
    transition={SPRING}
    className="group relative overflow-hidden inline-flex items-center gap-3 pl-6 pr-2 py-2 rounded-full bg-[var(--color-fire)] text-white font-bold tracking-[0.14em] uppercase text-sm shadow-[0_0_24px_rgba(198,40,40,0.4)] hover:shadow-[0_0_48px_rgba(198,40,40,0.65)] focus:outline-none focus:ring-2 focus:ring-[var(--color-fire-accent)]/60"
    style={{ fontFamily: "var(--font-sans)", transitionTimingFunction: "cubic-bezier(0.32,0.72,0,1)" }}
  >
    <span className="relative z-10">{children}</span>
    {/* Button-in-Button arrow */}
    <span className="relative z-10 w-9 h-9 rounded-full bg-white/15 flex items-center justify-center transition-all duration-500 group-hover:bg-white/25 group-hover:translate-x-0.5 group-hover:-translate-y-px"
      style={{ transitionTimingFunction: "cubic-bezier(0.34,1.56,0.64,1)" }}>
      <svg viewBox="0 0 16 16" className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 13L13 3M13 3H7M13 3v6" />
      </svg>
    </span>
    {/* Shimmer sweep */}
    <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/15 to-transparent transition-transform duration-700 group-hover:translate-x-full rounded-full" />
  </motion.button>
);

// ── Secondary CTA — ghost pill ──
const SecondaryButton = ({
  children,
  onClick,
}: {
  children: React.ReactNode;
  onClick?: () => void;
}) => (
  <motion.button
    onClick={onClick}
    whileHover={{ scale: 1.03 }}
    whileTap={{ scale: 0.97 }}
    transition={SPRING}
    className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-white/15 text-white/70 hover:text-white hover:border-white/30 text-sm font-medium tracking-[0.1em] uppercase transition-colors duration-400 focus:outline-none"
    style={{ fontFamily: "var(--font-sans)", transitionTimingFunction: "cubic-bezier(0.32,0.72,0,1)" }}
  >
    <svg viewBox="0 0 24 24" className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.27h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9a16 16 0 0 0 5.91 5.91l1.27-.85a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
    </svg>
    {children}
  </motion.button>
);

export const AnimatedMarqueeHero: React.FC<AnimatedMarqueeHeroProps> = ({
  tagline,
  title,
  description,
  ctaText,
  ctaSecondaryText,
  images,
  onCtaClick,
  onCtaSecondaryClick,
  className,
}) => {
  const loopImages = [...images, ...images];

  return (
    <section
      id="home"
      aria-label="Sección principal - Bomberos Voluntarios de San Jerónimo"
      className={cn(
        "relative w-full min-h-[100dvh] overflow-hidden flex flex-col items-center justify-center",
        className
      )}
      style={{ background: "var(--color-dark)" }}
    >
      {/* ── Multi-layer atmospheric background ── */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Deep radial fire glow */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_65%_at_50%_38%,rgba(198,40,40,0.13),transparent_70%)]" />
        {/* Secondary golden accent glow */}
        <div className="absolute top-1/4 left-1/3 w-[700px] h-[700px] rounded-full bg-[var(--color-fire-accent)]/4 blur-[160px]" />
        {/* Dark vignette edges */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_110%_80%_at_50%_50%,transparent_40%,rgba(8,10,16,0.9)_100%)]" />
      </div>

      {/* ── Thin top fire line ── */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[var(--color-fire)]/70 to-transparent" />

      {/* ══════════ Text content ══════════ */}
      <div className="relative z-10 flex flex-col items-center text-center px-4 pt-32 pb-0 w-full max-w-5xl mx-auto">



        {/* Main H1 — massive, tracking-tight */}
        <motion.h1
          initial={{ opacity: 0, y: 24, filter: "blur(8px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.85, delay: 0.1, ease: FLUID }}
          className="text-6xl sm:text-7xl md:text-8xl lg:text-[104px] font-bold tracking-[-0.02em] leading-[0.92] text-white uppercase"
          style={{ fontFamily: "var(--font-display)" }}
        >
          {title}
        </motion.h1>

        {/* Description — left-aligned editorial style */}
        <motion.p
          initial={{ opacity: 0, y: 20, filter: "blur(6px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.8, delay: 0.25, ease: FLUID }}
          className="mt-9 max-w-xl text-sm md:text-base text-white/55 leading-relaxed border-l-2 border-[var(--color-fire)]/50 pl-5 text-left"
          style={{ fontFamily: "var(--font-sans)" }}
        >
          {description}
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, delay: 0.4, ease: FLUID }}
          className="mt-10 flex flex-col sm:flex-row gap-3 items-center"
        >
          <ActionButton onClick={onCtaClick}>{ctaText}</ActionButton>
          {ctaSecondaryText && (
            <SecondaryButton onClick={onCtaSecondaryClick}>
              {ctaSecondaryText}
            </SecondaryButton>
          )}
        </motion.div>

        {/* Subtle divider */}
        <motion.div
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{ scaleX: 1, opacity: 1 }}
          transition={{ duration: 1.1, delay: 0.6, ease: FLUID }}
          className="mt-14 w-px h-10 bg-gradient-to-b from-[var(--color-fire)]/60 to-transparent mx-auto"
        />
      </div>

      {/* ══════════ Image Marquee strip ══════════ */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.55, ease: FLUID }}
        className="relative w-full mt-8 h-44 md:h-60 flex-shrink-0"
        style={{
          maskImage: "linear-gradient(to bottom, transparent 0%, black 20%, black 80%, transparent 100%)",
          WebkitMaskImage: "linear-gradient(to bottom, transparent 0%, black 20%, black 80%, transparent 100%)",
        }}
      >
        {/* Side fade */}
        <div
          className="absolute inset-0 z-10 pointer-events-none"
          style={{
            background: "linear-gradient(to right, var(--color-dark) 0%, transparent 10%, transparent 90%, var(--color-dark) 100%)",
          }}
        />

        <motion.div
          className="flex gap-3 h-full px-3 absolute"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ ease: "linear", duration: 40, repeat: Infinity }}
        >
          {loopImages.map((src, i) => (
            /* Double-Bezel image card */
            <div
              key={i}
              className="flex-shrink-0 h-full rounded-2xl border border-white/8 bg-white/3 p-1"
              style={{
                aspectRatio: "3/4",
                transform: `rotate(${i % 3 === 0 ? -2.5 : i % 3 === 1 ? 1.5 : -0.5}deg)`,
              }}
            >
              <div className="relative w-full h-full rounded-xl overflow-hidden">
                <img
                  src={src}
                  alt={`Bomberos San Jerónimo en acción ${(i % images.length) + 1}`}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent" />
              </div>
            </div>
          ))}
        </motion.div>
      </motion.div>

      {/* ── Scroll indicator ── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.4 }}
        transition={{ delay: 1.4, duration: 0.8 }}
        className="absolute bottom-5 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5"
      >
        <span className="text-[9px] uppercase tracking-[0.4em] text-white" style={{ fontFamily: "var(--font-sans)" }}>
          Scroll
        </span>
        <motion.div
          className="w-px h-8 bg-gradient-to-b from-white/60 to-transparent"
          animate={{ scaleY: [1, 0.4, 1] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          style={{ transformOrigin: "top" }}
        />
      </motion.div>
    </section>
  );
};
