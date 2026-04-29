import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services | Mahizh RO Innovation",
  description: "Discover the range of services offered by Mahizh RO Innovation, including installation, maintenance, and repair of commercial RO plants.",
  alternates: {
    canonical: "/services",
  },
};

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
