"use client";

import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";
import { motion } from "framer-motion";
import styles from "./CTASection.module.css";

interface CTASectionProps {
    title: string;
    subtitle: string;
    primaryCtaText?: string;
    secondaryCtaText?: string;
    primaryHref?: string;
    secondaryHref?: string;
}

export default function CTASection({
    title,
    subtitle,
    primaryCtaText = "Get a Free Quote",
    secondaryCtaText = "Contact Us",
    primaryHref = "/contact",
    secondaryHref = "/contact"
}: CTASectionProps) {
    return (
        <section className={styles.ctaSection}>
            {/* Decorative elements */}
            <div className={styles.decoTop} />
            <div className={styles.decoBottom} />

            <div className={styles.container}>
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className={styles.ctaTitle}
                >
                    {title}
                </motion.h2>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                    className={styles.ctaSubtitle}
                >
                    {subtitle}
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className={styles.btnGroup}
                >
                    <Link
                        href={primaryHref}
                        className={styles.primaryCta}
                    >
                        <Phone className={styles.phoneIcon} /> {primaryCtaText}
                    </Link>
                    <Link
                        href={secondaryHref}
                        className={styles.secondaryCta}
                    >
                        {secondaryCtaText} <ArrowRight className={styles.arrowIcon} />
                    </Link>
                </motion.div>
            </div>
        </section>
    );
}
