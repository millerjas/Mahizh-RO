import { Award, Users, CheckCircle, IndianRupee } from 'lucide-react';
import styles from './Achievements.module.css';

export default function Achievements() {
  return (
    <section className={styles.achievementsBg}>
      <div className={styles.container}>
        <div className={styles.grid}>
          <div className={styles.item}>
            <Award className={styles.icon} />
            <h3 className={styles.value}>Since 2008</h3>
            <p className={styles.label}>18+ Years Experience</p>
          </div>
          <div className={styles.item}>
            <Users className={styles.icon} />
            <h3 className={styles.value}>100+</h3>
            <p className={styles.label}>Happy Customers</p>
          </div>
          <div className={styles.item}>
            <CheckCircle className={styles.icon} />
            <h3 className={styles.value}>100%</h3>
            <p className={styles.label}>Quality & Innovation</p>
          </div>
          <div className={styles.item}>
            <IndianRupee className={styles.icon} />
            <h3 className={styles.value}>Best ROI</h3>
            <p className={styles.label}>Affordable Pricing</p>
          </div>
        </div>
      </div>
    </section>
  );
}
