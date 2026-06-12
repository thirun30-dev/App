'use client';

import { useState, useEffect } from 'react';
import styles from './Countdown.module.css';
import ScrollReveal from './ScrollReveal';

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export default function Countdown() {
  const targetDate = '2026-10-24T09:00:00';
  
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);

    const calculateTimeLeft = () => {
      const difference = +new Date(targetDate) - +new Date();
      let timeLeftTemp: TimeLeft = { days: 0, hours: 0, minutes: 0, seconds: 0 };

      if (difference > 0) {
        timeLeftTemp = {
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        };
      }
      return timeLeftTemp;
    };

    setTimeLeft(calculateTimeLeft());

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatNumber = (num: number) => {
    return num < 10 ? `0${num}` : num.toString();
  };

  return (
    <section id="countdown" className={styles.countdownSection}>
      <div className={styles.container}>
        
        {/* Header */}
        <div className={styles.header}>
          <ScrollReveal delay={100}>
            <span className={styles.sectionSubtitle}>Tick-Tock</span>
          </ScrollReveal>
          <ScrollReveal delay={200}>
            <h2 className={`${styles.sectionTitle} gradient-text`}>
              Event Count Down
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={300}>
            <p className={styles.sectionDescription}>
              The countdown to the most anticipated AWS event of the year at REC is officially on. Prepare your systems, configure your credentials, and get ready to launch!
            </p>
          </ScrollReveal>
        </div>

        {/* Counter Cards */}
        <div className={styles.timerGrid}>
          {/* Days Card */}
          <ScrollReveal className={styles.timerCardReveal} delay={100}>
            <div className={`${styles.timerCard} glass-panel`}>
              <div className={styles.digitContainer}>
                <span className={styles.digits}>
                  {isMounted ? formatNumber(timeLeft.days) : '00'}
                </span>
              </div>
              <div className={styles.cardLabel}>Days</div>
              <div className={styles.glowOverlay}></div>
            </div>
          </ScrollReveal>

          {/* Hours Card */}
          <ScrollReveal className={styles.timerCardReveal} delay={200}>
            <div className={`${styles.timerCard} glass-panel`}>
              <div className={styles.digitContainer}>
                <span className={styles.digits}>
                  {isMounted ? formatNumber(timeLeft.hours) : '00'}
                </span>
              </div>
              <div className={styles.cardLabel}>Hours</div>
              <div className={styles.glowOverlay}></div>
            </div>
          </ScrollReveal>

          {/* Minutes Card */}
          <ScrollReveal className={styles.timerCardReveal} delay={300}>
            <div className={`${styles.timerCard} glass-panel`}>
              <div className={styles.digitContainer}>
                <span className={styles.digits}>
                  {isMounted ? formatNumber(timeLeft.minutes) : '00'}
                </span>
              </div>
              <div className={styles.cardLabel}>Minutes</div>
              <div className={styles.glowOverlay}></div>
            </div>
          </ScrollReveal>

          {/* Seconds Card */}
          <ScrollReveal className={styles.timerCardReveal} delay={400}>
            <div className={`${styles.timerCard} glass-panel`}>
              <div className={styles.digitContainer}>
                <span className={`${styles.digits} ${styles.secondsDigit}`}>
                  {isMounted ? formatNumber(timeLeft.seconds) : '00'}
                </span>
              </div>
              <div className={styles.cardLabel}>Seconds</div>
              <div className={styles.glowOverlay}></div>
            </div>
          </ScrollReveal>
        </div>

        {/* Target details block */}
        <ScrollReveal className={styles.infoBlockReveal} delay={300}>
          <div className={styles.infoBlock}>
            <div className={styles.infoItem}>
              <span className={styles.infoTitle}>Target Date</span>
              <span className={styles.infoValue}>October 24, 2026</span>
            </div>
            <div className={styles.infoDivider}></div>
            <div className={styles.infoItem}>
              <span className={styles.infoTitle}>Starting Time</span>
              <span className={styles.infoValue}>09:00 AM IST</span>
            </div>
            <div className={styles.infoDivider}></div>
            <div className={styles.infoItem}>
              <span className={styles.infoTitle}>Venue</span>
              <span className={styles.infoValue}>REC Main Auditorium</span>
            </div>
          </div>
        </ScrollReveal>

      </div>
    </section>
  );
}
