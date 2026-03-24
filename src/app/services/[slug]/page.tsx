// app/services/[slug]/page.tsx

import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SERVICE_CARDS } from "@/lib/services-data";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ServicesCTA from "@/components/services/ServicesCTA";
import ProductsSection from "@/components/services/ProductsSection";
import {
  DomesticRO,
  CommercialRO,
  DispenserPlant,
  SoftenerIronRemover,
  PressurePumps,
  SolarWaterHeater,
  ROChemicals,
  ROSpareParts,
} from "@/components/services/ServiceDetails";

// ─────────────────────────────────────────────────────────────────────────────
// Component map — typed against known service IDs
// ─────────────────────────────────────────────────────────────────────────────

type ServiceSlug = (typeof SERVICE_CARDS)[number]["id"];

const COMPONENT_MAP: Record<ServiceSlug, React.ComponentType> = {
  "domestic-ro": DomesticRO,
  "commercial-ro": CommercialRO,
  dispenser: DispenserPlant,
  softener: SoftenerIronRemover,
  pumps: PressurePumps,
  solar: SolarWaterHeater,
  chemicals: ROChemicals,
  spares: ROSpareParts,
};

// ─────────────────────────────────────────────────────────────────────────────
// Helpers
// ─────────────────────────────────────────────────────────────────────────────

function isValidSlug(slug: string): slug is ServiceSlug {
  return slug in COMPONENT_MAP;
}

function getServiceCard(slug: ServiceSlug) {
  return SERVICE_CARDS.find((svc) => svc.id === slug);
}

// ─────────────────────────────────────────────────────────────────────────────
// Static params
// ─────────────────────────────────────────────────────────────────────────────

export function generateStaticParams() {
  return SERVICE_CARDS.map((svc) => ({ slug: svc.id }));
}

// ─────────────────────────────────────────────────────────────────────────────
// Dynamic metadata per service
// ─────────────────────────────────────────────────────────────────────────────

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;

  if (!isValidSlug(slug)) return {};

  const card = getServiceCard(slug);

  return {
    title: card?.title ?? slug,
    description: card?.description ?? undefined,
  };
}

// ─────────────────────────────────────────────────────────────────────────────
// Page
// ─────────────────────────────────────────────────────────────────────────────

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  if (!isValidSlug(slug)) notFound();

  const Component = COMPONENT_MAP[slug];

  return (
    <>
      <Navbar />

      <main style={{ paddingTop: "80px" }}>
        <Component />
        <ProductsSection />
        <ServicesCTA />
      </main>

      <Footer />
    </>
  );
}