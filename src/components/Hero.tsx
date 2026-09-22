import { BUSINESS_INFO } from "../data/business";

export const Hero = () => {
  return (
    <section className="relative min-h-[85vh] flex items-center justify-center pt-32 pb-24 bg-[#0B0D10] border-b border-white/5 overflow-hidden">
      {/* Full-bleed ambient cinematic video background */}
      <div className="absolute inset-0 z-0">
        <video
          src="/videos/hero-motion.mp4"
          poster="/images/hero/hero-workshop.jpg"
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover object-center filter brightness-[0.3] contrast-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B0D10] via-[#0B0D10]/40 to-[#0B0D10]/75" />
      </div>

      {/* Content overlaid seamlessly on top of video */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Massive Typographic Brand Presence */}
        <h1 className="font-display font-black text-5xl sm:text-7xl lg:text-9xl text-white tracking-tight uppercase leading-[0.9] mb-6">
          AUTO PERFECTION CENTRE
        </h1>

        {/* Headline */}
        <p className="text-2xl sm:text-4xl font-display font-bold text-amber-400 tracking-tight uppercase mb-4">
          {BUSINESS_INFO.tagline}
        </p>

        {/* Plain Supporting Copy */}
        <p className="text-base sm:text-xl text-slate-200 font-normal leading-relaxed max-w-2xl mx-auto">
          Specialized mechanical repair, vehicle electrical diagnostics, engine oil servicing, automotive spray painting, and replacement body parts.
        </p>
      </div>
    </section>
  );
};
