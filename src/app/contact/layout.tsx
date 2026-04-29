import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | Mahizh RO Innovation",
  description: "Get in touch with Mahizh RO Innovation for all your water purification needs. We offer 24/7 support in Theni and surrounding areas.",
  alternates: {
    canonical: "/contact",
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
