import { MapPin, Phone, MessageSquare, Navigation, ExternalLink, Clock } from "lucide-react";
import { BUSINESS_INFO } from "../data/business";

export const LocationSection = () => {
  return (
    <section id="location" className="py-24 bg-[#0A0B0E] border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <span className="text-xs font-mono uppercase tracking-widest text-amber-400 block mb-2">
            Workshop Location
          </span>
          <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-white tracking-tight uppercase">
            Find Us In Accra
          </h2>
          <p className="text-sm sm:text-base text-slate-300 mt-2 font-normal">
            Located directly at Star Oil on La-Bawaleshi Road.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left Column: Prominent Workshop Information */}
          <div className="lg:col-span-5 p-8 sm:p-10 rounded-2xl bg-[#12141C] border border-white/10 flex flex-col justify-between shadow-2xl">
            <div>
              {/* Brand Wordmark Lockup */}
              <div className="mb-8">
                <span className="text-xs font-mono uppercase tracking-wider text-amber-400 block mb-1">
                  Automotive Workshop
                </span>
                <h3 className="font-display font-black text-2xl sm:text-3xl text-white uppercase tracking-tight leading-tight">
                  {BUSINESS_INFO.name}
                </h3>
              </div>

              {/* Physical Address */}
              <div className="mb-6 p-5 rounded-xl bg-white/[0.02] border border-white/5">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="text-[11px] font-mono uppercase text-slate-400 block mb-1">
                      Street Address
                    </span>
                    <p className="text-sm sm:text-base font-bold text-white leading-snug">
                      {BUSINESS_INFO.location.address}
                    </p>
                    <p className="text-xs text-slate-400 mt-1">
                      At Star Oil Station, along La-Bawaleshi Road.
                    </p>
                  </div>
                </div>
              </div>

              {/* Phone Line */}
              <div className="mb-6 p-5 rounded-xl bg-white/[0.02] border border-white/5">
                <div className="flex items-start justify-between">
                  <div className="flex items-start gap-3">
                    <Phone className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                    <div>
                      <span className="text-[11px] font-mono uppercase text-slate-400 block mb-1">
                        Direct Phone Contact
                      </span>
                      <p className="text-lg font-bold text-white tracking-wide">
                        {BUSINESS_INFO.contact.phoneFormatted}
                      </p>
                    </div>
                  </div>
                  <a
                    href={`tel:${BUSINESS_INFO.contact.phoneRaw}`}
                    className="px-3.5 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-xs font-bold text-white border border-white/10 transition-colors"
                  >
                    Call
                  </a>
                </div>
              </div>

              {/* Operating Hours Note */}
              <div className="mb-8 p-4 rounded-xl bg-white/[0.02] border border-white/5 flex items-start gap-3 text-xs text-slate-400">
                <Clock className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold text-slate-300 block mb-0.5">Operating Hours</span>
                  <span>Hours to be confirmed by workshop owner. Please call or WhatsApp ahead to confirm availability.</span>
                </div>
              </div>
            </div>

            {/* Direct Action Buttons */}
            <div className="space-y-3 pt-6 border-t border-white/10">
              <a
                href={BUSINESS_INFO.location.directionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full py-3.5 px-4 rounded-xl bg-amber-400 hover:bg-amber-300 text-black text-xs font-bold uppercase tracking-wider transition-colors shadow-md"
              >
                <Navigation className="w-4 h-4" />
                <span>Get Directions (Google Maps)</span>
              </a>

              <div className="grid grid-cols-2 gap-3">
                <a
                  href={BUSINESS_INFO.contact.getWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 py-3 px-3 rounded-xl bg-[#181B26] hover:bg-[#202534] text-white text-xs font-bold uppercase tracking-wider border border-white/10 transition-colors"
                >
                  <MessageSquare className="w-4 h-4 text-amber-400" />
                  <span>WhatsApp</span>
                </a>

                <a
                  href={`tel:${BUSINESS_INFO.contact.phoneRaw}`}
                  className="flex items-center justify-center gap-2 py-3 px-3 rounded-xl bg-[#181B26] hover:bg-[#202534] text-white text-xs font-bold uppercase tracking-wider border border-white/10 transition-colors"
                >
                  <Phone className="w-4 h-4 text-amber-400" />
                  <span>Call Now</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Google Map Container */}
          <div className="lg:col-span-7 rounded-2xl bg-[#12141C] border border-white/10 overflow-hidden shadow-2xl min-h-[460px] flex flex-col relative">
            <div className="relative flex-1 w-full min-h-[380px] bg-[#14171E] overflow-hidden">
              <iframe
                title="Auto Perfection Centre Location Map"
                src="https://maps.google.com/maps?q=Star+Oil+La-Bawaleshi+Road+Accra+Ghana&t=&z=16&ie=UTF8&iwloc=&output=embed"
                className="absolute inset-0 w-full h-full border-0"
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
              />

              {/* Floating Pin Card */}
              <div className="absolute top-4 left-4 z-10 p-3.5 rounded-xl bg-[#0A0B0E]/95 backdrop-blur-md border border-white/10 shadow-xl max-w-xs">
                <span className="font-display font-black text-xs text-white uppercase tracking-wider block">
                  {BUSINESS_INFO.name}
                </span>
                <p className="text-[11px] text-slate-300 mt-0.5">
                  Star Oil, La-Bawaleshi Road, Accra
                </p>
                <a
                  href={BUSINESS_INFO.location.directionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 inline-flex items-center gap-1 text-[11px] font-bold text-amber-400 hover:text-amber-300 uppercase tracking-wide"
                >
                  Get Directions <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>

            {/* Map Card Footer */}
            <div className="p-4 bg-[#0E1017] border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-400">
              <span className="flex items-center gap-1.5 font-medium">
                <MapPin className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                Star Oil, La-Bawaleshi Road, Accra, Ghana
              </span>
              <a
                href={BUSINESS_INFO.location.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-amber-400 hover:text-amber-300 font-bold inline-flex items-center gap-1 transition-colors uppercase tracking-wider text-[11px]"
              >
                Open in Google Maps <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
