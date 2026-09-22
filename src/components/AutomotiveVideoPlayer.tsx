import { useState, useRef } from "react";
import { Play, Volume2, VolumeX, Film } from "lucide-react";

export const AutomotiveVideoPlayer = () => {
  const [activeClipIndex, setActiveClipIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  const videoClips = [
    {
      title: "Workshop Vehicle Inspection",
      category: "Auto Repair",
      description: "Hydraulic vehicle inspection, chassis alignment, and mechanical torque procedures.",
      videoUrl: "https://cdn.coverr.co/videos/coverr-car-inspection-in-a-garage-9134/1080p.mp4",
      poster: "/images/services/auto-repair.jpg",
    },
    {
      title: "Mechanical Component Repair",
      category: "Mechanical Service",
      description: "Precision component replacement and workshop mechanical craftsmanship.",
      videoUrl: "https://cdn.coverr.co/videos/coverr-mechanic-repairing-a-car-2623/1080p.mp4",
      poster: "/images/services/oil-change.jpg",
    },
    {
      title: "Engine Diagnostics & Systems",
      category: "Auto Electrical",
      description: "Sensor calibration, battery voltage checks, and diagnostic scanning.",
      videoUrl: "https://cdn.coverr.co/videos/coverr-mechanic-examining-car-engine-5536/1080p.mp4",
      poster: "/images/services/auto-electrical.jpg",
    },
  ];

  const currentClip = videoClips[activeClipIndex];

  const handleMouseEnter = () => {
    setIsHovered(true);
    if (videoRef.current) {
      videoRef.current.play().catch(() => {});
    }
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    if (videoRef.current) {
      videoRef.current.pause();
    }
  };

  const toggleManualPlay = () => {
    if (!videoRef.current) return;
    if (videoRef.current.paused) {
      videoRef.current.play();
      setIsHovered(true);
    } else {
      videoRef.current.pause();
      setIsHovered(false);
    }
  };

  return (
    <section id="workshop-motion" className="py-24 bg-[#0B0D10] border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <span className="text-xs font-mono uppercase tracking-widest text-amber-400 block mb-2">
              Workshop in Motion
            </span>
            <h2 className="text-3xl sm:text-5xl font-display font-black text-white uppercase tracking-tight">
              Craftsmanship In Action
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-slate-400 max-w-md font-normal">
            Hover over the video to play automotive workshop footage.
          </p>
        </div>

        {/* Video Cinema Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Cinema Frame (lg:col-span-8) */}
          <div
            className="lg:col-span-8 rounded-2xl bg-[#0F1117] border border-white/10 overflow-hidden shadow-2xl flex flex-col justify-between relative group cursor-pointer"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onClick={toggleManualPlay}
          >
            <div className="relative w-full h-[360px] sm:h-[480px] bg-black flex items-center justify-center overflow-hidden">
              {/* Native HTML5 Video Element - Zero Pinterest Branding */}
              <video
                ref={videoRef}
                key={currentClip.videoUrl}
                src={currentClip.videoUrl}
                poster={currentClip.poster}
                muted={isMuted}
                loop
                playsInline
                preload="metadata"
                className="w-full h-full object-cover filter brightness-95 contrast-105"
              />

              {/* Hover Indicator Overlay (Fades out when playing) */}
              <div
                className={`absolute inset-0 bg-black/40 flex items-center justify-center transition-opacity duration-300 pointer-events-none ${
                  isHovered ? "opacity-0" : "opacity-100"
                }`}
              >
                <div className="flex flex-col items-center gap-2">
                  <div className="w-16 h-16 rounded-full bg-amber-400 text-black flex items-center justify-center shadow-2xl transform group-hover:scale-110 transition-transform">
                    <Play className="w-6 h-6 fill-black ml-1" />
                  </div>
                  <span className="text-xs font-display font-bold uppercase tracking-widest text-white mt-1 bg-black/70 px-3 py-1 rounded-md border border-white/10">
                    Hover To Play
                  </span>
                </div>
              </div>

              {/* Category Tag */}
              <div className="absolute top-4 left-4 z-10 pointer-events-none">
                <span className="px-3 py-1 rounded-md bg-[#090A0C]/90 backdrop-blur-md text-amber-400 font-mono text-[11px] font-bold uppercase tracking-wider border border-white/10">
                  {currentClip.category}
                </span>
              </div>
            </div>

            {/* Cinema Bottom Bar */}
            <div className="p-4 sm:p-5 bg-[#12141C] border-t border-white/5 flex items-center justify-between">
              <div>
                <h3 className="font-display font-bold text-white text-base sm:text-lg uppercase tracking-wide">
                  {currentClip.title}
                </h3>
                <p className="text-xs text-slate-400 mt-0.5 line-clamp-1 font-normal">
                  {currentClip.description}
                </p>
              </div>

              {/* Sound Toggle */}
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  setIsMuted(!isMuted);
                }}
                className="p-2.5 rounded-lg bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white border border-white/10 transition-colors shrink-0"
                aria-label={isMuted ? "Unmute video" : "Mute video"}
              >
                {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
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
                    key={clip.title}
                    type="button"
                    onClick={() => {
                      setActiveClipIndex(index);
                      setTimeout(() => {
                        videoRef.current?.play().catch(() => {});
                        setIsHovered(true);
                      }, 50);
                    }}
                    className={`w-full text-left p-4 rounded-xl border transition-all duration-150 flex items-start gap-4 cursor-pointer ${
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
                        Clip 0{index + 1}
                      </span>
                      <h4 className="font-display font-bold text-sm text-white uppercase tracking-wide truncate">
                        {clip.title}
                      </h4>
                      <p className="text-[11px] text-slate-400 line-clamp-1 mt-0.5 font-normal">
                        {clip.category}
                      </p>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Note */}
            <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5 text-xs text-slate-400 font-normal">
              <span className="font-semibold text-slate-300 block mb-1">
                Workshop Footage Architecture
              </span>
              <p className="text-[11px] leading-relaxed">
                Configured for seamless local video playback with zero external branding or third-party ads.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
