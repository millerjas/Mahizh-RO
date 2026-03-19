import { LucideIcon, ArrowRight } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import styles from "./ServiceCard.module.css";

interface ServiceCardProps {
    title: string;
    description: string;
    benefits?: string[];
    icon: LucideIcon;
    href: string;
    index?: number;
}

export default function ServiceCard({ title, description, benefits, icon: Icon, href, index = 0 }: ServiceCardProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            whileHover={{ y: -5 }}
            className={styles.card}
        >
            <div className={styles.iconWrap}>
                <Icon className={styles.icon} />
            </div>
            <h3 className={styles.cardTitle}>{title}</h3>
            <p className={styles.cardDesc}>
                {description}
            </p>

            {benefits && (
                <ul className={styles.benefitsList}>
                    {benefits.slice(0, 3).map((benefit, i) => (
                        <li key={i} className={styles.benefitItem}>
                            <div className={styles.bullet} />
                            {benefit}
                        </li>
                    ))}
                </ul>
            )}

            <Link href={href} className={styles.learnMore}>
                Learn More <ArrowRight className={styles.arrow} />
            </Link>
        </motion.div>
    );
}
