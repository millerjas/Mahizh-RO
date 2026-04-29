import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | Mahizh RO Innovation",
  description: "Learn more about Mahizh RO Innovation, our mission, vision, and the team behind our water purification solutions in Theni.",
  alternates: {
    canonical: "/about",
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
