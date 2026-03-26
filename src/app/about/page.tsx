"use client";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import CTASection from "@/components/Home/CTASection";
import styles from "./page.module.css";
import { Quote } from "lucide-react";

export default function AboutPage() {
  return (
    <main className={styles.main}>
      <Navbar />

      {/* 1. Hero Section (Like Image 1) */}
      <section className={styles.heroSection}>
        <div 
          className={styles.heroImage} 
          style={{ backgroundImage: "url('/Hero-images/Hero1.png')" }}
        >
          <div className={styles.heroOverlay}>
            <div className={styles.container}>
              <div className={styles.heroContent}>
                <p className={styles.heroTagline}>PIONEERING PURE WATER SOLUTIONS</p>
                <h1 className={styles.heroTitle}>
                  In water purification,<br />
                  Mahizh RO Innovation is the master architect<br />
                </h1>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Dual Image + Text Section (Like Image 2) */}
      <section className={styles.dualSection}>
        <div className={styles.container}>
          <div className={styles.dualGrid}>
            
            {/* Left Column */}
            <div className={styles.dualLeft}>
              <div className={styles.dualTextLeft}>
                <h2>Diverse minds,</h2>
                <p className={styles.italicSubtext}>united mission.</p>
              </div>
              <div className={styles.dualImgLeftWrapper}>
                <img 
                  src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80" 
                  alt="Our Team" 
                  className={styles.dualImgLeft} 
                />
              </div>
            </div>

            {/* Right Column */}
            <div className={styles.dualRight}>
              <div className={styles.dualImgRightWrapper}>
                <img 
                  src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&w=800&q=80" 
                  alt="Engineering Excellence" 
                  className={styles.dualImgRight} 
                />
              </div>
              <div className={styles.dualTextRight}>
                <p>
                  We are a symphony of talent, composing cutting-edge RO plants and water treatment solutions. From design to installation, our collaborative approach ensures that every drop counts towards a more sustainable and pure tomorrow.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

    

      {/* 4. Vision & Mission (Like Image 3 - Center Image Layout) */}
      <section className={styles.visionSection}>
        <div className={styles.container}>
          <div className={styles.visionGrid}>
            
            <div className={styles.visionTopLeft}>
              <p className={styles.visionText}>
                Welcome to Mahizh RO Innovation, where passion meets proficiency in the heart of Theni, Tamil Nadu. Our vision is to be the undisputed gold standard for industrial water purification across South India.
              </p>
            </div>

            <div className={styles.visionCenterImgWrapper}>
              <img 
                src="/Hero-page/waterdrop.png" 
                alt="Water Drop Ideology" 
                className={styles.visionCenterImg} 
              />
            </div>

            <div className={styles.visionBottomRight}>
              <p className={styles.missionText}>
                We are more than just a purification supplier; we are a collective of relentless engineers, designers, & strategists on a mission to redefine water sustainability for modern industries and households alike.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* 5. Founder Section */}
      <section className={styles.founderSection}>
        <div className={styles.container}>
          <div className={styles.founderGrid}>
            
            <div className={styles.founderLeft}>
              <img 
                src="/Hero-images/Hero1.png" 
                alt="Founder" 
                className={styles.founderImg} 
              />
            </div>

            <div className={styles.founderRight}>
              <div className={styles.founderIntro}>
                <h2 className={styles.founderName}>Meet Our Founder</h2>
                <p className={styles.founderTitle}>Managing Director, Mahizh RO Innovation</p>
              </div>
              
              <div className={styles.quoteWrapper}>
                <Quote className={styles.quoteIcon} />
                <h3 className={styles.quoteText}>
                  "Pure water is not just a resource; it's the foundation of every successful industry and the heartbeat of every healthy home."
                </h3>
              </div>
              
              <div className={styles.founderDesc}>
                <p>
                  With over 18 years of deeply rooted experience in water treatment engineering, our founder established Mahizh RO Innovation to bridge the gap between high-end technology and affordable, reliable access to pure water. Driven by a continuous passion for quality and innovation, the company continues to scale new heights in serving clients ranging from domestic households to massive industrial complexes.
                </p>
              </div>
            </div>

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
