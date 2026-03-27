"use client";

import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { Observer } from "gsap/all";
import styles from "./Achievements.module.css";
import { Award, Users, CheckCircle, IndianRupee } from 'lucide-react';

const achievementsData = [
  {
    title: "18+ Years Experience",
    subtitle: "Since 2008",
    image: "/Hero-images/Hero3.png",
    Icon: Award
  },
  {
    title: "100+ Happy Customers",
    subtitle: "Trusted Partner",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80",
    Icon: Users
  },
  {
    title: "100% Quality Assurance",
    subtitle: "End-to-End Excellence",
    image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80",
    Icon: CheckCircle
  },
  {
    title: "Best ROI Pricing",
    subtitle: "Affordable Purifiers",
    image: "/Hero-images/Hero1.png",
    Icon: IndianRupee
  }
];

export default function Achievements() {
  const containerRef = useRef<HTMLDivElement>(null);
  const sectionsRef = useRef<(HTMLElement | null)[]>([]);
  const imagesRef = useRef<(HTMLDivElement | null)[]>([]);
  const outerWrappersRef = useRef<(HTMLDivElement | null)[]>([]);
  const innerWrappersRef = useRef<(HTMLDivElement | null)[]>([]);
  const textCharsRef = useRef<{ [key: number]: HTMLSpanElement[] }>({});

  useEffect(() => {
    gsap.registerPlugin(Observer);

    const sections = sectionsRef.current.filter(Boolean) as HTMLElement[];
    const images = imagesRef.current.filter(Boolean) as HTMLDivElement[];
    const outerWrappers = outerWrappersRef.current.filter(Boolean) as HTMLDivElement[];
    const innerWrappers = innerWrappersRef.current.filter(Boolean) as HTMLDivElement[];

    if (sections.length === 0) return;

    let currentIndex = -1;
    let animating = false;
    const wrap = gsap.utils.wrap(0, sections.length);

    gsap.set(outerWrappers, { yPercent: 100 });
    gsap.set(innerWrappers, { yPercent: -100 });

    const gotoSection = (index: number, direction: number) => {
      index = wrap(index);
      animating = true;
      let fromTop = direction === -1;
      let dFactor = fromTop ? -1 : 1;
      
      let tl = gsap.timeline({
        defaults: { duration: 1.25, ease: "power1.inOut" },
        onComplete: () => { animating = false; }
      });

      if (currentIndex >= 0) {
        gsap.set(sections[currentIndex], { zIndex: 0 });
        tl.to(images[currentIndex], { yPercent: -15 * dFactor })
          .set(sections[currentIndex], { autoAlpha: 0 });
      }

      gsap.set(sections[index], { autoAlpha: 1, zIndex: 1 });
      
      tl.fromTo([outerWrappers[index], innerWrappers[index]], { 
          yPercent: i => i ? -100 * dFactor : 100 * dFactor
        }, { 
          yPercent: 0 
        }, 0)
        .fromTo(images[index], { yPercent: 15 * dFactor }, { yPercent: 0 }, 0);

      // Animate the custom split text logic
      // Fallback if characters are registered correctly
      const currentChars = textCharsRef.current[index] || [];
      if (currentChars.length > 0) {
        tl.fromTo(currentChars, { 
            autoAlpha: 0, 
            yPercent: 150 * dFactor
        }, {
            autoAlpha: 1,
            yPercent: 0,
            duration: 1,
            ease: "power2",
            stagger: {
              each: 0.02,
              from: "random"
            }
        }, 0.2);
      }

      currentIndex = index;
    };

    const targetContainer = containerRef.current;
    
    // Smooth transition locking inside the container boundary
    const observer = Observer.create({
      target: targetContainer,
      type: "wheel,touch,pointer",
      wheelSpeed: -1,
      tolerance: 10,
      preventDefault: true,
      onDown: () => {
        if (!animating) {
          // Allow normal scroll if we hit the top boundary
          if (currentIndex === 0) {
             observer.disable();
             return;
          }
          gotoSection(currentIndex - 1, -1);
        }
      },
      onUp: () => {
        if (!animating) {
           // Allow normal scroll if we hit the bottom boundary
           if (currentIndex === sections.length - 1) {
              observer.disable();
              return;
           }
           gotoSection(currentIndex + 1, 1);
        }
      }
    });

    // Re-enable observer when mouse enters the section from outside
    const handleMouseEnter = () => observer.enable();
    targetContainer?.addEventListener("mouseenter", handleMouseEnter);
    
    // Initialize the very first slide
    gotoSection(0, 1);

    return () => {
      observer.kill();
      targetContainer?.removeEventListener("mouseenter", handleMouseEnter);
    };
  }, []);

  return (
    <div className={styles.wrapperNode}>
      <div className={styles.sectionHeader}>
        <h2>Our Achievements</h2>
        <p>A history of excellence and continuous innovation.</p>
        <span className={styles.helperText}>(Scroll inside to see more)</span>
      </div>
      
      <div className={styles.mainContainer} ref={containerRef}>
        {achievementsData.map((item, index) => {
          // Initialize chars array
          textCharsRef.current[index] = [];
          
          return (
            <div 
              key={index}
              ref={(el) => { sectionsRef.current[index] = el; }}
              className={styles.sectionSlide}
            >
              <div ref={(el) => { outerWrappersRef.current[index] = el; }} className={styles.outer}>
                <div ref={(el) => { innerWrappersRef.current[index] = el; }} className={styles.inner}>
                  <div 
                    ref={(el) => { imagesRef.current[index] = el; }} 
                    className={styles.bg}
                    style={{ backgroundImage: `linear-gradient(180deg, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0.4) 100%), url(${item.image})` }}
                  >
                    <div className={styles.contentOverlay}>
                      <item.Icon className={styles.iconStyle} />
                      <p className={styles.subtitle}>{item.subtitle}</p>
                      
                      <h2 className={styles.sectionHeading}>
                        {/* Custom Split Text logic mapping words and chars */}
                        {item.title.split(" ").map((word, wIdx) => (
                          <span key={wIdx} className={styles.wordBlock}>
                            {word.split("").map((char, cIdx) => (
                              <span 
                                key={cIdx} 
                                ref={(el) => { if(el) textCharsRef.current[index].push(el); }}
                                className={styles.charBlock}
                              >
                                {char}
                              </span>
                            ))}
                          </span>
                        ))}
                      </h2>
                      
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
