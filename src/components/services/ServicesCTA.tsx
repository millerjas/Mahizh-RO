// components/services/ServicesCTA.tsx

import { SITE } from "@/lib/services-data";
import styles from "./services.module.css";

export default function ServicesCTA() {
  return (
    <section className={styles.cta} id="contact" aria-labelledby="contact-heading">
      <div className={styles.ctaInner}>
        <h2 id="contact-heading">Ready for Clean Water? Let&apos;s Talk.</h2>
        <p>
          Sales, installation, service, and spare parts — we cover it all across
          Tamil Nadu. Reach out now for a free consultation or quote.
        </p>
        <div className={styles.ctaActions}>
          <a href={`tel:${SITE.phoneRaw}`} className={`${styles.btn} ${styles.btnWhite}`}>
            📞 {SITE.phone}
          </a>
          <a
            href={`https://wa.me/${SITE.whatsapp}`}
            className={`${styles.btn} ${styles.btnGhost}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            💬 WhatsApp Us
          </a>
        </div>
        <p className={styles.ctaCities}>
          Serving {SITE.cities.join(" · ")} &amp; more across Tamil Nadu
        </p>
      </div>
    </section>
  );
}
