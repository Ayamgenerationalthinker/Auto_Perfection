import { useState, useEffect } from "react";
import { MessageSquare, Phone, MapPin, Menu, X, Star } from "lucide-react";
import { BUSINESS_INFO } from "../data/business";

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
        scrolled
          ? "bg-[#0A0B0E]/95 backdrop-blur-md border-b border-white/10 py-3 shadow-2xl"
          : "bg-[#0A0B0E]/80 backdrop-blur-sm border-b border-white/5 py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Prominent Typographic Brand Identity */}
          <a href="#" className="flex flex-col text-left group focus:outline-none">
            <span className="font-display font-black text-white text-lg sm:text-xl md:text-2xl tracking-wider uppercase leading-none group-hover:text-amber-400 transition-colors">
              {BUSINESS_INFO.name}
            </span>
            <span className="text-[11px] text-slate-400 font-mono tracking-wide uppercase mt-1 flex items-center gap-1">
              <MapPin className="w-3 h-3 text-amber-400 inline shrink-0" />
              Star Oil, La-Bawaleshi Rd • Accra
            </span>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-8">
            <a
              href="#services"
              className="text-xs font-semibold uppercase tracking-wider text-slate-300 hover:text-white transition-colors"
            >
              Services (01–05)
            </a>
            <a
              href="#location"
              className="text-xs font-semibold uppercase tracking-wider text-slate-300 hover:text-white transition-colors"
            >
              Location & Map
            </a>
            <a
              href="#reputation"
              className="text-xs font-semibold uppercase tracking-wider text-slate-300 hover:text-amber-400 transition-colors flex items-center gap-1.5"
            >
              <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
              4.9 ★ Rating (64 Reviews)
            </a>
          </nav>

          {/* Desktop Direct Contact CTAs */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href={`tel:${BUSINESS_INFO.contact.phoneRaw}`}
              className="inline-flex items-center gap-2 px-3.5 py-2 text-xs font-semibold text-slate-200 hover:text-white bg-white/5 hover:bg-white/10 rounded-lg border border-white/10 transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-amber-400" />
              <span>{BUSINESS_INFO.contact.phoneFormatted}</span>
            </a>
            <a
              href={BUSINESS_INFO.contact.getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 text-xs font-bold text-black bg-amber-400 hover:bg-amber-300 rounded-lg transition-colors shadow-sm"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>WhatsApp</span>
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="sm:hidden p-2 rounded-lg bg-white/5 text-slate-300 hover:text-white border border-white/10"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="sm:hidden mt-3 p-4 bg-[#111319] rounded-xl border border-white/10 shadow-2xl">
            <div className="flex flex-col gap-2">
              <a
                href="#services"
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 text-sm font-semibold text-white hover:text-amber-400 rounded-lg hover:bg-white/5"
              >
                Services (01–05)
              </a>
              <a
                href="#location"
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 text-sm font-semibold text-white hover:text-amber-400 rounded-lg hover:bg-white/5"
              >
                Location & Map
              </a>
              <a
                href="#reputation"
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 text-sm font-semibold text-amber-400 hover:text-amber-300 rounded-lg hover:bg-white/5 flex items-center gap-2"
              >
                <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                4.9 ★ Google Reviews (64)
              </a>
              <div className="h-px bg-white/10 my-2" />
              <div className="flex flex-col gap-2">
                <a
                  href={`tel:${BUSINESS_INFO.contact.phoneRaw}`}
                  className="flex items-center justify-center gap-2 py-2.5 text-xs font-semibold text-slate-200 bg-white/5 border border-white/10 rounded-lg"
                >
                  <Phone className="w-3.5 h-3.5 text-amber-400" />
                  <span>Call {BUSINESS_INFO.contact.phoneFormatted}</span>
                </a>
                <a
                  href={BUSINESS_INFO.contact.getWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 py-2.5 text-xs font-bold text-black bg-amber-400 rounded-lg"
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span>Chat on WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
