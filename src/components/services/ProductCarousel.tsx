"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./carousel.module.css";

interface Product {
  name: string;
  image?: string;
  description?: string;
}

export default function ProductCarousel({
  title,
  items,
}: {
  title: string;
  items: Product[];
}) {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  return (
    <div className={styles.carouselContainer}>
      <h3 className={styles.carouselTitle}>{title}</h3>

      <div className={styles.carouselTrack}>
        {items.map((item, idx) => (
          <button
            key={idx}
            className={styles.carouselCard}
            onClick={() => setSelectedProduct(item)}
            aria-label={`View details for ${item.name}`}
          >
            <div className={styles.cardImageHolder}>
              {item.image ? (
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  className={styles.cardImg}
                />
              ) : (
                <span className={styles.imagePlaceholder}>✨</span>
              )}
            </div>
            <div className={styles.cardContent}>
              <span className={styles.cardName}>{item.name}</span>
              <span className={styles.cardAction}>View Details →</span>
            </div>
          </button>
        ))}
      </div>

      {/* FLOATING WINDOW (MODAL) */}
      {selectedProduct && (
        <div className={styles.modalOverlay} onClick={() => setSelectedProduct(null)}>
          <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
            <button className={styles.modalClose} onClick={() => setSelectedProduct(null)}>
              ✕
            </button>
            <div className={styles.modalHeader}>
              <div className={styles.modalImageHolder}>
                {selectedProduct.image ? (
                   <Image
                     src={selectedProduct.image}
                     alt={selectedProduct.name}
                     fill
                     style={{ objectFit: 'contain' }}
                   />
                ) : (
                  <span className={styles.imagePlaceholderLarge}>🛡️</span>
                )}
              </div>
              <h3 className={styles.modalTitle}>{selectedProduct.name}</h3>
              {selectedProduct.description && (
                <p className={styles.modalDesc}>{selectedProduct.description}</p>
              )}
            </div>
            <div className={styles.modalActions}>
              <Link href="/contact" className={styles.btnPrimary}>
                Enquire Now
              </Link>
              <a 
                href={`https://wa.me/91XXXXXXXXXX?text=Hi,%20I%20am%20interested%20in%20${encodeURIComponent(selectedProduct.name)}.`} 
                target="_blank" 
                rel="noopener noreferrer" 
                className={styles.btnWhatsapp}
              >
                WhatsApp Us
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
