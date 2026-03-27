"use client";

import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { Wrench, Beaker, HelpCircle, PenTool, LayoutTemplate } from 'lucide-react';
import styles from './SpecialSection.module.css';

const specialties = [
  { id: 1, title: 'Annual Maintenance Contract (AMC)', icon: Wrench, desc: 'Hassle-free year-round servicing for your RO systems — scheduled visits, priority support, and zero downtime worries.', image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80' },
  { id: 2, title: 'Water Testing Services', icon: Beaker, desc: 'Professional laboratory-grade tests that give you a precise breakdown of TDS, pH, hardness, and contaminants.', image: 'https://images.unsplash.com/photo-1542314831-c6a4d14efffa?auto=format&fit=crop&q=80' },
  { id: 3, title: 'Water Problem Consulting', icon: HelpCircle, desc: 'Expert advice tailored to complex water quality challenges — from borewell TDS issues to industrial treatment needs.', image: 'https://images.unsplash.com/photo-1519821877475-71329188d1d8?auto=format&fit=crop&q=80' },
  { id: 4, title: 'Customized RO Plants', icon: PenTool, desc: 'Designed precisely to your capacity, space, and water quality needs — from 500 LPH to multi-thousand LPH systems.', image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80' },
  { id: 5, title: 'Plant Design During Construction', icon: LayoutTemplate, desc: 'Integrate RO infrastructure seamlessly into your building plans — saving cost and ensuring optimal placement.', image: 'https://images.unsplash.com/photo-1504917595474-304654fc71aa?auto=format&fit=crop&q=80' }
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
          start: "center center",
          end: `+=${listItems.length * 60}%`,
          pin: true,
          scrub: true,
        }
      });

      if (fill) {
        gsap.set(fill, { scaleY: 1 / listItems.length, transformOrigin: "top left" });
      }

      listItems.forEach((item, i) => {
        const previousItem = listItems[i - 1];
        if (previousItem) {
          tl.set(item, { color: "var(--color-primary, #1565c0)" }, 0.5 * i)
            .to(slides[i], { autoAlpha: 1, duration: 0.2 }, "<")
            .set(previousItem, { color: "var(--color-muted, #94a3b8)" }, "<")
            .to(slides[i - 1], { autoAlpha: 0, duration: 0.2 }, "<");
        } else {
          gsap.set(item, { color: "var(--color-primary, #1565c0)" });
          gsap.set(slides[i], { autoAlpha: 1 });
        }
      });

      if (fill) {
        tl.to(fill, {
          scaleY: 1,
          transformOrigin: "top left",
          ease: "none",
          duration: tl.duration()
        }, 0).to({}, {});
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
          Beyond standard products, we provide premium services to ensure
          your water systems perform at their best.
        </p>
      </div>

      <div className={styles.lateralContent}>

        {/* Left: scrolling list with fill bar */}
        <div className={styles.leftList}>
          <div className={styles.fillTrack}>
            <div className={styles.fillBar} ref={fillRef} />
          </div>
          <ul className={styles.optionList} ref={listRef}>
            {specialties.map((item, index) => (
              <li
                key={item.id}
                ref={(el) => { listItemsRef.current[index] = el; }}
                className={styles.optionItem}
              >
                <span className={styles.optionIconWrap}>
                  <item.icon className={styles.optionIcon} />
                </span>
                <span className={styles.optionLabel}>{item.title}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Right: crossfading cards */}
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
              >
                <div className={styles.imageBadge}>
                  <item.icon className={styles.badgeIcon} />
                </div>
              </div>
              <div className={styles.cardContent}>
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