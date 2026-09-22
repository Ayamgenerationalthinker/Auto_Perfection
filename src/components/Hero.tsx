import { BUSINESS_INFO } from "../data/business";

export const Hero = () => {
  return (
    <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 bg-[#0B0D10] border-b border-white/5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Editorial Asymmetric Hero Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Authoritative Brand & Pure Editorial Content */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* Massive Typographic Brand Presence */}
            <h1 className="font-display font-black text-5xl sm:text-7xl lg:text-8xl text-white tracking-tight uppercase leading-[0.92] mb-5">
              AUTO <br className="hidden sm:inline" />
              PERFECTION <br className="hidden sm:inline" />
              CENTRE
            </h1>

            {/* Human Headline & Natural Copy */}
            <p className="text-2xl sm:text-3xl font-display font-bold text-amber-400 tracking-tight uppercase mb-3">
              {BUSINESS_INFO.tagline}
            </p>
            <p className="text-base sm:text-lg text-slate-300 font-normal leading-relaxed max-w-xl">
              Specialized mechanical repair, vehicle electrical diagnostics, engine oil servicing, automotive spray painting, and replacement body parts.
            </p>
          </div>

          {/* Right Column: High-End Cinematic Automotive Video */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden bg-[#141720] border border-white/10 shadow-2xl group">
              <div className="h-[400px] sm:h-[460px] w-full relative bg-black">
                <video
                  src="/videos/hero-motion.mp4"
                  poster="/images/hero/hero-workshop.jpg"
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="w-full h-full object-cover object-center filter brightness-95 contrast-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B0D10] via-transparent to-transparent opacity-70 pointer-events-none" />
              </div>

              {/* Minimal Editorial Badge */}
              <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-[#0D0F14]/90 backdrop-blur-md border border-white/10 flex items-center justify-between pointer-events-none">
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-widest text-amber-400 block mb-0.5">
                    Workshop Motion
                  </span>
                  <span className="text-xs font-display font-bold text-white uppercase tracking-wider block">
                    Auto Perfection Centre
                  </span>
                </div>
                <span className="text-[11px] font-mono text-slate-400">
                  Precision Craft
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* 5-Service Indicator Ribbon */}
        <div className="mt-14 pt-8 border-t border-white/10">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
            {BUSINESS_INFO.services.map((svc) => (
              <a
                key={svc.id}
                href="#services"
                className="p-3.5 rounded-xl bg-[#12151C] border border-white/5 hover:border-amber-500/40 hover:bg-[#161A24] transition-all text-left group"
              >
                <span className="text-[10px] font-mono text-amber-400 block mb-1">
                  {svc.number}
                </span>
                <span className="text-xs font-display font-bold text-white group-hover:text-amber-300 transition-colors uppercase tracking-wider block truncate">
                  {svc.name}
                </span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
