"use client";

import React, { useEffect, useRef, useState } from "react";
import styles from "./MidPageCTA.module.css";
import Link from "next/link";

const MidPageCTA: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      className={`${styles["mid-cta"]} ${visible ? styles["mid-cta--visible"] : ""}`}
      ref={sectionRef}
    >
      {/* Decorative background blobs */}
      <div className={`${styles["mid-cta__blob"]} ${styles["mid-cta__blob--1"]}`} aria-hidden="true" />
      <div className={`${styles["mid-cta__blob"]} ${styles["mid-cta__blob--2"]}`} aria-hidden="true" />

      {/* Diagonal stripe accent */}
      <div className={styles["mid-cta__stripe"]} aria-hidden="true" />

      <div className={styles["mid-cta__inner"]}>
        {/* Eyebrow label */}
        <span className={styles["mid-cta__eyebrow"]}>Premium RO Solutions</span>

        {/* Headline */}
        <h2 className={styles["mid-cta__headline"]}>
          Ready to experience<br />
          <em>pure water </em> for your business?
        </h2>

        {/* Supporting text */}
        <p className={styles["mid-cta__subtext"]}>
          Join over <strong>500+</strong> industries and commercial spaces already trusting Mahizh RO. 
          Get a customized water purification plant designed for your exact needs.
        </p>

        {/* CTA buttons */}
        <div className={styles["mid-cta__actions"]}>
          <Link href="/contact" className={`${styles["mid-cta__btn"]} ${styles["mid-cta__btn--primary"]}`}>
            <span>Get a Free Quote</span>
            <svg
              className={styles["mid-cta__btn-icon"]}
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4 10h12M10 4l6 6-6 6"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Link>
          <Link href="/services" className={`${styles["mid-cta__btn"]} ${styles["mid-cta__btn--ghost"]}`}>
            Explore Our Services
          </Link>
        </div>

        {/* Social proof strip */}
        <div className={styles["mid-cta__proof"]}>
          <div className={styles["mid-cta__avatars"]} aria-hidden="true">
            {["H", "S", "M", "C"].map((l, i) => (
              <span key={i} className={styles["mid-cta__avatar"]}>
                {l}
              </span>
            ))}
          </div>
          <p className={styles["mid-cta__proof-text"]}>
            Trusted by <strong>Hospitals, Schools, Mills</strong> & Corporate Offices
          </p>
        </div>
      </div>
    </section>
  );
};

export default MidPageCTA;