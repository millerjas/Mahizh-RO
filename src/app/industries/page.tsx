"use client";

import React, { useRef } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import styles from "./page.module.css";
import { Globe, ArrowRight, ShieldCheck, Droplets } from "lucide-react";
import { motion } from "framer-motion";

export default function IndustriesPage() {
  return (
    <main className={styles.main}>
      <Navbar />

      {/* Modern Light Blue Gradient Background */}
      <div className={styles.pageBackground}>
        <div className={styles.glowTop}></div>
        <div className={styles.glowMiddle}></div>
      </div>

      {/* HERO SECTION */}
      <section className={styles.heroSection}>
        {/* Giant Watermark Text */}
        <div className={styles.watermarkContainer}>
          <h1 className={styles.watermarkText}>MAHIZH</h1>
        </div>

        {/* Top Navbar Simulation links in design (Optional, we have our real Navbar) */}
        
        <div className={styles.heroContent}>
          
          {/* Central Main Image - Mapping to the Blue Macaw in reference */}
          <motion.div 
            className={styles.centerHeroImage}
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div 
              className={styles.heroImageSubject} 
              style={{ backgroundImage: "url('https://images.unsplash.com/photo-1548848221-0c2e497ed557?auto=format&fit=crop&q=80')" }} 
            />
            
            {/* Pulsing focal point (like the sun/dot under the bird) */}
            <div className={styles.pulsePoint}>
              <div className={styles.pulseRing}></div>
              <div className={styles.pulseDot}></div>
            </div>
          </motion.div>

          {/* Left Floating Card */}
          <motion.div 
            className={styles.leftFloatCard}
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className={styles.globeIconWrap}>
              <Globe className={styles.globeIcon} />
            </div>
            <p className={styles.floatText}>
              Purify Water Across Industries<br/>
              Fast, Secure, And<br/>
              Hassle-Free.
            </p>
          </motion.div>
        </div>
      </section>

      {/* MIDDLE SECTION: Features & Industries */}
      <section className={styles.middleSection}>
        
        {/* Floating Chip: FAST SEND, FAST RECEIVE */}
        <motion.div 
          className={styles.chipWrapper}
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
        >
          <button className={styles.chipButton}>
            Pure Water <ArrowRight size={14} className={styles.chipArrow} />
          </button>
          <h2 className={styles.chipTitle}>
            CONSISTENT QUALITY,<br/>
            UNMATCHED PURITY
          </h2>
        </motion.div>

        {/* Floating Stat Card (90M+ Processed) */}
        <motion.div className={styles.statCard} whileInView={{ scale: [0.9, 1], opacity: [0, 1] }}>
          <span className={styles.statLabel}>TOTAL PURIFIED (LITERS)</span>
          <div className={styles.statRow}>
            <span className={styles.statBig}>50M+</span>
            <span className={styles.statDesc}>Clean Water<br/>Processed</span>
          </div>
          <a href="#" className={styles.statLink}>VIEW STATS <ArrowRight size={12}/></a>
        </motion.div>

        {/* Main Industry Row */}
        <div className={styles.industryRow}>
          <div className={styles.industryText}>
            <h2>SCALE AND ADAPT ACROSS MULTIPLE SECTORS</h2>
            <p>
              Mahizh RO helps you operate seamlessly across hospitals, factories, and commercial units quickly, securely, and without boundaries.
            </p>
            <a href="#" className={styles.exploreLink}>EXPLORE OUR SECTORS <ArrowRight size={14} /></a>
          </div>

          <div className={styles.industryGraphics}>
            <div className={styles.graphicMainCard}>
              <div className={styles.graphicImage} style={{ backgroundImage: "url('https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80')" }}></div>
              <div className={styles.floatingTagTop}>
                <Droplets size={14} color="#0284c7" /> MAHIZH
              </div>
              <div className={styles.floatingTagRight}>
                <ShieldCheck size={18} color="#16a34a" /> ISO CERTIFIED
              </div>
            </div>
          </div>
        </div>

      </section>

      {/* BOTTOM CURVED SECTION */}
      <section className={styles.bottomSection}>
        {/* The overlapping curve and globe */}
        <div className={styles.curvedTopWrapper}>
          <svg className={styles.curveSvg} viewBox="0 0 1440 200" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Creating the U dip in the middle */}
            <path d="M0 200L0 100C300 100 500 100 600 180C720 280 820 180 900 100C1000 100 1200 100 1440 100L1440 200H0Z" fill="#0f172a"/>
          </svg>
          
          <div className={styles.centerGlobe}>
            <div className={styles.globeSphere} style={{ backgroundImage: "url('https://images.unsplash.com/photo-1614730321146-b6fa6a46bcb4?auto=format&fit=crop&q=80')" }}></div>
          </div>
        </div>

        <div className={styles.darkBackgroundArea}>
          <h2>GROW BEYOND BORDERS WITH MAHIZH RO</h2>
          <p>
            Whether You're Running A Hospital Or A Full-Scale Factory, Mahizh Makes It Simple, Fast, Secure, And With No Water Troubles To Worry About.
          </p>
          <button className={styles.exploreMoreBtn}>Explore More <ArrowRight size={14} /></button>
        </div>
      </section>

      {/* Very bottom text */}
      {/* <div className={styles.whoWeServeFooter}>
        <div 
           className={styles.realisticWaterBanner} 
           style={{ backgroundImage: "url('https://images.unsplash.com/photo-1527582531024-118e7e17ea66?auto=format&fit=crop&w=2000&q=80')" }}
        >
          <div className={styles.waterFadeOverlay}></div>
        </div>
        
        <div className={styles.whoWeServeContent}>
          <h2>WHO WE SERVE</h2>
          <p>
            From towering commercial complexes and meticulous healthcare facilities to sprawling manufacturing plants, Mahizh RO Innovation provides unwavering water purity. Our advanced systems automatically adapt to diverse capacities, ensuring every sector receives the exact standard of water they require to thrive completely uninterrupted.
          </p>
        </div>
      </div> */}

      <Footer />
    </main>
  );
}
