"use client";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import CTASection from "@/components/sections/CTASection";
import {
    Settings,
    Factory,
    ShieldCheck,
    TestTube,
    Cpu,
    CheckCircle2,
    Clock,
    Zap,
    Droplets
} from "lucide-react";
import { motion } from "framer-motion";

const services = [
    {
        title: "Commercial RO Plant Installation",
        description: "Expert installation of high-capacity RO systems tailored to your business scale. We handle everything from site assessment to final commissioning.",
        benefits: ["Precision Engineering", "Seamless Integration", "High-Flow Design"],
        industries: ["Hotels", "Hospitals", "Food & Beverage"],
        icon: Settings
    },
    {
        title: "Industrial Water Purification Systems",
        description: "Large-scale systems specifically designed for heavy-duty industrial applications requiring massive water volumes and extreme purity.",
        benefits: ["99.9% Purity", "Energy Efficient", "Scalable Capacity"],
        industries: ["Manufacturing", "Pharmaceuticals", "Textiles"],
        icon: Factory
    },
    {
        title: "RO Plant Maintenance & Service",
        description: "Keep your systems running at peak performance with our scheduled maintenance plans and rapid-response repair services.",
        benefits: ["Regular Audits", "Genuine Spare Parts", "24/7 Support"],
        industries: ["All Industries"],
        icon: ShieldCheck
    },
    {
        title: "Water Quality Testing",
        description: "Comprehensive laboratory testing to analyze water quality and ensure your RO system is meeting the required standards.",
        benefits: ["Detailed Analysis", "Compliance Reports", "Optimization Advice"],
        industries: ["Food & Beverage", "Hospitals", "Pharma"],
        icon: TestTube
    },
    {
        title: "Custom RO Solutions",
        description: "Unique water purification challenges require custom solutions. We design bespoke systems based on your specific water source and quality needs.",
        benefits: ["Bespoke Design", "Advanced Filtration", "Cost Optimization"],
        industries: ["Research Labs", "Specialized Manufacturing"],
        icon: Cpu
    }
];

export default function ServicesPage() {
    return (
        <main>
            <Navbar />

            {/* Header Section */}
            <section className="pt-32 pb-20 bg-surface border-b border-foreground/5">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <motion.h1
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-5xl font-extrabold text-foreground mb-6"
                    >
                        Our <span className="text-primary italic">Expert Solutions</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-xl text-muted max-w-3xl mx-auto leading-relaxed"
                    >
                        Comprehensive water purification services tailored for industries in Theni. From installation to ongoing maintenance, we ensure your business has access to pure water.
                    </motion.p>
                </div>
            </section>

            {/* Services List */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="space-y-24">
                        {services.map((service, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className={`flex flex-col ${i % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-16`}
                            >
                                <div className="lg:w-1/2">
                                    <div className="bg-primary/5 w-20 h-20 rounded-3xl flex items-center justify-center mb-8">
                                        <service.icon className="h-10 w-10 text-primary" />
                                    </div>
                                    <h2 className="text-3xl font-bold text-foreground mb-6">{service.title}</h2>
                                    <p className="text-lg text-muted leading-relaxed mb-8">
                                        {service.description}
                                    </p>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                                        <div>
                                            <h4 className="text-sm font-bold uppercase tracking-widest text-primary mb-4">Key Benefits</h4>
                                            <ul className="space-y-3">
                                                {service.benefits.map((benefit, j) => (
                                                    <li key={j} className="flex items-center space-x-3 text-foreground/80 font-medium">
                                                        <CheckCircle2 className="h-5 w-5 text-secondary" />
                                                        <span>{benefit}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                        <div>
                                            <h4 className="text-sm font-bold uppercase tracking-widest text-primary mb-4">Suitable Industries</h4>
                                            <div className="flex flex-wrap gap-2">
                                                {service.industries.map((industry, j) => (
                                                    <span key={j} className="bg-surface px-3 py-1 rounded-full text-xs font-bold text-muted border border-foreground/5">
                                                        {industry}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="lg:w-1/2 w-full">
                                    <div className="aspect-video bg-surface rounded-[2.5rem] overflow-hidden border border-foreground/5 relative group">
                                        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent group-hover:opacity-0 transition-opacity duration-500" />
                                        <div className="flex items-center justify-center h-full">
                                            <Droplets className="h-24 w-24 text-primary opacity-20 group-hover:scale-110 group-hover:opacity-30 transition-all duration-700" />
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Why Choose Our Services */}
            <section className="py-24 bg-surface">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="bg-foreground rounded-[3rem] p-12 md:p-20 text-white relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl -mr-32 -mt-32" />

                        <div className="relative z-10 text-center mb-16">
                            <h2 className="text-4xl font-bold mb-6">Built for Reliability</h2>
                            <p className="text-white/60 max-w-2xl mx-auto">
                                We don't just sell RO plants; we provide long-term water security for your business operations.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative z-10">
                            <div className="text-center">
                                <div className="bg-white/10 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6">
                                    <Clock className="h-8 w-8 text-primary" />
                                </div>
                                <h3 className="text-xl font-bold mb-4">Fast Turnaround</h3>
                                <p className="text-sm text-white/50 leading-relaxed">
                                    Quick installation and deployment to minimize downtime for your business.
                                </p>
                            </div>
                            <div className="text-center">
                                <div className="bg-white/10 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6">
                                    <Zap className="h-8 w-8 text-primary" />
                                </div>
                                <h3 className="text-xl font-bold mb-4">Energy Efficient</h3>
                                <p className="text-sm text-white/50 leading-relaxed">
                                    Our systems are designed to consume less power while delivering maximum output.
                                </p>
                            </div>
                            <div className="text-center">
                                <div className="bg-white/10 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6">
                                    <ShieldCheck className="h-8 w-8 text-primary" />
                                </div>
                                <h3 className="text-xl font-bold mb-4">Local Warranty</h3>
                                <p className="text-sm text-white/50 leading-relaxed">
                                    Based in Theni, we provide direct on-site warranty and support services.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <CTASection
                title="Custom Solutions for Your Business"
                subtitle="Need a specialized water purification system? Let's discuss your requirements today."
            />

            <Footer />
        </main>
    );
}
