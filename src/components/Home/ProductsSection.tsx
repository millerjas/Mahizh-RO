'use client';

import Link from 'next/link';
import { useRef } from 'react';
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';
import styles from './ProductsSection.module.css';

const products = [
  { id: 1, name: 'EcoPure Residential RO', desc: 'Compact design perfect for standard kitchen cabinets.', image: '/services/rofilter.png' },
  { id: 2, name: 'AquaPro Commercial 50 LPH', desc: 'Ideal for small offices and clinics.', image: '/services/rofilter.png' },
  { id: 3, name: 'Industrial Mega 2000 LPH', desc: 'High capacity automated plant for factories.', image: '/services/rofilter.png' },
  { id: 4, name: 'Smart Water Dispenser', desc: 'Hot, cold, and ambient water at your fingertips.', image: '/services/rofilter.png' },
  { id: 5, name: 'Whole House Softener', desc: 'Protect your plumbing and appliances from hard water.', image: '/services/rofilter.png' },
  { id: 6, name: 'UV Water Purifier', desc: 'Advanced UV treatment for microbial protection.', image: '/services/rofilter.png' },
];

export default function ProductsSection() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollTo = direction === 'left' ? scrollLeft - clientWidth : scrollLeft + clientWidth;
      scrollRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
    }
  };

  return (
    <section className={styles.productsSection}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>Featured Products</h2>
          <p className={styles.subtitle}>Discover our range of advanced water purification systems built for reliability.</p>
        </div>

        <div className={styles.carouselContainer}>
          <button className={`${styles.navBtn} ${styles.prevBtn}`} onClick={() => scroll('left')}>
            <ChevronLeft size={24} />
          </button>

          <div className={styles.scrollView} ref={scrollRef}>
            {products.map((product) => (
              <Link href="#" key={product.id} className={styles.card}>
                <div className={styles.imageWrapper}>
                  <img src={product.image} alt={product.name} className={styles.image} />
                </div>
                <div className={styles.content}>
                  <h3 className={styles.productName}>{product.name}</h3>
                  <p className={styles.productDesc}>{product.desc}</p>
                </div>
                <div className={styles.cardFooter}>
                  <span className={styles.learnMore}>Learn More</span>
                  <ArrowRight className={styles.arrowIcon} size={16} />
                </div>
              </Link>
            ))}
          </div>

          <button className={`${styles.navBtn} ${styles.nextBtn}`} onClick={() => scroll('right')}>
            <ChevronRight size={24} />
          </button>
        </div>
      </div>
    </section>
  );
}
