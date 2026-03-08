"use client";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import CTASection from "@/components/sections/CTASection";
import {
    Warehouse,
    Hotel,
    Hospital,
    FlaskConical,
    Factory,
    CheckCircle2,
    Droplet
} from "lucide-react";
import { motion } from "framer-motion";

const industries = [
    {
        title: "Food & Beverage Industry",
        icon: Warehouse,
        description: "Water is the primary ingredient in millions of food products. Our RO systems ensure consistent quality and taste while meeting strict food safety regulations.",
        whyImportant: "Removes contaminants that affect flavor, ensures microbial safety, and provides standardized water for product consistency.",
        features: ["Sanitary Grade Piping", "UV Sterilization Integration", "Automated Monitoring"]
    },
    {
        title: "Hotels & Restaurants",
        icon: Hotel,
        description: "Provide your guests with premium water for drinking, cooking, and bathing. High-quality water also extends the life of your expensive kitchen equipment and laundry machines.",
        whyImportant: "Enhances guest experience, prevents scale buildup in boilers/pipes, and ensures crystal-clear ice and beverages.",
        features: ["Compact Design", "Quiet Operation", "Scale Inhibition Technology"]
    },
    {
        title: "Hospitals & Healthcare",
        icon: Hospital,
        description: "In healthcare, water quality isn't just about taste—it's about patient safety. Our RO plants provide pharmaceutical-grade water for various clinical and laboratory needs.",
        whyImportant: "Critical for sterilization processes, dialysis units, and laboratory testing where zero impurities are required.",
        features: ["Redundant Systems", "High Rejection Membranes", "Pure Water Storage"]
    },
    {
        title: "Pharmaceutical Companies",
        icon: FlaskConical,
        description: "We provide specialized RO systems that meet the rigorous standards of the pharmaceutical industry, ensuring water purity at every stage of production.",
        whyImportant: "Essential for drug formulation, equipment cleaning, and meeting Pharmacopoeia standards.",
        features: ["Deionization Options", "Real-time TOC Monitoring", "Validation Documentation"]
    },
    {
        title: "Manufacturing Units",
        icon: Factory,
        description: "From cooling towers to process water, manufacturers need large volumes of treated water. Our high-capacity plants are built to handle heavy industrial demands.",
        whyImportant: "Protects machinery from corrosion, improves product finish quality, and reduces chemical costs in processing.",
        features: ["Heavy Duty Construction", "High Recovery Rates", "Remote Monitoring"]
    }
];

export default function IndustriesPage() {
    return (
        <main>
            <Navbar />

            {/* Page Header */}
            <section className="pt-32 pb-20 bg-surface border-b border-foreground/5 overflow-hidden relative">
                <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -mr-48 -mb-10" />
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                    >
                        <h1 className="text-5xl font-extrabold text-foreground mb-6">
                            Industries <span className="text-primary italic">We Serve</span>
                        </h1>
                        <p className="text-xl text-muted max-w-3xl mx-auto leading-relaxed">
                            Tailored water purification solutions for a wide range of industrial and commercial applications in and around Theni.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Industries Grid */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="space-y-32">
                        {industries.map((industry, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className={`flex flex-col ${i % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-16 items-start`}
                            >
                                <div className="lg:w-1/2">
                                    <div className="bg-primary/5 w-20 h-20 rounded-3xl flex items-center justify-center mb-8">
                                        <industry.icon className="h-10 w-10 text-primary" />
                                    </div>
                                    <h2 className="text-3xl font-bold text-foreground mb-6">{industry.title}</h2>
                                    <p className="text-lg text-muted leading-relaxed mb-6">
                                        {industry.description}
                                    </p>

                                    <div className="bg-surface p-8 rounded-3xl border border-foreground/5 mb-8">
                                        <h4 className="text-sm font-black uppercase tracking-widest text-primary mb-4 flex items-center">
                                            <Droplet className="h-4 w-4 mr-2" /> Why RO Water is Crucial
                                        </h4>
                                        <p className="text-foreground/80 leading-relaxed italic">
                                            {industry.whyImportant}
                                        </p>
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        {industry.features.map((feature, j) => (
                                            <div key={j} className="flex items-center space-x-3 text-sm font-bold text-muted">
                                                <CheckCircle2 className="h-5 w-5 text-secondary shrink-0" />
                                                <span>{feature}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <div className="lg:w-1/2 w-full">
                                    <div className="aspect-[4/3] bg-surface rounded-[3rem] overflow-hidden border border-foreground/5 flex items-center justify-center p-20 relative group">
                                        <industry.icon className="h-32 w-32 text-primary opacity-10 group-hover:scale-125 transition-transform duration-700" />
                                        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-primary/5" />
                                        <div className="absolute top-10 right-10 flex space-x-2">
                                            {[1, 2, 3].map(dot => (
                                                <div key={dot} className="h-2 w-2 rounded-full bg-primary/20" />
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            <CTASection
                title="Solutions for Your Sector"
                subtitle="Contact our engineers to design a system that meets your industry standards."
            />

            <Footer />
        </main>
    );
}
