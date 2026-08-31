import ServicePage from "@/pages/ServicePage";
import { GalleryItem } from "@/ui/elastic-gallery";

const images: GalleryItem[] = [
  {
    id: "01",
    title: "Formación",
    category: "Capacitación",
    src: "https://i.postimg.cc/Q97zy6rc/Screenshot-2026-08-28-at-10-45-49-a-m.png",
    alt: "Formación en bomberos",
  },
  {
    id: "02",
    title: "En Acción",
    category: "Práctica",
    src: "https://i.postimg.cc/PpD7R6kB/Screenshot-2026-08-28-at-10-46-20-a-m.png",
    alt: "Práctica de emergencias",
  },
];

const serviceData = {
  slug: "capacitaciones",
  title: "Servicio de\nCapacitaciones",
  tagline: "Formación profesional — Certificada",
  accentColor: "#60a5fa",
  description:
    "Capacitamos a empresas, colegios, instituciones y comunidades en prevención y control de incendios, primeros auxilios básicos, planes de evacuación y manejo de extintores. Nuestros instructores son bomberos activos con amplia experiencia operacional.",
  benefits: [
    "Instructores bomberos activos con experiencia real en emergencias",
    "Capacitaciones prácticas y teóricas adaptadas al tipo de empresa",
    "Certificado de participación avalado por el Cuerpo de Bomberos",
    "Simulacros de evacuación incluidos en el programa",
    "Cumplimiento de la resolución 0256 y la Ley 1523 de gestión del riesgo",
  ],
  process: [
    {
      step: "Diagnóstico de riesgos",
      desc: "Evaluamos las necesidades específicas de tu organización y los riesgos presentes.",
    },
    {
      step: "Diseño del programa",
      desc: "Diseñamos un programa a medida con módulos teóricos y prácticos.",
    },
    {
      step: "Ejecución",
      desc: "Realizamos la capacitación en tus instalaciones o en nuestra sede, incluyendo prácticas con extintores.",
    },
    {
      step: "Certificación",
      desc: "Entregamos certificados individuales y el informe de la capacitación a la empresa.",
    },
  ],
  cta: "¿Quieres capacitar a tu equipo?",
  images,
};

export default function Capacitaciones() {
  return <ServicePage service={serviceData} />;
}
