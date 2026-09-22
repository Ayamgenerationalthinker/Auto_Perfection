import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
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
          ? "bg-[#0A0B0E]/95 backdrop-blur-md border-b border-white/10 py-4 shadow-2xl"
          : "bg-[#0A0B0E]/80 backdrop-blur-sm border-b border-white/5 py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Prominent Typographic Brand Identity */}
          <a href="#" className="flex flex-col text-left group focus:outline-none">
            <span className="font-display font-black text-white text-xl sm:text-2xl md:text-3xl tracking-wider uppercase leading-none group-hover:text-amber-400 transition-colors">
              {BUSINESS_INFO.name}
            </span>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden sm:flex items-center gap-8">
            <a
              href="#services"
              className="text-xs font-semibold uppercase tracking-widest text-slate-300 hover:text-white transition-colors"
            >
              Services
            </a>
            <a
              href="#workshop-motion"
              className="text-xs font-semibold uppercase tracking-widest text-slate-300 hover:text-white transition-colors"
            >
              Workshop
            </a>
            <a
              href="#location"
              className="text-xs font-semibold uppercase tracking-widest text-slate-300 hover:text-white transition-colors"
            >
              Map & Location
            </a>
            <a
              href="#reputation"
              className="text-xs font-semibold uppercase tracking-widest text-slate-300 hover:text-amber-400 transition-colors"
            >
              Reviews
            </a>
          </nav>

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
                Services
              </a>
              <a
                href="#workshop-motion"
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 text-sm font-semibold text-white hover:text-amber-400 rounded-lg hover:bg-white/5"
              >
                Workshop
              </a>
              <a
                href="#location"
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 text-sm font-semibold text-white hover:text-amber-400 rounded-lg hover:bg-white/5"
              >
                Map & Location
              </a>
              <a
                href="#reputation"
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 text-sm font-semibold text-white hover:text-amber-400 rounded-lg hover:bg-white/5"
              >
                Reviews
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
