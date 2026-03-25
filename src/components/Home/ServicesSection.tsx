'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import {
  Droplet, Settings, Droplets, ArrowUpCircle,
  Sun, FlaskConical, Wrench, ShieldCheck,
  X, Phone, ArrowRight
} from 'lucide-react';
import styles from './ServicesSection.module.css';

const services = [
  {
    id: 1, slug: 'domestic-ro', title: 'Domestic RO', icon: Droplet,
    image: '/services/domestic-ro.png',
    short: 'Compact and efficient purifiers for home use.',
    detail: 'Our domestic RO systems deliver hospital-grade purified water right at your kitchen tap. Designed for Tamil Nadu\'s varying water quality — from borewells to corporation supply. Includes pre-filter, carbon block, RO membrane, and UV stage.',
    highlights: ['5-stage purification', 'TDS controller included', '1-year free service'],
  },
  {
    id: 2, slug: 'commercial-ro', title: 'Commercial RO', icon: Settings,
    image: '/services/commercial-ro.png',
    short: 'High-yield systems for offices, schools, and hospitals.',
    detail: 'Built for continuous, high-demand environments. Our commercial systems handle 50–2000 LPH with automated flushing and real-time TDS monitoring. Suitable for restaurants, schools, and medical facilities.',
    highlights: ['50–2000 LPH capacity', 'Auto-flush system', 'AMC plans available'],
  },
  {
    id: 3, slug: 'dispenser', title: 'Dispenser Plant', icon: Droplets,
    image: '/services/dispenser.png',
    short: 'Integrated cooling and heating water dispensers.',
    detail: 'All-in-one units with hot, cold, and ambient water output. Ideal for offices and clinics that need instant access without separate boilers or coolers. Available in floor-standing and countertop models.',
    highlights: ['Hot, cold & ambient', 'Floor & countertop models', 'Easy filter replacement'],
  },
  {
    id: 4, slug: 'softener', title: 'Softener & Iron Remover', icon: FlaskConical,
    image: '/services/iron-softner.png',
    short: 'Advanced multimedia plants for hard water treatment.',
    detail: 'Protects your plumbing, appliances, and skin from hard water damage. Our multimedia filters remove iron, manganese, and excess TDS effectively. Fully automated with timer-based backwash.',
    highlights: ['Removes iron & manganese', 'Auto backwash timer', 'Protects appliances'],
  },
  {
    id: 5, slug: 'pumps', title: 'Pressure Pumps', icon: ArrowUpCircle,
    image: '/services/pressure-pump.png',
    short: 'Maintain optimal water pressure across all outlets.',
    detail: 'Low pressure kills RO efficiency. We supply and install booster pumps calibrated for your building\'s inlet pressure and daily water demand. Available in 24V DC and AC variants.',
    highlights: ['24V DC & AC variants', 'Silent operation', 'Pressure-adjustable'],
  },
  {
    id: 6, slug: 'solar', title: 'Solar Water Heater', icon: Sun,
    image: '/services/solar-water-heater.png',
    short: 'Eco-friendly hot water solutions for all seasons.',
    detail: 'Reduce electricity bills by up to 80% with our ETC and FPC solar heater installations. Backed by government subsidy assistance and a 5-year warranty on the collector panel.',
    highlights: ['Up to 80% bill reduction', 'Govt. subsidy eligible', '5-year panel warranty'],
  },
  {
    id: 7, slug: 'chemicals', title: 'Chemicals', icon: ShieldCheck,
    image: '/services/chemicals.png',
    short: 'Premium grade treatment chemicals for plant maintenance.',
    detail: 'Antiscalants, membrane cleaners, and pH correction chemicals sourced from certified manufacturers. Available for one-time supply or bundled into your AMC contract.',
    highlights: ['Certified manufacturers', 'Antiscalants & cleaners', 'Bulk supply available'],
  },
  {
    id: 8, slug: 'spares', title: 'RO All Spares', icon: Wrench,
    image: '/services/spares.png',
    short: 'Genuine spare parts for all makes and models.',
    detail: 'Membranes, housings, filters, solenoid valves, SMPS units — we stock genuine spares for all major brands with same-day delivery across our service area in Tamil Nadu.',
    highlights: ['All major brands', 'Same-day delivery', 'Genuine parts only'],
  },
];

type Service = typeof services[0];

export default function ServicesSection() {
  const [selected, setSelected] = useState<Service | null>(null);

  useEffect(() => {
    if (selected) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [selected]);

  return (
    <section className={styles.section}>
      <div className={styles.container}>

        <div className={styles.layout}>

          {/* LEFT — cards grid */}
          <div className={styles.gridWrap}>
            <div className={styles.gridHeader}>
              <p className={styles.label}>What We Offer</p>
              <h2 className={styles.title}>Complete Water Treatment Solutions</h2>
              <p className={styles.subtitle}>
                From home purifiers to industrial plants — every service you need, under one roof.
              </p>
            </div>

            <div className={styles.grid}>
              {services.map((svc) => (
                <button
                  key={svc.id}
                  className={styles.card}
                  onClick={() => setSelected(svc)}
                >
                  <div className={styles.cardImageWrap}>
                    <img src={svc.image} alt={svc.title} className={styles.cardImage} />
                    <div className={styles.cardOverlay} />
                    <div className={styles.cardIconBadge}>
                      <svc.icon size={14} />
                    </div>
                  </div>
                  <div className={styles.cardBody}>
                    <span className={styles.cardTitle}>{svc.title}</span>
                    <span className={styles.cardShort}>{svc.short}</span>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* RIGHT — about panel */}
          <div className={styles.aboutPanel}>
            <div className={styles.aboutImageWrap}>
              <img src="/services/about-image.png" alt="About us" className={styles.aboutImage} />
              <div className={styles.aboutOverlay} />
            </div>
            <div className={styles.aboutBody}>
              <p className={styles.aboutEyebrow}>Who We Are</p>
              <h3 className={styles.aboutTitle}>Trusted Water Treatment Experts Since 2005</h3>
              <p className={styles.aboutText}>
                Based in Tamil Nadu, we've spent two decades solving water problems for homes,
                offices, factories, and institutions. Every system is designed, installed, and
                maintained by our own certified engineers — no outsourcing, ever.
              </p>
              <Link href="/about" className={styles.aboutCta}>
                Our story <ArrowRight size={13} />
              </Link>
            </div>
          </div>

        </div>
      </div>

      {/* MODAL */}
      {selected && (
        <div className={styles.backdrop} onClick={() => setSelected(null)}>
          <div className={styles.modal} onClick={(e) => e.stopPropagation()}>

            <button className={styles.closeBtn} onClick={() => setSelected(null)} aria-label="Close">
              <X size={18} />
            </button>

            <div className={styles.modalImageWrap}>
              <img src={selected.image} alt={selected.title} className={styles.modalImage} />
              <div className={styles.modalImageOverlay} />
              <div className={styles.modalImageLabel}>
                <selected.icon size={16} />
                <span>{selected.title}</span>
              </div>
            </div>

            <div className={styles.modalBody}>
              <h3 className={styles.modalTitle}>{selected.title}</h3>
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
                <Link href={`/services/${selected.slug}`} className={styles.btnSecondary}>
                  Learn More <ArrowRight size={14} />
                </Link>
              </div>
            </div>

          </div>
        </div>
      )}
    </section>
  );
}