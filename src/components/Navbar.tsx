'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import styles from './Navbar.module.css';

export default function Navbar() {
  const [activeSection, setActiveSection] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Background blur effect on scroll
      setScrolled(window.scrollY > 20);

      // Active section calculation
      const sections = ['home', 'about', 'countdown', 'register'];
      const scrollPosition = window.scrollY + 100; // Offset for navbar height

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const el = document.getElementById(targetId);
    if (el) {
      const offset = 80; // Navbar height offset
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = el.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}>
      <div className={styles.container}>
        {/* Left Side: Logo */}
        <div className={styles.logoContainer}>
          <a
            href="#about"
            onClick={(e) => handleNavClick(e, 'about')}
            className={styles.logoLink}
            aria-label="Navigate to About Section"
          >
            <div className={styles.logoWrapper}>
              <Image
                src="/club-logo.png"
                alt="AWS Student Builders Group REC Logo"
                width={48}
                height={48}
                className={styles.logo}
                priority
              />
              <span className={styles.logoTooltip}>About REC Group</span>
            </div>
          </a>
        </div>

        {/* Center: Navigation Links */}
        <nav className={styles.nav}>
          <ul className={styles.navList}>
            <li>
              <a
                href="#home"
                onClick={(e) => handleNavClick(e, 'home')}
                className={`${styles.navLink} ${activeSection === 'home' ? styles.active : ''}`}
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#about"
                onClick={(e) => handleNavClick(e, 'about')}
                className={`${styles.navLink} ${activeSection === 'about' ? styles.active : ''}`}
              >
                About REC
              </a>
            </li>
            <li>
              <a
                href="#countdown"
                onClick={(e) => handleNavClick(e, 'countdown')}
                className={`${styles.navLink} ${activeSection === 'countdown' ? styles.active : ''}`}
              >
                Count Down
              </a>
            </li>
            <li>
              <a
                href="#register"
                onClick={(e) => handleNavClick(e, 'register')}
                className={`${styles.navLink} ${activeSection === 'register' ? styles.active : ''}`}
              >
                Registration
              </a>
            </li>
          </ul>
        </nav>

        {/* Right side spacer to keep navbar links perfectly centered */}
        <div className={styles.rightSpacer}>
          <a
            href="#register"
            onClick={(e) => handleNavClick(e, 'register')}
            className={styles.navCTA}
          >
            Join Event
          </a>
        </div>
      </div>
    </header>
  );
}
