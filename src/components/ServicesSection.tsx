import { MessageSquare, ArrowUpRight } from "lucide-react";
import { BUSINESS_INFO } from "../data/business";

export const ServicesSection = () => {
  return (
    <section id="services" className="py-20 bg-[#0E1014] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <span className="text-xs uppercase tracking-widest text-amber-400 font-semibold mb-2 block">
              Automotive Services
            </span>
            <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-white tracking-tight">
              Workshop Capabilities in Accra
            </h2>
            <p className="text-sm sm:text-base text-slate-400 mt-2">
              Verified categories available at Auto Perfection Centre, Star Oil, La-Bawaleshi Road.
            </p>
          </div>

          <div className="text-xs text-slate-400 max-w-xs self-start md:self-end">
            Connect directly via WhatsApp to enquire about your vehicle's specific requirements.
          </div>
        </div>

        {/* Modern Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {BUSINESS_INFO.services.map((service) => (
            <div
              key={service.id}
              className="rounded-2xl bg-[#13161C] border border-white/8 overflow-hidden hover:border-amber-500/30 transition-all duration-200 flex flex-col justify-between group"
            >
              {/* Authentic Photo */}
              <div className="relative h-56 w-full overflow-hidden bg-black/50">
                <img
                  src={service.image}
                  alt={service.imageAlt}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 filter brightness-90 contrast-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#13161C] via-transparent to-black/20" />
                
                <h3 className="absolute bottom-3 left-4 right-4 text-xl font-display font-bold text-white">
                  {service.name}
                </h3>
              </div>

              {/* Service Content */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <p className="text-xs font-semibold text-amber-400/90 mb-2">
                    {service.tagline}
                  </p>
                  <p className="text-xs text-slate-400 leading-relaxed mb-6">
                    {service.description}
                  </p>
                </div>

                {/* Direct WhatsApp Action */}
                <a
                  href={BUSINESS_INFO.contact.getWhatsAppUrl(service.name)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-between w-full px-4 py-2.5 rounded-xl bg-white/5 hover:bg-amber-400 text-slate-200 hover:text-black text-xs font-semibold border border-white/10 hover:border-amber-400 transition-all duration-150 group/btn"
                >
                  <span className="flex items-center gap-2">
                    <MessageSquare className="w-3.5 h-3.5 text-amber-400 group-hover/btn:text-black" />
                    Enquire on WhatsApp
                  </span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-slate-500 group-hover/btn:text-black" />
                </a>
              </div>
            </div>
          ))}

          {/* Consultation / Inquiries Card */}
          <div className="rounded-2xl bg-[#13161C]/50 border border-dashed border-white/15 p-6 flex flex-col justify-between">
            <div>
              <span className="text-xs uppercase tracking-wider text-slate-400 font-mono block mb-2">
                Custom Service Inquiry
              </span>
              <h3 className="text-xl font-display font-bold text-white mb-2">
                Have A Specific Vehicle Question?
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed mb-6">
                If your car needs specialized attention or you want to verify parts availability before visiting, contact our technicians directly.
              </p>
            </div>

            <div className="flex flex-col gap-2.5">
              <a
                href={BUSINESS_INFO.contact.getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-amber-400 hover:bg-amber-300 text-black text-xs font-bold transition-colors"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Chat on WhatsApp</span>
              </a>
              <a
                href={`tel:${BUSINESS_INFO.contact.phoneRaw}`}
                className="flex items-center justify-center gap-2 w-full py-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-white text-xs font-medium border border-white/10 transition-colors"
              >
                <span>Call {BUSINESS_INFO.contact.phoneFormatted}</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
