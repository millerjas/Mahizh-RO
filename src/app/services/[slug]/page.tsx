import { notFound } from "next/navigation";
import { SERVICE_CARDS } from "@/lib/services-data";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import CTASection from "@/components/Home/CTASection";
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

const COMPONENT_MAP: Record<string, React.ComponentType> = {
  "domestic-ro": DomesticRO,
  "commercial-ro": CommercialRO,
  dispenser: DispenserPlant,
  softener: SoftenerIronRemover,
  pumps: PressurePumps,
  solar: SolarWaterHeater,
  chemicals: ROChemicals,
  spares: ROSpareParts,
};

export function generateStaticParams() {
  return SERVICE_CARDS.map((svc) => ({
    slug: svc.id,
  }));
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const Component = COMPONENT_MAP[slug];

  if (!Component) {
    notFound();
  }

  return (
    <main>
      <Navbar />

      <main style={{ paddingTop: "80px" }}>
        <Component />
      </main>

      <CTASection
        title="Custom Solutions for Your Business"
        subtitle="Need a specialized water purification system? Let's discuss your requirements today."
      />

      <Footer />
    </main>
  );
}
