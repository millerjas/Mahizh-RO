import Link from "next/link";
import { Droplet, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin, ArrowRight } from "lucide-react";

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-foreground text-background pt-16 pb-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
                    {/* Company Info */}
                    <div className="space-y-6">
                        <Link href="/" className="flex items-center space-x-2">
                            <div className="bg-primary p-2 rounded-lg">
                                <Droplet className="h-6 w-6 text-white" />
                            </div>
                            <div className="flex flex-col">
                                <span className="text-xl font-bold tracking-tight text-white">
                                    Mahizh RO
                                </span>
                                <span className="text-[10px] uppercase tracking-widest text-primary font-semibold -mt-1">
                                    Innovation
                                </span>
                            </div>
                        </Link>
                        <p className="text-sm text-background/60 leading-relaxed">
                            Leading provider of commercial and industrial RO water purification systems in Theni. Energy-efficient, cost-effective solutions for all industries.
                        </p>
                        <div className="flex space-x-4">
                            <a href="#" className="hover:text-primary transition-colors"><Facebook className="h-5 w-5" /></a>
                            <a href="#" className="hover:text-primary transition-colors"><Twitter className="h-5 w-5" /></a>
                            <a href="#" className="hover:text-primary transition-colors"><Instagram className="h-5 w-5" /></a>
                            <a href="#" className="hover:text-primary transition-colors"><Linkedin className="h-5 w-5" /></a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-lg font-bold mb-6 text-white">Quick Links</h3>
                        <ul className="space-y-4">
                            <li><Link href="/" className="text-background/60 hover:text-white hover:pl-2 transition-all flex items-center group"><ArrowRight className="h-3 w-3 mr-2 opacity-0 group-hover:opacity-100" /> Home</Link></li>
                            <li><Link href="/services" className="text-background/60 hover:text-white hover:pl-2 transition-all flex items-center group"><ArrowRight className="h-3 w-3 mr-2 opacity-0 group-hover:opacity-100" /> Services</Link></li>
                            <li><Link href="/about" className="text-background/60 hover:text-white hover:pl-2 transition-all flex items-center group"><ArrowRight className="h-3 w-3 mr-2 opacity-0 group-hover:opacity-100" /> About Us</Link></li>
                            <li><Link href="/industries" className="text-background/60 hover:text-white hover:pl-2 transition-all flex items-center group"><ArrowRight className="h-3 w-3 mr-2 opacity-0 group-hover:opacity-100" /> Industries</Link></li>
                            <li><Link href="/contact" className="text-background/60 hover:text-white hover:pl-2 transition-all flex items-center group"><ArrowRight className="h-3 w-3 mr-2 opacity-0 group-hover:opacity-100" /> Contact</Link></li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="text-lg font-bold mb-6 text-white">Contact Us</h3>
                        <ul className="space-y-4">
                            <li className="flex items-start space-x-3 text-background/60">
                                <MapPin className="h-5 w-5 text-primary shrink-0" />
                                <span className="text-sm leading-relaxed">123 Industrial Area, Theni, Tamil Nadu 625531</span>
                            </li>
                            <li className="flex items-center space-x-3 text-background/60">
                                <Phone className="h-5 w-5 text-primary shrink-0" />
                                <span className="text-sm font-semibold">+91 98765 43210</span>
                            </li>
                            <li className="flex items-center space-x-3 text-background/60">
                                <Mail className="h-5 w-5 text-primary shrink-0" />
                                <span className="text-sm">contact@mahizhro.com</span>
                            </li>
                        </ul>
                    </div>

                    {/* Local SEO / Call to Action */}
                    <div>
                        <h3 className="text-lg font-bold mb-6 text-white">Service Area</h3>
                        <p className="text-sm text-background/60 mb-6">
                            Specifically serving Theni and surrounding regions with high-quality water purification systems.
                        </p>
                        <Link href="/contact" className="bg-primary hover:bg-primary-dark text-white px-6 py-3 rounded-lg text-sm font-bold inline-block text-center w-full transition-all shadow-lg shadow-primary/20">
                            Request a Free Quote
                        </Link>
                    </div>
                </div>

                <div className="border-t border-background/5 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-background/40">
                    <p>© {currentYear} Mahizh RO Innovation. All Rights Reserved.</p>
                    <div className="flex space-x-6 mt-4 md:mt-0">
                        <Link href="/privacy" className="hover:text-background transition-colors">Privacy Policy</Link>
                        <Link href="/terms" className="hover:text-background transition-colors">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
