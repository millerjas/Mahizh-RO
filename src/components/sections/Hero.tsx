import Link from "next/link";
import { ArrowRight, CheckCircle2, Droplet, Play, ShieldCheck, Zap } from "lucide-react";
import { motion } from "framer-motion";

export default function Hero() {
    return (
        <section className="relative min-h-screen flex items-center pt-20 pb-16 overflow-hidden bg-surface">
            {/* Background patterns */}
            <div className="absolute top-0 right-0 w-1/3 h-full bg-primary/5 -skew-x-12 transform translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent/10 rounded-full blur-3xl -ml-32 -mb-32" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="inline-flex items-center space-x-2 bg-primary/10 px-3 py-1 rounded-full text-primary text-xs font-bold uppercase tracking-wider mb-6">
                            <Zap className="h-3 w-3" />
                            <span>Leading RO Provider in Theni</span>
                        </div>
                        <h1 className="text-5xl md:text-7xl font-extrabold text-foreground tracking-tight leading-[1.1] mb-6">
                            Pure Water for <br />
                            <span className="text-primary italic">Industrial</span> Excellence
                        </h1>
                        <p className="text-xl text-muted leading-relaxed mb-10 max-w-xl">
                            Mahizh RO Innovation provides high-capacity, energy-efficient commercial RO plants in Theni. Designed for large-scale purification for industries that demand the best.
                        </p>

                        <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-6">
                            <Link
                                href="/contact"
                                className="bg-primary text-white px-10 py-5 rounded-2xl text-lg font-bold hover:bg-primary-dark transition-all shadow-2xl shadow-primary/30 flex items-center group w-full sm:w-auto justify-center"
                            >
                                Request a Quote <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                            </Link>
                            <Link
                                href="/services"
                                className="flex items-center space-x-3 text-foreground font-bold hover:text-primary transition-colors group w-full sm:w-auto justify-center"
                            >
                                <div className="bg-white p-3 rounded-full shadow-md group-hover:scale-110 transition-transform">
                                    <Play className="h-4 w-4 fill-primary text-primary ml-0.5" />
                                </div>
                                <span>Our Solutions</span>
                            </Link>
                        </div>

                        <div className="mt-12 grid grid-cols-2 md:grid-cols-3 gap-6">
                            {[
                                { icon: ShieldCheck, text: "HQA Certified" },
                                { icon: Zap, text: "Energy Efficient" },
                                { icon: Droplet, text: "99.9% Pure" },
                            ].map((item, i) => (
                                <div key={i} className="flex items-center space-x-2">
                                    <item.icon className="h-5 w-5 text-primary" />
                                    <span className="text-sm font-semibold text-muted/80">{item.text}</span>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.8, rotate: 2 }}
                        animate={{ opacity: 1, scale: 1, rotate: 0 }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        className="relative hidden lg:block"
                    >
                        {/* Mock RO Plant Image Placeholder */}
                        <div className="relative z-10 rounded-[3rem] overflow-hidden shadow-2xl border-[12px] border-white ring-1 ring-foreground/5 transform hover:scale-[1.02] transition-transform duration-700">
                            <div className="aspect-[4/5] bg-gradient-to-br from-primary/20 via-surface to-accent/20 flex flex-col items-center justify-center p-12 overflow-hidden">
                                {/* Visual representation of an industrial plant */}
                                <div className="w-full h-full relative border-l-4 border-b-4 border-foreground/10 rounded-bl-3xl">
                                    <div className="absolute top-10 left-10 right-10 bottom-10 grid grid-cols-3 gap-4">
                                        {Array.from({ length: 9 }).map((_, i) => (
                                            <div key={i} className="bg-white/40 rounded-xl backdrop-blur-sm animate-pulse" style={{ animationDelay: `${i * 200}ms` }} />
                                        ))}
                                    </div>
                                    <Droplet className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-32 w-32 text-primary opacity-20" />
                                </div>
                                <div className="absolute inset-x-0 bottom-0 p-8 pt-20 bg-gradient-to-t from-white/80 to-transparent">
                                    <div className="bg-white p-6 rounded-2xl shadow-xl border border-foreground/5">
                                        <div className="flex items-center space-x-3 mb-2">
                                            <CheckCircle2 className="h-5 w-5 text-secondary" />
                                            <span className="font-bold text-foreground">Premium Installation</span>
                                        </div>
                                        <p className="text-xs text-muted">Smart monitoring and low-maintenance industrial RO systems.</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Stats Badge */}
                        <motion.div
                            initial={{ x: 20, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ delay: 0.5 }}
                            className="absolute -right-6 top-1/4 bg-white p-5 rounded-2xl shadow-2xl border border-foreground/5 z-20"
                        >
                            <div className="flex items-center space-x-4">
                                <div className="bg-secondary/10 p-3 rounded-xl">
                                    <CheckCircle2 className="h-6 w-6 text-secondary" />
                                </div>
                                <div>
                                    <div className="text-2xl font-black text-foreground leading-none">100+</div>
                                    <div className="text-[10px] uppercase tracking-widest text-muted font-bold">Plants Installed</div>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
