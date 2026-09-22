export interface ServiceItem {
  id: string;
  name: string;
  tagline: string;
  description: string;
  image: string;
  imageAlt: string;
}

export const BUSINESS_INFO = {
  name: "Auto Perfection Centre",
  tagline: "Professional Auto Care. Done Right.",
  supportingCopy: "Auto repair, electrical service, oil changes, painting and automotive support in Accra.",
  location: {
    address: "Star Oil, La-Bawaleshi Road, Accra, Ghana",
    landmark: "Star Oil Station",
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
      name: "Auto Repair",
      tagline: "Comprehensive mechanical repair and vehicle maintenance.",
      description: "General automotive mechanical repair and routine maintenance to ensure safe, dependable driving on Accra roads.",
      image: "https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?auto=format&fit=crop&w=1200&q=80",
      imageAlt: "Technician inspecting vehicle on workshop lift",
    },
    {
      id: "auto-electrical",
      name: "Auto Electrical Service",
      tagline: "Automotive electrical system service and diagnostics.",
      description: "Diagnostic inspection and repair of vehicle electrical wiring, batteries, lighting, starter systems, and electronics.",
      image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1200&q=80",
      imageAlt: "Automotive electrical circuit and diagnostic inspection",
    },
    {
      id: "oil-change",
      name: "Oil Change Service",
      tagline: "Engine oil change and essential fluid servicing.",
      description: "Timely engine oil replacement, oil filter change, and vital fluid level checks to protect engine health.",
      image: "https://images.unsplash.com/photo-1487754180451-c456f719a1fc?auto=format&fit=crop&w=1200&q=80",
      imageAlt: "Automotive engine oil change service",
    },
    {
      id: "auto-painting",
      name: "Auto Painting",
      tagline: "Automotive painting and body surface finishing.",
      description: "Spray painting, precise color matching, scratch restoration, and protective clear coating for high-standard vehicle finish.",
      image: "https://images.unsplash.com/photo-1563720223185-11003d516935?auto=format&fit=crop&w=1200&q=80",
      imageAlt: "Automotive spray booth painting and vehicle finish",
    },
    {
      id: "auto-body-parts",
      name: "Auto Body Parts",
      tagline: "Automotive body panels and exterior replacement parts.",
      description: "Sourcing and fitment of exterior body panels, bumpers, fenders, lights, and structural vehicle replacements.",
      image: "https://images.unsplash.com/photo-1508974239320-0a029497e820?auto=format&fit=crop&w=1200&q=80",
      imageAlt: "Automotive exterior body panel replacement and fitting",
    },
  ] as ServiceItem[],
};
