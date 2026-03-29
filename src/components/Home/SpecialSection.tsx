"use client";

import React from "react";
import { Wrench, Beaker, HelpCircle, PenTool, LayoutTemplate } from "lucide-react";
import styles from "./SpecialSection.module.css";

const specialties = [
  {
    id: 1,
    num: "01",
    title: "Annual Maintenance Contract",
    icon: Wrench,
    desc: "Scheduled visits, fast repairs, and year-round peace of mind — no surprise breakdowns, no chasing technicians.",
    pill: "AMC available",
  },
  {
    id: 2,
    num: "02",
    title: "Water Testing Services",
    icon: Beaker,
    desc: "Know exactly what's in your water. Lab-grade testing for TDS, pH, hardness, and harmful contaminants.",
    pill: "Report in 24 hrs",
  },
  {
    id: 3,
    num: "03",
    title: "Water Problem Consulting",
    icon: HelpCircle,
    desc: "Struggling with salty borewell water or industrial waste? We diagnose the root cause and recommend the right fix.",
    pill: "Free first consult",
  },
  {
    id: 4,
    num: "04",
    title: "Customized RO Plants",
    icon: PenTool,
    desc: "Not a one-size-fits-all product. We design RO systems around your capacity, space, and water quality — from 500 to 50,000 LPH.",
    pill: "500 – 50,000 LPH",
  },
  {
    id: 5,
    num: "05",
    title: "Plant Design During Construction",
    icon: LayoutTemplate,
    desc: "Plan your RO setup before the walls go up. Save space, cut costs, and avoid expensive retrofits later.",
    pill: "New builds only",
  },
];

export default function SpecialSection() {
  return (
    <section className={styles.section}>

      <div className={styles.tag}>
        {/* <span className={styles.tagDot} /> */}
        What sets us apart
      </div>

      <h2 className={styles.heading}>
        Services built for real-world water problems
      </h2>

      <p className={styles.subhead}>
        We go beyond selling equipment — we make sure your water works, every
        day, without the headache.
      </p>

      <div className={styles.grid}>
        {specialties.map((item) => (
          <div 
            key={item.id} 
            className={styles.card}
            onClick={() => {
              let intent = "Other";
              if (item.title.includes("Maintenance") || item.title.includes("AMC")) intent = "Annual Maintenance Contract";
              else if (item.title.includes("Testing")) intent = "Water Testing";
              else if (item.title.includes("Consulting")) intent = "Water Problem Consulting";
              else if (item.title.includes("Plant")) intent = "RO Plant";
              
              window.dispatchEvent(new CustomEvent("open-lead-modal", { detail: { intent } }));
            }}
            style={{ cursor: "pointer" }}
          >
            <div className={styles.cardTop}>
              <span className={styles.cardNum}>{item.num}</span>
              <div className={styles.iconWrap}>
                <item.icon className={styles.icon} />
              </div>
            </div>
            <p className={styles.cardTitle}>{item.title}</p>
            <p className={styles.cardDesc}>{item.desc}</p>
            <span className={styles.pill}>{item.pill}</span>
          </div>
        ))}
      </div>

    </section>
  );
}