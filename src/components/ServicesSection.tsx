import { useState } from "react";
import { MessageSquare, ArrowRight, ShieldCheck } from "lucide-react";
import { BUSINESS_INFO, type ServiceItem } from "../data/business";

export const ServicesSection = () => {
  const [activeId, setActiveId] = useState<string>(BUSINESS_INFO.services[0].id);

  const activeService: ServiceItem =
    BUSINESS_INFO.services.find((s) => s.id === activeId) || BUSINESS_INFO.services[0];

  return (
    <section id="services" className="py-24 bg-[#0A0C0F] border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <span className="text-xs font-mono uppercase tracking-widest text-amber-400 block mb-2">
              Verified Workshop Categories
            </span>
            <h2 className="text-3xl sm:text-5xl font-display font-black text-white tracking-tight uppercase">
              Automotive Services
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-slate-400 max-w-md font-normal">
            Select a service category to review verified capabilities at Auto Perfection Centre, Star Oil, La-Bawaleshi Road.
          </p>
        </div>

        {/* Desktop Editorial Interactive Layout */}
        <div className="hidden lg:grid lg:grid-cols-12 gap-10 items-stretch">
          {/* Left Column: Numbered Service Navigation */}
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
                      : "bg-[#0E1015] border-white/5 hover:border-white/15 hover:bg-[#12141C]"
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

          {/* Right Column: Active Service Visual (NO Spammy Buttons) */}
          <div className="lg:col-span-7 flex">
            <div className="w-full rounded-2xl bg-[#12151D] border border-white/10 overflow-hidden shadow-2xl flex flex-col justify-between">
              {/* Strictly Verified Corresponding Photo */}
              <div className="relative h-80 w-full overflow-hidden bg-black">
                <img
                  src={activeService.image}
                  alt={activeService.imageAlt}
                  key={activeService.id}
                  className="w-full h-full object-cover object-center filter contrast-105 brightness-95 transition-opacity duration-300"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#12151D] via-transparent to-black/20" />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 rounded-md bg-[#0A0C10]/90 backdrop-blur-sm border border-white/10 font-mono text-xs text-amber-400 font-bold">
                    {activeService.number} • VERIFIED CAPABILITY
                  </span>
                </div>
              </div>

              {/* Service Details & Single Clean Consultation Prompt */}
              <div className="p-8 flex-1 flex flex-col justify-between">
                <div>
                  <h4 className="text-2xl font-display font-black text-white uppercase tracking-wide mb-2">
                    {activeService.name}
                  </h4>
                  <p className="text-sm font-semibold text-amber-400/90 mb-3 font-display uppercase tracking-wider">
                    {activeService.tagline}
                  </p>
                  <p className="text-sm text-slate-300 leading-relaxed font-normal">
                    {activeService.description}
                  </p>
                </div>

                <div className="pt-6 border-t border-white/10 flex items-center justify-between">
                  <div className="flex items-center gap-2 text-xs text-slate-400">
                    <ShieldCheck className="w-4 h-4 text-amber-400 shrink-0" />
                    <span>Verified public category in Accra</span>
                  </div>

                  {/* Single Clean WhatsApp Action for active service */}
                  <a
                    href={BUSINESS_INFO.contact.getWhatsAppUrl(activeService.name)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-amber-400 hover:bg-amber-300 text-black text-xs font-bold uppercase tracking-wider transition-colors shadow-sm"
                  >
                    <MessageSquare className="w-3.5 h-3.5" />
                    <span>WhatsApp Enquiry</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Editorial Cards */}
        <div className="lg:hidden space-y-6">
          {BUSINESS_INFO.services.map((svc) => (
            <div
              key={svc.id}
              className="rounded-2xl bg-[#12151D] border border-white/10 overflow-hidden shadow-xl"
            >
              <div className="relative h-56 w-full bg-black">
                <img
                  src={svc.image}
                  alt={svc.imageAlt}
                  className="w-full h-full object-cover filter contrast-105 brightness-95"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#12151D] via-transparent to-black/30" />
                <span className="absolute top-3 left-3 px-2.5 py-1 rounded bg-[#0A0C10]/90 text-amber-400 font-mono text-[11px] font-bold">
                  {svc.number}
                </span>
                <h3 className="absolute bottom-3 left-4 right-4 text-xl font-display font-black text-white uppercase tracking-wide">
                  {svc.name}
                </h3>
              </div>

              <div className="p-6">
                <p className="text-xs font-semibold text-amber-400/90 mb-2 font-display uppercase tracking-wider">
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
