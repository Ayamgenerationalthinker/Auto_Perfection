import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { BrakeAssembly3D } from "./components/BrakeAssembly3D";
import { ServicesSection } from "./components/ServicesSection";
import { AutomotiveVideoPlayer } from "./components/AutomotiveVideoPlayer";
import { LocationSection } from "./components/LocationSection";
import { TrustBar } from "./components/TrustBar";
import { Footer } from "./components/Footer";
import { MobileActionBar } from "./components/MobileActionBar";

export function App() {
  return (
    <div className="min-h-screen bg-[#0B0D10] text-[#F4F5F7] flex flex-col selection:bg-amber-400 selection:text-black">
      {/* 01 Brand & Quick Navigation */}
      <Navbar />

      <main className="flex-grow">
        {/* 02 Hero: Brand Presence & Immediate Human Understanding */}
        <Hero />

        {/* 03 3D Mechanical Interaction: Precision Inspection (Ventilated Rotor & Caliper) */}
        <BrakeAssembly3D />

        {/* 04 Editorial Services: 01 to 05 Verified Capabilities */}
        <ServicesSection />

        {/* 05 Cinematic Motion Studies: Workshop Precision in Action */}
        <AutomotiveVideoPlayer />

        {/* 06 Primary Workshop Location & Google Map Navigation */}
        <LocationSection />

        {/* 07 Google Reputation: 4.9 ★ Rating & 64 Reviews */}
        <TrustBar />
      </main>

      {/* 08 Footer */}
      <Footer />

      {/* Mobile Sticky Quick Action Bar: CALL | WHATSAPP | DIRECTIONS */}
      <MobileActionBar />
    </div>
  );
}

export default App;
