import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Industries | Mahizh RO Innovation",
  description: "Explore the diverse industries we serve. Mahizh RO Innovation provides customized water purification systems for hospitals, factories, and commercial units.",
  alternates: {
    canonical: "/industries",
  },
};

export default function IndustriesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
