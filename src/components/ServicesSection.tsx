import { useState } from "react";
import { MessageSquare, ArrowRight } from "lucide-react";
import { BUSINESS_INFO, type ServiceItem } from "../data/business";

export const ServicesSection = () => {
  const [activeId, setActiveId] = useState<string>(BUSINESS_INFO.services[0].id);

  const activeService: ServiceItem =
    BUSINESS_INFO.services.find((s) => s.id === activeId) || BUSINESS_INFO.services[0];

  return (
    <section id="services" className="py-24 bg-[#0D0F14] border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <span className="text-xs font-mono uppercase tracking-widest text-amber-400 block mb-2">
              Verified Workshop Categories
            </span>
            <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-white tracking-tight uppercase">
              Automotive Services
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-slate-400 max-w-md">
            Click or tap any service to view verified capabilities. Reach out directly via WhatsApp for inquiries or quotes.
          </p>
        </div>

        {/* Desktop Editorial Interactive Layout (lg screens) */}
        <div className="hidden lg:grid lg:grid-cols-12 gap-10 items-stretch">
          {/* Left Column: Numbered Service List */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-3">
            {BUSINESS_INFO.services.map((svc) => {
              const isActive = svc.id === activeId;
              return (
                <button
                  key={svc.id}
                  type="button"
                  onClick={() => setActiveId(svc.id)}
                  onMouseEnter={() => setActiveId(svc.id)}
                  className={`text-left p-6 rounded-2xl border transition-all duration-200 cursor-pointer flex items-center justify-between group ${
                    isActive
                      ? "bg-[#141822] border-amber-500/50 shadow-xl"
                      : "bg-[#0A0C10] border-white/5 hover:border-white/15 hover:bg-[#111319]"
                  }`}
                  aria-pressed={isActive}
                >
                  <div className="flex items-center gap-5">
                    <span
                      className={`font-mono text-sm font-bold transition-colors ${
                        isActive ? "text-amber-400" : "text-slate-500 group-hover:text-slate-300"
                      }`}
                    >
                      {svc.number}
                    </span>
                    <div>
                      <h3
                        className={`font-display font-extrabold text-lg uppercase tracking-wide transition-colors ${
                          isActive ? "text-white" : "text-slate-300 group-hover:text-white"
                        }`}
                      >
                        {svc.name}
                      </h3>
                      <p className="text-xs text-slate-400 line-clamp-1 mt-0.5 font-normal">
                        {svc.tagline}
                      </p>
                    </div>
                  </div>

                  <ArrowRight
                    className={`w-4 h-4 transition-transform duration-200 ${
                      isActive
                        ? "text-amber-400 translate-x-1"
                        : "text-slate-600 group-hover:text-slate-400"
                    }`}
                  />
                </button>
              );
            })}
          </div>

          {/* Right Column: Active Service Visual & Direct Action */}
          <div className="lg:col-span-7 flex">
            <div className="w-full rounded-2xl bg-[#141720] border border-white/10 overflow-hidden shadow-2xl flex flex-col justify-between">
              {/* Photo corresponding exactly to the service */}
              <div className="relative h-80 w-full overflow-hidden bg-black/60">
                <img
                  src={activeService.image}
                  alt={activeService.imageAlt}
                  key={activeService.id}
                  className="w-full h-full object-cover object-center filter contrast-105 brightness-95 transition-opacity duration-300"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#141720] via-transparent to-black/20" />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 rounded-md bg-[#0D0F14]/90 backdrop-blur-sm border border-white/10 font-mono text-xs text-amber-400 font-bold">
                    {activeService.number} • VERIFIED SERVICE
                  </span>
                </div>
              </div>

              {/* Service Details & WhatsApp Trigger */}
              <div className="p-8 flex-1 flex flex-col justify-between">
                <div>
                  <h4 className="text-2xl font-display font-black text-white uppercase tracking-wide mb-2">
                    {activeService.name}
                  </h4>
                  <p className="text-sm font-semibold text-amber-400/90 mb-3">
                    {activeService.tagline}
                  </p>
                  <p className="text-sm text-slate-300 leading-relaxed mb-6 font-normal">
                    {activeService.description}
                  </p>
                </div>

                <div className="pt-6 border-t border-white/10 flex items-center justify-between">
                  <a
                    href={BUSINESS_INFO.contact.getWhatsAppUrl(activeService.name)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-amber-400 hover:bg-amber-300 text-black text-xs font-bold uppercase tracking-wider transition-colors shadow-md"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>Enquire About {activeService.name} on WhatsApp</span>
                  </a>

                  <a
                    href={`tel:${BUSINESS_INFO.contact.phoneRaw}`}
                    className="text-xs font-semibold text-slate-300 hover:text-white transition-colors"
                  >
                    Or Call {BUSINESS_INFO.contact.phoneFormatted}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile & Tablet Editorial Cards (Stacked) */}
        <div className="lg:hidden space-y-6">
          {BUSINESS_INFO.services.map((svc) => (
            <div
              key={svc.id}
              className="rounded-2xl bg-[#13161C] border border-white/10 overflow-hidden shadow-xl"
            >
              <div className="relative h-56 w-full bg-black">
                <img
                  src={svc.image}
                  alt={svc.imageAlt}
                  className="w-full h-full object-cover filter contrast-105 brightness-95"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#13161C] via-transparent to-black/30" />
                <span className="absolute top-3 left-3 px-2.5 py-1 rounded bg-[#0A0C10]/90 text-amber-400 font-mono text-[11px] font-bold">
                  {svc.number}
                </span>
                <h3 className="absolute bottom-3 left-4 right-4 text-xl font-display font-extrabold text-white uppercase tracking-wide">
                  {svc.name}
                </h3>
              </div>

              <div className="p-6">
                <p className="text-xs font-semibold text-amber-400/90 mb-2">
                  {svc.tagline}
                </p>
                <p className="text-xs text-slate-300 leading-relaxed mb-6 font-normal">
                  {svc.description}
                </p>

                <a
                  href={BUSINESS_INFO.contact.getWhatsAppUrl(svc.name)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-amber-400 hover:bg-amber-300 text-black text-xs font-bold uppercase tracking-wider transition-colors"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Enquire on WhatsApp</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
