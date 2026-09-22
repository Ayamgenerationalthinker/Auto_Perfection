import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { ServicesSection } from "./components/ServicesSection";
import { AutomotiveVideoPlayer } from "./components/AutomotiveVideoPlayer";
import { LocationSection } from "./components/LocationSection";
import { TrustBar } from "./components/TrustBar";
import { Footer } from "./components/Footer";

export function App() {
  return (
    <div className="min-h-screen bg-[#0B0D10] text-[#F4F5F7] flex flex-col selection:bg-amber-400 selection:text-black">
      {/* Brand Navigation */}
      <Navbar />

      <main className="flex-grow">
        {/* Hero: Authoritative Brand & Verified Capabilities */}
        <Hero />

        {/* Editorial Services 01 to 05 */}
        <ServicesSection />

        {/* Workshop in Motion: Cinematic HTML5 Video with Hover-to-Play */}
        <AutomotiveVideoPlayer />

        {/* Sole Location Feature & Working Google Map */}
        <LocationSection />

        {/* Google Reviews */}
        <TrustBar />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
