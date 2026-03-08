import { LucideIcon, ArrowRight } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

interface ServiceCardProps {
    title: string;
    description: string;
    benefits?: string[];
    icon: LucideIcon;
    href: string;
    index?: number;
}

export default function ServiceCard({ title, description, benefits, icon: Icon, href, index = 0 }: ServiceCardProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            whileHover={{ y: -5 }}
            className="bg-white p-8 rounded-3xl shadow-sm border border-foreground/5 hover:shadow-xl hover:shadow-primary/5 transition-all group"
        >
            <div className="bg-primary/10 w-14 h-14 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary transition-colors">
                <Icon className="h-7 w-7 text-primary group-hover:text-white transition-colors" />
            </div>
            <h3 className="text-xl font-bold mb-4 text-foreground group-hover:text-primary transition-colors">{title}</h3>
            <p className="text-muted text-sm leading-relaxed mb-6">
                {description}
            </p>

            {benefits && (
                <ul className="mb-8 space-y-2">
                    {benefits.slice(0, 3).map((benefit, i) => (
                        <li key={i} className="flex items-start text-xs text-muted/80">
                            <div className="h-1.5 w-1.5 rounded-full bg-primary/40 mt-1.5 mr-2 shrink-0" />
                            {benefit}
                        </li>
                    ))}
                </ul>
            )}

            <Link href={href} className="inline-flex items-center text-sm font-bold text-primary group-hover:pl-2 transition-all">
                Learn More <ArrowRight className="h-4 w-4 ml-2" />
            </Link>
        </motion.div>
    );
}
