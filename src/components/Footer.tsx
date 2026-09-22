import { MessageSquare, Phone, Navigation, ArrowUp } from "lucide-react";
import { BUSINESS_INFO } from "../data/business";

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#060709] border-t border-white/5 pt-16 pb-24 sm:pb-14 text-slate-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-12 border-b border-white/5">
          {/* Brand & Address */}
          <div className="md:col-span-5">
            <h3 className="font-display font-black text-white text-xl sm:text-2xl tracking-wider uppercase mb-3">
              {BUSINESS_INFO.name}
            </h3>
            <p className="text-xs text-slate-400 mb-6 max-w-sm leading-relaxed">
              Professional automotive repair, electrical diagnostics, oil servicing, spray painting, and body parts in Accra.
            </p>
            <div className="flex flex-col gap-2 text-xs">
              <a
                href={`tel:${BUSINESS_INFO.contact.phoneRaw}`}
                className="flex items-center gap-2 text-slate-300 hover:text-white transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                {BUSINESS_INFO.contact.phoneFormatted}
              </a>
            </div>
          </div>

          {/* Verified Services Links */}
          <div className="md:col-span-4">
            <span className="text-xs font-mono uppercase tracking-widest text-slate-400 block mb-4">
              Services
            </span>
            <ul className="space-y-2 text-xs">
              {BUSINESS_INFO.services.map((svc) => (
                <li key={svc.id}>
                  <a
                    href="#services"
                    className="text-slate-300 hover:text-amber-400 transition-colors block"
                  >
                    {svc.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Direct Actions */}
          <div className="md:col-span-3 flex flex-col justify-between">
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-slate-400 block mb-4">
                Direct Contact
              </span>
              <div className="flex flex-col gap-2 text-xs mb-6">
                <a
                  href={BUSINESS_INFO.contact.getWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-amber-400 hover:text-amber-300 font-bold uppercase tracking-wider"
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span>WhatsApp Enquiries</span>
                </a>
                <a
                  href={`tel:${BUSINESS_INFO.contact.phoneRaw}`}
                  className="inline-flex items-center gap-2 text-slate-300 hover:text-white font-medium"
                >
                  <Phone className="w-3.5 h-3.5 text-amber-400" />
                  <span>Call {BUSINESS_INFO.contact.phoneFormatted}</span>
                </a>
                <a
                  href={BUSINESS_INFO.location.directionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-slate-300 hover:text-white font-medium"
                >
                  <Navigation className="w-3.5 h-3.5 text-amber-400" />
                  <span>Get Directions</span>
                </a>
              </div>
            </div>

            <button
              type="button"
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 text-slate-400 hover:text-white transition-colors text-xs self-start"
            >
              <span>Back to top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Minimal Concept Attribution */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-500">
          <div>
            <span>© {new Date().getFullYear()} {BUSINESS_INFO.name}.</span>
          </div>
          <div>
            <span>Website concept proposal by <span className="text-slate-400 font-medium">AGT TECH</span></span>
          </div>
        </div>
      </div>
    </footer>
  );
};
