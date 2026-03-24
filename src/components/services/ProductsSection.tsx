'use client';

import Link from 'next/link';
import { useRef, useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { ChevronLeft, ChevronRight, ArrowRight, X, Phone, Droplet } from 'lucide-react';
import styles from './ProductsSection.module.css';

type Product = {
  id: number;
  name: string;
  desc: string;
  image: string;
  slug: string;
  detail: string;
  highlights: string[];
  icon: React.ComponentType<{ size?: number }>;
};

const products: Product[] = [
  {
    id: 1, slug: 'eco-pure-residential',
    name: 'EcoPure Residential RO',
    desc: 'Compact design perfect for standard kitchen cabinets.',
    image: '/services/rofilter.png',
    icon: Droplet,
    detail: 'The EcoPure Residential RO delivers clean, safe drinking water with a 5-stage purification process. Designed to fit under any standard kitchen cabinet, it handles TDS up to 2000 ppm and includes a built-in TDS controller.',
    highlights: ['5-stage purification', 'TDS controller included', 'Compact under-sink fit'],
  },
  {
    id: 2, slug: 'aqua-pro-commercial',
    name: 'AquaPro Commercial 50 LPH',
    desc: 'Ideal for small offices and clinics.',
    image: '/services/rofilter.png',
    icon: Droplet,
    detail: 'Engineered for continuous demand in small commercial spaces. Auto-flush system extends membrane life and real-time TDS display ensures output quality at all times.',
    highlights: ['50 LPH output', 'Auto-flush system', 'Real-time TDS display'],
  },
  {
    id: 3, slug: 'industrial-mega',
    name: 'Industrial Mega 2000 LPH',
    desc: 'High capacity automated plant for factories.',
    image: '/services/rofilter.png',
    icon: Droplet,
    detail: 'Built for heavy industrial demand — fully automated with PLC control, high-pressure pumps, and multi-stage membrane arrays. Suitable for pharmaceutical, textile, and food processing plants.',
    highlights: ['2000 LPH capacity', 'PLC automation', 'Multi-stage membranes'],
  },
  {
    id: 4, slug: 'smart-dispenser',
    name: 'Smart Water Dispenser',
    desc: 'Hot, cold, and ambient water at your fingertips.',
    image: '/services/rofilter.png',
    icon: Droplet,
    detail: 'All-in-one floor-standing dispenser with instant hot, cold, and ambient output. Child safety lock on hot tap, easy top-load or bottom-load bottle design, and energy-saving sleep mode.',
    highlights: ['Hot, cold & ambient', 'Child safety lock', 'Energy-saving mode'],
  },
  {
    id: 5, slug: 'whole-house-softener',
    name: 'Whole House Softener',
    desc: 'Protect your plumbing and appliances from hard water.',
    image: '/services/rofilter.png',
    icon: Droplet,
    detail: 'Whole-house ion exchange softener removes calcium and magnesium to prevent scale buildup in pipes, water heaters, and appliances. Automatic regeneration with adjustable timer.',
    highlights: ['Ion exchange technology', 'Auto regeneration', 'Protects all appliances'],
  },
  {
    id: 6, slug: 'uv-purifier',
    name: 'UV Water Purifier',
    desc: 'Advanced UV treatment for microbial protection.',
    image: '/services/rofilter.png',
    icon: Droplet,
    detail: 'High-intensity UV lamp destroys 99.99% of bacteria, viruses, and cysts without adding chemicals. LED UV indicator alerts when the lamp needs replacement.',
    highlights: ['99.99% microbial kill', 'No chemicals added', 'UV lamp alert indicator'],
  },
];

export default function ProductsSection() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [selected, setSelected] = useState<Product | null>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollTo = direction === 'left' ? scrollLeft - clientWidth : scrollLeft + clientWidth;
      scrollRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
    }
  };

  useEffect(() => {
    document.body.style.overflow = selected ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [selected]);

  return (
    <section className={styles.productsSection}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>Featured Products</h2>
          <p className={styles.subtitle}>
            Discover our range of advanced water purification systems built for reliability.
          </p>
        </div>

        <div className={styles.carouselContainer}>
          <button className={`${styles.navBtn} ${styles.prevBtn}`} onClick={() => scroll('left')}>
            <ChevronLeft size={24} />
          </button>

          <div className={styles.scrollView} ref={scrollRef}>
            {products.map((product) => (
              <button
                key={product.id}
                className={styles.card}
                onClick={() => setSelected(product)}
              >
                <div className={styles.imageWrapper}>
                  <img src={product.image} alt={product.name} className={styles.image} />
                  <div className={styles.imageOverlay} />
                </div>
                <div className={styles.content}>
                  <h3 className={styles.productName}>{product.name}</h3>
                  <p className={styles.productDesc}>{product.desc}</p>
                </div>
                <div className={styles.cardFooter}>
                  <span className={styles.learnMore}>View Details</span>
                  <ArrowRight className={styles.arrowIcon} size={16} />
                </div>
              </button>
            ))}
          </div>

          <button className={`${styles.navBtn} ${styles.nextBtn}`} onClick={() => scroll('right')}>
            <ChevronRight size={24} />
          </button>
        </div>
      </div>

      {/* MODAL — portalled to <body> so z-index is never trapped */}
      {selected && createPortal(
        <div className={styles.backdrop} onClick={() => setSelected(null)}>
          <div className={styles.modal} onClick={(e) => e.stopPropagation()}>

            <button
              className={styles.closeBtn}
              onClick={() => setSelected(null)}
              aria-label="Close"
            >
              <X size={18} />
            </button>

            <div className={styles.modalImageWrap}>
              <img
                src={selected.image}
                alt={selected.name}
                className={styles.modalImage}
              />
              <div className={styles.modalImageOverlay} />
              <div className={styles.modalImageLabel}>
                <selected.icon size={16} />
                <span>{selected.name}</span>
              </div>
            </div>

            <div className={styles.modalBody}>
              <h3 className={styles.modalTitle}>{selected.name}</h3>
              <p className={styles.modalDetail}>{selected.detail}</p>

              <ul className={styles.highlights}>
                {selected.highlights.map((h) => (
                  <li key={h} className={styles.highlight}>
                    <span className={styles.highlightDot} />
                    {h}
                  </li>
                ))}
              </ul>

              <div className={styles.modalActions}>
                <a href="tel:+919999999999" className={styles.btnPrimary}>
                  <Phone size={15} />
                  Call Us Now
                </a>
                <Link
                  href={`/services/${selected.slug}`}
                  className={styles.btnSecondary}
                  onClick={() => setSelected(null)}
                >
                  Learn More <ArrowRight size={14} />
                </Link>
              </div>
            </div>

          </div>
        </div>,
        document.body
      )}
    </section>
  );
}