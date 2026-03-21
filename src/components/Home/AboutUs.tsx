import { CheckCircle2 } from 'lucide-react';
import styles from './AboutUs.module.css';

export default function AboutUs() {
  return (
    <section className={styles.aboutSection}>
      <div className={styles.container}>
        <div className={styles.grid}>
          <div className={styles.contentCol}>
            <div className={styles.badge}>About Mahizh Innovation</div>
            <h2 className={styles.title}>
              Pioneering Clean Water <br />
              <span className={styles.highlight}>Solutions in Theni</span>
            </h2>
            <p className={styles.description}>
              Mahizh RO Innovation provides high-quality water purification systems for both domestic and commercial needs. With years of expertise, we deliver tailored solutions that ensure purity, performance, and peace of mind.
            </p>
            <div className={styles.list}>
              {[
                'Expertise in Custom RO Plants',
                'Dedicated Maintenance & AMC',
                'Comprehensive Water Testing',
                'Trusted by 100+ Customers'
              ].map((item, i) => (
                <div key={i} className={styles.listItem}>
                  <CheckCircle2 className={styles.listIcon} />
                  <span className={styles.listText}>{item}</span>
                </div>
              ))}
            </div>
          </div>
          <div className={styles.imageCol}>
            <div className={styles.imageWrapper}>
              {/* Dummy Image for Branding/Logo/About */}
              <img
                src="/services/company.png"
                alt="About Mahizh RO Innovation"
                className={styles.image}
              />
              <div className={styles.experienceBadge}>
                <span className={styles.expNumber}>18+</span>
                <span className={styles.expText}>Years of Experience</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
