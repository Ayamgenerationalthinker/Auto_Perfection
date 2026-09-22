import { Star, ExternalLink, ShieldCheck } from "lucide-react";
import { BUSINESS_INFO } from "../data/business";

export const TrustBar = () => {
  return (
    <section id="reviews" className="py-16 bg-[#0C0D10] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 sm:p-10 rounded-2xl bg-[#13161C] border border-white/8 flex flex-col md:flex-row items-center justify-between gap-8 shadow-xl">
          {/* Rating Summary */}
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 text-center sm:text-left">
            <div className="flex items-center justify-center w-20 h-20 rounded-2xl bg-[#181C24] border border-amber-500/30 text-amber-400">
              <span className="font-display font-black text-3xl">4.9</span>
            </div>
            <div>
              <div className="flex items-center justify-center sm:justify-start gap-1 text-amber-400 mb-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400" />
                ))}
                <span className="text-xs font-semibold text-white ml-2">4.9 / 5.0</span>
              </div>
              <h3 className="text-xl font-display font-bold text-white">
                64 Verified Google Reviews
              </h3>
              <p className="text-xs text-slate-400 mt-1">
                Serving vehicle owners in Accra with verified public customer ratings.
              </p>
            </div>
          </div>

          {/* Action to view Google Listing */}
          <div className="flex items-center gap-4">
            <div className="hidden lg:flex items-center gap-2 text-xs text-slate-400 border-r border-white/10 pr-6 mr-2">
              <ShieldCheck className="w-4 h-4 text-amber-400" />
              <span>Public business listing verified at Star Oil, La-Bawaleshi Road</span>
            </div>
            <a
              href={BUSINESS_INFO.location.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-white/5 hover:bg-white/10 text-xs font-semibold text-white border border-white/10 hover:border-amber-400/40 transition-colors shrink-0"
            >
              <span>View On Google Maps</span>
              <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
