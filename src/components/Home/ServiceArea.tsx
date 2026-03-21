import { MapPin } from 'lucide-react';
import styles from './ServiceArea.module.css';

export default function ServiceArea() {
  const regions = ['Tamil Nadu', 'Kerala', 'Pondicherry'];
  const cities = ['Theni', 'Aandipatti', 'Cumbum', 'Bodi', 'Chinnamanur', 'Periyakulam', 'Palayam'];

  return (
    <section className={styles.areaSection}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>Service Areas</h2>
          <p className={styles.subtitle}>Bringing pure water solutions to your doorstep.</p>
        </div>
        
        <div className={styles.layoutGrid}>
          {/* Left: Text Content */}
          <div className={styles.textContent}>
            <div className={styles.card}>
              <h3 className={styles.cardTitle}>State Coverage</h3>
              <ul className={styles.list}>
                {regions.map((region) => (
                  <li key={region} className={styles.listItem}>
                    <MapPin className={styles.icon} />
                    <span>{region}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className={styles.card}>
              <h3 className={styles.cardTitle}>Local Availability</h3>
              <div className={styles.citiesGrid}>
                {cities.map((city) => (
                  <div key={city} className={styles.cityBadge}>
                    {city}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Map Integration Placeholder */}
          <div className={styles.mapContent}>
            <div className={styles.mapWrapper}>
              {/* Dummy Map Visual Placeholder */}
              <div className={styles.mapHighlight}>
                <div className={styles.mapOverlay} />
                <div className={styles.mapPin1}>
                  <MapPin size={32} className={styles.pinIcon} />
                </div>
                <div className={styles.mapPin2}>
                  <MapPin size={24} className={styles.pinIconAlt} />
                </div>
                <div className={styles.mapPin3}>
                  <MapPin size={28} className={styles.pinIconAlt} />
                </div>
                <div className={styles.mapTextCentered}>
                  <p>Interactive Map Region</p>
                  <span>(Tamil Nadu Coverage)</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
