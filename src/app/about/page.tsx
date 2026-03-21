"use client";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import CTASection from "@/components/Home/CTASection";
import styles from "./page.module.css";
import {
    Target,
    Eye,
    Award,
    ShieldCheck,
    History,
    MapPin,
    Briefcase,
    Droplet
} from "lucide-react";
import { motion } from "framer-motion";

export default function AboutPage() {
    return (
        <main>
            <Navbar />

            {/* Hero Section */}
            <section className={styles.heroSection}>
                <div className={styles.heroBgBlur} />
                <div className={styles.heroContainer}>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                    >
                        <h1 className={styles.heroH1}>
                            Our <span className={styles.primaryItalic}>Story & Mission</span>
                        </h1>
                        <p className={styles.heroP}>
                            Leading the way in industrial water purification across Theni. Mahizh RO Innovation is dedicated to providing high-quality, sustainable water solutions.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Intro Section */}
            <section className={styles.sectionBgWhite}>
                <div className={styles.container}>
                    <div className={styles.introGrid}>
                        <div>
                            <h2 className={styles.introH2}>Pioneering Pure Water Solutions</h2>
                            <p className={styles.introP}>
                                Founded with a vision to revolutionize how industries in Theni handle water purification, Mahizh RO Innovation has grown into a trusted partner for hospitals, factories, and hotels.
                            </p>
                            <p className={`${styles.introP} ${styles.introP2}`}>
                                Our systems are designed not just for purification, but for efficiency. We understand the local water challenges in Tamil Nadu and engineer our RO plants to handle varying TDS levels while minimizing waste.
                            </p>
                            <div className={styles.statsGrid}>
                                <div>
                                    <div className={styles.statValue}>15+</div>
                                    <div className={styles.statLabel}>Years Experience</div>
                                </div>
                                <div>
                                    <div className={styles.statValue}>100+</div>
                                    <div className={styles.statLabel}>Projects Completed</div>
                                </div>
                            </div>
                        </div>
                        <div className={styles.relative}>
                            <div className={styles.hqCardSur}>
                                <History className={styles.hqIconBig} />
                                <div className={styles.hqGradient} />
                                <div className={styles.hqOverlay}>
                                    <MapPin className={styles.hqIconSmall} />
                                    <h4 className={styles.hqH4}>Local Headquarters</h4>
                                    <p className={styles.hqP}>Operating directly from the heart of Theni.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Mission and Vision */}
            <section className={styles.sectionBgSurface}>
                <div className={styles.container}>
                    <div className={styles.missionVisionGrid}>
                        <div className={styles.mvCard}>
                            <div className={styles.mvIconWrapper}>
                                <Target className={styles.mvIcon} />
                            </div>
                            <h3 className={styles.mvH3}>Our Mission</h3>
                            <p className={styles.mvP}>
                                To empower industries with high-performance water purification systems that are cost-effective, energy-efficient, and easy to maintain, ensuring zero compromise on water quality.
                            </p>
                        </div>
                        <div className={styles.mvCard}>
                            <div className={styles.mvIconWrapper}>
                                <Eye className={styles.mvIcon} />
                            </div>
                            <h3 className={styles.mvH3}>Our Vision</h3>
                            <p className={styles.mvP}>
                                To be the gold standard for industrial water purification in South India, known for innovation, engineering excellence, and unwavering commitment to customer success.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Why Choose Us */}
            <section className={styles.sectionBgWhite}>
                <div className={styles.container}>
                    <div className="text-center mb-20">
                        <h2 className={styles.whyH2}>Why Choose Mahizh RO?</h2>
                        <p className={styles.whySubtitle}>
                            We combine technical expertise with a deep understanding of local business needs.
                        </p>
                    </div>

                    <div className={styles.whyGrid}>
                        {[
                            {
                                icon: Award,
                                title: "Expert Engineering",
                                desc: "Systems designed by industrial RO specialists."
                            },
                            {
                                icon: ShieldCheck,
                                title: "Guaranteed Purity",
                                desc: "Rigorous testing to meet ISO and health standards."
                            },
                            {
                                icon: Briefcase,
                                title: "End-to-End Service",
                                desc: "From initial design to 24/7 maintenance support."
                            },
                            {
                                icon: Droplet,
                                title: "Eco-Friendly",
                                desc: "Advanced technology to minimize water wastage."
                            }
                        ].map((item, i) => (
                            <div key={i} className={styles.whyCard}>
                                <div className={styles.whyIconWrapper}>
                                    <item.icon className={styles.whyIcon} />
                                </div>
                                <h4 className={styles.whyH4}>{item.title}</h4>
                                <p className={styles.whyP}>{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <CTASection
                title="Experience the Difference"
                subtitle="Partner with Theni's most trusted water purification experts today."
            />

            <Footer />
        </main>
    );
}
