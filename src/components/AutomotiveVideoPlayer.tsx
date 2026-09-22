import { useState } from "react";
import { Play, Pause, Film } from "lucide-react";

export const AutomotiveVideoPlayer = () => {
  const [activeClipIndex, setActiveClipIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  const videoClips = [
    {
      id: "1152640098415898228",
      title: "Mechanical Repair & Undercarriage",
      category: "Auto Repair",
      description: "Hydraulic vehicle inspection, chassis alignment, and mechanical torque procedures.",
      poster: "/images/services/auto-repair.jpg",
    },
    {
      id: "1152640098415898250",
      title: "Electronic Diagnostics & Systems",
      category: "Auto Electrical",
      description: "Sensor calibration, battery voltage checks, and diagnostic scanning.",
      poster: "/images/services/auto-electrical.jpg",
    },
    {
      id: "1152640098415898259",
      title: "Spray Finish & Clear Coat Gloss",
      category: "Auto Painting",
      description: "Automotive booth spray application, uniform clear coating, and surface finish.",
      poster: "/images/services/auto-painting.jpg",
    },
  ];

  const currentClip = videoClips[activeClipIndex];

  return (
    <section className="py-20 bg-[#0B0D10] border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <span className="text-xs font-mono uppercase tracking-widest text-amber-400 block mb-2">
              Automotive Motion Studies
            </span>
            <h2 className="text-3xl sm:text-5xl font-display font-black text-white uppercase tracking-tight">
              Craftsmanship In Motion
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-slate-400 max-w-md">
            Cinematic motion references demonstrating workshop precision and service standards. Ready to be updated with Auto Perfection Centre's official video footage.
          </p>
        </div>

        {/* Video Cinema Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Cinema Frame (lg:col-span-8) */}
          <div className="lg:col-span-8 rounded-2xl bg-[#0F1117] border border-white/10 overflow-hidden shadow-2xl flex flex-col justify-between relative">
            <div className="relative w-full h-[360px] sm:h-[480px] bg-black flex items-center justify-center overflow-hidden">
              {/* Clean Pinterest Embed Reference or Native Video Fallback */}
              {isPlaying ? (
                <iframe
                  key={currentClip.id}
                  title={currentClip.title}
                  src={`https://assets.pinterest.com/ext/embed.html?id=${currentClip.id}`}
                  className="w-full h-full border-0 filter brightness-95"
                  loading="lazy"
                  allowFullScreen
                />
              ) : (
                <div className="relative w-full h-full">
                  <img
                    src={currentClip.poster}
                    alt={currentClip.title}
                    className="w-full h-full object-cover filter brightness-75"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <button
                      type="button"
                      onClick={() => setIsPlaying(true)}
                      className="w-16 h-16 rounded-full bg-amber-400 hover:bg-amber-300 text-black flex items-center justify-center shadow-2xl transition-transform hover:scale-105"
                      aria-label="Play video"
                    >
                      <Play className="w-6 h-6 fill-black ml-1" />
                    </button>
                  </div>
                </div>
              )}

              {/* Minimalist Top Cinema Tag */}
              <div className="absolute top-4 left-4 z-10 pointer-events-none">
                <span className="px-3 py-1 rounded-md bg-[#090A0C]/90 backdrop-blur-md text-amber-400 font-mono text-[11px] font-bold uppercase tracking-wider border border-white/10">
                  {currentClip.category} • Cinematic Reference
                </span>
              </div>
            </div>

            {/* Cinema Bottom Bar */}
            <div className="p-4 sm:p-5 bg-[#12141C] border-t border-white/5 flex items-center justify-between">
              <div>
                <h3 className="font-display font-bold text-white text-base sm:text-lg uppercase tracking-wide">
                  {currentClip.title}
                </h3>
                <p className="text-xs text-slate-400 mt-0.5 line-clamp-1">
                  {currentClip.description}
                </p>
              </div>

              <button
                type="button"
                onClick={() => setIsPlaying(!isPlaying)}
                className="p-2.5 rounded-lg bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white border border-white/10 transition-colors shrink-0"
                aria-label={isPlaying ? "Pause playback" : "Resume playback"}
              >
                {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
              </button>
            </div>
          </div>

          {/* Clip Selector Playlist (lg:col-span-4) */}
          <div className="lg:col-span-4 flex flex-col justify-between space-y-3">
            <div className="space-y-3">
              {videoClips.map((clip, index) => {
                const isActive = activeClipIndex === index;
                return (
                  <button
                    key={clip.id}
                    type="button"
                    onClick={() => {
                      setActiveClipIndex(index);
                      setIsPlaying(true);
                    }}
                    className={`w-full text-left p-4 rounded-xl border transition-all duration-150 flex items-start gap-4 ${
                      isActive
                        ? "bg-[#141722] border-amber-500/50 shadow-lg"
                        : "bg-[#0E1017] border-white/5 hover:border-white/15 hover:bg-[#11131A]"
                    }`}
                  >
                    <div className="relative w-20 h-16 rounded-lg overflow-hidden bg-black shrink-0">
                      <img
                        src={clip.poster}
                        alt={clip.title}
                        className="w-full h-full object-cover filter brightness-85"
                      />
                      <div className="absolute inset-0 flex items-center justify-center bg-black/30">
                        <Film className="w-4 h-4 text-amber-400" />
                      </div>
                    </div>

                    <div className="flex-1 min-w-0">
                      <span className="text-[10px] font-mono text-amber-400 uppercase tracking-wider block mb-0.5">
                        Reference 0{index + 1}
                      </span>
                      <h4 className="font-display font-bold text-sm text-white uppercase tracking-wide truncate">
                        {clip.title}
                      </h4>
                      <p className="text-[11px] text-slate-400 line-clamp-1 mt-0.5">
                        {clip.category}
                      </p>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Architecture Replacement Note */}
            <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5 text-xs text-slate-400">
              <span className="font-semibold text-slate-300 block mb-1">
                Client Video Asset Structure
              </span>
              <p className="text-[11px] leading-relaxed">
                Configured with universal HTML5 / MP4 fallback slots for seamless replacement with Auto Perfection Centre's official workshop footage.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
