'use client';

import styles from './Hero.module.css';
import ScrollReveal from './ScrollReveal';

export default function Hero() {
  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const el = document.getElementById(targetId);
    if (el) {
      const offset = 80;
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
    <section id="home" className={styles.heroSection}>
      {/* Visual cyber design elements */}
      <div className={styles.radialBacklight}></div>
      
      <div className={styles.container}>
        <div className={styles.grid}>
          {/* Hero Left: Copywriting and CTA */}
          <div className={styles.heroLeft}>
            <ScrollReveal className={styles.badgeReveal} delay={100}>
              <div className={styles.clubBadge}>
                <span className={styles.badgeDot}></span>
                AWS Student Builders Group at REC
              </div>
            </ScrollReveal>

            <ScrollReveal className={styles.titleReveal} delay={200}>
              <h1 className={`${styles.mainTitle} gradient-text`}>
                AWS Community Day
              </h1>
            </ScrollReveal>

            <ScrollReveal className={styles.subtitleReveal} delay={300}>
              <p className={styles.description}>
                Join us for an immersive day of cloud computing innovation, expert keynotes, hands-on serverless labs, and career-boosting networking opportunities. Hosted at Rajalakshmi Engineering College.
              </p>
            </ScrollReveal>

            <ScrollReveal className={styles.ctaReveal} delay={450}>
              <div className={styles.ctaGroup}>
                <a
                  href="#register"
                  onClick={(e) => handleScrollTo(e, 'register')}
                  className="glow-button"
                >
                  <span className={styles.ctaText}>Secure Your Spot</span>
                </a>
                <a
                  href="#about"
                  onClick={(e) => handleScrollTo(e, 'about')}
                  className={styles.secondaryCTA}
                >
                  Explore Schedule
                </a>
              </div>
            </ScrollReveal>
          </div>

          {/* Hero Right: Decorative Glowing 3D-like Card */}
          <div className={styles.heroRight}>
            <ScrollReveal className={styles.visualReveal} delay={400}>
              <div className={styles.cyberCardWrapper}>
                <div className={`${styles.cyberCard} glass-panel`}>
                  <div className={styles.cardHeader}>
                    <div className={styles.dotGroup}>
                      <span className={styles.windowDot} style={{ backgroundColor: '#ff5f56' }}></span>
                      <span className={styles.windowDot} style={{ backgroundColor: '#ffbd2e' }}></span>
                      <span className={styles.windowDot} style={{ backgroundColor: '#27c93f' }}></span>
                    </div>
                    <span className={styles.terminalLabel}>aws_builder_terminal.sh</span>
                  </div>
                  <div className={styles.cardBody}>
                    <div className={styles.terminalLine}>
                      <span className={styles.prompt}>$</span>
                      <span className={styles.command}>aws configure get region</span>
                    </div>
                    <div className={styles.outputLine}>ap-south-1 (Mumbai)</div>
                    
                    <div className={styles.terminalLine}>
                      <span className={styles.prompt}>$</span>
                      <span className={styles.command}>npm run fetch-event-details</span>
                    </div>
                    <div className={styles.outputLine}>
                      <span className={styles.detailLabel}>Event:</span> AWS Community Day REC<br />
                      <span className={styles.detailLabel}>Location:</span> REC Campus Auditorium<br />
                      <span className={styles.detailLabel}>Status:</span> <span className={styles.statusLive}>REGISTRATION_ACTIVE</span><br />
                      <span className={styles.detailLabel}>Cost:</span> FREE (Registration Required)
                    </div>
                    
                    <div className={styles.terminalLine}>
                      <span className={styles.prompt}>$</span>
                      <span className={styles.command}>aws cloud --deploy --fun</span>
                    </div>
                    <div className={styles.typingCursorContainer}>
                      <span className={styles.typingText}>Deploying innovation...</span>
                      <span className={styles.cursor}>_</span>
                    </div>
                  </div>
                </div>
                {/* Floating details badge */}
                <div className={`${styles.floatingBadge} glass-panel`}>
                  <div className={styles.floatingBadgeIcon}>☁️</div>
                  <div>
                    <div className={styles.floatingBadgeTitle}>100% Cloud</div>
                    <div className={styles.floatingBadgeSub}>Serverless & DevOps</div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
