// components/services/WhyUs.tsx

import { WHY_US } from "@/lib/services-data";
import styles from "./services.module.css";

export default function WhyUs() {
  return (
    <section className={styles.whyUs} aria-labelledby="why-heading">
      <div className={styles.sectionInner}>
        <p className={`${styles.sectionLabel} ${styles.sectionLabelLight}`}>Why Choose Us</p>
        <h2 className={`${styles.sectionTitle} ${styles.sectionTitleLight}`} id="why-heading">
          The Trusted RO Partner Across Tamil Nadu
        </h2>
        <div className={styles.whyGrid}>
          {WHY_US.map((item) => (
            <div key={item.title} className={styles.whyCard}>
              <div className={styles.whyCardIcon} aria-hidden="true">
                {item.icon}
              </div>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
