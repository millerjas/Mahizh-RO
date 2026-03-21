"use client";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import CTASection from "@/components/Home/CTASection";
import styles from "./page.module.css";
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
            <section className={styles.headerSection}>
                <div className={styles.headerBgBlur} />
                <div className={styles.headerContainer}>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                    >
                        <h1 className={styles.headerH1}>
                            Industries <span className={styles.primaryItalic}>We Serve</span>
                        </h1>
                        <p className={styles.headerP}>
                            Tailored water purification solutions for a wide range of industrial and commercial applications in and around Theni.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Industries Grid */}
            <section className={styles.sectionBgWhite}>
                <div className={styles.container}>
                    <div className={styles.listSpace}>
                        {industries.map((industry, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className={i % 2 === 1 ? styles.indRowReverse : styles.indRow}
                            >
                                <div className={styles.indContent}>
                                    <div className={styles.indIconWrapper}>
                                        <industry.icon className={styles.indIconSm} />
                                    </div>
                                    <h2 className={styles.indTitle}>{industry.title}</h2>
                                    <p className={styles.indDesc}>
                                        {industry.description}
                                    </p>

                                    <div className={styles.whyCard}>
                                        <h4 className={styles.whyHeader}>
                                            <Droplet className={styles.dropletIcon} /> Why RO Water is Crucial
                                        </h4>
                                        <p className={styles.whyP}>
                                            {industry.whyImportant}
                                        </p>
                                    </div>

                                    <div className={styles.featGrid}>
                                        {industry.features.map((feature, j) => (
                                            <div key={j} className={styles.featItem}>
                                                <CheckCircle2 className={styles.checkIcon} />
                                                <span>{feature}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <div className={styles.indImage}>
                                    <div className={styles.imgCard}>
                                        <industry.icon className={styles.logoBig} />
                                        <div className={styles.imgGradient} />
                                        <div className={styles.dotsRow}>
                                            {[1, 2, 3].map(dot => (
                                                <div key={dot} className={styles.dot} />
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
