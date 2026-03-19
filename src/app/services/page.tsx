"use client";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import CTASection from "@/components/sections/CTASection";
import styles from "./page.module.css";
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
            <section className={styles.headerSection}>
                <div className={styles.headerContainer}>
                    <motion.h1
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className={styles.headerH1}
                    >
                        Our <span className={styles.primaryItalic}>Expert Solutions</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className={styles.headerP}
                    >
                        Comprehensive water purification services tailored for industries in Theni. From installation to ongoing maintenance, we ensure your business has access to pure water.
                    </motion.p>
                </div>
            </section>

            {/* Services List */}
            <section className={styles.sectionBgWhite}>
                <div className={styles.container}>
                    <div className={styles.listSpace}>
                        {services.map((service, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className={i % 2 === 1 ? styles.serviceRowReverse : styles.serviceRow}
                            >
                                <div className={styles.serviceContent}>
                                    <div className={styles.iconWrapper}>
                                        <service.icon className={styles.iconSm} />
                                    </div>
                                    <h2 className={styles.serviceTitle}>{service.title}</h2>
                                    <p className={styles.serviceDesc}>
                                        {service.description}
                                    </p>

                                    <div className={styles.detailsGrid}>
                                        <div>
                                            <h4 className={styles.detailsH4}>Key Benefits</h4>
                                            <ul className={styles.benefitsList}>
                                                {service.benefits.map((benefit, j) => (
                                                    <li key={j} className={styles.benefitItem}>
                                                        <CheckCircle2 className={styles.checkIcon} />
                                                        <span>{benefit}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                        <div>
                                            <h4 className={styles.detailsH4}>Suitable Industries</h4>
                                            <div className={styles.indWrap}>
                                                {service.industries.map((industry, j) => (
                                                    <span key={j} className={styles.indBadge}>
                                                        {industry}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className={styles.serviceImage}>
                                    <div className={styles.imgCard}>
                                        <div className={styles.imgGradient} />
                                        <div className={styles.imgCenter}>
                                            <Droplets className={styles.logoBig} />
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Why Choose Our Services */}
            <section className={styles.whySection}>
                <div className={styles.container}>
                    <div className={styles.whyCard}>
                        <div className={styles.whyBgBlur} />

                        <div className={styles.whyHeader}>
                            <h2 className={styles.whyH2}>Built for Reliability</h2>
                            <p className={styles.whySubtitle}>
                                We don't just sell RO plants; we provide long-term water security for your business operations.
                            </p>
                        </div>

                        <div className={styles.featuresGrid}>
                            <div className={styles.featCard}>
                                <div className={styles.featIconWrap}>
                                    <Clock className={styles.featIcon} />
                                </div>
                                <h3 className={styles.featH3}>Fast Turnaround</h3>
                                <p className={styles.featP}>
                                    Quick installation and deployment to minimize downtime for your business.
                                </p>
                            </div>
                            <div className={styles.featCard}>
                                <div className={styles.featIconWrap}>
                                    <Zap className={styles.featIcon} />
                                </div>
                                <h3 className={styles.featH3}>Energy Efficient</h3>
                                <p className={styles.featP}>
                                    Our systems are designed to consume less power while delivering maximum output.
                                </p>
                            </div>
                            <div className={styles.featCard}>
                                <div className={styles.featIconWrap}>
                                    <ShieldCheck className={styles.featIcon} />
                                </div>
                                <h3 className={styles.featH3}>Local Warranty</h3>
                                <p className={styles.featP}>
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
