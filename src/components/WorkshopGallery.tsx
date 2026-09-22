import { Camera } from "lucide-react";

export const WorkshopGallery = () => {
  const photos = [
    {
      title: "Mechanical Repair Bay",
      category: "Auto Repair",
      image: "https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?auto=format&fit=crop&w=1000&q=80",
      alt: "Mechanic working under vehicle on lift",
    },
    {
      title: "Electrical Diagnostics",
      category: "Auto Electrical",
      image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1000&q=80",
      alt: "Automotive electrical testing and diagnostics",
    },
    {
      title: "Spray Booth Refinishing",
      category: "Auto Painting",
      image: "https://images.unsplash.com/photo-1563720223185-11003d516935?auto=format&fit=crop&w=1000&q=80",
      alt: "Automotive paint spray booth application",
    },
    {
      title: "Body Panel Fitment",
      category: "Auto Body Parts",
      image: "https://images.unsplash.com/photo-1508974239320-0a029497e820?auto=format&fit=crop&w=1000&q=80",
      alt: "Vehicle body panel installation and alignment",
    },
  ];

  return (
    <section id="workshop" className="py-20 bg-[#0E1014] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-4">
          <div>
            <span className="text-xs uppercase tracking-widest text-amber-400 font-semibold mb-2 block">
              Workshop Environment
            </span>
            <h2 className="text-3xl font-display font-extrabold text-white tracking-tight">
              Automotive Standards
            </h2>
          </div>
          <div className="flex items-center gap-2 text-xs text-slate-400">
            <Camera className="w-3.5 h-3.5 text-amber-400" />
            <span>Showcase photography ready for owner's shop photos</span>
          </div>
        </div>

        {/* Crisp 4-column modern gallery */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {photos.map((item) => (
            <div
              key={item.title}
              className="relative h-72 rounded-xl overflow-hidden bg-[#14171E] border border-white/5 group"
            >
              <img
                src={item.image}
                alt={item.alt}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 filter brightness-90 contrast-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0C0D10] via-transparent to-transparent opacity-80" />
              <div className="absolute bottom-3 left-4 right-4">
                <span className="text-[10px] font-mono uppercase tracking-wider text-amber-400 block mb-0.5">
                  {item.category}
                </span>
                <span className="text-sm font-display font-bold text-white block">
                  {item.title}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
