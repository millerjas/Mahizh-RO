import styles from './Testimonials.module.css';

const domesticReviews = [
  {
    id: 1,
    name: 'Thampi Ananthan',
    location: 'Theni',
    review: 'I run a snacks business, so clean water is very important for us. Their RO service in Theni has been very reliable. The installation was smooth, and the water quality is consistently good. Happy with their support team as well.',
    image: '/profile.png'
  },
  {
    id: 2,
    name: 'Ramesh',
    location: 'Salem',
    review: 'Though I am from Salem, I arranged RO service for my house in Theni. The team handled everything professionally and explained the maintenance clearly. Water taste has improved a lot after installation.',
    image: '/profile.png'
  },
  {
    id: 3,
    name: 'Vilangiyan',
    location: 'Rajakumari, Kerala',
    review: 'I recently shifted near Theni and needed a good water purifier. Their RO service was recommended by a friend. The service was on time, and the staff were very polite. Overall a good experience.',
    image: '/profile.png'
  },
  {
    id: 4,
    name: 'Lalitha',
    location: 'Lespet, Pondicherry',
    review: 'We installed the RO system for our Theni residence. The team was very patient and explained how to use and maintain it. The water is clean and safe now, which gives peace of mind.',
    image: '/profile.png'
  },
  {
    id: 5,
    name: 'Rajesh',
    location: 'Chennai',
    review: 'I needed a dependable RO solution for my unit in Theni. Their service was efficient and cost-effective. The installation was completed without delay, and the water quality meets our expectations.',
    image: '/profile.png'
  },
  {
    id: 6,
    name: 'Anonymous',
    location: 'Vilupuram',
    review: 'Booked their RO service for my family home in Theni. The technician arrived on time and did a neat job. The water tastes much better now, and the service process was hassle-free.',
    image: '/profile.png'
  }
];

const commercialReviews = [
  {
    id: 7,
    name: 'Bharat Nikethan Engineering College',
    location: 'Aandipatti, Theni',
    review: 'We installed a commercial RO system for our campus needs. The water quality has been excellent for both students and staff. Their maintenance service is prompt and dependable.',
    image: '/profile.png'
  },
  {
    id: 8,
    name: 'Theni Kammavar Engineering College',
    location: 'Koduvilarpatti, Theni',
    review: 'Managing water supply for a large campus is challenging, but their RO solution made it easy. The system runs smoothly, and their support team responds quickly whenever needed.',
    image: '/profile.png'
  },
  {
    id: 9,
    name: 'SMC Groups',
    location: 'Pollachi',
    review: 'We use their commercial RO plant for our manufacturing unit. The system is efficient and handles continuous usage without any issues. Very satisfied with their service quality.',
    image: '/profile.png'
  },
  {
    id: 10,
    name: 'Theni Agricultural College',
    location: 'Periyakulam',
    review: 'Clean and safe water is essential for our institution. Their RO system delivers consistent quality, and the installation was done professionally. Good experience overall.',
    image: '/profile.png'
  },
  {
    id: 11,
    name: 'AIBAIK Arabian Restaurant',
    location: 'Theni',
    review: 'Water quality directly impacts our food standards. After installing their RO system, we noticed a clear improvement. Service and maintenance have been reliable so far.',
    image: '/profile.png'
  },
  {
    id: 12,
    name: 'RA Family Foods',
    location: 'Kodaikanal',
    review: 'We needed a dependable RO solution for our food business. Their system works efficiently even during peak hours. The team provided good support during setup and after.',
    image: '/profile.png'
  },
  {
    id: 13,
    name: 'Anna Co-Operating Spinning Mill',
    location: 'Kamuthi',
    review: 'The commercial RO plant meets our industrial water requirements perfectly. It runs continuously without downtime, and their service team ensures everything stays in top condition.',
    image: '/profile.png'
  },
  {
    id: 14,
    name: 'Taj Hotel',
    location: 'Poombarai',
    review: 'Guest satisfaction is our priority, and clean water is a part of that. Their RO system delivers consistent results, and the installation process was smooth and professional.',
    image: '/profile.png'
  },
  {
    id: 15,
    name: 'Ansari',
    location: 'Kozhikode, Kerala',
    review: 'I arranged a commercial RO setup for my business near Theni. The team handled everything efficiently, and the water quality has been very good. Overall, a trustworthy service provider.',
    image: '/profile.png'
  }
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
