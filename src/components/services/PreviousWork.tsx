import Image from "next/image";
import styles from "./services.module.css";

const DEMO_WORKS = [
  {
    id: 1,
    title: "Commercial RO Installation",
    image: "https://images.unsplash.com/photo-1558222218-b7b54eede3f3?q=80&w=600&h=400&fit=crop",
  },
  {
    id: 2,
    title: "Domestic Purifier Setup",
    image: "https://images.unsplash.com/photo-1581092921461-eab62e97a780?q=80&w=600&h=400&fit=crop",
  },
  {
    id: 3,
    title: "Water Softener Plant",
    image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=600&h=400&fit=crop",
  },
];

export default function PreviousWork() {
  return (
    <section className={styles.servicesOverview} style={{ background: "#f8fafc", paddingTop: "4rem", paddingBottom: "4rem" }}>
      <div className={styles.sectionInner}>
        <p className={styles.sectionLabel}>Our Track Record</p>
        <h2 className={styles.sectionTitle}>
          Previous Work & Installations
        </h2>
        <p className={styles.sectionDesc}>
          Take a look at some of our recent installations and service projects across Tamil Nadu.
        </p>

        <div className={styles.galleryGrid}>
          {DEMO_WORKS.map((work) => (
            <div key={work.id} className={styles.galleryItem}>
              <Image
                src={work.image}
                alt={work.title}
                fill
                sizes="(max-width: 768px) 100vw, 400px"
                className={styles.galleryImageObj}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
