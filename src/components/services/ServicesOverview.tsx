// components/services/ServicesOverview.tsx

import Link from "next/link";
import { SERVICE_CARDS } from "@/lib/services-data";
import styles from "./services.module.css";

export default function ServicesOverview() {
  return (
    <section className={styles.servicesOverview} id="services" aria-labelledby="services-heading">
      <div className={styles.sectionInner}>
        <p className={styles.sectionLabel}>What We Offer</p>
        <h2 className={styles.sectionTitle} id="services-heading">
          Complete RO &amp; Water Treatment Services
        </h2>
        <p className={styles.sectionDesc}>
          From home purifiers to industrial-grade RO plants, we cover the full
          spectrum of water treatment needs across Tamil Nadu.
        </p>

        <div className={styles.servicesGrid} role="list">
          {SERVICE_CARDS.map((svc) => (
            <Link
              key={svc.id}
              href={`/services/${svc.id}`}
              className={styles.serviceCard}
              role="listitem"
            >
              <div className={styles.serviceCardIcon} aria-hidden="true">
                {svc.icon}
              </div>
              <h3 className={styles.serviceCardTitle}>{svc.title}</h3>
              <p className={styles.serviceCardDesc}>{svc.description}</p>
              <span className={styles.serviceCardArrow}>{svc.cta} →</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
