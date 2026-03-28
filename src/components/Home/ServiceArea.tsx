"use client";

import React from "react";
import { motion } from "framer-motion";
import styles from "./ServiceArea.module.css";

const regions = [
  {
    id: "tn",
    name: "Tamil Nadu",
    index: "01",
    image: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=600&q=70",
    districts: "Chennai · Coimbatore · Madurai · Trichy · Salem",
  },
  {
    id: "kl",
    name: "Kerala",
    index: "02",
    image: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=600&q=70",
    districts: "Kochi · Trivandrum · Kozhikode · Thrissur",
  },
  {
    id: "py",
    name: "Puducherry",
    index: "03",
    image: "/Hero-images/puducherry.png",
    districts: "Pondicherry · Auroville · Karaikal",
  },
];

export default function ServiceArea() {
  return (
    <section className={styles.serviceSection}>
      <div className={styles.container}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className={styles.header}
        >
          <span className={styles.eyebrow}>Where We Operate</span>
          <h2 className={styles.title}>Our Service Network</h2>
          <p className={styles.subtitle}>
            RO installations and maintenance contracts across South India's key territories.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className={styles.mapGrid}
        >
          {regions.map((region) => (
            <div key={region.id} className={styles.regionCard}>
              <div className={styles.imageWrapper}>
                <img
                  src={region.image}
                  alt={region.name}
                  className={styles.cardImage}
                />
              </div>
              <div className={styles.cardContent}>
                <div className={styles.cardMeta}>
                  <h3 className={styles.regionName}>{region.name}</h3>
                  <span className={styles.regionIndex}>{region.index}</span>
                </div>
                <p className={styles.districts}>{region.districts}</p>
                <span className={styles.coverageLink}>View coverage →</span>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}