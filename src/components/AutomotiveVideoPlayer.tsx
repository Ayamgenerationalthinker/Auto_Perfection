export const AutomotiveVideoPlayer = () => {
  return (
    <section className="relative w-full h-[450px] sm:h-[550px] bg-[#0B0D10] overflow-hidden border-b border-white/5">
      {/* Seamless Ambient Video Background - Blended into dark palette */}
      <div className="absolute inset-0">
        <video
          src="/videos/workshop-motion.mp4"
          poster="/images/services/oil-change.jpg"
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover object-center filter brightness-[0.4] contrast-110"
        />
        {/* Soft top & bottom vignetting to blend seamlessly into adjacent sections */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A0C0F] via-transparent to-[#0B0D10]" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0B0D10]/80 via-transparent to-[#0B0D10]/80" />
      </div>

      {/* Subtle Integrated Ambient Statement */}
      <div className="relative z-10 max-w-7xl mx-auto h-full px-4 sm:px-6 lg:px-8 flex flex-col justify-end pb-12">
        <div className="max-w-xl">
          <span className="font-display font-black text-white text-2xl sm:text-4xl uppercase tracking-wider block">
            Automotive Craftsmanship
          </span>
          <p className="text-xs sm:text-sm text-slate-300 font-normal mt-1 leading-relaxed">
            Hands-on maintenance and repair procedures executed with mechanical precision.
          </p>
        </div>
      </div>
    </section>
  );
};
