import { MessageSquare, Phone, Navigation, Star, MapPin } from "lucide-react";
import { BUSINESS_INFO } from "../data/business";

export const Hero = () => {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 bg-[#0B0D10] border-b border-white/5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Editorial Asymmetric Hero Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Authoritative Brand & Curated CTAs */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* Location & Status Stamp */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-white/5 border border-white/10 text-xs text-slate-300 mb-6 font-mono">
              <MapPin className="w-3.5 h-3.5 text-amber-400 shrink-0" />
              <span>Star Oil, La-Bawaleshi Road • Accra, Ghana</span>
            </div>

            {/* Massive Typographic Brand Presence */}
            <h1 className="font-display font-black text-5xl sm:text-7xl lg:text-8xl text-white tracking-tight uppercase leading-[0.92] mb-5">
              AUTO <br className="hidden sm:inline" />
              PERFECTION <br className="hidden sm:inline" />
              CENTRE
            </h1>

            {/* Human Headline & Natural Copy */}
            <p className="text-2xl sm:text-3xl font-display font-bold text-amber-400 tracking-tight uppercase mb-3">
              {BUSINESS_INFO.tagline}
            </p>
            <p className="text-base sm:text-lg text-slate-300 font-normal leading-relaxed mb-8 max-w-xl">
              {BUSINESS_INFO.supportingCopy} {BUSINESS_INFO.detailedIntro}
            </p>

            {/* Curated Primary Conversion CTAs (NO Spam) */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 w-full sm:w-auto mb-8">
              <a
                href={BUSINESS_INFO.contact.getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 px-7 py-4 text-xs font-bold text-black uppercase tracking-wider bg-amber-400 hover:bg-amber-300 rounded-xl transition-all shadow-md active:scale-98"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Chat on WhatsApp</span>
              </a>

              <a
                href={`tel:${BUSINESS_INFO.contact.phoneRaw}`}
                className="inline-flex items-center justify-center gap-2 px-7 py-4 text-xs font-bold text-white uppercase tracking-wider bg-[#141720] hover:bg-[#1B202C] border border-white/10 rounded-xl transition-colors"
              >
                <Phone className="w-4 h-4 text-amber-400" />
                <span>Call {BUSINESS_INFO.contact.phoneFormatted}</span>
              </a>

              <a
                href="#location"
                className="inline-flex items-center justify-center gap-1.5 px-4 py-4 text-xs font-semibold text-slate-400 hover:text-white transition-colors"
              >
                <Navigation className="w-3.5 h-3.5 text-amber-400" />
                <span>Get Directions</span>
              </a>
            </div>

            {/* Google Social Proof */}
            <div className="flex items-center gap-3 pt-6 border-t border-white/10 text-xs text-slate-400">
              <div className="flex items-center text-amber-400 gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
                ))}
              </div>
              <span className="text-white font-bold tracking-wide">
                4.9 / 5.0 Google Rating
              </span>
              <span className="text-slate-600">•</span>
              <span>64 Customer Reviews</span>
            </div>
          </div>

          {/* Right Column: Local Verified Workshop Photography */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden bg-[#141720] border border-white/10 shadow-2xl group">
              <div className="h-[440px] sm:h-[500px] w-full relative bg-[#101217]">
                <img
                  src="/images/hero/hero-workshop.jpg"
                  alt="Auto Perfection Centre workshop environment"
                  className="w-full h-full object-cover object-center filter brightness-95 contrast-105"
                  loading="eager"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B0D10] via-transparent to-transparent opacity-80" />
              </div>

              {/* Minimal Editorial Badge */}
              <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-[#0D0F14]/90 backdrop-blur-md border border-white/10 flex items-center justify-between">
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-widest text-amber-400 block mb-0.5">
                    Workshop Bay
                  </span>
                  <span className="text-xs font-display font-bold text-white uppercase tracking-wider block">
                    Auto Perfection Centre • Accra
                  </span>
                </div>
                <span className="text-[11px] font-mono text-slate-400">
                  Star Oil, La-Bawaleshi Rd
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* 5-Service Indicator Ribbon */}
        <div className="mt-14 pt-8 border-t border-white/10">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
            {BUSINESS_INFO.services.map((svc) => (
              <a
                key={svc.id}
                href="#services"
                className="p-3.5 rounded-xl bg-[#12151C] border border-white/5 hover:border-amber-500/40 hover:bg-[#161A24] transition-all text-left group"
              >
                <span className="text-[10px] font-mono text-amber-400 block mb-1">
                  {svc.number}
                </span>
                <span className="text-xs font-display font-bold text-white group-hover:text-amber-300 transition-colors uppercase tracking-wider block truncate">
                  {svc.name}
                </span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
