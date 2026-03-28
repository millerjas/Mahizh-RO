"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import styles from "./Achievements.module.css";

const awardsData = [
  {
    year: "2024",
    title: "18+ Years Experience",
    description: "Delivering trusted RO solutions across South India since 2008, with a proven track record of quality and reliability.",
  },
  {
    year: "2023",
    title: "Innovation Design Award",
    description: "Recognised for engineering breakthroughs in water purification systems tailored for Indian households.",
  },
  {
    year: "2022",
    title: "100+ Happy Customers",
    description: "Over a hundred satisfied clients — from homes to large industrial plants — trust us for clean water every day.",
  },
  {
    year: "2021",
    title: "Best ROI Pricing",
    description: "Awarded for offering the most cost-effective RO maintenance contracts without compromising on quality.",
  },
];

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.1, ease: "easeOut" },
  }),
};

export default function Achievements() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>

        {/* Header */}
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
        >
          <span className={styles.eyebrow}>Our Awards</span>
          <h2 className={styles.title}>
            Our <em className={styles.cursive}>Award-Winning</em> Journey
          </h2>
        </motion.div>

        {/* Awards grid — horizontal single row */}
        <div className={styles.grid}>
          {awardsData.map((award, i) => (
            <motion.div
              key={i}
              className={styles.card}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-40px" }}
              variants={cardVariants}
            >
              {/* Laurel badge */}
              <div className={styles.badgeWrapper}>
                {/* <svg
                  className={styles.laurel}
                  viewBox="0 0 80 80"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M18 58 C10 50, 8 38, 14 28 C16 32, 15 40, 18 44 C14 36, 18 26, 24 22 C24 28, 22 36, 24 42 C22 34, 26 26, 32 24" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" fill="none"/>
                  <path d="M62 58 C70 50, 72 38, 66 28 C64 32, 65 40, 62 44 C66 36, 62 26, 56 22 C56 28, 58 36, 56 42 C58 34, 54 26, 48 24" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" fill="none"/>
                  <polygon points="40,20 42.4,27.2 50,27.2 44,31.6 46.4,38.8 40,34.4 33.6,38.8 36,31.6 30,27.2 37.6,27.2" fill="currentColor" />
                  <path d="M30 60 Q40 65 50 60" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" fill="none"/>
                </svg> */}
              </div>

              {/* Year */}
              <span className={styles.year}>{award.year}</span>

              {/* Title */}
              <h3 className={styles.cardTitle}>{award.title}</h3>

              {/* Description */}
              <p className={styles.cardDesc}>{award.description}</p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}