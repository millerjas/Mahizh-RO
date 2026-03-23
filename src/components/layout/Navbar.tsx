"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Droplet, Menu, X, Phone, ChevronDown } from "lucide-react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import styles from "./Navbar.module.css";
import { SERVICE_CARDS } from "@/lib/services-data";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services", hasDropdown: true },
  { name: "About Us", href: "/about" },
  { name: "Industries", href: "/industries" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showServices, setShowServices] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
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
                    {navLinks.map((link) => {
                      const isActive = pathname === link.href || (link.href !== '/' && pathname.startsWith(link.href));

                      if (link.hasDropdown) {
                        return (
                          <div 
                            key={link.name} 
                            className={styles.dropdownContainer}
                            onMouseEnter={() => setShowServices(true)}
                            onMouseLeave={() => setShowServices(false)}
                          >
                            <Link
                                href={link.href}
                                className={`${styles.navLink} ${isActive ? styles.activeNavLink : ''}`}
                            >
                                {link.name}
                                <ChevronDown size={14} className={`${styles.dropdownIcon} ${showServices ? styles.dropdownIconOpen : ''}`} />
                            </Link>
                            <AnimatePresence>
                              {showServices && (
                                <motion.div
                                  initial={{ opacity: 0, y: 10, scale: 0.95 }}
                                  animate={{ opacity: 1, y: 0, scale: 1 }}
                                  exit={{ opacity: 0, y: 10, scale: 0.95 }}
                                  transition={{ duration: 0.2 }}
                                  className={styles.dropdownMenu}
                                >
                                  <div className={styles.dropdownGrid}>
                                    {SERVICE_CARDS.map(svc => {
                                      const isSvcActive = pathname === `/services/${svc.id}`;
                                      return (
                                        <Link 
                                          key={svc.id} 
                                          href={`/services/${svc.id}`} 
                                          className={`${styles.dropdownItem} ${isSvcActive ? styles.activeDropdownItem : ''}`}
                                          onClick={() => setShowServices(false)}
                                        >
                                          <div className={styles.dropdownItemIconBg}>
                                            <span className={styles.dropdownItemIcon}>{svc.icon}</span>
                                          </div>
                                          <div className={styles.dropdownItemContent}>
                                            <div className={styles.dropdownItemTitle}>{svc.title}</div>
                                            <div className={styles.dropdownItemDesc}>{svc.description.substring(0, 45)}...</div>
                                          </div>
                                        </Link>
                                      );
                                    })}
                                  </div>
                                </motion.div>
                              )}
                            </AnimatePresence>
                          </div>
                        );
                      }

                      return (
                        <Link
                            key={link.name}
                            href={link.href}
                            className={`${styles.navLink} ${isActive ? styles.activeNavLink : ''}`}
                        >
                            {link.name}
                        </Link>
                      );
                    })}                   
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
                {navLinks.map((link) => {
                  const isActive = pathname === link.href || (link.href !== '/' && pathname.startsWith(link.href));

                  if (link.hasDropdown) {
                    return (
                      <div key={link.name} className={styles.mobileDropdownWrap}>
                        <div className={`${styles.mobileLink} ${styles.mobileLinkParent} ${isActive ? styles.activeMobileLink : ''}`}>
                          <Link href={link.href} onClick={() => setIsOpen(false)} className={styles.mobileLinkText}>
                            {link.name}
                          </Link>
                          <button 
                            className={styles.mobileDropdownBtn}
                            onClick={(e) => {
                              e.preventDefault();
                              e.stopPropagation();
                              setMobileServicesOpen(!mobileServicesOpen);
                            }}
                          >
                            <ChevronDown size={20} className={mobileServicesOpen ? styles.dropdownIconOpen : ''} />
                          </button>
                        </div>
                        <AnimatePresence>
                          {mobileServicesOpen && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: "auto" }}
                              exit={{ opacity: 0, height: 0 }}
                              className={styles.mobileDropdownMenu}
                            >
                              {SERVICE_CARDS.map(svc => {
                                const isSvcActive = pathname === `/services/${svc.id}`;
                                return (
                                  <Link 
                                    key={svc.id} 
                                    href={`/services/${svc.id}`} 
                                    className={`${styles.mobileDropdownItem} ${isSvcActive ? styles.activeMobileDropdownItem : ''}`}
                                    onClick={() => setIsOpen(false)}
                                  >
                                    {svc.title}
                                  </Link>
                                );
                              })}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    );
                  }

                  return (
                    <Link
                      key={link.name}
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className={`${styles.mobileLink} ${isActive ? styles.activeMobileLink : ''}`}
                    >
                      {link.name}
                    </Link>
                  );
                })}

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