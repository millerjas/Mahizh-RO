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
    icon: "🏠",
    title: "Domestic RO Purifiers",
    description: "Sales, installation & service for 15+ top brands. Perfect for homes and apartments.",
    cta: "View brands",
  },
  {
    id: "commercial-ro",
    icon: "🏭",
    title: "Commercial RO Plants",
    description: "Fully automatic & semi-automatic RO plants from 250 LPH to 5000 LPH.",
    cta: "View capacities",
  },
  {
    id: "dispenser",
    icon: "🚰",
    title: "Dispenser Plant",
    description: "SS (Stainless Steel) dispenser units for commercial and institutional use.",
    cta: "Learn more",
  },
  {
    id: "softener",
    icon: "🔬",
    title: "Softener, Iron Remover & Multimedia Plant",
    description: "Water softening and iron removal systems for homes, industries and agriculture.",
    cta: "Learn more",
  },
  {
    id: "pumps",
    icon: "⚡",
    title: "Pressure Pumps",
    description: "Authorized Genvik distributor. Vertical & horizontal pump models available.",
    cta: "View pumps",
  },
  {
    id: "solar",
    icon: "☀️",
    title: "Solar Water Heater",
    description: "Energy-efficient solar water heating systems for residential and commercial use.",
    cta: "Learn more",
  },
  {
    id: "chemicals",
    icon: "🧪",
    title: "RO & Water Chemicals",
    description: "Anti-scalants, Hypo, Alum, Citric acid, ETTA, ABF & swimming pool chemicals.",
    cta: "View list",
  },
  {
    id: "spares",
    icon: "🔧",
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
