
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import HeroSlider from "@/components/Home/HeroSlider";
import ServicesSection from "@/components/Home/ServicesSection";
import AboutUs from "@/components/Home/AboutUs";
import ProductsSection from "@/components/Home/ProductsSection";
import Testimonials from "@/components/Home/Testimonials";
import Achievements from "@/components/Home/Achievements";
import ServiceArea from "@/components/Home/ServiceArea";
import SpecialSection from "@/components/Home/SpecialSection";
import ServicesCTA from "@/components/services/ServicesCTA";

export default function Home() {
  return (
    <main>
      <Navbar />
      <HeroSlider />
      <ServicesSection />
      <ProductsSection />
      <SpecialSection />    {/* ← moved up (promo works while interest is hot) */}
      <AboutUs />           {/* ← moved down (trust-building, not first-impression) */}
      <Achievements />
      <Testimonials />
      <ServiceArea />
      <ServicesCTA />
      <Footer />
    </main>
  );
}
