"use client";
// components/services/FAQ.tsx
// Marked as client component because it uses useState for accordion.

import { useState } from "react";
import { FAQS } from "@/lib/services-data";
import styles from "./services.module.css";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (i: number) => setOpenIndex(openIndex === i ? null : i);

  return (
    <section className={styles.faqSection} id="faq" aria-labelledby="faq-heading">
      <div className={styles.sectionInner}>
        <p className={styles.sectionLabel}>Common Questions</p>
        <h2 className={styles.sectionTitle} id="faq-heading">
          Frequently Asked Questions
        </h2>
        <p className={styles.sectionDesc}>
          Quick answers to what customers across Tamil Nadu ask us most.
        </p>

        <div className={styles.faqList} role="list">
          {FAQS.map((faq, i) => (
            <div
              key={i}
              className={`${styles.faqItem} ${openIndex === i ? styles.faqItemOpen : ""}`}
              role="listitem"
            >
              <button
                className={styles.faqQ}
                aria-expanded={openIndex === i}
                onClick={() => toggle(i)}
              >
                {faq.q}
                <span className={styles.faqChevron} aria-hidden="true">▼</span>
              </button>
              {openIndex === i && (
                <div className={styles.faqA} role="region">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
