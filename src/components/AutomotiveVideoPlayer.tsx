export const AutomotiveVideoPlayer = () => {
  return (
    <section className="relative w-full h-[450px] sm:h-[550px] bg-[#0B0D10] overflow-hidden border-b border-white/5">
      {/* Seamless Ambient Video Background - Bright & clearly visible */}
      <div className="absolute inset-0">
        <video
          src="/videos/workshop-motion.mp4"
          poster="/images/services/oil-change.jpg"
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover object-center filter brightness-95 contrast-105"
        />
        {/* Soft edge feathering so it blends seamlessly into dark background at edges only */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A0C0F]/70 via-transparent via-25% to-[#0B0D10]/90" />
      </div>

      {/* Subtle Integrated Ambient Statement with drop shadow */}
      <div className="relative z-10 max-w-7xl mx-auto h-full px-4 sm:px-6 lg:px-8 flex flex-col justify-end pb-12">
        <div className="max-w-xl">
          <span className="font-display font-black text-white text-2xl sm:text-4xl uppercase tracking-wider block drop-shadow-[0_4px_12px_rgba(0,0,0,0.9)]">
            Automotive Craftsmanship
          </span>
          <p className="text-xs sm:text-sm text-slate-100 font-medium mt-1 leading-relaxed drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]">
            Hands-on maintenance and repair procedures executed with mechanical precision.
          </p>
        </div>
      </div>
    </section>
  );
};
