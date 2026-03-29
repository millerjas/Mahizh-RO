import React from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./services.module.css";
import { ServiceDetailConfig } from "@/lib/services-data";
import ProductCarousel from "./ProductCarousel";

export default function ServiceDetailTemplate({ data, headerImage }: { data: ServiceDetailConfig, headerImage?: string }) {
  const { tag, heading, paragraphs, visual, reverse } = data;

  return (
    <section 
      className={`${styles.detailSection} ${reverse ? styles.detailSectionAlt : ""}`}
      id={data.id}
    >
      <div className={styles.sectionInner}>
        <div className={`${styles.detailGrid} ${reverse ? styles.detailGridReverse : ""}`}>
          
          {/* MAIN CONTENT COLUMN */}
          <div className={styles.detailContent}>
            <span className={styles.detailTag}>{tag}</span>
            <h2>{heading}</h2>
            
            {paragraphs.map((p, idx) => (
              <p key={idx}>{p}</p>
            ))}

            {/* FEATURES LIST */}
            {data.featuresList && (
              <ul className={styles.featureList}>
                {data.featuresList.map((feature, idx) => (
                  <li key={idx}>{feature}</li>
                ))}
              </ul>
            )}

            {/* FEATURES TABLE */}
            {data.featuresTable && (
              <table className={styles.capacityTable}>
                <thead>
                  <tr>
                    {data.featuresTable.headers.map((h, i) => (
                      <th key={i}>{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {data.featuresTable.rows.map((row, i) => (
                    <tr key={i}>
                      {row.map((cell, j) => (
                        <td key={j}>
                          {j === 0 ? <strong>{cell}</strong> : cell}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            )}


            {/* GRID LIST (for Spares/Chemicals) */}
            {data.gridList && (
              <ul className={styles.sparesList}>
                {data.gridList.map((item, idx) => (
                  <li key={idx} className={styles.spareItem}>
                    {item}
                  </li>
                ))}
              </ul>
            )}

            {/* CALL TO ACTION BUTTON */}
            <Link href="/contact" className={`${styles.btn} ${styles.btnPrimary} ${styles.mt4}`} style={{ marginTop: '1.5rem' }}>
              Enquire Now
            </Link>
          </div>

          {/* VISUAL COLUMN (Right side usually, Left on reverse) */}
          {headerImage ? (
            <div className={styles.detailVisualImageWrapper}>
              <Image 
                src={headerImage} 
                alt={heading} 
                fill 
                className={styles.detailImageObj} 
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          ) : (
            <div
              className={styles.detailVisual}
              style={{ background: visual.gradient }}
              aria-hidden="true"
            >
              <span className={styles.detailVisualIcon}>{visual.icon}</span>
              <span className={styles.detailVisualLabel}>{visual.label}</span>
              <span className={styles.detailVisualSub}>{visual.sub}</span>
            </div>
          )}
        </div>

        {/* FULL WIDTH SCROLLABLE CAROUSEL SECTION */}
        {data.productCarousel && (
          <div className={styles.fullWidthCarouselWrapper} style={{ marginTop: '3rem' }}>
            <ProductCarousel 
              title={data.productCarousel.title} 
              items={data.productCarousel.items} 
            />
          </div>
        )}

        {/* RECENT WORK GALLERY SECTION */}
        {data.recentWorkImages && data.recentWorkImages.length > 0 && (
          <div className={styles.recentWorkGallery}>
            <h3 className={styles.galleryTitle}>Recent Projects & Installations</h3>
            <div className={styles.galleryGrid}>
              {data.recentWorkImages.map((imgSrc, idx) => (
                <div key={idx} className={styles.galleryItem}>
                  <Image 
                    src={imgSrc} 
                    alt={`Recent ${heading} Work ${idx + 1}`} 
                    fill 
                    className={styles.galleryImageObj} 
                    sizes="(max-width: 480px) 100vw, (max-width: 768px) 50vw, 33vw"
                  />
                </div>
              ))}
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
