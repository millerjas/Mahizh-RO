// components/services/ServiceDetails.tsx
// All 8 detailed service sections.
// Each section has its own id for anchor linking and SEO crawlability.

import Link from "next/link";
import styles from "./services.module.css";
import {
  DOMESTIC_BRANDS,
  COMMERCIAL_CAPACITIES,
  CHEMICALS,
  SPARE_PARTS,
} from "@/lib/services-data";


// ── Reusable visual placeholder (replace with <Image /> when you have photos) ──
function DetailVisual({
  icon,
  label,
  sub,
  gradient,
}: {
  icon: string;
  label: string;
  sub: string;
  gradient: string;
}) {
  return (
    <div
      className={styles.detailVisual}
      style={{ background: gradient }}
      aria-hidden="true"
    >
      <span className={styles.detailVisualIcon}>{icon}</span>
      <span className={styles.detailVisualLabel}>{label}</span>
      <span className={styles.detailVisualSub}>{sub}</span>
    </div>
  );
}

// ── 1. Domestic RO ──────────────────────────────────────────────────────────
export function DomesticRO() {
  return (
    <section
      className={styles.detailSection}
      id="domestic-ro"
      aria-labelledby="domestic-ro-heading"
    >
      <div className={styles.sectionInner}>
        <div className={styles.detailGrid}>
          <div className={styles.detailContent}>
            <span className={styles.detailTag}>Home &amp; Residential</span>
            <h2 id="domestic-ro-heading">Domestic RO Water Purifiers</h2>
            <p>
              We supply, install and service a wide range of domestic RO water
              purifiers across Tamil Nadu. Whether you need a basic filter or a
              multi-stage purification system, we carry all the top brands at
              competitive prices.
            </p>
            <p >
              <strong>Brands we carry and service:</strong>
            </p>
            <ul className={styles.brandsList} role="list" aria-label="Domestic RO brands">
              {DOMESTIC_BRANDS.map((brand) => (
                <li key={brand} className={styles.brandChip} role="listitem">
                  {brand}
                </li>
              ))}
            </ul>
            <Link href="/contact" className={`${styles.btn} ${styles.btnPrimary} ${styles.mt4}`}>
              Get Free Consultation
            </Link>
          </div>
          <DetailVisual
            icon="🏠💧"
            label="Domestic RO Systems"
            sub="15+ Brands · All Models · Installation & AMC Available"
            gradient="linear-gradient(135deg, #0ea5e9, #38bdf8)"
          />
        </div>
      </div>
    </section>
  );
}

// ── 2. Commercial RO ────────────────────────────────────────────────────────
export function CommercialRO() {
  return (
    <section
      className={`${styles.detailSection} ${styles.detailSectionAlt}`}
      id="commercial-ro"
      aria-labelledby="commercial-ro-heading"
    >
      <div className={styles.sectionInner}>
        <div className={`${styles.detailGrid} ${styles.detailGridReverse}`}>
          <DetailVisual
            icon="🏭"
            label="Commercial RO Plants"
            sub="250 LPH to 5000 LPH · Fully Auto & Semi-Auto"
            gradient="linear-gradient(135deg, #0369a1, #0ea5e9)"
          />
          <div className={styles.detailContent}>
            <span className={styles.detailTag}>Industrial &amp; Commercial</span>
            <h2 id="commercial-ro-heading">
              Commercial RO Plants in Tamil Nadu
            </h2>
            <p>
              High-capacity reverse osmosis plants for industries, schools,
              hospitals, hotels, and packaged drinking water units. Available in
              fully automatic and semi-automatic configurations with AMC support.
            </p>
            <table
              className={styles.capacityTable}
              role="table"
              aria-label="Commercial RO plant capacities"
            >
              <thead>
                <tr>
                  <th scope="col">Capacity</th>
                  <th scope="col">Type</th>
                  <th scope="col">Best For</th>
                </tr>
              </thead>
              <tbody>
                {COMMERCIAL_CAPACITIES.map((row) => (
                  <tr key={row.lph}>
                    <td>
                      <strong>{row.lph}</strong>
                    </td>
                    <td>
                      {row.types.map((t) => (
                        <span
                          key={t}
                          className={
                            `${styles.badge} ${t === "Fully Auto" ? styles.badgeAuto : styles.badgeSemi}`
                          }
                        >
                          {t}
                        </span>
                      ))}
                    </td>
                    <td>{row.bestFor}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <Link href="/contact" className={`${styles.btn} ${styles.btnPrimary} ${styles.mt4}`}>
              Request a Quote
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

// ── 3. Dispenser Plant ──────────────────────────────────────────────────────
export function DispenserPlant() {
  return (
    <section
      className={styles.detailSection}
      id="dispenser"
      aria-labelledby="dispenser-heading"
    >
      <div className={styles.sectionInner}>
        <div className={styles.detailGrid}>
          <div className={styles.detailContent}>
            <span className={styles.detailTag}>Drinking Water Station</span>
            <h2 id="dispenser-heading">SS Dispenser Plant</h2>
            <p>
              Stainless steel water dispenser plants designed for offices,
              factories, public spaces, and institutions. Durable, hygienic, and
              easy to maintain — ideal for high-usage environments across Tamil Nadu.
            </p>
            <ul className={styles.featureList}>
              <li>✅ Food-grade stainless steel construction</li>
              <li>✅ High flow rate for large groups</li>
              <li>✅ Integrated filtration support</li>
              <li>✅ Low maintenance design</li>
              <li>✅ Custom configurations available</li>
            </ul>
            <Link href="/contact" className={`${styles.btn} ${styles.btnPrimary} ${styles.mt4}`}>
              Enquire Now
            </Link>
          </div>
          <DetailVisual
            icon="🚰"
            label="SS Dispenser Plant"
            sub="Stainless Steel · Commercial Grade · High Flow Rate"
            gradient="linear-gradient(135deg, #10b981, #0ea5e9)"
          />
        </div>
      </div>
    </section>
  );
}

// ── 4. Softener + Iron Remover ───────────────────────────────────────────────
export function SoftenerIronRemover() {
  return (
    <section
      className={`${styles.detailSection} ${styles.detailSectionAlt}`}
      id="softener"
      aria-labelledby="softener-heading"
    >
      <div className={styles.sectionInner}>
        <div className={`${styles.detailGrid} ${styles.detailGridReverse}`}>
          <DetailVisual
            icon="🔬"
            label="Softener & Iron Remover"
            sub="Hard water treatment · Iron removal · Multimedia filter"
            gradient="linear-gradient(135deg, #0369a1, #10b981)"
          />
          <div className={styles.detailContent}>
            <span className={styles.detailTag}>Water Treatment</span>
            <h2 id="softener-heading">
              Water Softener, Iron Remover &amp; Multimedia Plant
            </h2>
            <p>
              Hard water and high iron content are common problems across Tamil
              Nadu. Our systems solve these issues for homes, apartments,
              industries, and agriculture.
            </p>
            <ul className={styles.featureList}>
              <li>
                💧 <strong>Water Softener</strong> — removes hardness (calcium &amp; magnesium)
              </li>
              <li>
                🔶 <strong>Iron Remover</strong> — eliminates excess iron &amp; rust odour
              </li>
              <li>
                🧱 <strong>Multimedia Plant</strong> — multi-layer filtration for turbidity &amp; sediment
              </li>
            </ul>
            <p className={styles.detailNote}>
              📸 Product photos available on request via WhatsApp.
            </p>
            <Link href="/contact" className={`${styles.btn} ${styles.btnPrimary} ${styles.mt4}`}>
              Get Photos &amp; Quote
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

// ── 5. Pressure Pumps ───────────────────────────────────────────────────────
export function PressurePumps() {
  return (
    <section
      className={styles.detailSection}
      id="pumps"
      aria-labelledby="pumps-heading"
    >
      <div className={styles.sectionInner}>
        <div className={styles.detailGrid}>
          <div className={styles.detailContent}>
            <span className={styles.authorizedBadge}>⭐ Authorized Distributor</span>
            <h2 id="pumps-heading">
              Genvik Pressure Pumps — Authorized Distributor Tamil Nadu
            </h2>
            <p>
              As an authorized distributor of Genvik pressure pumps in Tamil
              Nadu, we supply genuine pumps with full warranty and after-sales
              support. Available in both vertical and horizontal configurations.
            </p>
            <div className={styles.pumpCards}>
              <div className={styles.pumpCard}>
                <div className={styles.pumpCardIcon}>🔃</div>
                <h4>Vertical Pump</h4>
                <p>Space-saving, high-pressure vertical multistage pump for RO systems</p>
              </div>
              <div className={styles.pumpCard}>
                <div className={styles.pumpCardIcon}>➡️</div>
                <h4>Horizontal Pump</h4>
                <p>Heavy-duty horizontal pump for water transfer and booster applications</p>
              </div>
            </div>
            <Link href="/contact" className={`${styles.btn} ${styles.btnPrimary} ${styles.mt4}`}>
              Check Availability
            </Link>
          </div>
          <DetailVisual
            icon="⚡"
            label="Genvik Pressure Pumps"
            sub="Authorized Distributor · Tamil Nadu · Vertical & Horizontal Models"
            gradient="linear-gradient(135deg, #1e40af, #0ea5e9)"
          />
        </div>
      </div>
    </section>
  );
}

// ── 6. Solar Water Heater ───────────────────────────────────────────────────
export function SolarWaterHeater() {
  return (
    <section
      className={`${styles.detailSection} ${styles.detailSectionAlt}`}
      id="solar"
      aria-labelledby="solar-heading"
    >
      <div className={styles.sectionInner}>
        <div className={`${styles.detailGrid} ${styles.detailGridReverse}`}>
          <DetailVisual
            icon="☀️"
            label="Solar Water Heater"
            sub="Energy Efficient · Eco-friendly · Residential & Commercial"
            gradient="linear-gradient(135deg, #d97706, #f59e0b, #0ea5e9)"
          />
          <div className={styles.detailContent}>
            <span className={styles.detailTag}>Green Energy</span>
            <h2 id="solar-heading">Solar Water Heater in Tamil Nadu</h2>
            <p>
              Reduce electricity bills and carbon footprint with solar water
              heating systems. Ideal for homes, hostels, hotels, and industries
              in Tamil Nadu&apos;s sunny climate.
            </p>
            <ul className={styles.featureList}>
              <li>☀️ Saves up to 80% electricity on water heating</li>
              <li>🌿 Eco-friendly, zero emissions</li>
              <li>🏠 Residential &amp; commercial models</li>
              <li>🔧 Installation &amp; AMC support available</li>
            </ul>
            <p className={styles.detailNote}>
              📸 Product photos available on request via WhatsApp.
            </p>
            <Link href="/contact" className={`${styles.btn} ${styles.btnPrimary} ${styles.mt4}`}>
              Get Photos &amp; Price
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

// ── 7. Chemicals ────────────────────────────────────────────────────────────
export function ROChemicals() {
  return (
    <section
      className={styles.detailSection}
      id="chemicals"
      aria-labelledby="chemicals-heading"
    >
      <div className={styles.sectionInner}>
        <div className={styles.detailGrid}>
          <div className={styles.detailContent}>
            <span className={styles.detailTag}>Water Treatment Chemicals</span>
            <h2 id="chemicals-heading">RO &amp; Water Treatment Chemicals</h2>
            <p>
              We supply a complete range of water treatment chemicals for RO
              plants, water purifiers, and swimming pools across Tamil Nadu. All
              chemicals are sourced from trusted manufacturers and available in
              bulk quantities.
            </p>
            <ul
              className={styles.chemGrid}
              role="list"
              aria-label="Chemicals we supply"
            >
              {CHEMICALS.map((chem) => (
                <li key={chem} className={styles.chemItem} role="listitem">
                  <span className={styles.chemDot} aria-hidden="true" />
                  {chem}
                </li>
              ))}
            </ul>
            <Link href="/contact" className={`${styles.btn} ${styles.btnPrimary} ${styles.mt4}`}>
              Order Chemicals
            </Link>
          </div>
          <DetailVisual
            icon="🧪"
            label="Water Treatment Chemicals"
            sub="Anti-Scalant · Hypo · Alum · Citric Acid · Pool Chemicals"
            gradient="linear-gradient(135deg, #059669, #0ea5e9)"
          />
        </div>
      </div>
    </section>
  );
}

// ── 8. RO Spare Parts ───────────────────────────────────────────────────────
export function ROSpareParts() {
  return (
    <section
      className={`${styles.detailSection} ${styles.detailSectionAlt}`}
      id="spares"
      aria-labelledby="spares-heading"
    >
      <div className={styles.sectionInner}>
        <div className={`${styles.detailGrid} ${styles.detailGridReverse}`}>
          <DetailVisual
            icon="🔧"
            label="RO Spare Parts A to Z"
            sub="Every part · Every brand · One-stop spare parts shop"
            gradient="linear-gradient(135deg, #475569, #0ea5e9)"
          />
          <div className={styles.detailContent}>
            <span className={styles.detailTag}>All Brands · All Models</span>
            <h2 id="spares-heading">RO Spare Parts A to Z — Tamil Nadu</h2>
            <p>
              We stock a comprehensive range of RO spare parts for all major
              brands and models. From filters to membranes, pumps to fittings —
              if your RO needs it, we have it.
            </p>
            <ul
              className={styles.sparesList}
              role="list"
              aria-label="RO spare parts available"
            >
              {SPARE_PARTS.map((part) => (
                <li key={part} className={styles.spareItem} role="listitem">
                  {part}
                </li>
              ))}
            </ul>
            <p className={styles.detailHighlight}>
              Don&apos;t see your part? Call us — we source any RO component.
            </p>
            <Link href="/contact" className={`${styles.btn} ${styles.btnPrimary} ${styles.mt4}`}>
              Find Your Part
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
