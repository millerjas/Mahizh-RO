import styles from './Testimonials.module.css';

const domesticReviews = [
  { id: 1, name: 'Karthik R.', location: 'Theni', review: 'Installed a domestic RO at my home. The water tastes great and the service was very prompt.', image: 'https://ui-avatars.com/api/?name=Karthik+R&background=random' },
  { id: 2, name: 'Priya M.', location: 'Periyakulam', review: 'Very reliable water purifier. The team is very professional during maintenance visits.', image: 'https://ui-avatars.com/api/?name=Priya+M&background=random' },
  { id: 3, name: 'Ramesh K.', location: 'Bodi', review: 'Affordable and excellent quality. They explained everything clearly before installation.', image: 'https://ui-avatars.com/api/?name=Ramesh+K&background=random' },
];

const commercialReviews = [
  { id: 4, name: 'Suresh Kumar', location: 'Hotel Grand, Cumbum', review: 'Our commercial plant has been running flawlessly. Mahizh RO provides excellent after-sales support.', image: 'https://ui-avatars.com/api/?name=Suresh+Kumar&background=random' },
  { id: 5, name: 'Dr. Anita', location: 'City Hospital, Theni', review: 'We rely on them for consistent pure water for our medical facility. Highly recommended.', image: 'https://ui-avatars.com/api/?name=Dr+Anita&background=random' },
  { id: 6, name: 'Murugan Textiles', location: 'Aandipatti', review: 'High capacity RO handles our industrial needs effortlessly. Zero downtime so far.', image: 'https://ui-avatars.com/api/?name=Murugan+T&background=random' },
];

export default function Testimonials() {
  return (
    <section className={styles.testSection}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>What Our Customers Say</h2>
          <p className={styles.subtitle}>Trusted by households and businesses across the region.</p>
        </div>
        
        <div className={styles.categoryGrid}>
          {/* Domestic Reviews */}
          <div className={styles.categoryCol}>
            <h3 className={styles.categoryTitle}>Domestic Feedback</h3>
            <div className={styles.scrollWrapper}>
              <div className={`${styles.scrollTrack} ${styles.scrollSlow}`}>
                {/* Double the array for seamless looping */}
                {[...domesticReviews, ...domesticReviews].map((r, i) => (
                  <div key={`dom-${i}`} className={styles.card}>
                    <p className={styles.review}>"{r.review}"</p>
                    <div className={styles.authorRow}>
                      <img src={r.image} alt={r.name} className={styles.avatar} />
                      <div>
                        <div className={styles.name}>{r.name}</div>
                        <div className={styles.location}>{r.location}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Commercial Reviews */}
          <div className={styles.categoryCol}>
            <h3 className={styles.categoryTitle}>Commercial Feedback</h3>
            <div className={styles.scrollWrapper}>
              <div className={`${styles.scrollTrack} ${styles.scrollFast}`}>
                {/* Double the array for seamless looping */}
                {[...commercialReviews, ...commercialReviews].map((r, i) => (
                  <div key={`com-${i}`} className={styles.card}>
                    <p className={styles.review}>"{r.review}"</p>
                    <div className={styles.authorRow}>
                      <img src={r.image} alt={r.name} className={styles.avatar} />
                      <div>
                        <div className={styles.name}>{r.name}</div>
                        <div className={styles.location}>{r.location}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
