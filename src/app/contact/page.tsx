"use client";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import styles from "./page.module.css";
import {
    Phone,
    Mail,
    MapPin,
    Clock,
    Send,
    CheckCircle2,
    Droplet
} from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";

export default function ContactPage() {
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        // Simulate API call
        setTimeout(() => {
            setIsLoading(false);
            setIsSubmitted(true);
        }, 1500);
    };

    return (
        <main>
            <Navbar />

            {/* Header */}
            <section className={styles.headerSection}>
                <div className={styles.headerBgBlur} />
                <div className={styles.headerContainer}>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className={styles.headerH1}
                    >
                        Get in <span className={styles.primaryItalic}>Touch</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className={styles.headerP}
                    >
                        Have a question about our RO plants? Request a quote or schedule a consultation with our water experts.
                    </motion.p>
                </div>
            </section>

            {/* Contact Content */}
            <section className={styles.sectionBgWhite}>
                <div className={styles.container}>
                    <div className={styles.grid}>
                        {/* Contact Info */}
                        <div>
                            <h2 className={styles.infoH2}>Contact Information</h2>
                            <p className={styles.infoP}>
                                We are here to help you find the perfect water purification solution for your business in Theni and surrounding areas.
                            </p>

                            <div className={styles.infoList}>
                                <div className={styles.infoItem}>
                                    <div className={styles.iconWrapper}>
                                        <Phone className={styles.icon} />
                                    </div>
                                    <div className={styles.infoItemContent}>
                                        <h4 className={styles.itemH4}>Call Us</h4>
                                        <p className={styles.itemLabel}>Primary Number</p>
                                        <p className={styles.itemValue}>+91 98765 43210</p>
                                    </div>
                                </div>

                                <div className={styles.infoItem}>
                                    <div className={styles.iconWrapper}>
                                        <Mail className={styles.icon} />
                                    </div>
                                    <div className={styles.infoItemContent}>
                                        <h4 className={styles.itemH4}>Email Us</h4>
                                        <p className={styles.itemLabel}>General Inquiries</p>
                                        <p className={styles.itemValueM}>contact@mahizhro.com</p>
                                    </div>
                                </div>

                                <div className={styles.infoItem}>
                                    <div className={styles.iconWrapper}>
                                        <MapPin className={styles.icon} />
                                    </div>
                                    <div className={styles.infoItemContent}>
                                        <h4 className={styles.itemH4}>Visit Office</h4>
                                        <p className={styles.itemLabel}>Headquarters</p>
                                        <p className={styles.itemValueM}>123 Industrial Area, Theni, Tamil Nadu 625531</p>
                                    </div>
                                </div>

                                <div className={styles.infoItem}>
                                    <div className={styles.iconWrapper}>
                                        <Clock className={styles.icon} />
                                    </div>
                                    <div className={styles.infoItemContent}>
                                        <h4 className={styles.itemH4}>Business Hours</h4>
                                        <p className={styles.itemValueS}>Monday - Saturday: 9:00 AM - 7:00 PM</p>
                                        <p className={styles.itemValueS}>Sunday: Closed (Emergency support available)</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Contact Form */}
                        <div className={styles.formCard}>
                            {isSubmitted ? (
                                <div className={styles.successContainer}>
                                    <div className={styles.successIconWrapper}>
                                        <CheckCircle2 className={styles.successIcon} />
                                    </div>
                                    <h3 className={styles.successH3}>Message Sent Successfully!</h3>
                                    <p className={styles.successP}>
                                        Thank you for contacting Mahizh RO Innovation. Our team will get back to you within 24 hours.
                                    </p>
                                    <button
                                        onClick={() => setIsSubmitted(false)}
                                        className={styles.successBtn}
                                    >
                                        Send another message
                                    </button>
                                </div>
                            ) : (
                                <>
                                    <h3 className={styles.formH3}>Request a Quote</h3>
                                    <form onSubmit={handleSubmit} className={styles.form}>
                                        <div className={styles.formGrid}>
                                            <div className={styles.formGroup}>
                                                <label className={styles.formLabel}>Full Name</label>
                                                <input
                                                    type="text"
                                                    required
                                                    placeholder="John Doe"
                                                    className={styles.formInput}
                                                />
                                            </div>
                                            <div className={styles.formGroup}>
                                                <label className={styles.formLabel}>Phone Number</label>
                                                <input
                                                    type="tel"
                                                    required
                                                    placeholder="+91 1234567890"
                                                    className={styles.formInput}
                                                />
                                            </div>
                                        </div>
                                        <div className={styles.formGroup}>
                                            <label className={styles.formLabel}>Email Address</label>
                                            <input
                                                type="email"
                                                required
                                                placeholder="john@company.com"
                                                className={styles.formInput}
                                            />
                                        </div>
                                        <div className={styles.formGroup}>
                                            <label className={styles.formLabel}>Message / Requirements</label>
                                            <textarea
                                                rows={4}
                                                required
                                                placeholder="I need a 5000LPH RO plant for my hospital..."
                                                className={styles.formTextarea}
                                            ></textarea>
                                        </div>
                                        <button
                                            disabled={isLoading}
                                            type="submit"
                                            className={styles.submitBtn}
                                        >
                                            {isLoading ? (
                                                <div className={styles.btnLoader} />
                                            ) : (
                                                <>
                                                    <span>Send Request</span>
                                                    <Send className={styles.btnIcon} />
                                                </>
                                            )}
                                        </button>
                                    </form>
                                </>
                            )}
                        </div>
                    </div>
                </div>
            </section>

            {/* Map Placeholder */}
            <section className={styles.mapSection}>
                <div className={styles.mapOverlay}>
                    <MapPin className={styles.mapIcon} />
                    <h3 className={styles.mapH3}>Our Location</h3>
                    <p className={styles.mapP}>Theni Industrial Zone, Tamil Nadu</p>
                    <div className={styles.mapBox}>
                        <p className={styles.mapBoxP}>Google Map will be embedded here for live location tracking.</p>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
