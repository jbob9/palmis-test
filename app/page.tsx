import AboutSection from "@/components/about-section";
import BottomCTA from "@/components/bottom-cta";
import FAQSection from "@/components/faq-section";
import FeaturedPackages from "@/components/featured-packages";
import Footer from "@/components/Footer";
import Header from "@/components/header";
import HeroSection from "@/components/hero-section";
import LocationCard from "@/components/location-card";
import PartnersSection from "@/components/partners-section";
import TransferPortalSection from "@/components/transfer-portal-section";

export default function Home() {
  return (
     <div className="min-h-screen overflow-hidden">
      <Header />
      <main>
        <HeroSection />
        <FeaturedPackages />
        <AboutSection />
        <BottomCTA />

        <div className="py-16">
        <LocationCard />
      </div>
      
      <PartnersSection />
      <TransferPortalSection />
      <FAQSection />
      <Footer />
      </main>
    </div>
  );
}
