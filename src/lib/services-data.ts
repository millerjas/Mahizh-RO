// ─────────────────────────────────────────────
//  lib/services-data.ts
//  Single source of truth for all services content.
//  Edit this file to update any text/data on the services page.
// ─────────────────────────────────────────────

export const SITE = {
  name: "YourBrand",           // ← replace with your brand name
  phone: "+91 XXXXX XXXXX",    // ← replace with real phone
  phoneRaw: "+91XXXXXXXXXX",   // ← replace with raw digits (for href)
  whatsapp: "91XXXXXXXXXX",    // ← replace with WhatsApp number
  url: "https://yourwebsite.com",
  cities: ["Chennai", "Coimbatore", "Madurai", "Trichy", "Salem", "Tirunelveli"],
};



// ── Service overview cards (links to detail sections) ──
export const SERVICE_CARDS = [
  {
    id: "domestic-ro",
    image: "/services/domestic-ro.png",
    title: "Domestic RO Purifiers",
    description: "Sales, installation & service for 15+ top brands. Perfect for homes and apartments.",
    cta: "View brands",
  },
  {
    id: "commercial-ro",
    image: "/services/commercial-ro.png",
    title: "Commercial RO Plants",
    description: "Fully automatic & semi-automatic RO plants from 250 LPH to 5000 LPH.",
    cta: "View capacities",
  },
  {
    id: "dispenser",
    image: "/services/dispenser/dispenser.png",
    title: "Dispenser Plant",
    description: "SS (Stainless Steel) dispenser units for commercial and institutional use.",
    cta: "Learn more",
  },
  {
    id: "softener",
    image: "/services/iron-softner.png",
    title: "Softener, Iron Remover & Multimedia Plant",
    description: "Water softening and iron removal systems for homes, industries and agriculture.",
    cta: "Learn more",
  },
  {
    id: "pumps",
    image: "/services/pressure-pump.png",
    title: "Pressure Pumps",
    description: "Authorized Genvik distributor. Vertical & horizontal pump models available.",
    cta: "View pumps",
  },
  {
    id: "solar",
    image: "/services/solar-water-heater.png",
    title: "Solar Water Heater",
    description: "Energy-efficient solar water heating systems for residential and commercial use.",
    cta: "Learn more",
  },
  {
    id: "chemicals",
    image: "/services/chemicals.png",
    title: "RO & Water Chemicals",
    description: "Anti-scalants, Hypo, Alum, Citric acid, ETTA, ABF & swimming pool chemicals.",
    cta: "View list",
  },
  {
    id: "spares",
    image: "/services/spares.png",
    title: "RO Spare Parts A to Z",
    description: "All RO components and accessories for every brand and model — one stop shop.",
    cta: "View parts",
  },
];

// ── Domestic RO brands ──
export const DOMESTIC_BRANDS = [
  "Dolphin", "Waterpia", "Lexzon", "Hi-Flo", "Water Lilly",
  "Sonet", "Aqua Jade", "Aqua Mars", "Canix", "Aqua 2090",
  "Aqua XL", "Aqua Roma", "Inovika", "Era", "iParis", "Kainet",
];

// ── Commercial RO capacities ──
export const COMMERCIAL_CAPACITIES = [
  { lph: "250 LPH",  types: ["Fully Auto", "Semi Auto"], bestFor: "Small offices, clinics" },
  { lph: "500 LPH",  types: ["Fully Auto", "Semi Auto"], bestFor: "Schools, restaurants" },
  { lph: "1000 LPH", types: ["Fully Auto", "Semi Auto"], bestFor: "Hotels, hospitals" },
  { lph: "2000 LPH", types: ["Fully Auto"],              bestFor: "Industries, factories" },
  { lph: "5000 LPH", types: ["Fully Auto"],              bestFor: "Packaged water plants" },
];

// ── Chemicals ──
export const CHEMICALS = [
  "Anti-Scalant",
  "Hypo (Sodium Hypochlorite)",
  "Alum",
  "Lemon Acid",
  "Caustic Soda",
  "Citric Acid",
  "ETTA",
  "ABF",
  "Swimming Pool Chemicals",
];

// ── RO Spare Parts ──
export const SPARE_PARTS = [
  "RO Membrane", "Sediment Filter", "Carbon Filter", "UF Membrane",
  "Booster Pump", "Solenoid Valve", "TDS Controller", "Flow Restrictor",
  "Filter Housing", "Pressure Switch", "Check Valve", "Fittings & Connectors",
  "Storage Tank", "Faucet & Tap", "UV Lamp", "SMPS / Adapter",
];

// ── Why us cards ──
export const WHY_US = [
  { icon: "🏆", title: "Authorized Distributor", desc: "Genvik authorized distributor ensuring genuine products with full manufacturer warranty." },
  { icon: "🔧", title: "A to Z Spare Parts",     desc: "Every component for every brand, available immediately — no long waits for parts." },
  { icon: "🌍", title: "Tamil Nadu Wide Service", desc: "Sales, installation and service available across multiple cities in Tamil Nadu." },
  { icon: "⚡", title: "Fast Response",           desc: "Quick service calls and prompt support — because clean water can't wait." },
];

// ── FAQ ──
export const FAQS = [
  {
    q: "What domestic RO brands do you sell and service?",
    a: "We carry and service 15+ brands including Dolphin, Waterpia, Lexzon, Hi-Flo, Water Lilly, Sonet, Aqua Jade, Aqua Mars, Canix, Aqua 2090, Aqua XL, Aqua Roma, Inovika, Era, iParis, and Kainet across Tamil Nadu.",
  },
  {
    q: "What commercial RO plant capacities are available?",
    a: "We supply and install commercial RO plants in 250 LPH, 500 LPH, 1000 LPH, 2000 LPH, and 5000 LPH capacities — both fully automatic and semi-automatic models — suitable for offices, schools, hospitals, and industries.",
  },
  {
    q: "Do you stock all RO spare parts?",
    a: "Yes — we stock RO spare parts A to Z including membranes, filters, pumps, solenoid valves, TDS controllers, housings, fittings, UV lamps, and more for all major brands and models.",
  },
  {
    q: "Are you an authorized Genvik pressure pump dealer in Tamil Nadu?",
    a: "Yes, we are an authorized Genvik pressure pump distributor in Tamil Nadu, supplying both vertical and horizontal pump models with full warranty and after-sales service.",
  },
  {
    q: "What RO and water treatment chemicals do you supply?",
    a: "We supply Anti-scalants, Sodium Hypochlorite (Hypo), Alum, Lemon acid, Caustic soda, Citric acid, ETTA, ABF, and swimming pool chemicals in retail and bulk quantities across Tamil Nadu.",
  },
  {
    q: "Do you provide AMC (Annual Maintenance Contract) for RO systems?",
    a: "Yes, we offer Annual Maintenance Contracts for both domestic and commercial RO systems across Tamil Nadu. Contact us to get a customized AMC plan for your setup.",
  },
];

// ─────────────────────────────────────────────────────────────────────────────
// Dynamic Service Pages Configuration
// ─────────────────────────────────────────────────────────────────────────────

export interface ServiceDetailConfig {
  id: string;
  tag: string;
  heading: string;
  paragraphs: string[];
  visual: { icon: string; label: string; sub: string; gradient: string };
  reverse?: boolean; // Alternates layout (image on left or right)

  featuresList?: string[];
  featuresTable?: { headers: string[]; rows: string[][] };
  gridList?: string[];
  recentWorkImages?: string[];

  productCarousel?: {
    title: string;
    items: {
      name: string;
      image?: string;
      description?: string;
    }[];
  };
}

export const SERVICE_DETAILS: Record<string, ServiceDetailConfig> = {
  "domestic-ro": {
    id: "domestic-ro",
    tag: "Home & Residential",
    heading: "Domestic RO Water Purifiers",
    paragraphs: [
      "We supply, install and service a wide range of domestic RO water purifiers across Tamil Nadu. Whether you need a basic filter or a multi-stage purification system, we carry all the top brands at competitive prices.",
      "Explore the top brands we carry and service below:"
    ],
    visual: {
      icon: "🏠💧",
      label: "Domestic RO Systems",
      sub: "15+ Brands · All Models · Installation & AMC Available",
      gradient: "linear-gradient(135deg, #0ea5e9, #38bdf8)"
    },
    productCarousel: {
      title: "Brands We Carry & Service",
      items: DOMESTIC_BRANDS.map((brand, idx) => {
        const roImages = [
          "/services/products/ro1.png",
          "/services/products/ro2.png",
          "/services/products/ro3.png"
        ];
        return {
          name: brand,
          image: roImages[idx % roImages.length],
          description: `Professional domestic RO water purifier by ${brand}. Genuine parts, full warranty, and AMC available.`,
        };
      })
    }
  },
  "commercial-ro": {
    id: "commercial-ro",
    tag: "Industrial & Commercial",
    heading: "Commercial RO Plants in Tamil Nadu",
    paragraphs: [
      "High-capacity reverse osmosis plants for industries, schools, hospitals, hotels, and packaged drinking water units. Available in fully automatic and semi-automatic configurations with AMC support."
    ],
    visual: {
      icon: "🏭",
      label: "Commercial RO Plants",
      sub: "250 LPH to 5000 LPH · Fully Auto & Semi-Auto",
      gradient: "linear-gradient(135deg, #0369a1, #0ea5e9)"
    },
    reverse: true,
    productCarousel: {
      title: "Commercial & Industrial Capacities",
      items: COMMERCIAL_CAPACITIES.map(c => ({
        name: c.lph,
        image: "/services/commercial-ro.png",
        description: `Types: ${c.types.join(" / ")}. Best suited for ${c.bestFor}. Fully backed by our expert maintenance and service.`
      }))
    }
  },
  dispenser: {
    id: "dispenser",
    tag: "Drinking Water Station",
    heading: "SS Dispenser Plant",
    paragraphs: [
      "Stainless steel water dispenser plants designed for offices, factories, public spaces, and institutions. Durable, hygienic, and easy to maintain — ideal for high-usage environments across Tamil Nadu."
    ],
    visual: {
      icon: "🚰",
      label: "SS Dispenser Plant",
      sub: "Stainless Steel · Commercial Grade · High Flow Rate",
      gradient: "linear-gradient(135deg, #10b981, #0ea5e9)"
    },
    featuresList: [
      "✅ Food-grade stainless steel construction",
      "✅ High flow rate for large groups",
      "✅ Integrated filtration support",
      "✅ Low maintenance design",
      "✅ Custom configurations available"
    ]
  },
  softener: {
    id: "softener",
    tag: "Water Treatment",
    heading: "Water Softener, Iron Remover & Multimedia Plant",
    paragraphs: [
      "Hard water and high iron content are common problems across Tamil Nadu. Our systems solve these issues for homes, apartments, industries, and agriculture."
    ],
    visual: {
      icon: "🔬",
      label: "Softener & Iron Remover",
      sub: "Hard water treatment · Iron removal · Multimedia filter",
      gradient: "linear-gradient(135deg, #0369a1, #10b981)"
    },
    reverse: true,
    featuresList: [
      "💧 Water Softener — removes hardness (calcium & magnesium)",
      "🔶 Iron Remover — eliminates excess iron & rust odour",
      "🧱 Multimedia Plant — multi-layer filtration for turbidity & sediment"
    ]
  },
  pumps: {
    id: "pumps",
    tag: "⭐ Authorized Distributor",
    heading: "Genvik Pressure Pumps — Authorized Distributor",
    paragraphs: [
      "As an authorized distributor of Genvik pressure pumps in Tamil Nadu, we supply genuine pumps with full warranty and after-sales support. Available in both vertical and horizontal configurations."
    ],
    visual: {
      icon: "⚡",
      label: "Genvik Pressure Pumps",
      sub: "Authorized Distributor · Tamil Nadu · Vertical & Horizontal Models",
      gradient: "linear-gradient(135deg, #1e40af, #0ea5e9)"
    },
    productCarousel: {
      title: "Available Pump Models",
      items: [
        { name: "Vertical Pump", description: "Space-saving, high-pressure vertical multistage pump for RO systems" },
        { name: "Horizontal Pump", description: "Heavy-duty horizontal pump for water transfer and booster applications" }
      ]
    }
  },
  solar: {
    id: "solar",
    tag: "Green Energy",
    heading: "Solar Water Heater in Tamil Nadu",
    paragraphs: [
      "Reduce electricity bills and carbon footprint with solar water heating systems. Ideal for homes, hostels, hotels, and industries in Tamil Nadu's sunny climate."
    ],
    visual: {
      icon: "☀️",
      label: "Solar Water Heater",
      sub: "Energy Efficient · Eco-friendly · Residential & Commercial",
      gradient: "linear-gradient(135deg, #d97706, #f59e0b, #0ea5e9)"
    },
    reverse: true,
    featuresList: [
      "☀️ Saves up to 80% electricity on water heating",
      "🌿 Eco-friendly, zero emissions",
      "🏠 Residential & commercial models",
      "🔧 Installation & AMC support available"
    ]
  },
  chemicals: {
    id: "chemicals",
    tag: "Water Treatment Chemicals",
    heading: "RO & Water Treatment Chemicals",
    paragraphs: [
      "We supply a complete range of water treatment chemicals for RO plants, water purifiers, and swimming pools across Tamil Nadu. All chemicals are sourced from trusted manufacturers and available in bulk quantities."
    ],
    visual: {
      icon: "🧪",
      label: "Treatment Chemicals",
      sub: "Anti-Scalant · Hypo · Alum · Citric Acid · Pool Chemicals",
      gradient: "linear-gradient(135deg, #059669, #0ea5e9)"
    },
    productCarousel: {
      title: "Chemicals We Supply",
      items: CHEMICALS.map((chem) => ({
        name: chem,
        image: "/services/chemicals.png",
        description: `High-quality ${chem} for RO plants and water treatment, available in retail and bulk quantities.`
      }))
    }
  },
  spares: {
    id: "spares",
    tag: "All Brands · All Models",
    heading: "RO Spare Parts A to Z — Tamil Nadu",
    paragraphs: [
      "We stock a comprehensive range of RO spare parts for all major brands and models. From filters to membranes, pumps to fittings — if your RO needs it, we have it."
    ],
    visual: {
      icon: "🔧",
      label: "RO Spare Parts A to Z",
      sub: "Every part · Every brand · One-stop spare parts shop",
      gradient: "linear-gradient(135deg, #475569, #0ea5e9)"
    },
    reverse: true,
    productCarousel: {
      title: "A to Z Spare Parts",
      items: SPARE_PARTS.map((part) => ({
        name: part,
        image: "/services/spares.png",
        description: `Genuine replacement ${part} compatible with all leading RO brands and models. Guaranteed performance.`
      }))
    }
  }
};
