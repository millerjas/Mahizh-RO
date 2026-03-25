"use client";

import React from "react";
import { motion } from "framer-motion";
import { MapPin, Navigation } from "lucide-react";
import styles from "./ServiceArea.module.css";

const regions = [
  {
    id: "tn",
    name: "Tamil Nadu",
    image: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&q=80",
    delay: 0.1,
    districts: "Chennai, Coimbatore, Madurai, Trichy, Salem..."
  },
  {
    id: "kl",
    name: "Kerala",
    image: "/Hero-images/kerala.png",
    delay: 0.3,
    districts: "Kochi, Trivandrum, Kozhikode, Thrissur..."
  },
  {
    id: "py",
    name: "Puducherry",
    image: "/Hero-images/puducherry.png",
    delay: 0.5,
    districts: "Pondicherry, Auroville, Karaikal..."
  }
];

export default function ServiceArea() {
  return (
    <section className={styles.serviceSection}>
      {/* Decorative animated background elements */}
      <div className={styles.bgDecoration} />
      
      <div className={styles.container}>
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className={styles.header}
        >
          <div className={styles.iconWrapper}>
            <Navigation className={styles.headerIcon} />
          </div>
          <span className={styles.eyebrow}>Where We Operate</span>
          <h2 className={styles.title}>Our Service Network</h2>
          <p className={styles.subtitle}>
            Providing cutting-edge RO setups and dedicated maintenance contracts across prime South Indian territories.
          </p>
        </motion.div>

        <div className={styles.mapGrid}>
          {regions.map((region) => (
            <motion.div
              key={region.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: region.delay }}
              className={styles.regionCard}
            >
              <div 
                className={styles.cardImage}
                style={{ backgroundImage: `url(${region.image})` }}
              />
              
              <div className={styles.cardContent}>
                <div className={styles.pinHeader}>
                  <MapPin className={styles.pinIcon} />
                  <h3 className={styles.regionName}>{region.name}</h3>
                </div>
                
                <div className={styles.overlayInfo}>
                  <p className={styles.regionDesc}>
                    Comprehensive service coverage spanning major districts including {region.districts}
                  </p>
                  <button className={styles.exploreBtn}>
                    View Coverage
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
