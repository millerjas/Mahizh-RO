'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import styles from './HeroSlider.module.css';

const slides = [
  {
    id: 1,
    image: '/Hero-page/Hero-1.png',
    eyebrow: 'For Your Home',
    title: 'Domestic RO\nSystems',
    subtitle: "Safe, purified drinking water for every family — engineered for Tamil Nadu's water conditions.",
    cta: 'Explore Products',
    href: '/services/domestic-ro',
  },
  {
    id: 2,
    image: '/Hero-page/Hero-2.png',
    eyebrow: 'For Your Business',
    title: 'Commercial\nRO Systems',
    subtitle: 'Reliable high-yield purification for hotels, hospitals, schools, and offices.',
    cta: 'View Solutions',
    href: '/services/commercial-ro',
  },
  {
    id: 3,
    image: '/Hero-page/Hero-3.png',
    eyebrow: 'At Industrial Scale',
    title: 'Industrial\nRO Plants',
    subtitle: 'High-capacity systems built for continuous operation — zero compromise on quality.',
    cta: 'Get a Quote',
    href: '/contact',
  },
];

export default function HeroSlider() {
  const [current, setCurrent] = useState(0);
  const [prev, setPrev] = useState<number | null>(null);
  const [isAnimating, setIsAnimating] = useState(false);
  const [progress, setProgress] = useState(0);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const progressRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const DURATION = 6000;

  const goTo = useCallback(
    (index: number) => {
      if (isAnimating || index === current) return;
      setIsAnimating(true);
      setPrev(current);
      setCurrent(index);
      setProgress(0);
      setTimeout(() => {
        setPrev(null);
        setIsAnimating(false);
      }, 1000);
    },
    [current, isAnimating]
  );

  const next = useCallback(() => goTo((current + 1) % slides.length), [current, goTo]);
  const prevSlide = useCallback(
    () => goTo((current - 1 + slides.length) % slides.length),
    [current, goTo]
  );

  const startTimer = useCallback(() => {
    if (timerRef.current) clearInterval(timerRef.current);
    if (progressRef.current) clearInterval(progressRef.current);
    setProgress(0);
    timerRef.current = setInterval(next, DURATION);
    progressRef.current = setInterval(() => {
      setProgress((p) => Math.min(p + 100 / (DURATION / 50), 100));
    }, 50);
  }, [next]);

  useEffect(() => {
    startTimer();
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
      if (progressRef.current) clearInterval(progressRef.current);
    };
  }, [startTimer]);

  const handleNav = (fn: () => void) => {
    fn();
    startTimer();
  };

  return (
    <section className={styles.hero}>
      {/* ── Background layers — all preloaded, crossfade via opacity ── */}
      <div className={styles.bgStack}>
        {slides.map((slide, i) => (
          <div
            key={slide.id}
            className={[
              styles.bgLayer,
              i === current ? styles.bgActive : '',
              i === prev ? styles.bgPrev : '',
            ].join(' ')}
            style={{ backgroundImage: `url(${slide.image})` }}
          />
        ))}
        <div className={styles.gradientOverlay} />
        <div className={styles.vignette} />
      </div>

      {/* ── Slide content layers ── */}
      <div className={styles.contentStack}>
        {slides.map((slide, i) => (
          <div
            key={slide.id}
            className={[
              styles.slideContent,
              i === current ? styles.contentActive : '',
              i === prev ? styles.contentPrev : '',
            ].join(' ')}
            aria-hidden={i !== current}
          >
            <p className={styles.eyebrow}>
              <span className={styles.eyebrowLine} />
              {slide.eyebrow}
            </p>
            <h1 className={styles.title}>
              {slide.title.split('\n').map((line, j) => (
                <span key={j} className={styles.titleLine}>
                  {line}
                </span>
              ))}
            </h1>
            <p className={styles.subtitle}>{slide.subtitle}</p>
            <a href={slide.href} className={styles.cta}>
              {slide.cta}
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden>
                <path
                  d="M3 8h10M9 4l4 4-4 4"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
          </div>
        ))}
      </div>

      {/* ── Control bar ── */}
      <div className={styles.controlBar}>
        {/* Dots with progress */}
        <div className={styles.dotsWrap}>
          {slides.map((_, i) => (
            <button
              key={i}
              className={[styles.dot, i === current ? styles.dotActive : ''].join(' ')}
              onClick={() => handleNav(() => goTo(i))}
              aria-label={`Go to slide ${i + 1}`}
            >
              <span
                className={styles.dotFill}
                style={{ transform: i === current ? `scaleX(${progress / 100})` : i < current ? 'scaleX(1)' : 'scaleX(0)' }}
              />
            </button>
          ))}
        </div>

        {/* Counter */}
        <div className={styles.counter}>
          <span className={styles.counterCurrent}>{String(current + 1).padStart(2, '0')}</span>
          <span className={styles.counterSep} />
          <span className={styles.counterTotal}>{String(slides.length).padStart(2, '0')}</span>
        </div>

        {/* Arrows */}
        <div className={styles.arrows}>
          <button className={styles.arrowBtn} onClick={() => handleNav(prevSlide)} aria-label="Previous slide">
            <ChevronLeft size={20} />
          </button>
          <button className={styles.arrowBtn} onClick={() => handleNav(next)} aria-label="Next slide">
            <ChevronRight size={20} />
          </button>
        </div>
      </div>
    </section>
  );
}