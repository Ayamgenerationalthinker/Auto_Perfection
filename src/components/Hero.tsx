import { BUSINESS_INFO } from "../data/business";

export const Hero = () => {
  return (
    <section className="relative min-h-[85vh] flex items-center justify-center pt-32 pb-24 bg-[#0B0D10] border-b border-white/5 overflow-hidden">
      {/* Full-bleed ambient cinematic video background - bright & clearly visible */}
      <div className="absolute inset-0 z-0">
        <video
          src="/videos/hero-motion.mp4"
          poster="/images/hero/hero-workshop.jpg"
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover object-center filter brightness-90 contrast-105"
        />
        {/* Balanced contrast overlay: preserves video clarity while ensuring text readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B0D10] via-black/30 to-black/50" />
        <div className="absolute inset-0 bg-radial-gradient from-transparent via-black/20 to-black/40" />
      </div>

      {/* Content overlaid seamlessly on top of video */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Massive Typographic Brand Presence with protective drop shadow */}
        <h1 className="font-display font-black text-5xl sm:text-7xl lg:text-9xl text-white tracking-tight uppercase leading-[0.9] mb-6 drop-shadow-[0_6px_20px_rgba(0,0,0,0.9)]">
          AUTO PERFECTION CENTRE
        </h1>

        {/* Headline */}
        <p className="text-2xl sm:text-4xl font-display font-bold text-amber-400 tracking-tight uppercase mb-4 drop-shadow-[0_4px_14px_rgba(0,0,0,0.9)]">
          {BUSINESS_INFO.tagline}
        </p>

        {/* Plain Supporting Copy */}
        <p className="text-base sm:text-xl text-slate-100 font-medium leading-relaxed max-w-2xl mx-auto drop-shadow-[0_2px_10px_rgba(0,0,0,0.9)]">
          Specialized mechanical repair, vehicle electrical diagnostics, engine oil servicing, automotive spray painting, and replacement body parts.
        </p>
      </div>
    </section>
  );
};
