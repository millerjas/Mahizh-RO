import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";
import { motion } from "framer-motion";

interface CTASectionProps {
    title: string;
    subtitle: string;
    primaryCtaText?: string;
    secondaryCtaText?: string;
    primaryHref?: string;
    secondaryHref?: string;
}

export default function CTASection({
    title,
    subtitle,
    primaryCtaText = "Get a Free Quote",
    secondaryCtaText = "Contact Us",
    primaryHref = "/contact",
    secondaryHref = "/contact"
}: CTASectionProps) {
    return (
        <section className="py-20 bg-primary relative overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -mr-32 -mt-32 blur-3xl opacity-50" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary-dark/20 rounded-full -ml-48 -mb-48 blur-3xl opacity-50" />

            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight leading-tight"
                >
                    {title}
                </motion.h2>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                    className="text-xl text-white/80 mb-10 leading-relaxed font-light"
                >
                    {subtitle}
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4"
                >
                    <Link
                        href={primaryHref}
                        className="bg-white text-primary px-8 py-4 rounded-xl text-lg font-bold hover:bg-surface hover:scale-105 transition-all shadow-2xl flex items-center group w-full sm:w-auto justify-center"
                    >
                        <Phone className="h-5 w-5 mr-3 group-hover:scale-110 transition-transform" /> {primaryCtaText}
                    </Link>
                    <Link
                        href={secondaryHref}
                        className="bg-primary-dark/30 border border-white/20 text-white px-8 py-4 rounded-xl text-lg font-bold hover:bg-primary-dark/50 hover:pl-10 transition-all flex items-center group w-full sm:w-auto justify-center"
                    >
                        {secondaryCtaText} <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                </motion.div>
            </div>
        </section>
    );
}
