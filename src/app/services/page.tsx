"use client";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import CTASection from "@/components/Home/CTASection";
import ServicesHero from "@/components/services/ServicesHero";
import ServicesOverview from "@/components/services/ServicesOverview";
import WhyUs from "@/components/services/WhyUs";
import FAQ from "@/components/services/FAQ";
import ServicesCTA from "@/components/services/ServicesCTA";

export default function ServicesPage() {
    return (
        <main>
            <Navbar />

            <main>
                <ServicesHero />
                <ServicesOverview />
                {/* <WhyUs /> */}
                <FAQ />
                <ServicesCTA />
            </main>

            {/* <CTASection
                title="Custom Solutions for Your Business"
                subtitle="Need a specialized water purification system? Let's discuss your requirements today."
            /> */}

            <Footer />
        </main>
    );
}
