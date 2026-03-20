"use client";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import ServiceCard from "@/components/ui/ServiceCard";
import CTASection from "@/components/sections/CTASection";
import Bar from "@/components/marquee/page";
import styles from "./page.module.css";
import {
  Droplet,
  Settings,
  ShieldCheck,
  TestTube,
  Factory,
  Hotel,
  Hospital,
  FlaskConical,
  Warehouse,
  CheckCircle2,
  Users
} from "lucide-react";

const services = [
  {
    title: "Commercial RO Plant Installation",
    description: "Expert installation of high-capacity RO systems tailored to your business scale.",
    benefits: ["Precision Engineering", "On-site Integration", "High-Flow Design"],
    icon: Settings,
    href: "/services"
  },
  {
    title: "Industrial Water Purification",
    description: "Lager-scale systems for food & beverage, textile, and manufacturing units.",
    benefits: ["99.9% Purity", "Energy Efficient", "Massive Capacity"],
    icon: Factory,
    href: "/services"
  },
  {
    title: "RO Plant Maintenance & Service",
    description: "Keep your systems running at peak performance with our scheduled maintenance plans.",
    benefits: ["Regular Audits", "Genuine Spares", "Expert Technicians"],
    icon: ShieldCheck,
    href: "/services"
  }
];

const industries = [
  { name: "Food & Beverage", icon: Warehouse, color: "bg-blue-500" },
  { name: "Hotels & Resorts", icon: Hotel, color: "bg-green-500" },
  { name: "Hospitals", icon: Hospital, color: "bg-red-500" },
  { name: "Pharmaceuticals", icon: FlaskConical, color: "bg-purple-500" },
  { name: "Manufacturing", icon: Factory, color: "bg-orange-500" },
];

const testimonials = [
  {
    quote: "The RO plant installed by Mahizh Innovation has significantly reduced our water costs while ensuring top-tier purity for our beverage production.",
    author: "Ramesh Kumar",
    position: "Operations Manager, Theni Beverages"
  },
  {
    quote: "Professional service and prompt maintenance. Our hospital relies on their systems for uninterrupted clean water supply.",
    author: "Dr. Anitha S.",
    position: "Director, City Hospital"
  }
];

export default function Home() {
  return (
    <main>
      {/* <Bar /> */}
      <Navbar />
      <Hero />

      {/* Intro Section */}
      <section className={styles.sectionBgWhite}>
        <div className={styles.container}>
          <div className={styles.introContainer}>
            <div className={styles.introLeft}>
              <div className={styles.badge}>
                About Mahizh Innovation
              </div>
              <h2 className={styles.h2}>
                Pioneering Clean Water <br /><span>Solutions in Theni</span>
              </h2>
              <p className={styles.description}>
                Mahizh RO Innovation provides high-capacity commercial RO plants designed for companies that require large-scale water purification. Our systems are energy-efficient, cost-effective, and provide high-quality filtered water for diverse industries.
              </p>
              <div className={styles.list}>
                {[
                  "Specialized in Industrial scaled RO Systems",
                  "Energy Efficient & Cost Effective Designs",
                  "Turnkey Solutions from Design to Maintenance",
                  "Local Support and Rapid Response in Theni"
                ].map((item, i) => (
                  <div key={i} className={styles.listItem}>
                    <CheckCircle2 className={styles.listIcon} />
                    <span className={styles.listText}>{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className={styles.introRight}>
              <div className={styles.statsGrid}>
                <div className={styles.statCardSur}>
                  <Droplet className={styles.statIconPri} />
                  <div className={styles.statValue}>99%</div>
                  <div className={styles.statLabelSur}>Purity Level</div>
                </div>
                <div className={styles.statCardPri}>
                  <Users className={styles.statIconWh} />
                  <div className={styles.statValue}>50+</div>
                  <div className={styles.statLabelPri}>Global Clients</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Highlight */}
      <section className={styles.sectionBgSurface}>
        <div className={styles.container}>
          <div className={styles.centerHeader}>
            <h2 className={styles.centerH2}>Our Core Solutions</h2>
            <p className={styles.centerSubtitle}>
              Custom-engineered RO water purification systems for any industrial requirement.
            </p>
          </div>
          <div className={styles.servicesGrid}>
            {services.map((service, i) => (
              <ServiceCard key={i} {...service} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Industries Served */}
      <section className={`${styles.sectionBgWhite} ${styles.overflowHidden}`}>
        <div className={styles.container}>
          <div className={styles.indHeaderFlex}>
            <div className={styles.indMaxW}>
              <h2 className={styles.indH2}>Industries We Empower</h2>
              <p className={styles.indSubtitle}>
                Our RO purification systems are tailored to meet the stringent water quality standards of various sectors.
              </p>
            </div>
          </div>
          <div className={styles.indGrid}>
            {industries.map((industry, i) => (
              <div key={i} className={styles.indGroup}>
                <div className={styles.indCard}>
                  <industry.icon className={styles.indIcon} />
                  <h3 className={styles.indName}>{industry.name}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className={`${styles.sectionBgSurface} ${styles.testBorderTopBottom}`}>
        <div className={styles.container}>
          <div className={styles.testGrid}>
            <div>
              <h2 className={styles.testH2}>What Our Partners Say</h2>
              <p className={styles.testP}>Join dozens of successful businesses in Theni trusting our water solutions.</p>
              <div className={styles.avatars}>
                {[1, 2, 3, 4].map(i => (
                  <div key={i} className={styles.avatar} />
                ))}
              </div>
              <div className={styles.trustText}>Trusted by 50+ local industries</div>
            </div>
            <div className={styles.testCardsGrid}>
              {testimonials.map((t, i) => (
                <div key={i} className={styles.testCard}>
                  <p className={styles.testQuote}>"{t.quote}"</p>
                  <div className={styles.testAuthor}>{t.author}</div>
                  <div className={styles.testPos}>{t.position}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CTASection
        title="Ready to Pure Your Water Supply?"
        subtitle="Contact Mahizh RO Innovation today for an energy-efficient industrial RO plant in Theni."
      />

      <Footer />
    </main>
  );
}
