'use client';

import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './HeroSlider.module.css';

const slides = [
  {
    id: 1,
    image: '/Hero-images/Hero1.png',
    title: 'Industrial RO Plants',
    subtitle: 'High-capacity purification for your business needs.'
  },
  {
    id: 2,
    image: '/Hero-images/Hero2.png',
    title: 'Commercial Water Solutions',
    subtitle: 'Reliable, pure water for hotels, hospitals, and schools.'
  },
  {
    id: 3,
    image: '/Hero-images/Hero3.png',
    title: 'Domestic RO Systems',
    subtitle: 'Safe drinking water for your family.'
  }
];

export default function HeroSlider() {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  const prevSlide = () => setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className={styles.heroSection}>
      <div className={styles.sliderContainer}>
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
            className={styles.slide}
            style={{ backgroundImage: `url(${slides[current].image})` }}
          >
            <div className={styles.overlay}>
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.8 }}
                className={styles.content}
              >
                <h1 className={styles.title}>{slides[current].title}</h1>
                <p className={styles.subtitle}>{slides[current].subtitle}</p>
              </motion.div>
            </div>
          </motion.div>
        </AnimatePresence>

        <button className={`${styles.navBtn} ${styles.prevBtn}`} onClick={prevSlide} aria-label="Previous slide">
          <ChevronLeft size={32} />
        </button>
        <button className={`${styles.navBtn} ${styles.nextBtn}`} onClick={nextSlide} aria-label="Next slide">
          <ChevronRight size={32} />
        </button>

        <div className={styles.dots}>
          {slides.map((_, index) => (
            <button
              key={index}
              className={`${styles.dot} ${index === current ? styles.activeDot : ''}`}
              onClick={() => setCurrent(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
