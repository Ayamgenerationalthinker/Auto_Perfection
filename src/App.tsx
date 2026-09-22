import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { ServicesSection } from "./components/ServicesSection";
import { TrustBar } from "./components/TrustBar";
import { LocationSection } from "./components/LocationSection";
import { Footer } from "./components/Footer";
import { MobileActionBar } from "./components/MobileActionBar";

export function App() {
  return (
    <div className="min-h-screen bg-[#0A0B0E] text-[#F3F4F6] flex flex-col selection:bg-amber-400 selection:text-black">
      {/* Navigation */}
      <Navbar />

      {/* Main Narrative Flow */}
      <main className="flex-grow">
        {/* 01 WHO & WHAT: Brand, Accra, Location, CTAs */}
        <Hero />

        {/* 02 SERVICES: 01-05 Editorial Interactive Capabilities */}
        <ServicesSection />

        {/* 03 WHERE: Major Location Feature & Navigation */}
        <LocationSection />

        {/* 04 REPUTATION: 4.9 ★ Google Reviews */}
        <TrustBar />
      </main>

      {/* 05 CONTACT & FOOTER */}
      <Footer />

      {/* Mobile Sticky Quick Action Bar */}
      <MobileActionBar />
    </div>
  );
}

export default App;
