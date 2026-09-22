import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { BUSINESS_INFO, type ServiceItem } from "../data/business";

export const ServicesSection = () => {
  const [activeId, setActiveId] = useState<string>(BUSINESS_INFO.services[0].id);

  const activeService: ServiceItem =
    BUSINESS_INFO.services.find((s) => s.id === activeId) || BUSINESS_INFO.services[0];

  return (
    <section id="services" className="py-24 bg-[#0A0C0F] border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-14">
          <h2 className="text-3xl sm:text-5xl font-display font-black text-white tracking-tight uppercase">
            Automotive Services
          </h2>
          <p className="text-xs sm:text-sm text-slate-400 max-w-md font-normal mt-2">
            Specialized automotive service categories provided by Auto Perfection Centre.
          </p>
        </div>

        {/* Desktop Editorial Interactive Layout */}
        <div className="hidden lg:grid lg:grid-cols-12 gap-10 items-stretch">
          {/* Left Column: Clean Service Navigation (No numbers) */}
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
                  <div>
                    <h3
                      className={`font-display font-extrabold text-xl uppercase tracking-wide transition-colors ${
                        isActive ? "text-white" : "text-slate-300 group-hover:text-white"
                      }`}
                    >
                      {svc.name}
                    </h3>
                    <p className="text-xs text-slate-400 line-clamp-1 mt-1 font-normal">
                      {svc.tagline}
                    </p>
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

          {/* Right Column: Active Service Visual */}
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
              </div>

              {/* Service Details */}
              <div className="p-8 flex-1 flex flex-col justify-center">
                <h4 className="text-3xl font-display font-black text-white uppercase tracking-wide mb-2">
                  {activeService.name}
                </h4>
                <p className="text-sm font-semibold text-amber-400/90 mb-3 font-display uppercase tracking-wider">
                  {activeService.tagline}
                </p>
                <p className="text-sm text-slate-300 leading-relaxed font-normal">
                  {activeService.description}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Editorial Cards (No numbers) */}
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
                <h3 className="absolute bottom-3 left-4 right-4 text-xl font-display font-black text-white uppercase tracking-wide">
                  {svc.name}
                </h3>
              </div>

              <div className="p-6">
                <p className="text-xs font-semibold text-amber-400/90 mb-2 font-display uppercase tracking-wider">
                  {svc.tagline}
                </p>
                <p className="text-xs text-slate-300 leading-relaxed font-normal">
                  {svc.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
