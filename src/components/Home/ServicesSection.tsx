'use client';

import Link from 'next/link';
import { useRef } from 'react';
import { Droplet, Settings, Droplets, ArrowUpCircle, Sun, FlaskConical, Wrench, ShieldCheck, ChevronLeft, ChevronRight } from 'lucide-react';
import styles from './ServicesSection.module.css';

const services = [
  { id: 1, title: 'Domestic RO', desc: 'Compact and efficient purifiers for home use.', icon: Droplet, image: '/services/service1.png' },
  { id: 2, title: 'Commercial RO', desc: 'High-yield systems for offices, schools, and hospitals.', icon: Settings, image: '/services/service1.png' },
  { id: 3, title: 'Dispenser Plant', desc: 'Integrated cooling and heating water dispensers.', icon: Droplets, image: '/services/service1.png' },
  { id: 4, title: 'Softener & Iron Remover', desc: 'Advanced multimedia plants for hard water treatment.', icon: FlaskConical, image: '/services/service1.png' },
  { id: 5, title: 'Pressure Pumps', desc: 'Maintain optimal water pressure across all outlets.', icon: ArrowUpCircle, image: '/services/service1.png' },
  { id: 6, title: 'Solar Water Heater', desc: 'Eco-friendly hot water solutions for all seasons.', icon: Sun, image: '/services/service1.png' },
  { id: 7, title: 'Chemicals', desc: 'Premium grade treatment chemicals for plant maintenance.', icon: ShieldCheck, image: '/services/service1.png' },
  { id: 8, title: 'RO All Spares', desc: 'Genuine spare parts for reliable operation.', icon: Wrench, image: '/services/service1.png' },
];

export default function ServicesSection() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollTo = direction === 'left' ? scrollLeft - clientWidth : scrollLeft + clientWidth;
      scrollRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
    }
  };

  return (
    <section className={styles.servicesSection}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>Our Services</h2>
          <p className={styles.subtitle}>Comprehensive water treatment solutions tailored to your specific requirements.</p>
        </div>
        
        <div className={styles.carouselContainer}>
          <button className={`${styles.navBtn} ${styles.prevBtn}`} onClick={() => scroll('left')} aria-label="Scroll left">
            <ChevronLeft size={24} />
          </button>
          
          <div className={styles.scrollView} ref={scrollRef}>
            {services.map((service) => (
              <Link href="#" key={service.id} className={styles.card}>
                <div className={styles.imageWrapper}>
                  <img src={service.image} alt={service.title} className={styles.image} />
                  <div className={styles.iconWrapper}>
                    <service.icon className={styles.icon} />
                  </div>
                </div>
                <div className={styles.content}>
                  <h3 className={styles.cardTitle}>{service.title}</h3>
                  <p className={styles.cardDesc}>{service.desc}</p>
                </div>
              </Link>
            ))}
          </div>
          
          <button className={`${styles.navBtn} ${styles.nextBtn}`} onClick={() => scroll('right')} aria-label="Scroll right">
            <ChevronRight size={24} />
          </button>
        </div>
      </div>
    </section>
  );
}
