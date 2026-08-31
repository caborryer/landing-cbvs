import ServicePage from "@/pages/ServicePage";
import { GalleryItem } from "@/ui/elastic-gallery";

const images: GalleryItem[] = [
  {
    id: "01",
    title: "Unidad Lista",
    category: "Seguridad vial",
    src: "https://i.postimg.cc/GBHVkLg0/Screenshot-2026-08-28-at-10-44-27-a-m.png",
    alt: "Unidad de bomberos lista",
  },
  {
    id: "02",
    title: "Equipamiento",
    category: "Kit",
    src: "https://i.postimg.cc/MMBLFs8P/Screenshot-2026-08-28-at-10-45-24-a-m.png",
    alt: "Equipamiento de emergencia",
  },
];

const serviceData = {
  slug: "kit-carretera",
  title: "Venta de Kit\nde Carretera",
  tagline: "Seguridad vial — Homologado",
  accentColor: "#F4D03F",
  description:
    "Venta de kits de carretera completos y homologados según el Código Nacional de Tránsito colombiano. Todo lo que necesitas para cumplir la normativa y viajar con seguridad total en las carreteras de Antioquia y Colombia.",
  benefits: [
    "Kits homologados según la resolución 3027 del Ministerio de Transporte",
    "Contenido completo: triangulos, linterna, botiquín, extintor, chaleco reflectivo",
    "Precios accesibles directamente del Cuerpo de Bomberos",
    "Disponibilidad inmediata en nuestra sede en San Jerónimo",
    "Asesoría sobre normativa vigente incluida en la compra",
  ],
  process: [
    {
      step: "Consulta",
      desc: "Te informamos sobre los requisitos legales vigentes según el tipo de vehículo.",
    },
    {
      step: "Selección del kit",
      desc: "Elegimos el kit adecuado para moto, automóvil, camioneta o vehículo de carga.",
    },
    {
      step: "Entrega",
      desc: "Entregamos el kit completo, revisado y listo para cumplir con las autoridades de tránsito.",
    },
  ],
  cta: "¿Necesitas tu kit de carretera?",
  images,
};

export default function KitCarretera() {
  return <ServicePage service={serviceData} />;
}
