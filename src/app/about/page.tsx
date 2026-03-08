"use client";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import CTASection from "@/components/sections/CTASection";
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
            <section className="pt-32 pb-20 bg-surface relative overflow-hidden text-center">
                <div className="absolute top-0 left-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -ml-32 -mt-32" />
                <div className="max-w-4xl mx-auto px-4 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                    >
                        <h1 className="text-5xl font-extrabold text-foreground mb-6">
                            Our <span className="text-primary italic">Story & Mission</span>
                        </h1>
                        <p className="text-xl text-muted leading-relaxed">
                            Leading the way in industrial water purification across Theni. Mahizh RO Innovation is dedicated to providing high-quality, sustainable water solutions.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Intro Section */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                        <div>
                            <h2 className="text-3xl font-bold mb-8">Pioneering Pure Water Solutions</h2>
                            <p className="text-lg text-muted leading-relaxed mb-6">
                                Founded with a vision to revolutionize how industries in Theni handle water purification, Mahizh RO Innovation has grown into a trusted partner for hospitals, factories, and hotels.
                            </p>
                            <p className="text-lg text-muted leading-relaxed mb-10">
                                Our systems are designed not just for purification, but for efficiency. We understand the local water challenges in Tamil Nadu and engineer our RO plants to handle varying TDS levels while minimizing waste.
                            </p>
                            <div className="grid grid-cols-2 gap-8">
                                <div>
                                    <div className="text-4xl font-black text-primary mb-2">15+</div>
                                    <div className="text-sm font-bold uppercase tracking-wider text-muted">Years Experience</div>
                                </div>
                                <div>
                                    <div className="text-4xl font-black text-primary mb-2">100+</div>
                                    <div className="text-sm font-bold uppercase tracking-wider text-muted">Projects Completed</div>
                                </div>
                            </div>
                        </div>
                        <div className="relative">
                            <div className="bg-surface rounded-[3rem] aspect-square flex items-center justify-center p-12 border border-foreground/5 relative overflow-hidden group">
                                <History className="h-48 w-48 text-primary opacity-10 group-hover:scale-110 transition-transform duration-700" />
                                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent" />
                                <div className="absolute bottom-10 left-10 p-8 bg-white rounded-3xl shadow-2xl border border-foreground/5">
                                    <MapPin className="h-8 w-8 text-primary mb-4" />
                                    <h4 className="font-bold text-lg mb-1">Local Headquarters</h4>
                                    <p className="text-sm text-muted">Operating directly from the heart of Theni.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Mission and Vision */}
            <section className="py-24 bg-surface">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        <div className="bg-white p-12 rounded-[2.5rem] shadow-sm border border-foreground/5 transition-transform hover:-translate-y-2 duration-300">
                            <div className="bg-primary/10 w-16 h-16 rounded-2xl flex items-center justify-center mb-8">
                                <Target className="h-8 w-8 text-primary" />
                            </div>
                            <h3 className="text-2xl font-bold mb-6">Our Mission</h3>
                            <p className="text-muted leading-relaxed">
                                To empower industries with high-performance water purification systems that are cost-effective, energy-efficient, and easy to maintain, ensuring zero compromise on water quality.
                            </p>
                        </div>
                        <div className="bg-white p-12 rounded-[2.5rem] shadow-sm border border-foreground/5 transition-transform hover:-translate-y-2 duration-300">
                            <div className="bg-primary/10 w-16 h-16 rounded-2xl flex items-center justify-center mb-8">
                                <Eye className="h-8 w-8 text-primary" />
                            </div>
                            <h3 className="text-2xl font-bold mb-6">Our Vision</h3>
                            <p className="text-muted leading-relaxed">
                                To be the gold standard for industrial water purification in South India, known for innovation, engineering excellence, and unwavering commitment to customer success.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Why Choose Us */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-20">
                        <h2 className="text-4xl font-extrabold text-foreground mb-4">Why Choose Mahizh RO?</h2>
                        <p className="text-muted max-w-2xl mx-auto">
                            We combine technical expertise with a deep understanding of local business needs.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
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
                            <div key={i} className="text-center p-8 rounded-3xl hover:bg-surface transition-colors group">
                                <div className="bg-primary/10 h-16 w-16 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-primary transition-colors">
                                    <item.icon className="h-8 w-8 text-primary group-hover:text-white transition-colors" />
                                </div>
                                <h4 className="font-bold text-lg mb-3">{item.title}</h4>
                                <p className="text-sm text-muted leading-relaxed">{item.desc}</p>
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
