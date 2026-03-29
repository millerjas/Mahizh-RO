// app/services/[slug]/page.tsx

import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SERVICE_CARDS, SERVICE_DETAILS } from "@/lib/services-data";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ServicesCTA from "@/components/services/ServicesCTA";
import ServiceDetailTemplate from "@/components/services/ServiceDetailTemplate";
import PreviousWork from "@/components/services/PreviousWork";
import ServiceTestimonials from "@/components/services/ServiceTestimonials";
import OtherServices from "@/components/services/OtherServices";

// ─────────────────────────────────────────────────────────────────────────────
// Helpers
// ─────────────────────────────────────────────────────────────────────────────

function isValidSlug(slug: string): boolean {
  return slug in SERVICE_DETAILS;
}

function getServiceCard(slug: string) {
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

  const data = SERVICE_DETAILS[slug];
  const card = getServiceCard(slug);

  return (
    <>
      <Navbar />

      <main style={{ paddingTop: "80px" }}>
        <ServiceDetailTemplate data={data} headerImage={card?.image} />
        <PreviousWork />
        <ServiceTestimonials currentSlug={slug} />
        <OtherServices currentSlug={slug} />
        <ServicesCTA />
      </main>

      <Footer />
    </>
  );
}