import { Shield, Phone } from "lucide-react";
import { AnimatedMarqueeHero } from "@/ui/hero-3";

const BOMBEROS_IMAGES = [
  "https://i.postimg.cc/6yfkK1GN/Screenshot-2026-08-28-at-10-43-03-a-m.png",
  "https://i.postimg.cc/2qVM4k9z/Screenshot-2026-08-28-at-10-43-27-a-m.png",
  "https://i.postimg.cc/d7Lp8sHN/Screenshot-2026-08-28-at-10-44-11-a-m.png",
  "https://i.postimg.cc/GBHVkLg0/Screenshot-2026-08-28-at-10-44-27-a-m.png",
  "https://i.postimg.cc/MMBLFs8P/Screenshot-2026-08-28-at-10-45-24-a-m.png",
  "https://i.postimg.cc/Q97zy6rc/Screenshot-2026-08-28-at-10-45-49-a-m.png",
  "https://i.postimg.cc/PpD7R6kB/Screenshot-2026-08-28-at-10-46-20-a-m.png",
  "https://i.postimg.cc/wyNrGWdn/Screenshot-2026-08-28-at-10-46-58-a-m.png",
  "https://i.postimg.cc/8fVYQh1x/Screenshot-2026-08-28-at-10-51-37-a-m.png",
];

export default function Hero() {
  const scrollToSection = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });

  return (
    <AnimatedMarqueeHero
      tagline="San Jerónimo, Antioquia"
      title={
        <>
          Bienvenidos
        </>
      }
      description="Desde el Cuerpo de Bomberos Voluntarios de San Jerónimo asumimos con responsabilidad, buena actitud y disciplina el propósito institucional de salvaguardar vidas, medio ambiente y bienes."
      ctaText="Nuestros Servicios"
      ctaSecondaryText="Emergencias: 323 505 7984"
      images={BOMBEROS_IMAGES}
      onCtaClick={() => scrollToSection("services")}
      onCtaSecondaryClick={() => window.location.href = "tel:+573235057984"}
    />
  );
}
