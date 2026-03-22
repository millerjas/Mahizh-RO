"use client";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import styles from "./page.module.css";
import { Phone, Mail, MapPin, Clock, Send, CheckCircle2, AlertCircle } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";

type FormData = {
  fullName: string;
  mobile: string;
  email: string;
  location: string;
  message: string;
};

export default function ContactPage() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const { register, handleSubmit, formState: { errors }, reset } = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    setIsLoading(true);
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      setIsSubmitted(true);
      reset();
    }, 1500);
  };

  return (
    <main className={styles.main}>
      <Navbar />

      {/* 1. Hero Section */}
      <section className={styles.heroSection}>
        <div 
          className={styles.heroImage} 
          style={{ backgroundImage: "url('/Hero-images/Hero1.png')" }}
        >
          <div className={styles.heroOverlay}>
            <div className={styles.heroContent}>
              <h1 className={styles.heroTitle}>Contact Us</h1>
              <p className={styles.heroSubtitle}>We'd love to hear from you. Reach out to our water experts today for the best pure water solutions.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Contact Form Section */}
      <section className={styles.formSection}>
        <div className={styles.container}>
          <div className={styles.formWrapper}>
            <div className={styles.formHeader}>
              <h2 className={styles.sectionTitle}>Send us a Message</h2>
              <p className={styles.sectionSubtitle}>Please fill out the form below and we will get back to you shortly.</p>
            </div>

            {isSubmitted ? (
              <div className={styles.successContainer}>
                <div className={styles.successIconWrapper}>
                  <CheckCircle2 size={48} className={styles.successIcon} />
                </div>
                <h3 className={styles.successH3}>Message Sent Successfully!</h3>
                <p className={styles.successP}>Thank you for contacting Mahizh RO Innovation. Our team will get back to you within 24 hours.</p>
                <button onClick={() => setIsSubmitted(false)} className={styles.successBtn}>
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
                <div className={styles.formGrid}>
                  <div className={styles.inputGroup}>
                    <label>Full Name</label>
                    <input 
                      {...register("fullName", { required: "Full name is required" })} 
                      className={errors.fullName ? styles.inputError : styles.input} 
                      placeholder="John Doe" 
                    />
                    {errors.fullName && <span className={styles.errorText}><AlertCircle size={14} /> {errors.fullName.message}</span>}
                  </div>
                  
                  <div className={styles.inputGroup}>
                    <label>Mobile Number</label>
                    <div className={styles.mobileInputWrapper}>
                      <span className={styles.countryCode}>+91</span>
                      <input 
                        {...register("mobile", { 
                          required: "Mobile number is required",
                          pattern: { value: /^[0-9]{10}$/, message: "Enter a valid 10-digit number" },
                          maxLength: 10
                        })} 
                        className={errors.mobile ? styles.inputError : styles.input} 
                        style={{ paddingLeft: '3.5rem' }}
                        placeholder="9876543210" 
                      />
                    </div>
                    {errors.mobile && <span className={styles.errorText}><AlertCircle size={14} /> {errors.mobile.message}</span>}
                  </div>
                </div>

                <div className={styles.formGrid}>
                  <div className={styles.inputGroup}>
                    <label>Email Address</label>
                    <input 
                      {...register("email", { 
                        required: "Email is required",
                        pattern: { value: /^\S+@\S+$/i, message: "Enter a valid email address" }
                      })} 
                      className={errors.email ? styles.inputError : styles.input} 
                      placeholder="john@company.com" 
                    />
                    {errors.email && <span className={styles.errorText}><AlertCircle size={14} /> {errors.email.message}</span>}
                  </div>
                  <div className={styles.inputGroup}>
                    <label>Location</label>
                    <input 
                      {...register("location", { required: "Location is required" })} 
                      className={errors.location ? styles.inputError : styles.input} 
                      placeholder="City or Region" 
                    />
                    {errors.location && <span className={styles.errorText}><AlertCircle size={14} /> {errors.location.message}</span>}
                  </div>
                </div>

                <div className={styles.inputGroup}>
                  <label>Message</label>
                  <textarea 
                    {...register("message", { required: "Message cannot be empty" })} 
                    className={errors.message ? styles.textareaError : styles.textarea} 
                    rows={4} 
                    placeholder="How can we help you?" 
                  />
                  {errors.message && <span className={styles.errorText}><AlertCircle size={14} /> {errors.message.message}</span>}
                </div>

                <button type="submit" disabled={isLoading} className={styles.submitBtn}>
                  {isLoading ? <div className={styles.spinner} /> : <><Send size={18} /> Send Request</>}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* 3. Map + Contact Info Section */}
      <section className={styles.infoMapSection}>
        <div className={styles.container}>
          <div className={styles.infoMapGrid}>
            
            {/* LEFT SIDE: TEXT INFO */}
            <div className={styles.infoCol}>
              <h2 className={styles.brandName}>Mahizh RO Innovation</h2>
              <p className={styles.infoIntro}>Providing industrial and domestic water purification solutions with uncompromising quality for over 18 years.</p>
              
              <div className={styles.infoList}>
                <div className={styles.infoItem}>
                  <div className={styles.iconWrapper}>
                    <MapPin className={styles.infoIcon} />
                  </div>
                  <div className={styles.infoText}>
                    <h4>Visit Office</h4>
                    <p>123 Industrial Area, Theni, Tamil Nadu 625531</p>
                  </div>
                </div>
                
                <div className={styles.infoItem}>
                  <div className={styles.iconWrapper}>
                    <Phone className={styles.infoIcon} />
                  </div>
                  <div className={styles.infoText}>
                    <h4>Call Us</h4>
                    <p>+91 98765 43210</p>
                  </div>
                </div>
                
                <div className={styles.infoItem}>
                  <div className={styles.iconWrapper}>
                    <Mail className={styles.infoIcon} />
                  </div>
                  <div className={styles.infoText}>
                    <h4>Email Us</h4>
                    <p>contact@mahizhro.com</p>
                  </div>
                </div>
                
                <div className={styles.infoItem}>
                  <div className={styles.iconWrapper}>
                    <Clock className={styles.infoIcon} />
                  </div>
                  <div className={styles.infoText}>
                    <h4>Business Hours</h4>
                    <p>Monday - Saturday: 9:00 AM - 7:00 PM</p>
                    <p className={styles.mutedText}>Sunday: Closed (Emergency support available)</p>
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT SIDE: MAP */}
            <div className={styles.mapCol}>
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15714.65481358999!2d77.46513460395786!3d10.044696093864455!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b076eb5af6096ab%3A0xe549cd97b4ec8fa8!2sTheni%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin" 
                width="100%" 
                height="100%" 
                style={{ border: 0, borderRadius: '1rem', backgroundColor: '#f3f4f6' }} 
                allowFullScreen={false} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Mahizh RO Location Map"
              ></iframe>
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
