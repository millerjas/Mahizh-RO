import styles from './ServiceTestimonials.module.css';
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

const REVIEWS_BY_SLUG: Record<string, typeof domesticReviews> = {
  "domestic-ro": [
    {
      id: 11,
      name: 'Karthik R.',
      location: 'Theni',
      review: 'Got a domestic RO installed for my home. The water tastes incredible now, and my family loves it. Professional and swift installation.',
      image: 'https://ui-avatars.com/api/?name=Karthik+R&background=0D8ABC&color=fff',
    },
    {
      id: 12,
      name: 'Pooja T.',
      location: 'Salem',
      review: 'Wide variety of brands to choose from. The technician explained everything patiently and handled the installation with care.',
      image: 'https://ui-avatars.com/api/?name=Pooja+T&background=E11D48&color=fff',
    },
    {
      id: 13,
      name: 'Venkatesh S.',
      location: 'Trichy',
      review: 'Their AMC plan for home RO units is a lifesaver. Filter replacements happen on time without me having to remind them.',
      image: 'https://ui-avatars.com/api/?name=Venkatesh+S&background=0284C7&color=fff',
    },
  ],
  "commercial-ro": [
    {
      id: 21,
      name: 'Dr. Anita',
      location: 'City Hospital, Theni',
      review: 'We rely on them for consistent pure water for our medical facility. Their 1000 LPH plant has zero downtime. Highly recommended.',
      image: 'https://ui-avatars.com/api/?name=Dr+Anita&background=7C3AED&color=fff',
    },
    {
      id: 22,
      name: 'Hotel Grand',
      location: 'Cumbum',
      review: 'We upgraded our hotel water system. The commercial RO handles peak capacity flawlessly. Excellent post-sales support as always.',
      image: 'https://ui-avatars.com/api/?name=Hotel+G&background=B45309&color=fff',
    },
    {
      id: 23,
      name: 'Murugan Textiles',
      location: 'Aandipatti',
      review: 'High capacity RO handles our industrial boiler needs effortlessly. The water quality parameters are always perfect.',
      image: 'https://ui-avatars.com/api/?name=Murugan+T&background=047857&color=fff',
    },
  ],
  "dispenser": [
    {
      id: 31,
      name: 'Arun M.',
      location: 'Chennai Tech Park',
      review: 'The stainless steel dispensers look premium and provide chillingly cold water even during hot summers in the office.',
      image: 'https://ui-avatars.com/api/?name=Arun+M&background=1D4ED8&color=fff',
    },
    {
      id: 32,
      name: 'St. Mary\'s School',
      location: 'Madurai',
      review: 'We installed 5 SS dispensers across our campus. Very unproblematic hardware, highly durable for rough student usage.',
      image: 'https://ui-avatars.com/api/?name=St+Mary&background=BE185D&color=fff',
    },
  ],
  "softener": [
    {
      id: 41,
      name: 'Ramesh K.',
      location: 'Bodi',
      review: 'We had severe hard water problems ruining our taps. Their water softener plant fixed it entirely within a day of installation.',
      image: 'https://ui-avatars.com/api/?name=Ramesh+K&background=4338CA&color=fff',
    },
    {
      id: 42,
      name: 'Green View Apartments',
      location: 'Coimbatore',
      review: 'The centralized iron remover plant was a wise investment. No more iron staining on tiles and laundry. Best decision ever.',
      image: 'https://ui-avatars.com/api/?name=Green+View&background=15803D&color=fff',
    },
  ],
  "chemicals": [
    {
      id: 51,
      name: 'Apex Industries',
      location: 'Tirupur',
      review: 'We source all our RO chemicals in bulk from Mahizh RO. Consistently high quality and they never miss a delivery date.',
      image: 'https://ui-avatars.com/api/?name=Apex+I&background=0F766E&color=fff',
    },
    {
      id: 52,
      name: 'Blue Wave Pool',
      location: 'Salem',
      review: 'Their swimming pool chemicals maintain our pool perfectly clear and hygienic year-round. Great pricing for regular orders!',
      image: 'https://ui-avatars.com/api/?name=Blue+Wave&background=0369A1&color=fff',
    },
  ]
};

export default function ServiceTestimonials({ currentSlug }: { currentSlug?: string }) {
  const reviews = currentSlug && REVIEWS_BY_SLUG[currentSlug] 
    ? REVIEWS_BY_SLUG[currentSlug] 
    : domesticReviews;

  return (
    <section className={styles.testimonialSection}>
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.label}>Real Feedback</span>
          <h2 className={styles.title}>What Our Clients Are Saying</h2>
        </div>

        <div className={styles.grid}>
          {reviews.map((r) => (
            <div key={r.id} className={styles.card}>
              <div className={styles.quoteIcon}>"</div>
              
              <div className={styles.rating}>
                <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
              </div>
              
              <p className={styles.review}>"{r.review}"</p>
              
              <div className={styles.author}>
                <img src={r.image} alt={r.name} className={styles.avatar} />
                <div className={styles.authorInfo}>
                  <div className={styles.name}>{r.name}</div>
                  <div className={styles.location}>{r.location}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
