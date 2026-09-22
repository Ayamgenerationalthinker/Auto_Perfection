import { Phone, MessageSquare, Navigation } from "lucide-react";
import { BUSINESS_INFO } from "../data/business";

export const MobileActionBar = () => {
  return (
    <aside
      aria-label="Quick Mobile Actions"
      className="fixed bottom-0 left-0 right-0 z-40 sm:hidden bg-[#0A0B0E]/95 backdrop-blur-lg border-t border-white/10 p-2.5 shadow-2xl"
    >
      <div className="grid grid-cols-3 gap-2 max-w-sm mx-auto">
        {/* Instant Phone Call */}
        <a
          href={`tel:${BUSINESS_INFO.contact.phoneRaw}`}
          className="flex flex-col items-center justify-center gap-1 py-2 px-1 rounded-xl bg-[#151821] text-white text-[10px] font-bold uppercase tracking-wider border border-white/10 active:bg-white/10"
        >
          <Phone className="w-3.5 h-3.5 text-amber-400" />
          <span>Call</span>
        </a>

        {/* Instant WhatsApp */}
        <a
          href={BUSINESS_INFO.contact.getWhatsAppUrl()}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center gap-1 py-2 px-1 rounded-xl bg-amber-400 hover:bg-amber-300 text-black text-[10px] font-black uppercase tracking-wider shadow-sm active:scale-98"
        >
          <MessageSquare className="w-3.5 h-3.5" />
          <span>WhatsApp</span>
        </a>

        {/* Instant Directions */}
        <a
          href={BUSINESS_INFO.location.directionsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center gap-1 py-2 px-1 rounded-xl bg-[#151821] text-white text-[10px] font-bold uppercase tracking-wider border border-white/10 active:bg-white/10"
        >
          <Navigation className="w-3.5 h-3.5 text-amber-400" />
          <span>Directions</span>
        </a>
      </div>
    </aside>
  );
};
