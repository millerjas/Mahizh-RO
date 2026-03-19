import Link from "next/link";
import { ArrowRight, CheckCircle2, Droplet, Play, ShieldCheck, Zap } from "lucide-react";
import { motion } from "framer-motion";
import styles from "./Hero.module.css";

export default function Hero() {
    return (
        <section className={styles.heroSection}>
            {/* Background patterns */}
            <div className={styles.bgShapeTop} />
            <div className={styles.bgShapeBottom} />

            <div className={styles.container}>
                <div className={styles.gridWrap}>
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className={styles.badge}>
                            <Zap className={styles.badgeIcon} />
                            <span>Leading RO Provider in Theni</span>
                        </div>
                        <h1 className={styles.h1Title}>
                            Pure Water for <br />
                            <span className={styles.primaryItalic}>Industrial</span> Excellence
                        </h1>
                        <p className={styles.pSub}>
                            Mahizh RO Innovation provides high-capacity, energy-efficient commercial RO plants in Theni. Designed for large-scale purification for industries that demand the best.
                        </p>

                        <div className={styles.btnsWrap}>
                            <Link
                                href="/contact"
                                className={styles.btnPrimary}
                            >
                                Request a Quote <ArrowRight className={styles.btnPrimaryArrow} />
                            </Link>
                            <Link
                                href="/services"
                                className={styles.btnSecondary}
                            >
                                <div className={styles.btnSecondaryIconWrap}>
                                    <Play className={styles.btnSecondaryIcon} />
                                </div>
                                <span>Our Solutions</span>
                            </Link>
                        </div>

                        <div className={styles.statsGrid}>
                            {[
                                { icon: ShieldCheck, text: "HQA Certified" },
                                { icon: Zap, text: "Energy Efficient" },
                                { icon: Droplet, text: "99.9% Pure" },
                            ].map((item, i) => (
                                <div key={i} className={styles.statItem}>
                                    <item.icon className={styles.statIcon} />
                                    <span className={styles.statText}>{item.text}</span>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.8, rotate: 2 }}
                        animate={{ opacity: 1, scale: 1, rotate: 0 }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        className={styles.imgCol}
                    >
                        {/* Mock RO Plant Image Placeholder */}
                        <div className={styles.mockPlant}>
                            <div className={styles.mockInner}>
                                {/* Visual representation of an industrial plant */}
                                <div className={styles.mockUI}>
                                    <div className={styles.mockGrid}>
                                        {Array.from({ length: 9 }).map((_, i) => (
                                            <div key={i} className={styles.pulseBox} style={{ animationDelay: `${i * 200}ms` }} />
                                        ))}
                                    </div>
                                    <Droplet className={styles.mockIcon} />
                                </div>
                                <div className={styles.mockBottomBar}>
                                    <div className={styles.mockBottomCard}>
                                        <div className={styles.mockCardHeader}>
                                            <CheckCircle2 className={styles.mockCheck} />
                                            <span className={styles.mockCardTitle}>Premium Installation</span>
                                        </div>
                                        <p className={styles.mockCardP}>Smart monitoring and low-maintenance industrial RO systems.</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Stats Badge */}
                        <motion.div
                            initial={{ x: 20, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ delay: 0.5 }}
                            className={styles.floatingBadge}
                        >
                            <div className={styles.floatingItem}>
                                <div className={styles.floatingIconWrap}>
                                    <CheckCircle2 className={styles.floatingIcon} />
                                </div>
                                <div>
                                    <div className={styles.floatingNum}>100+</div>
                                    <div className={styles.floatingText}>Plants Installed</div>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
