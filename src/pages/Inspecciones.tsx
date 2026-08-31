import ServicePage from "@/pages/ServicePage";
import { GalleryItem } from "@/ui/elastic-gallery";

const images: GalleryItem[] = [
  {
    id: "01",
    title: "Inspección",
    category: "Seguridad",
    src: "https://i.postimg.cc/wyNrGWdn/Screenshot-2026-08-28-at-10-46-58-a-m.png",
    alt: "Inspección de seguridad",
  },
  {
    id: "02",
    title: "Verificación",
    category: "Técnica",
    src: "https://i.postimg.cc/8fVYQh1x/Screenshot-2026-08-28-at-10-51-37-a-m.png",
    alt: "Verificación técnica locativa",
  },
];

const serviceData = {
  slug: "inspecciones",
  title: "Inspecciones de\nSeguridad Locativas",
  tagline: "Prevención técnica — Certificada",
  accentColor: "#34d399",
  description:
    "Realizamos inspecciones técnicas de seguridad contra incendios en edificaciones residenciales, comerciales e industriales. Identificamos riesgos, verificamos sistemas contra incendios y emitimos el concepto técnico necesario para licencias y cumplimiento normativo.",
  benefits: [
    "Concepto técnico oficial emitido por el Cuerpo de Bomberos",
    "Inspección de redes contra incendios, extintores y rutas de evacuación",
    "Cumplimiento de la NSR-10, RETIE y normativa de bomberos vigente",
    "Recomendaciones escritas y plan de mejora incluido",
    "Servicio requerido para trámites de licencia de funcionamiento",
  ],
  process: [
    {
      step: "Solicitud",
      desc: "Recibes la visita técnica programada según tu disponibilidad.",
    },
    {
      step: "Inspección",
      desc: "El inspector revisa sistemas eléctricos, salidas de emergencia, extintores, señalización y accesos.",
    },
    {
      step: "Informe técnico",
      desc: "Emitimos un informe detallado con los hallazgos y las acciones correctivas requeridas.",
    },
    {
      step: "Concepto oficial",
      desc: "Una vez corregidas las observaciones, emitimos el concepto favorable del Cuerpo de Bomberos.",
    },
  ],
  cta: "¿Necesitas una inspección de tu edificación?",
  images,
};

export default function Inspecciones() {
  return <ServicePage service={serviceData} />;
}
