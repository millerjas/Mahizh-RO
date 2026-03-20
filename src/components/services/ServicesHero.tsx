// components/services/ServicesHero.tsx

import Link from "next/link";
import styles from "./services.module.css";

export default function ServicesHero() {
  return (
    <header className={styles.hero}>
      <div className={styles.heroOverlay} />
      <div className={styles.heroInner}>
        <h1 className={styles.heroTitle}>
          Clean Water Solutions{" "}
          <span className={styles.heroTitleAccent}>for Every Need</span>
        </h1>

        <p className={styles.heroSubtitle}>
          Domestic &amp; commercial RO systems, spare parts, pressure pumps,
          solar heaters and more — sales, installation &amp; service across Tamil Nadu.
        </p>
      </div>
    </header>
  );
}