import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Countdown from '@/components/Countdown';
import Registration from '@/components/Registration';
import ScrollReveal from '@/components/ScrollReveal';

export default function Home() {
  return (
    <>
      {/* Background Decorative Mesh Glows & Grid */}
      <div className="bg-grid"></div>
      <div className="bg-glow-1"></div>
      <div className="bg-glow-2"></div>

      {/* Main Navigation */}
      <Navbar />

      {/* Main Sections */}
      <main>
        {/* Home Section */}
        <Hero />

        {/* About Section */}
        <About />

        {/* Countdown Section */}
        <Countdown />

        {/* Registration Section */}
        <Registration />
      </main>

      {/* Footer */}
      <footer style={{
        padding: '40px 24px',
        backgroundColor: '#020617',
        borderTop: '1px solid rgba(255, 255, 255, 0.05)',
        textAlign: 'center',
        position: 'relative',
        zIndex: 10
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '16px'
        }}>
          <ScrollReveal delay={100}>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              fontFamily: 'var(--font-heading)',
              fontWeight: 700,
              fontSize: '1rem',
              color: 'var(--accent-cyan)'
            }}>
              <img
                src="/club-logo.png"
                alt="AWS Student Builders Group REC Logo"
                style={{ width: '30px', height: '30px', objectFit: 'contain', borderRadius: '50%' }}
              />
              AWS Student Builders REC
            </div>
          </ScrollReveal>
          
          <ScrollReveal delay={200}>
            <p style={{
              fontSize: '0.85rem',
              color: 'var(--text-secondary)',
              lineHeight: 1.5,
              maxWidth: '500px'
            }}>
              A community of student builders passionate about cloud development and innovation. Empowering careers, hosting workshops, and sharing knowledge.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={300}>
            <div style={{
              fontSize: '0.75rem',
              color: 'var(--text-muted)',
              marginTop: '12px'
            }}>
              © {new Date().getFullYear()} AWS Student Builders Group at REC. All rights reserved.
            </div>
          </ScrollReveal>
        </div>
      </footer>
    </>
  );
}
