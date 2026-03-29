'use client';

import Link from 'next/link';
import { useRef } from 'react';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
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
      const cardWidth = 280 + 16; // card width + gap
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -cardWidth : cardWidth,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section className={styles.productsSection}>
      <div className={styles.container}>

        <div className={styles.layout}>

          {/* LEFT — sticky info panel */}
          <div className={styles.leftPanel}>
            {/* <p className={styles.sectionLabel}>Our Products</p> */}
            <h2 className={styles.title}>Water Purification Systems</h2>
            <p className={styles.subtitle}>
              From compact home purifiers to large-scale industrial plants — every
              product is built for Tamil Nadu's water conditions and long-term reliability.
            </p>
            {/* <Link href="/products" className={styles.allProductsLink}>
              View all products <ArrowRight size={15} />
            </Link> */}

            <div className={styles.leftImage}>
              <img
                src="/services/rofilter.png"
                alt="Water purification system"
                className={styles.panelImg}
              />
            </div>
          </div>

          {/* RIGHT — horizontal carousel */}
          <div className={styles.rightPanel}>
            <div className={styles.carouselHeader}>
              {/* <span className={styles.carouselCount}>{products.length} products</span> */}
              <div className={styles.navBtns}>
                <button className={styles.navBtn} onClick={() => scroll('left')} aria-label="Previous">
                  <ChevronLeft size={18} />
                </button>
                <button className={styles.navBtn} onClick={() => scroll('right')} aria-label="Next">
                  <ChevronRight size={18} />
                </button>
              </div>
            </div>

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
                    <ArrowRight className={styles.arrowIcon} size={15} />
                  </div>
                </Link>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}