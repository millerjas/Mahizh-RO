"use client";

import type { Metadata } from "next";
import Script from "next/script";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import CTASection from "@/components/sections/CTASection";
import ServicesHero from "@/components/services/ServicesHero";
import ServicesOverview from "@/components/services/ServicesOverview";
import {
  DomesticRO,
  CommercialRO,
  DispenserPlant,
  SoftenerIronRemover,
  PressurePumps,
  SolarWaterHeater,
  ROChemicals,
  ROSpareParts,
} from "@/components/services/ServiceDetails";
import WhyUs from "@/components/services/WhyUs";
import FAQ from "@/components/services/FAQ";
import ServicesCTA from "@/components/services/ServicesCTA";
import { SITE, FAQS } from "@/lib/services-data";



export default function ServicesPage() {
    return (
        <main>
            <Navbar />

            <>
            {/* JSON-LD Schemas injected in <head> */}
            {/* <Script
                id="schema-local-business"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
            />
            <Script
                id="schema-faq"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
            /> */}

            <main>
                <ServicesHero />
                <ServicesOverview />

                {/* Detail sections — each has its own id for anchor links */}
                <DomesticRO />
                <CommercialRO />
                <DispenserPlant />
                <SoftenerIronRemover />
                <PressurePumps />
                <SolarWaterHeater />
                <ROChemicals />
                <ROSpareParts />

                <WhyUs />
                <FAQ />
                <ServicesCTA />
            </main>
            </>

            <CTASection
                title="Custom Solutions for Your Business"
                subtitle="Need a specialized water purification system? Let's discuss your requirements today."
            />

            <Footer />
        </main>
    );
}
