'use client';

import { useState } from 'react';
import styles from './Registration.module.css';
import ScrollReveal from './ScrollReveal';

interface FormData {
  fullName: string;
  email: string;
  department: string;
  awsLevel: string;
}

interface FormErrors {
  fullName?: string;
  email?: string;
  department?: string;
  awsLevel?: string;
}

export default function Registration() {
  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    email: '',
    department: '',
    awsLevel: '',
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [ticketNumber, setTicketNumber] = useState('');

  const validate = (): boolean => {
    const tempErrors: FormErrors = {};
    let isValid = true;

    if (!formData.fullName.trim()) {
      tempErrors.fullName = 'Full Name is required.';
      isValid = false;
    } else if (formData.fullName.trim().length < 3) {
      tempErrors.fullName = 'Name must be at least 3 characters.';
      isValid = false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      tempErrors.email = 'Email Address is required.';
      isValid = false;
    } else if (!emailRegex.test(formData.email)) {
      tempErrors.email = 'Please enter a valid email address.';
      isValid = false;
    }

    if (!formData.department) {
      tempErrors.department = 'Please select your department / role.';
      isValid = false;
    }

    if (!formData.awsLevel) {
      tempErrors.awsLevel = 'Please select your AWS knowledge level.';
      isValid = false;
    }

    setErrors(tempErrors);
    return isValid;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error for this field
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      setIsSubmitting(true);
      
      // Simulate API submit delay
      setTimeout(() => {
        setIsSubmitting(false);
        const randomTicket = 'REC-AWS-' + Math.floor(100000 + Math.random() * 900000);
        setTicketNumber(randomTicket);
        setShowSuccessModal(true);
        // Reset form
        setFormData({
          fullName: '',
          email: '',
          department: '',
          awsLevel: '',
        });
      }, 1500);
    }
  };

  return (
    <section id="register" className={styles.registrationSection}>
      <div className={styles.container}>
        
        {/* Section Header */}
        <div className={styles.header}>
          <ScrollReveal delay={100}>
            <span className={styles.sectionSubtitle}>Join the cloud</span>
          </ScrollReveal>
          <ScrollReveal delay={200}>
            <h2 className={`${styles.sectionTitle} gradient-text`}>
              Event Registration
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={300}>
            <p className={styles.sectionDescription}>
              Claim your entry pass for AWS Community Day REC. Tickets are free but seating is limited, so register to secure your badge today.
            </p>
          </ScrollReveal>
        </div>

        {/* Registration Form */}
        <div className={styles.formContainer}>
          <ScrollReveal className={styles.formReveal} delay={200}>
            <form onSubmit={handleSubmit} className={`${styles.form} glass-panel`}>
              
              {/* Full Name */}
              <div className={styles.formGroup}>
                <label htmlFor="fullName" className={styles.label}>Full Name</label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  placeholder="e.g. John Doe"
                  className={`${styles.input} ${errors.fullName ? styles.inputError : ''}`}
                />
                {errors.fullName && <span className={styles.errorText}>{errors.fullName}</span>}
              </div>

              {/* Email Address */}
              <div className={styles.formGroup}>
                <label htmlFor="email" className={styles.label}>Email Address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="e.g. john@example.com"
                  className={`${styles.input} ${errors.email ? styles.inputError : ''}`}
                />
                {errors.email && <span className={styles.errorText}>{errors.email}</span>}
              </div>

              {/* Department / Role dropdown */}
              <div className={styles.formGroup}>
                <label htmlFor="department" className={styles.label}>Department / Role</label>
                <select
                  id="department"
                  name="department"
                  value={formData.department}
                  onChange={handleInputChange}
                  className={`${styles.select} ${errors.department ? styles.selectError : ''}`}
                >
                  <option value="">Select your role</option>
                  <option value="Computer Science">CSE / IT / AIDS (Student)</option>
                  <option value="ECE / EEE">ECE / EEE / Mech (Student)</option>
                  <option value="Faculty">REC Faculty / Staff</option>
                  <option value="Professional">Other / External Guest</option>
                </select>
                {errors.department && <span className={styles.errorText}>{errors.department}</span>}
              </div>

              {/* AWS Knowledge Level dropdown */}
              <div className={styles.formGroup}>
                <label htmlFor="awsLevel" className={styles.label}>AWS Knowledge Level</label>
                <select
                  id="awsLevel"
                  name="awsLevel"
                  value={formData.awsLevel}
                  onChange={handleInputChange}
                  className={`${styles.select} ${errors.awsLevel ? styles.selectError : ''}`}
                >
                  <option value="">Select your skill level</option>
                  <option value="Beginner">Beginner (No experience / curious)</option>
                  <option value="Intermediate">Intermediate (Used AWS Console / EC2)</option>
                  <option value="Advanced">Advanced (Serverless / AWS Certified)</option>
                </select>
                {errors.awsLevel && <span className={styles.errorText}>{errors.awsLevel}</span>}
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className={`${styles.submitBtn} glow-button`}
              >
                {isSubmitting ? (
                  <div className={styles.spinner}></div>
                ) : (
                  'Generate My Free Pass'
                )}
              </button>

            </form>
          </ScrollReveal>
        </div>

      </div>

      {/* Success Modal Overlay */}
      {showSuccessModal && (
        <div className={styles.modalOverlay}>
          <div className={`${styles.modal} glass-panel`}>
            <div className={styles.modalHeader}>
              <div className={styles.successIconWrapper}>
                <span className={styles.successIcon}>✓</span>
              </div>
            </div>
            
            <h3 className={styles.modalTitle}>Registration Confirmed!</h3>
            <p className={styles.modalSubtitle}>
              You are all set for AWS Community Day at REC! An email confirmation has been sent.
            </p>

            <div className={styles.ticketCard}>
              <div className={styles.ticketHeader}>
                <span className={styles.ticketEvent}>AWS COMMUNITY DAY 2026</span>
                <span className={styles.ticketRecLogo}>REC</span>
              </div>
              
              <div className={styles.ticketBody}>
                <div className={styles.ticketLabel}>PASS CODE</div>
                <div className={styles.ticketId}>{ticketNumber}</div>
              </div>
              
              <div className={styles.ticketFooter}>
                <div>
                  <div className={styles.ticketLabel}>ACCESS</div>
                  <div className={styles.ticketDetail}>All-Access Auditorium Pass</div>
                </div>
                <div>
                  <div className={styles.ticketLabel}>HOST</div>
                  <div className={styles.ticketDetail}>AWS Student Builders REC</div>
                </div>
              </div>
            </div>

            <button
              onClick={() => setShowSuccessModal(false)}
              className={styles.closeBtn}
            >
              Done
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
