import ServicePage from "@/pages/ServicePage";
import { GalleryItem } from "@/ui/elastic-gallery";

const images: GalleryItem[] = [
  {
    id: "01",
    title: "Equipo en Servicio",
    category: "Extinción",
    src: "https://i.postimg.cc/6yfkK1GN/Screenshot-2026-08-28-at-10-43-03-a-m.png",
    alt: "Bomberos San Jerónimo en acción",
  },
  {
    id: "02",
    title: "Preparación",
    category: "Equipamiento",
    src: "https://i.postimg.cc/2qVM4k9z/Screenshot-2026-08-28-at-10-43-27-a-m.png",
    alt: "Preparación del equipo",
  },
  {
    id: "03",
    title: "Operación",
    category: "En campo",
    src: "https://i.postimg.cc/d7Lp8sHN/Screenshot-2026-08-28-at-10-44-11-a-m.png",
    alt: "Operación de bomberos",
  },
];

const serviceData = {
  slug: "extintores",
  title: "Venta y Recarga\nde Extintores",
  tagline: "Equipos certificados — San Jerónimo",
  accentColor: "#C62828",
  description:
    "Ofrecemos la comercialización y recarga profesional de extintores de todos los tipos y capacidades. Nuestros equipos están certificados bajo las normas NFPA y NTC colombianas, garantizando su correcto funcionamiento cuando más lo necesitas.",
  benefits: [
    "Extintores certificados bajo normas NFPA 10 y NTC colombianas",
    "Recarga completa con prueba hidrostática incluida",
    "Asesoría gratuita sobre el tipo y cantidad requerida para tu espacio",
    "Servicio a domicilio en San Jerónimo y municipios cercanos",
    "Respaldo técnico de bomberos profesionales capacitados",
  ],
  process: [
    {
      step: "Diagnóstico",
      desc: "Evaluamos el estado actual de tus extintores y determinamos el tipo adecuado para tu espacio.",
    },
    {
      step: "Selección",
      desc: "Te orientamos en la elección del extintor correcto: PQS, CO2, agua o espuma según el tipo de riesgo.",
    },
    {
      step: "Recarga certificada",
      desc: "Realizamos la recarga siguiendo protocolos técnicos y entregamos certificado de mantenimiento.",
    },
    {
      step: "Instalación y señalización",
      desc: "Instalamos el equipo en el punto estratégico y verificamos la señalización reglamentaria.",
    },
  ],
  cta: "¿Necesitas recargar o comprar un extintor?",
  images,
};

export default function Extintores() {
  return <ServicePage service={serviceData} />;
}
