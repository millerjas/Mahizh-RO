"use client";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import {
    Phone,
    Mail,
    MapPin,
    Clock,
    Send,
    CheckCircle2,
    Droplet
} from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";

export default function ContactPage() {
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        // Simulate API call
        setTimeout(() => {
            setIsLoading(false);
            setIsSubmitted(true);
        }, 1500);
    };

    return (
        <main>
            <Navbar />

            {/* Header */}
            <section className="pt-32 pb-20 bg-surface border-b border-foreground/5 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -mr-32 -mt-32" />
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-5xl font-extrabold text-foreground mb-6"
                    >
                        Get in <span className="text-primary italic">Touch</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-xl text-muted max-w-2xl mx-auto leading-relaxed"
                    >
                        Have a question about our RO plants? Request a quote or schedule a consultation with our water experts.
                    </motion.p>
                </div>
            </section>

            {/* Contact Content */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                        {/* Contact Info */}
                        <div>
                            <h2 className="text-3xl font-bold mb-8 text-foreground">Contact Information</h2>
                            <p className="text-lg text-muted mb-12 leading-relaxed">
                                We are here to help you find the perfect water purification solution for your business in Theni and surrounding areas.
                            </p>

                            <div className="space-y-8">
                                <div className="flex items-start space-x-6 group">
                                    <div className="bg-primary/5 p-4 rounded-2xl group-hover:bg-primary transition-colors">
                                        <Phone className="h-6 w-6 text-primary group-hover:text-white transition-colors" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-foreground text-lg mb-1">Call Us</h4>
                                        <p className="text-muted mb-1 text-sm font-bold uppercase tracking-widest text-primary">Primary Number</p>
                                        <p className="text-lg font-bold text-foreground">+91 98765 43210</p>
                                    </div>
                                </div>

                                <div className="flex items-start space-x-6 group">
                                    <div className="bg-primary/5 p-4 rounded-2xl group-hover:bg-primary transition-colors">
                                        <Mail className="h-6 w-6 text-primary group-hover:text-white transition-colors" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-foreground text-lg mb-1">Email Us</h4>
                                        <p className="text-muted mb-1 text-sm font-bold uppercase tracking-widest text-primary">General Inquiries</p>
                                        <p className="text-lg font-medium text-foreground">contact@mahizhro.com</p>
                                    </div>
                                </div>

                                <div className="flex items-start space-x-6 group">
                                    <div className="bg-primary/5 p-4 rounded-2xl group-hover:bg-primary transition-colors">
                                        <MapPin className="h-6 w-6 text-primary group-hover:text-white transition-colors" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-foreground text-lg mb-1">Visit Office</h4>
                                        <p className="text-muted mb-1 text-sm font-bold uppercase tracking-widest text-primary">Headquarters</p>
                                        <p className="text-lg font-medium text-foreground">123 Industrial Area, Theni, Tamil Nadu 625531</p>
                                    </div>
                                </div>

                                <div className="flex items-start space-x-6 group">
                                    <div className="bg-primary/5 p-4 rounded-2xl group-hover:bg-primary transition-colors">
                                        <Clock className="h-6 w-6 text-primary group-hover:text-white transition-colors" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-foreground text-lg mb-1">Business Hours</h4>
                                        <p className="text-sm font-medium text-muted">Monday - Saturday: 9:00 AM - 7:00 PM</p>
                                        <p className="text-sm font-medium text-muted">Sunday: Closed (Emergency support available)</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Contact Form */}
                        <div className="bg-surface p-10 md:p-12 rounded-[2.5rem] border border-foreground/5 shadow-sm relative">
                            {isSubmitted ? (
                                <div className="text-center py-12">
                                    <div className="bg-secondary/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-8 animate-bounce">
                                        <CheckCircle2 className="h-10 w-10 text-secondary" />
                                    </div>
                                    <h3 className="text-2xl font-bold mb-4">Message Sent Successfully!</h3>
                                    <p className="text-muted leading-relaxed mb-8">
                                        Thank you for contacting Mahizh RO Innovation. Our team will get back to you within 24 hours.
                                    </p>
                                    <button
                                        onClick={() => setIsSubmitted(false)}
                                        className="text-primary font-bold hover:underline"
                                    >
                                        Send another message
                                    </button>
                                </div>
                            ) : (
                                <>
                                    <h3 className="text-2xl font-bold mb-8">Request a Quote</h3>
                                    <form onSubmit={handleSubmit} className="space-y-6">
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                            <div className="space-y-2">
                                                <label className="text-xs font-bold uppercase tracking-widest text-muted">Full Name</label>
                                                <input
                                                    type="text"
                                                    required
                                                    placeholder="John Doe"
                                                    className="w-full px-5 py-4 rounded-xl bg-white border border-foreground/5 focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all font-medium"
                                                />
                                            </div>
                                            <div className="space-y-2">
                                                <label className="text-xs font-bold uppercase tracking-widest text-muted">Phone Number</label>
                                                <input
                                                    type="tel"
                                                    required
                                                    placeholder="+91 1234567890"
                                                    className="w-full px-5 py-4 rounded-xl bg-white border border-foreground/5 focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all font-medium"
                                                />
                                            </div>
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-xs font-bold uppercase tracking-widest text-muted">Email Address</label>
                                            <input
                                                type="email"
                                                required
                                                placeholder="john@company.com"
                                                className="w-full px-5 py-4 rounded-xl bg-white border border-foreground/5 focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all font-medium"
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-xs font-bold uppercase tracking-widest text-muted">Message / Requirements</label>
                                            <textarea
                                                rows={4}
                                                required
                                                placeholder="I need a 5000LPH RO plant for my hospital..."
                                                className="w-full px-5 py-4 rounded-xl bg-white border border-foreground/5 focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all font-medium resize-none"
                                            ></textarea>
                                        </div>
                                        <button
                                            disabled={isLoading}
                                            type="submit"
                                            className="w-full bg-primary hover:bg-primary-dark text-white py-5 rounded-2xl font-black text-lg transition-all shadow-xl shadow-primary/30 flex items-center justify-center space-x-3 group disabled:opacity-50"
                                        >
                                            {isLoading ? (
                                                <div className="h-6 w-6 border-4 border-white border-t-transparent rounded-full animate-spin" />
                                            ) : (
                                                <>
                                                    <span>Send Request</span>
                                                    <Send className="h-5 w-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                                                </>
                                            )}
                                        </button>
                                    </form>
                                </>
                            )}
                        </div>
                    </div>
                </div>
            </section>

            {/* Map Placeholder */}
            <section className="h-[400px] w-full bg-surface border-y border-foreground/5 relative overflow-hidden">
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-8 bg-gradient-to-br from-primary/5 to-transparent">
                    <MapPin className="h-16 w-16 text-primary mb-6 opacity-20" />
                    <h3 className="text-2xl font-bold mb-2">Our Location</h3>
                    <p className="text-muted">Theni Industrial Zone, Tamil Nadu</p>
                    <div className="mt-8 bg-white p-6 rounded-3xl shadow-2xl border border-foreground/5 max-w-sm">
                        <p className="text-sm font-bold text-foreground">Google Map will be embedded here for live location tracking.</p>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
