"use client";

import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { MessageCircle, X, AlertCircle } from "lucide-react";
import styles from "./GlobalOverlays.module.css";

type FormData = {
  fullName: string;
  mobile: string;
  email: string;
  location: string;
  intent: string;
};

export default function GlobalOverlays() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [hasShownAutoPopup, setHasShownAutoPopup] = useState(true); // Default to true to prevent flash

  const { register, handleSubmit, formState: { errors }, reset } = useForm<FormData>();

  useEffect(() => {
    // Check session storage on mount
    const hasSeenPopup = sessionStorage.getItem("hasSeenLeadPopup");
    if (!hasSeenPopup) {
      setHasShownAutoPopup(false);
      // Show automatically after a short delay
      const timer = setTimeout(() => {
        setIsModalOpen(true);
        sessionStorage.setItem("hasSeenLeadPopup", "true");
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, []);

  const openDemoModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const onSubmit = (data: FormData) => {
    // Simulate API call
    console.log("Lead captured:", data);
    alert("Thank you! Your request has been received. Our team will contact you shortly.");
    reset();
    closeModal();
  };

  return (
    <>
      {/* 1. WhatsApp Floating Button */}
      <a 
        href="https://wa.me/910000000000" 
        target="_blank" 
        rel="noopener noreferrer"
        className={styles.whatsappBtn}
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle size={28} />
      </a>

      {/* 3. Book Your Demo Floating Button */}
      <button 
        onClick={openDemoModal}
        className={styles.demoBtn}
        aria-label="Book Your Demo"
      >
        Book Your Demo
      </button>

      {/* 2. Entry Popup / Lead Capture Modal */}
      {isModalOpen && (
        <div className={styles.modalOverlay} onClick={closeModal}>
          <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
            <button className={styles.closeBtn} onClick={closeModal} aria-label="Close modal">
              <X size={24} />
            </button>
            
            <div className={styles.modalHeader}>
              <h2>Request a Consultation</h2>
              <p>Fill out the details below and our experts will get in touch.</p>
            </div>

            <form onSubmit={handleSubmit(onSubmit)} className={styles.formContainer}>
              <div className={styles.inputGroup}>
                <label>Full Name</label>
                <input 
                  {...register("fullName", { required: "Full Name is required" })} 
                  className={errors.fullName ? styles.inputError : styles.inputField} 
                  placeholder="John Doe"
                />
                {errors.fullName && <span className={styles.errorText}><AlertCircle size={14}/> {errors.fullName.message}</span>}
              </div>

              <div className={styles.inputGroup}>
                <label>Mobile Number</label>
                <div className={styles.mobileInputWrapper}>
                  <span className={styles.countryCode}>+91</span>
                  <input 
                    {...register("mobile", { 
                      required: "Mobile Number is required",
                      pattern: { value: /^[0-9]{10}$/, message: "Enter a valid 10-digit number" },
                      maxLength: 10
                    })} 
                    className={errors.mobile ? styles.inputError : styles.inputField}
                    style={{ paddingLeft: "3.5rem" }}
                    placeholder="9876543210"
                  />
                </div>
                {errors.mobile && <span className={styles.errorText}><AlertCircle size={14}/> {errors.mobile.message}</span>}
              </div>

              <div className={styles.inputGroup}>
                <label>Email Address</label>
                <input 
                  {...register("email", { 
                    required: "Email is required",
                    pattern: { value: /^\S+@\S+$/i, message: "Enter a valid email address" }
                  })} 
                  className={errors.email ? styles.inputError : styles.inputField}
                  placeholder="john@example.com"
                />
                {errors.email && <span className={styles.errorText}><AlertCircle size={14}/> {errors.email.message}</span>}
              </div>

              <div className={styles.inputGroup}>
                <label>Location</label>
                <input 
                  {...register("location", { required: "Location is required" })} 
                  className={errors.location ? styles.inputError : styles.inputField}
                  placeholder="City or Region"
                />
                {errors.location && <span className={styles.errorText}><AlertCircle size={14}/> {errors.location.message}</span>}
              </div>

              <div className={styles.inputGroup}>
                <label>Service Interested In</label>
                <select 
                  {...register("intent", { required: "Please select a service" })}
                  className={errors.intent ? styles.inputError : styles.selectField}
                >
                  <option value="">-- Select an Option --</option>
                  <option value="Water Testing">Water Testing</option>
                  <option value="Creative Design">Creative Design</option>
                  <option value="RO Plant">RO Plant</option>
                  <option value="Other">Other Maintenance</option>
                </select>
                {errors.intent && <span className={styles.errorText}><AlertCircle size={14}/> {errors.intent.message}</span>}
              </div>

              <button type="submit" className={styles.submitBtn}>
                Submit Details
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
