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
  tagline: "Professional Auto Care. Done Right.",
  supportingCopy: "Reliable automotive service for drivers in Accra.",
  detailedIntro: "Specialized auto repair, vehicle electrical service, engine oil changes, automotive spray painting, and body parts. Located at Star Oil on La-Bawaleshi Road.",
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
      description: "Comprehensive mechanical troubleshooting, suspension repair, engine servicing, and maintenance to keep your automobile safe on Accra roads.",
      image: "/images/services/auto-repair.jpg",
      imageAlt: "Technician inspecting vehicle mechanical components on workshop lift",
    },
    {
      id: "auto-electrical",
      number: "02",
      name: "Auto Electrical Service",
      shortTitle: "ELECTRICAL",
      tagline: "Electrical system diagnostics and component repair.",
      description: "Diagnostic assessment and repair of automotive wiring, starter motors, alternators, battery systems, lighting, and electronic components.",
      image: "/images/services/auto-electrical.jpg",
      imageAlt: "Automotive technician inspecting electrical circuits and vehicle diagnostic equipment",
    },
    {
      id: "oil-change",
      number: "03",
      name: "Oil Change Service",
      shortTitle: "OIL CHANGE",
      tagline: "Engine oil replacement and vital fluid servicing.",
      description: "Routine engine oil change, oil filter renewal, and fluid level checks formulated to protect engine health under local driving conditions.",
      image: "/images/services/oil-change.jpg",
      imageAlt: "Hands-on automotive engine oil service and maintenance",
    },
    {
      id: "auto-painting",
      number: "04",
      name: "Auto Painting",
      shortTitle: "PAINTING",
      tagline: "Vehicle spray painting and body refinishing.",
      description: "Automotive spray booth painting, computerized color matching, scratch restoration, and protective clear coating for high-standard vehicle finish.",
      image: "/images/services/auto-painting.jpg",
      imageAlt: "Professional automotive spray painting in workshop paint booth",
    },
    {
      id: "auto-body-parts",
      number: "05",
      name: "Auto Body Parts",
      shortTitle: "BODY PARTS",
      tagline: "Exterior body panels and replacement parts.",
      description: "Sourcing and fitment of exterior body panels, bumpers, fenders, grilles, lights, and structural vehicle replacements.",
      image: "/images/services/auto-body-parts.jpg",
      imageAlt: "Automotive replacement exterior panels and body parts in workshop",
    },
  ] as ServiceItem[],
};
