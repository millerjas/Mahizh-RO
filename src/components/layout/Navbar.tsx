"use client";

import Link from "next/link";
import { Droplet, Menu, X, Phone } from "lucide-react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import styles from "./Navbar.module.css";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services" },
  { name: "About Us", href: "/about" },
  { name: "Industries", href: "/industries" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    // <div className={`${styles.header} ${scrolled ? styles.headerFixed : ""}`}>
    <div className={styles.header}>
      
      {/* Top Bar */}
      <div className={styles.topBar}>
        <div className={styles.topBarInner}>
          <div>
            Call us : +91 8307833753 — Email: info@roserviceindia.com
          </div>
          <div className={styles.socials}>
            <span>Facebook</span>
            <span>Twitter</span>
            <span>Instagram</span>
          </div>
        </div>
      </div>

      {/* Navbar */}
      <nav className={styles.nav}>
        <div className={styles.navWrapper}>
          <div className={styles.navContainer}>
            
            <div className={styles.logoSpace}>
              {/* Logo */}
              {/* <Link href="/" className={styles.logoLink}>
                <div className={styles.logoIconWrap}>
                  <Droplet className={styles.logoIcon} />
                </div>
                <div className={styles.logoTextCol}>
                  <span className={styles.logoTitle}>Mahizh RO</span>
                  <span className={styles.logoSub}>Innovation</span>
                </div>
              </Link> */}

              {/* Desktop Nav */}
              <div className={styles.desktopNav}>

                <Link href="/" className={styles.logoLink}>
                    <div className={styles.logoIconWrap}>
                    <Droplet className={styles.logoIcon} />
                    </div>
                    <div className={styles.logoTextCol}>
                    <span className={styles.logoTitle}>Mahizh RO</span>
                    <span className={styles.logoSub}>Innovation</span>
                    </div>
                </Link>   


                <div className={styles.navLinks}>
                    {navLinks.map((link) => (
                    <Link
                        key={link.name}
                        href={link.href}
                        className={styles.navLink}
                    >
                        {link.name}
                    </Link>
                    ))}                   
                </div> 


                <Link href="/contact" className={styles.quoteBtn}>
                  <Phone className="h-4 w-4" />
                  <span>Get a Quote</span>
                </Link>
              </div>

              {/* Mobile Button */}
              <div className={styles.mobileBtnWrap}>
                <button
                  onClick={() => setIsOpen(!isOpen)}
                  className={styles.mobileBtn}
                >
                  {isOpen ? <X size={22} /> : <Menu size={22} />}
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Nav */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className={styles.mobileNav}
            >
              <div className={styles.mobileNavInner}>
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className={styles.mobileLink}
                  >
                    {link.name}
                  </Link>
                ))}

                <div className={styles.mobileQuoteWrap}>
                  <Link
                    href="/contact"
                    onClick={() => setIsOpen(false)}
                    className={styles.mobileQuoteBtn}
                  >
                    Request a Quote Today
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </div>
  );
}