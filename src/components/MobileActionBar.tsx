import { Phone, MessageSquare } from "lucide-react";
import { BUSINESS_INFO } from "../data/business";

export const MobileActionBar = () => {
  return (
    <aside
      aria-label="Quick Mobile Actions"
      className="fixed bottom-0 left-0 right-0 z-40 md:hidden bg-[#0D0F16]/95 backdrop-blur-lg border-t border-white/10 p-3 shadow-2xl"
    >
      <div className="grid grid-cols-2 gap-2 max-w-md mx-auto">
        {/* Instant Phone Call */}
        <a
          href={`tel:${BUSINESS_INFO.contact.phoneRaw}`}
          className="flex items-center justify-center gap-2 py-3 px-3 rounded-xl bg-[#1A1D27] text-white text-xs font-semibold border border-white/10 active:bg-white/10"
          aria-label="Call Auto Perfection Centre"
        >
          <Phone className="w-4 h-4 text-amber-400" />
          <span>Call Now</span>
        </a>

        {/* Instant WhatsApp Enquiry */}
        <a
          href={BUSINESS_INFO.contact.getWhatsAppUrl()}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 py-3 px-3 rounded-xl bg-amber-400 hover:bg-amber-300 text-black text-xs font-bold shadow-md active:scale-98"
          aria-label="Chat on WhatsApp"
        >
          <MessageSquare className="w-4 h-4" />
          <span>WhatsApp</span>
        </a>
      </div>
    </aside>
  );
};
