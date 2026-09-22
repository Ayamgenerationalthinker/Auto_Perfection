import { MessageSquare, Phone, Navigation, Star, MapPin } from "lucide-react";
import { BUSINESS_INFO } from "../data/business";

export const Hero = () => {
  return (
    <section className="relative min-h-[85vh] flex items-center justify-center pt-28 pb-16 bg-[#0C0D10] overflow-hidden">
      {/* Real Workshop Background Photo */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1486006920555-c77dce18193b?auto=format&fit=crop&w=1920&q=85"
          alt="Auto repair workshop in action"
          className="w-full h-full object-cover object-center filter brightness-[0.28] contrast-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0C0D10] via-[#0C0D10]/70 to-[#0C0D10]/80" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Verified Location & Reputation Tag */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs text-slate-300 mb-6">
          <span className="flex items-center text-amber-400 font-bold">
            <Star className="w-3.5 h-3.5 fill-amber-400 mr-1" />
            {BUSINESS_INFO.reputation.googleRating}
          </span>
          <span className="text-slate-500">•</span>
          <span>{BUSINESS_INFO.reputation.googleReviewCount} Google Reviews</span>
          <span className="text-slate-500">•</span>
          <span className="flex items-center gap-1 text-slate-300">
            <MapPin className="w-3 h-3 text-amber-400" />
            Star Oil, La-Bawaleshi Rd
          </span>
        </div>

        {/* Business Title */}
        <div className="text-xs uppercase tracking-[0.25em] text-amber-400 font-semibold mb-3">
          {BUSINESS_INFO.name}
        </div>

        {/* Primary Headline */}
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-display font-extrabold text-white tracking-tight leading-[1.1] mb-6">
          Professional Auto Care. <br className="hidden sm:inline" />
          Done Right.
        </h1>

        {/* Verified Supporting Copy */}
        <p className="text-base sm:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed mb-10 font-normal">
          {BUSINESS_INFO.supportingCopy}
        </p>

        {/* High-Intent CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 max-w-md mx-auto mb-14">
          <a
            href={BUSINESS_INFO.contact.getWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 text-sm font-bold text-black bg-amber-400 hover:bg-amber-300 rounded-xl transition-all shadow-md active:scale-98"
          >
            <MessageSquare className="w-4 h-4" />
            <span>Chat on WhatsApp</span>
          </a>

          <a
            href={`tel:${BUSINESS_INFO.contact.phoneRaw}`}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold text-white bg-[#14171E] hover:bg-[#1A1E27] border border-white/10 rounded-xl transition-colors"
          >
            <Phone className="w-4 h-4 text-amber-400" />
            <span>Call {BUSINESS_INFO.contact.phoneFormatted}</span>
          </a>
        </div>

        {/* Quick Verified Highlights Strip */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 border-t border-white/10 pt-8 text-left max-w-4xl mx-auto">
          <div className="p-3 rounded-lg bg-white/[0.02] border border-white/5">
            <span className="text-[11px] uppercase tracking-wider text-slate-400 block mb-0.5 font-mono">
              Rating
            </span>
            <span className="text-sm font-bold text-white flex items-center gap-1">
              <Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400" /> 4.9 / 5.0 Google
            </span>
          </div>

          <div className="p-3 rounded-lg bg-white/[0.02] border border-white/5">
            <span className="text-[11px] uppercase tracking-wider text-slate-400 block mb-0.5 font-mono">
              Location
            </span>
            <span className="text-sm font-bold text-white truncate block">
              Star Oil, La-Bawaleshi Rd
            </span>
          </div>

          <div className="p-3 rounded-lg bg-white/[0.02] border border-white/5">
            <span className="text-[11px] uppercase tracking-wider text-slate-400 block mb-0.5 font-mono">
              Direct Contact
            </span>
            <span className="text-sm font-bold text-white block">
              {BUSINESS_INFO.contact.phoneFormatted}
            </span>
          </div>

          <div className="p-3 rounded-lg bg-white/[0.02] border border-white/5">
            <span className="text-[11px] uppercase tracking-wider text-slate-400 block mb-0.5 font-mono">
              Navigation
            </span>
            <a
              href="#location"
              className="text-sm font-bold text-amber-400 hover:text-amber-300 flex items-center gap-1 transition-colors"
            >
              <Navigation className="w-3.5 h-3.5" /> View Workshop Map
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
