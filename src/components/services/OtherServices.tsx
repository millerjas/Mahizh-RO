import Link from "next/link";
import Image from "next/image";
import { SERVICE_CARDS } from "@/lib/services-data";
import styles from "./services.module.css";

export default function OtherServices({ currentSlug }: { currentSlug: string }) {
  // Exclude current service and take up to 3 random/other services
  const otherServices = SERVICE_CARDS
    .filter((svc) => svc.id !== currentSlug)
    .slice(0, 3);

  return (
    <section className={styles.servicesOverview} >
      <div className={styles.sectionInner}>
        <h2 className={styles.sectionTitle}>
          Explore Other Services
        </h2>
        <p className={styles.sectionDesc}>
          We provide a complete spectrum of water treatment solutions. Check out what else we offer.
        </p>

        <div className={styles.servicesGrid} role="list">
          {otherServices.map((svc) => (
            <Link
              key={svc.id}
              href={`/services/${svc.id}`}
              className={styles.serviceCard}
              role="listitem"
            >
              <div className={styles.serviceCardImage}>
                <Image
                  src={svc.image}
                  alt={svc.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 360px"
                  className={styles.serviceCardImg}
                />
              </div>

              <div className={styles.serviceCardBody}>
                <h3 className={styles.serviceCardTitle}>{svc.title}</h3>
                <p className={styles.serviceCardDesc}>{svc.description}</p>
                <span className={styles.serviceCardArrow}>{svc.cta} →</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
