import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { ServicesSection } from "./components/ServicesSection";
import { WorkshopGallery } from "./components/WorkshopGallery";
import { TrustBar } from "./components/TrustBar";
import { LocationSection } from "./components/LocationSection";
import { Footer } from "./components/Footer";
import { MobileActionBar } from "./components/MobileActionBar";

export function App() {
  return (
    <div className="min-h-screen bg-[#0C0D10] text-[#F3F4F6] flex flex-col selection:bg-amber-500 selection:text-black">
      <Navbar />

      <main className="flex-grow">
        <Hero />
        <ServicesSection />
        <WorkshopGallery />
        <TrustBar />
        <LocationSection />
      </main>

      <Footer />
      <MobileActionBar />
    </div>
  );
}

export default App;
