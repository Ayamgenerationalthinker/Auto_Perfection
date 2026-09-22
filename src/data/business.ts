export interface ServiceItem {
  id: string;
  number: string;
  name: string;
  shortTitle: string;
  tagline: string;
  description: string;
  image: string;
  imageAlt: string;
}

export const BUSINESS_INFO = {
  name: "AUTO PERFECTION CENTRE",
  tagline: "Automotive Services in Accra",
  location: {
    address: "Star Oil, La-Bawaleshi Road, Accra, Ghana",
    station: "Star Oil Station",
    road: "La-Bawaleshi Road",
    city: "Accra",
    country: "Ghana",
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Star+Oil+La-Bawaleshi+Road+Accra+Ghana",
    directionsUrl: "https://www.google.com/maps/dir/?api=1&destination=Star+Oil+La-Bawaleshi+Road+Accra+Ghana",
  },
  contact: {
    phoneFormatted: "+233 54 730 5045",
    phoneRaw: "+233547305045",
    whatsappNumber: "233547305045",
    whatsappDefaultMessage: "Hello Auto Perfection Centre, I would like to enquire about your automotive services.",
    getWhatsAppUrl: (serviceName?: string) => {
      const msg = serviceName 
        ? `Hello Auto Perfection Centre, I would like to enquire about your ${serviceName} service.`
        : "Hello Auto Perfection Centre, I would like to enquire about your automotive services.";
      return `https://wa.me/233547305045?text=${encodeURIComponent(msg)}`;
    },
  },
  reputation: {
    googleRating: 4.9,
    googleReviewCount: 64,
  },
  services: [
    {
      id: "auto-repair",
      number: "01",
      name: "Auto Repair",
      shortTitle: "REPAIR",
      tagline: "Mechanical repair and scheduled vehicle maintenance.",
      description: "General mechanical troubleshooting, component replacement, and scheduled vehicle servicing to keep your car operating safely on Accra roads.",
      image: "https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?auto=format&fit=crop&w=1200&q=80",
      imageAlt: "Technician inspecting vehicle mechanical components on workshop lift",
    },
    {
      id: "auto-electrical",
      number: "02",
      name: "Auto Electrical Service",
      shortTitle: "ELECTRICAL",
      tagline: "Electrical system diagnostics and component repair.",
      description: "Diagnostic inspection and repair of automotive electrical wiring, batteries, alternators, starter motors, lighting, and vehicle electronics.",
      image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1200&q=80",
      imageAlt: "Automotive technician inspecting electrical circuits and vehicle diagnostic equipment",
    },
    {
      id: "oil-change",
      number: "03",
      name: "Oil Change Service",
      shortTitle: "OIL CHANGE",
      tagline: "Engine oil replacement and fluid servicing.",
      description: "Engine oil drainage, fresh oil replacement, oil filter renewal, and essential fluid level checks formulated for engine longevity.",
      image: "https://images.unsplash.com/photo-1487754180451-c456f719a1fc?auto=format&fit=crop&w=1200&q=80",
      imageAlt: "Hands-on automotive engine oil service and maintenance",
    },
    {
      id: "auto-painting",
      number: "04",
      name: "Auto Painting",
      shortTitle: "PAINTING",
      tagline: "Vehicle spray painting and body refinishing.",
      description: "Spray booth painting, color matching, scratch and panel refinishing, and clear coating for a clean, durable automotive exterior finish.",
      image: "https://images.unsplash.com/photo-1563720223185-11003d516935?auto=format&fit=crop&w=1200&q=80",
      imageAlt: "Professional automotive spray painting in workshop paint booth",
    },
    {
      id: "auto-body-parts",
      number: "05",
      name: "Auto Body Parts",
      shortTitle: "BODY PARTS",
      tagline: "Exterior body panels and replacement parts.",
      description: "Sourcing, alignment, and installation of vehicle body panels, bumpers, fenders, grilles, lights, and structural exterior replacements.",
      image: "https://images.unsplash.com/photo-1508974239320-0a029497e820?auto=format&fit=crop&w=1200&q=80",
      imageAlt: "Automotive replacement exterior panels and body parts in workshop",
    },
  ] as ServiceItem[],
};
