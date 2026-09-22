import { MessageSquare, Phone, MapPin, ArrowUp } from "lucide-react";
import { BUSINESS_INFO } from "../data/business";

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#08090C] border-t border-white/8 pt-16 pb-24 md:pb-12 text-slate-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-12 border-b border-white/5">
          {/* Brand Info */}
          <div className="md:col-span-5">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-8 h-8 rounded-lg bg-[#14171E] border border-amber-500/30 flex items-center justify-center font-display font-bold text-amber-400 text-xs">
                APC
              </div>
              <span className="font-display font-bold text-white text-base tracking-wider uppercase">
                {BUSINESS_INFO.name}
              </span>
            </div>
            <p className="text-xs text-slate-400 mb-5 max-w-sm leading-relaxed">
              {BUSINESS_INFO.supportingCopy}
            </p>
            <div className="flex flex-col gap-2 text-xs">
              <span className="flex items-center gap-2 text-slate-300">
                <MapPin className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                {BUSINESS_INFO.location.address}
              </span>
              <a
                href={`tel:${BUSINESS_INFO.contact.phoneRaw}`}
                className="flex items-center gap-2 text-slate-300 hover:text-white transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                {BUSINESS_INFO.contact.phoneFormatted}
              </a>
            </div>
          </div>

          {/* Services */}
          <div className="md:col-span-4">
            <span className="text-xs font-semibold text-white uppercase tracking-wider block mb-3">
              Verified Services
            </span>
            <ul className="space-y-1.5 text-xs">
              {BUSINESS_INFO.services.map((svc) => (
                <li key={svc.id}>
                  <a href="#services" className="text-slate-400 hover:text-amber-400 transition-colors">
                    {svc.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Fast Navigation & Action */}
          <div className="md:col-span-3 flex flex-col justify-between">
            <div>
              <span className="text-xs font-semibold text-white uppercase tracking-wider block mb-3">
                Quick Links
              </span>
              <ul className="space-y-1.5 text-xs mb-6">
                <li><a href="#" className="hover:text-white transition-colors">Home</a></li>
                <li><a href="#services" className="hover:text-white transition-colors">Services</a></li>
                <li><a href="#workshop" className="hover:text-white transition-colors">Workshop Gallery</a></li>
                <li><a href="#reviews" className="hover:text-white transition-colors">Google Reviews (4.9 ★)</a></li>
                <li><a href="#location" className="hover:text-white transition-colors">Location & Map</a></li>
              </ul>
            </div>

            <a
              href={BUSINESS_INFO.contact.getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 w-full py-2.5 rounded-lg bg-amber-400 hover:bg-amber-300 text-black text-xs font-bold transition-colors shadow-sm"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>Chat on WhatsApp</span>
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-500">
          <div>
            <span>© {new Date().getFullYear()} {BUSINESS_INFO.name}.</span>
            <span className="mx-2">•</span>
            <span>Website concept proposal by <span className="text-slate-400 font-medium">AGT TECH</span></span>
          </div>

          <button
            type="button"
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-slate-400 hover:text-white transition-colors py-1 px-2 rounded-md hover:bg-white/5"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
