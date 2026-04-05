import Link from "next/link";
import { Droplet, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin, ArrowRight } from "lucide-react";
import styles from "./Footer.module.css";

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.gridInfo}>
                    {/* Company Info */}
                    <div className={styles.companyInfo}>
                        <Link href="/" className={styles.logoLink}>
                            <img 
                                src="/Mahizh-logo.png" 
                                alt="Mahizh RO Logo" 
                                className={styles.mainLogo} 
                            />
                        </Link>
                        <p className={styles.descP}>
                            Leading provider of commercial and industrial RO water purification systems in Theni. Energy-efficient, cost-effective solutions for all industries.
                        </p>
                        <div className={styles.socials}>
                            <a href="#" className={styles.socialLink}><Facebook className={styles.socialIcon} /></a>
                            <a href="#" className={styles.socialLink}><Twitter className={styles.socialIcon} /></a>
                            <a href="#" className={styles.socialLink}><Instagram className={styles.socialIcon} /></a>
                            <a href="#" className={styles.socialLink}><Linkedin className={styles.socialIcon} /></a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className={styles.footerH3}>Quick Links</h3>
                        <ul className={styles.linksList}>
                            <li>
                                <Link href="/" className={styles.linkItem}>
                                    <ArrowRight className={styles.arrowIcon} /> Home
                                </Link>
                            </li>
                            <li>
                                <Link href="/services" className={styles.linkItem}>
                                    <ArrowRight className={styles.arrowIcon} /> Services
                                </Link>
                            </li>
                            <li>
                                <Link href="/about" className={styles.linkItem}>
                                    <ArrowRight className={styles.arrowIcon} /> About Us
                                </Link>
                            </li>
                           
                            <li>
                                <Link href="/contact" className={styles.linkItem}>
                                    <ArrowRight className={styles.arrowIcon} /> Contact
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className={styles.footerH3}>Contact Us</h3>
                        <ul className={styles.linksList}>
                            <li className={styles.contactLi}>
                                <MapPin className={styles.contactIcon} />
                                <span className={styles.contactText}>No.14/C, Sadayal Street, Thittasalai Road, Theni. 625531. Tamil Nadu</span>
                            </li>
                            <li className={styles.contactLiCenter}>
                                <Phone className={styles.contactIcon} />
                                <span className={styles.contactTextBold}>+91 97914 18921</span>
                            </li>
                            <li className={styles.contactLiCenter}>
                                <Mail className={styles.contactIcon} />
                                <span className={styles.contactText}>mahizhroinnovation@gmail.com</span>
                            </li>
                        </ul>
                    </div>

                    {/* Local SEO / Call to Action */}
                    <div>
                        <h3 className={styles.footerH3}>Service Area</h3>
                        <p className={styles.serviceP}>
                            Specifically serving Theni and surrounding regions with high-quality water purification systems.
                        </p>
                        <Link href="/contact" className={styles.footerQuoteBtn}>
                            Request a Free Quote
                        </Link>
                    </div>
                </div>

                <div className={styles.bottomBar}>
                    <p>© {currentYear} Mahizh RO Innovation. All Rights Reserved.</p>
                    <div className={styles.bottomLinks}>
                        <Link href="/privacy" className={styles.legalLink}>Privacy Policy</Link>
                        <Link href="/terms" className={styles.legalLink}>Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
