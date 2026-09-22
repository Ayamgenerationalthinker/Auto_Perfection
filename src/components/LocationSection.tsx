import { MapPin, Phone, MessageSquare, Navigation, ExternalLink, Clock } from "lucide-react";
import { BUSINESS_INFO } from "../data/business";

export const LocationSection = () => {
  return (
    <section id="location" className="py-20 bg-[#0C0D10] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-12">
          <span className="text-xs uppercase tracking-widest text-amber-400 font-semibold mb-2 block">
            Location & Access
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-white tracking-tight">
            Star Oil, La-Bawaleshi Road
          </h2>
          <p className="text-sm sm:text-base text-slate-400 mt-2">
            Conveniently situated in Accra. Reach out directly or navigate straight to the workshop.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Contact Details Card */}
          <div className="lg:col-span-5 p-8 rounded-2xl bg-[#13161C] border border-white/8 flex flex-col justify-between shadow-xl">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-lg bg-[#181C24] border border-amber-500/30 flex items-center justify-center font-display font-bold text-amber-400 text-sm">
                  APC
                </div>
                <div>
                  <h3 className="font-display font-bold text-lg text-white">
                    {BUSINESS_INFO.name}
                  </h3>
                  <span className="text-xs text-slate-400">Accra, Ghana</span>
                </div>
              </div>

              {/* Address */}
              <div className="mb-5 p-4 rounded-xl bg-white/[0.02] border border-white/5">
                <span className="text-[11px] font-mono uppercase text-slate-400 block mb-1">
                  Workshop Address
                </span>
                <div className="flex items-start gap-2.5">
                  <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm font-semibold text-white">
                      {BUSINESS_INFO.location.address}
                    </p>
                    <p className="text-xs text-slate-400 mt-0.5">
                      At Star Oil Station, along La-Bawaleshi Road.
                    </p>
                  </div>
                </div>
              </div>

              {/* Phone */}
              <div className="mb-5 p-4 rounded-xl bg-white/[0.02] border border-white/5">
                <span className="text-[11px] font-mono uppercase text-slate-400 block mb-1">
                  Telephone Contact
                </span>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <Phone className="w-4 h-4 text-amber-400 shrink-0" />
                    <span className="text-sm font-bold text-white">
                      {BUSINESS_INFO.contact.phoneFormatted}
                    </span>
                  </div>
                  <a
                    href={`tel:${BUSINESS_INFO.contact.phoneRaw}`}
                    className="px-3 py-1 rounded-lg bg-white/5 hover:bg-white/10 text-xs font-semibold text-white border border-white/10 transition-colors"
                  >
                    Call
                  </a>
                </div>
              </div>

              {/* Hours placeholder */}
              <div className="mb-6 p-4 rounded-xl bg-white/[0.02] border border-white/5 text-xs text-slate-400 flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold text-slate-300 block mb-0.5">Operating Hours</span>
                  <span>Hours to be confirmed with owner. Enquiries welcome anytime via WhatsApp or phone.</span>
                </div>
              </div>
            </div>

            {/* Direct Action Buttons */}
            <div className="flex flex-col gap-3 pt-4 border-t border-white/5">
              <a
                href={BUSINESS_INFO.contact.getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full py-3.5 px-4 rounded-xl bg-amber-400 hover:bg-amber-300 text-black text-xs font-bold transition-colors shadow-sm"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Chat on WhatsApp (+233 54 730 5045)</span>
              </a>

              <div className="grid grid-cols-2 gap-3">
                <a
                  href={BUSINESS_INFO.location.directionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl bg-white/5 hover:bg-white/10 text-white text-xs font-semibold border border-white/10 transition-colors"
                >
                  <Navigation className="w-3.5 h-3.5 text-amber-400" />
                  <span>Get Directions</span>
                </a>
                <a
                  href={`tel:${BUSINESS_INFO.contact.phoneRaw}`}
                  className="flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl bg-white/5 hover:bg-white/10 text-white text-xs font-semibold border border-white/10 transition-colors"
                >
                  <Phone className="w-3.5 h-3.5 text-amber-400" />
                  <span>Call Now</span>
                </a>
              </div>
            </div>
          </div>

          {/* Clean Map Container */}
          <div className="lg:col-span-7 rounded-2xl bg-[#13161C] border border-white/8 overflow-hidden shadow-xl min-h-[380px] flex flex-col">
            <div className="flex-1 w-full relative min-h-[320px] bg-[#14171E]">
              <iframe
                title="Auto Perfection Centre Location Map"
                src="https://maps.google.com/maps?q=Star+Oil+La-Bawaleshi+Road+Accra+Ghana&t=&z=16&ie=UTF8&iwloc=&output=embed"
                className="w-full h-full border-0"
                loading="lazy"
                allowFullScreen
              />
            </div>
            <div className="p-4 bg-[#111318] border-t border-white/5 flex items-center justify-between text-xs text-slate-400">
              <span>Star Oil, La-Bawaleshi Road, Accra, Ghana</span>
              <a
                href={BUSINESS_INFO.location.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-amber-400 hover:text-amber-300 font-semibold inline-flex items-center gap-1 transition-colors"
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
