"use client";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import ServiceCard from "@/components/ui/ServiceCard";
import CTASection from "@/components/sections/CTASection";
import {
  Droplet,
  Settings,
  ShieldCheck,
  TestTube,
  Factory,
  Hotel,
  Hospital,
  FlaskConical,
  Warehouse,
  CheckCircle2,
  Users
} from "lucide-react";
import { motion } from "framer-motion";

const services = [
  {
    title: "Commercial RO Plant Installation",
    description: "Expert installation of high-capacity RO systems tailored to your business scale.",
    benefits: ["Precision Engineering", "On-site Integration", "High-Flow Design"],
    icon: Settings,
    href: "/services"
  },
  {
    title: "Industrial Water Purification",
    description: "Lager-scale systems for food & beverage, textile, and manufacturing units.",
    benefits: ["99.9% Purity", "Energy Efficient", "Massive Capacity"],
    icon: Factory,
    href: "/services"
  },
  {
    title: "RO Plant Maintenance & Service",
    description: "Keep your systems running at peak performance with our scheduled maintenance plans.",
    benefits: ["Regular Audits", "Genuine Spares", "Expert Technicians"],
    icon: ShieldCheck,
    href: "/services"
  }
];

const industries = [
  { name: "Food & Beverage", icon: Warehouse, color: "bg-blue-500" },
  { name: "Hotels & Resorts", icon: Hotel, color: "bg-green-500" },
  { name: "Hospitals", icon: Hospital, color: "bg-red-500" },
  { name: "Pharmaceuticals", icon: FlaskConical, color: "bg-purple-500" },
  { name: "Manufacturing", icon: Factory, color: "bg-orange-500" },
];

const testimonials = [
  {
    quote: "The RO plant installed by Mahizh Innovation has significantly reduced our water costs while ensuring top-tier purity for our beverage production.",
    author: "Ramesh Kumar",
    position: "Operations Manager, Theni Beverages"
  },
  {
    quote: "Professional service and prompt maintenance. Our hospital relies on their systems for uninterrupted clean water supply.",
    author: "Dr. Anitha S.",
    position: "Director, City Hospital"
  }
];

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />

      {/* Intro Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2">
              <div className="inline-block bg-primary/5 px-4 py-2 rounded-lg text-primary text-sm font-bold mb-6">
                About Mahizh Innovation
              </div>
              <h2 className="text-4xl font-extrabold text-foreground mb-8 tracking-tight">
                Pioneering Clean Water <br /><span className="text-primary italic">Solutions in Theni</span>
              </h2>
              <p className="text-lg text-muted leading-relaxed mb-8">
                Mahizh RO Innovation provides high-capacity commercial RO plants designed for companies that require large-scale water purification. Our systems are energy-efficient, cost-effective, and provide high-quality filtered water for diverse industries.
              </p>
              <div className="space-y-4">
                {[
                  "Specialized in Industrial scaled RO Systems",
                  "Energy Efficient & Cost Effective Designs",
                  "Turnkey Solutions from Design to Maintenance",
                  "Local Support and Rapid Response in Theni"
                ].map((item, i) => (
                  <div key={i} className="flex items-center space-x-3">
                    <CheckCircle2 className="h-5 w-5 text-secondary" />
                    <span className="font-semibold text-foreground/80">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="lg:w-1/2 grid grid-cols-2 gap-4">
              <div className="bg-surface p-8 rounded-3xl space-y-4">
                <Droplet className="h-10 w-10 text-primary" />
                <div className="text-4xl font-black">99%</div>
                <div className="text-sm font-bold text-muted uppercase tracking-widest">Purity Level</div>
              </div>
              <div className="bg-primary p-8 rounded-3xl space-y-4 text-white mt-8">
                <Users className="h-10 w-10 text-white/40" />
                <div className="text-4xl font-black">50+</div>
                <div className="text-sm font-bold text-white/60 uppercase tracking-widest">Global Clients</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Highlight */}
      <section className="py-24 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-extrabold text-foreground mb-4">Our Core Solutions</h2>
            <p className="text-muted text-lg max-w-2xl mx-auto">
              Custom-engineered RO water purification systems for any industrial requirement.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, i) => (
              <ServiceCard key={i} {...service} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Industries Served */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row justify-between items-end mb-16 gap-8">
            <div className="max-w-xl">
              <h2 className="text-4xl font-extrabold text-foreground mb-4">Industries We Empower</h2>
              <p className="text-muted text-lg font-light">
                Our RO purification systems are tailored to meet the stringent water quality standards of various sectors.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {industries.map((industry, i) => (
              <div key={i} className="group cursor-pointer">
                <div className="bg-surface p-10 rounded-3xl border border-foreground/5 text-center group-hover:bg-primary transition-all duration-500">
                  <industry.icon className="h-12 w-12 mx-auto mb-6 text-primary group-hover:text-white transition-colors" />
                  <h3 className="font-bold text-foreground group-hover:text-white">{industry.name}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-surface border-y border-foreground/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-extrabold text-foreground mb-6">What Our Partners Say</h2>
              <p className="text-muted mb-8">Join dozens of successful businesses in Theni trusting our water solutions.</p>
              <div className="flex -space-x-3 mb-4">
                {[1, 2, 3, 4].map(i => (
                  <div key={i} className="h-12 w-12 rounded-full border-4 border-surface bg-gray-200" />
                ))}
              </div>
              <div className="text-sm font-bold text-foreground">Trusted by 50+ local industries</div>
            </div>
            <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-8">
              {testimonials.map((t, i) => (
                <div key={i} className="bg-white p-8 rounded-3xl shadow-sm border border-foreground/5">
                  <p className="italic text-muted leading-relaxed mb-6">"{t.quote}"</p>
                  <div className="font-bold text-foreground">{t.author}</div>
                  <div className="text-xs text-primary font-bold uppercase tracking-widest">{t.position}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CTASection
        title="Ready to Pure Your Water Supply?"
        subtitle="Contact Mahizh RO Innovation today for an energy-efficient industrial RO plant in Theni."
      />

      <Footer />
    </main>
  );
}
