import { Wrench, Beaker, HelpCircle, PenTool, LayoutTemplate } from 'lucide-react';
import styles from './SpecialSection.module.css';
 
const specialties = [
  { id: 1, title: 'Annual Maintenance Contract (AMC)', icon: Wrench, desc: 'Hassle-free servicing year-round.' },
  { id: 2, title: 'Water Testing Services', icon: Beaker, desc: 'Professional laboratory grade tests.' },
  { id: 3, title: 'Water Problem Consulting', icon: HelpCircle, desc: 'Expert advice for complex water issues.' },
  { id: 4, title: 'Customized RO Plants', icon: PenTool, desc: 'Tailored precisely to your capacity needs.' },
  { id: 5, title: 'Plant Design During Construction', icon: LayoutTemplate, desc: 'Integrate RO systems seamlessly into new builds.' },
];
 
export default function SpecialSection() {
  return (
    <section className={styles.specialSection}>
      <div className={styles.container}>
 
        {/* Left: Text */}
        <div className={styles.textSide}>
          <span className={styles.eyebrow}>What Sets Us Apart</span>
          <h2 className={styles.title}>Our Special Offerings</h2>
          <p className={styles.subtitle}>
            Beyond standard products, we provide premium services to ensure your water systems perform optimally.
          </p>
          <div className={styles.divider} />
          <p className={styles.supporting}>
            From ongoing maintenance contracts to full plant design during construction, our team is equipped to handle every stage of your water treatment journey.
          </p>
        </div>
 
        {/* Right: Cards stacked vertically */}
        <div className={styles.cardList}>
          {specialties.map((item) => (
            <div key={item.id} className={styles.card}>
              <div className={styles.iconWrapper}>
                <item.icon className={styles.icon} />
              </div>
              <div>
                <h3 className={styles.cardTitle}>{item.title}</h3>
                <p className={styles.cardDesc}>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
 
      </div>
    </section>
  );
}