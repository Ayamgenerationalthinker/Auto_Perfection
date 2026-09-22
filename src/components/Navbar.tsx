import { useState, useEffect } from "react";
import { MessageSquare, Phone, MapPin, Menu, X } from "lucide-react";
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

  const navLinks = [
    { label: "Services", href: "#services" },
    { label: "Workshop", href: "#workshop" },
    { label: "Reviews", href: "#reviews" },
    { label: "Location", href: "#location" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
        scrolled
          ? "bg-[#0C0D10]/95 backdrop-blur-md border-b border-white/10 py-3.5 shadow-xl"
          : "bg-transparent border-b border-white/5 py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo & Brand Name */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-9 h-9 rounded-lg bg-[#14171E] border border-amber-500/40 flex items-center justify-center text-amber-400 font-display font-black text-sm tracking-wider">
              APC
            </div>
            <div>
              <span className="font-display font-bold text-white text-base sm:text-lg tracking-wide uppercase block leading-tight">
                {BUSINESS_INFO.name}
              </span>
              <span className="text-[11px] text-slate-400 font-medium flex items-center gap-1">
                <MapPin className="w-3 h-3 text-amber-400 inline" /> Accra, Ghana
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-xs font-semibold text-slate-300 hover:text-white uppercase tracking-wider transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Desktop Action Buttons */}
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

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg bg-white/5 text-slate-300 hover:text-white border border-white/10"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile Menu Dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-3 p-4 bg-[#12141A] rounded-xl border border-white/10 shadow-2xl">
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-3 py-2 text-sm font-medium text-slate-200 hover:text-amber-400 rounded-lg hover:bg-white/5"
                >
                  {link.label}
                </a>
              ))}
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
