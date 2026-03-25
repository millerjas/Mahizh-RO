"use client";

import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { Wrench, Beaker, HelpCircle, PenTool, LayoutTemplate } from 'lucide-react';
import styles from './SpecialSection.module.css';

const specialties = [
  { id: 1, title: 'Annual Maintenance Contract (AMC)', icon: Wrench, desc: 'Hassle-free servicing year-round.', image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80' },
  { id: 2, title: 'Water Testing Services', icon: Beaker, desc: 'Professional laboratory grade tests.', image: 'https://images.unsplash.com/photo-1542314831-c6a4d14efffa?auto=format&fit=crop&q=80' },
  { id: 3, title: 'Water Problem Consulting', icon: HelpCircle, desc: 'Expert advice for complex water issues.', image: 'https://images.unsplash.com/photo-1519821877475-71329188d1d8?auto=format&fit=crop&q=80' },
  { id: 4, title: 'Customized RO Plants', icon: PenTool, desc: 'Tailored precisely to your capacity needs.', image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80' },
  { id: 5, title: 'Plant Design During Construction', icon: LayoutTemplate, desc: 'Integrate RO systems seamlessly into new builds.', image: 'https://images.unsplash.com/photo-1504917595474-304654fc71aa?auto=format&fit=crop&q=80' }
];

export default function SpecialSection() {
  const pinSectionRef = useRef<HTMLElement>(null);
  const listRef = useRef<HTMLUListElement>(null);
  const fillRef = useRef<HTMLDivElement>(null);
  const rightContainerRef = useRef<HTMLDivElement>(null);

  const listItemsRef = useRef<(HTMLLIElement | null)[]>([]);
  const slidesRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const pinSection = pinSectionRef.current;
    const fill = fillRef.current;
    const listItems = listItemsRef.current.filter(Boolean) as HTMLLIElement[];
    const slides = slidesRef.current.filter(Boolean) as HTMLDivElement[];

    if (!pinSection || listItems.length === 0 || slides.length === 0) return;

    let ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: pinSection,
          start: "center center", // Pin when section is strictly centered in viewport
          end: `+=${listItems.length * 60}%`, // Scroll distance mapped to scrub length
          pin: true,
          scrub: true,
        }
      });

      // Initialize the fill marker height based on number of items
      if (fill) {
        gsap.set(fill, {
          scaleY: 1 / listItems.length,
          transformOrigin: "top left"
        });
      }

      listItems.forEach((item, i) => {
        const previousItem = listItems[i - 1];

        if (previousItem) {
          // Transition when moving down the list
          tl.set(item, { color: "var(--color-primary, #1e40af)" }, 0.5 * i)
            .to(slides[i], {
              autoAlpha: 1,
              duration: 0.2
            }, "<")
            .set(previousItem, { color: "var(--color-muted, #9ca3af)" }, "<")
            .to(slides[i - 1], {
              autoAlpha: 0,
              duration: 0.2
            }, "<");
        } else {
          // Initial state for the very first item
          gsap.set(item, { color: "var(--color-primary, #1e40af)" });
          gsap.set(slides[i], { autoAlpha: 1 });
        }
      });

      // Animate the fill marker scaling downwards
      if (fill) {
        tl.to(fill, {
          scaleY: 1,
          transformOrigin: "top left",
          ease: "none",
          duration: tl.duration()
        }, 0)
        .to({}, {}); // Add a small trailing pause
      }
    }, pinSectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className={styles.pinSectionWrapper} ref={pinSectionRef}>
      <div className={styles.headerArea}>
        <span className={styles.eyebrow}>What Sets Us Apart</span>
        <h2 className={styles.title}>Our Special Offerings</h2>
        <p className={styles.subtitle}>
          Beyond standard products, we provide premium services to ensure your water systems perform optimally.
        </p>
      </div>

      <div className={styles.lateralContent}>
        
        {/* Left Side: Lateral List */}
        <div className={styles.leftList}>
          <div className={styles.fillTrack}>
            <div className={styles.fillBar} ref={fillRef}></div>
          </div>
          <ul className={styles.optionList} ref={listRef}>
            {specialties.map((item, index) => (
              <li 
                key={item.id} 
                ref={(el) => { listItemsRef.current[index] = el; }}
                className={styles.optionItem}
              >
                {item.title}
              </li>
            ))}
          </ul>
        </div>

        {/* Right Side: Crossfading Slides */}
        <div className={styles.rightContent} ref={rightContainerRef}>
          {specialties.map((item, index) => (
            <div 
              key={item.id} 
              ref={(el) => { slidesRef.current[index] = el; }}
              className={styles.slideCard}
            >
              <div 
                className={styles.cardImage} 
                style={{ backgroundImage: `url(${item.image})` }}
              />
              <div className={styles.cardContent}>
                <div className={styles.iconWrapper}>
                  <item.icon className={styles.icon} />
                </div>
                <h3 className={styles.cardTitle}>{item.title}</h3>
                <p className={styles.cardDesc}>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}