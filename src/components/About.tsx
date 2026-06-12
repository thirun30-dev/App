'use client';

import { useState } from 'react';
import styles from './About.module.css';
import ScrollReveal from './ScrollReveal';

interface FeatureCardProps {
  icon: string;
  title: string;
  description: string;
  delay: number;
}

function FeatureCard({ icon, title, description, delay }: FeatureCardProps) {
  return (
    <ScrollReveal className={styles.cardWrapper} delay={delay}>
      <div className={`${styles.card} glass-panel`}>
        <div className={styles.cardHeader}>
          <div className={styles.iconContainer}>{icon}</div>
        </div>
        <h3 className={styles.cardTitle}>{title}</h3>
        <p className={styles.cardDescription}>{description}</p>
        <div className={styles.cardHoverBorder}></div>
      </div>
    </ScrollReveal>
  );
}

export default function About() {
  const [activeTab, setActiveTab] = useState<'tracks' | 'agenda'>('tracks');

  const features = [
    {
      icon: '🤖',
      title: 'Generative AI & Bedrock',
      description: 'Learn to build and scale next-generation AI agents. Deep dive into foundation models (FMs) using Amazon Bedrock, fine-tuning, and Retrieval-Augmented Generation (RAG).',
      delay: 100,
    },
    {
      icon: '⚡',
      title: 'Serverless Architectures',
      description: 'Master serverless microservices at scale. Deploy event-driven backend systems using AWS Lambda, API Gateway, DynamoDB, and state machine orchestration with AWS Step Functions.',
      delay: 200,
    },
    {
      icon: '🛡️',
      title: 'Cloud Security & DevOps',
      description: 'Automate deployments securely. Implement Infrastructure as Code (IaC) with AWS CDK, secure secrets management, and set up robust CI/CD pipelines via GitHub Actions.',
      delay: 300,
    },
    {
      icon: '🎓',
      title: 'Career & Certifications',
      description: 'Elevate your cloud journey. Engage with AWS Experts on preparation for Solutions Architect, Developer, and SysOps certifications, along with career panel Q&A.',
      delay: 400,
    },
  ];

  const agenda = [
    { time: '08:30 AM - 09:15 AM', title: 'Registration & Check-In', speaker: 'REC Campus Lobby', description: 'Collect your welcome badge, event program booklet, and custom builder stickers.' },
    { time: '09:15 AM - 10:00 AM', title: 'Opening Keynote: Scaling Innovation with Generative AI on AWS', speaker: 'AWS Developer Advocate / Community Leader', description: 'Exploring how Bedrock and AWS Q are changing the landscape of cloud-native development.' },
    { time: '10:00 AM - 11:00 AM', title: 'Technical Session: Building Event-Driven Apps with AWS CDK', speaker: 'AWS Solutions Architect Mentor', description: 'Step-by-step guidance on constructing production-ready serverless configurations using CDK.' },
    { time: '11:00 AM - 11:30 AM', title: 'High Tea & Networking Break', speaker: 'Exhibition Hall', description: 'Meet local builders, check out sponsor booths, and discuss project architectures.' },
    { time: '11:30 AM - 01:00 PM', title: 'Hands-on Lab: Deploying Custom RAG Agents on Bedrock', speaker: 'REC Lab 3 & Lab 4 Instructors', description: 'Bring your laptop! Build an AI search engine trained on custom PDF documentation using Bedrock Knowledge Bases.' },
    { time: '01:00 PM - 02:00 PM', title: 'Networking Lunch', speaker: 'REC Cafeteria', description: 'A catered buffet for all registered attendees. Connect with peers and AWS mentors.' },
    { time: '02:00 PM - 03:00 PM', title: 'Panel Discussion: Launching a Career in Cloud Computing', speaker: 'Cloud Tech Panelists & REC Alumni', description: 'Discussing the transition from student to cloud engineer, open-source projects, and AWS certifications.' },
    { time: '03:00 PM - 03:45 PM', title: 'AWS Cloud Quest & Live Quiz Challenge', speaker: 'AWS Student Builders REC Hosts', description: 'Participate in a gamified cloud quiz. Top 10 scorers win premium AWS hoodies and cloud credit vouchers.' },
    { time: '03:45 PM - 04:00 PM', title: 'Closing Remarks & Group Photo', speaker: 'Main Auditorium', description: 'Event wrap-up, distribution of participation certificates, and group picture.' },
  ];

  return (
    <section id="about" className={styles.aboutSection}>
      <div className={styles.container}>
        
        {/* Section Header */}
        <div className={styles.header}>
          <ScrollReveal delay={100}>
            <span className={styles.sectionSubtitle}>REC Event Highlights</span>
          </ScrollReveal>
          <ScrollReveal delay={200}>
            <h2 className={`${styles.sectionTitle} gradient-text`}>
              About AWS Community Day at REC
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={300}>
            <p className={styles.sectionDescription}>
              AWS Community Day is a peer-to-peer learning event organized for students, by students. Spearheaded by the **AWS Student Builders Group at REC**, this conference is designed to demystify complex cloud concepts, provide hands-on workshop experience, and foster a local developer community.
            </p>
          </ScrollReveal>
        </div>

        {/* Tab Controls */}
        <ScrollReveal className={styles.tabContainerReveal} delay={200}>
          <div className={styles.tabContainer}>
            <button
              onClick={() => setActiveTab('tracks')}
              className={`${styles.tabBtn} ${activeTab === 'tracks' ? styles.tabBtnActive : ''}`}
            >
              Key Learning Tracks
            </button>
            <button
              onClick={() => setActiveTab('agenda')}
              className={`${styles.tabBtn} ${activeTab === 'agenda' ? styles.tabBtnActive : ''}`}
            >
              Event Agenda / Schedule
            </button>
          </div>
        </ScrollReveal>

        {/* Tab Contents */}
        {activeTab === 'tracks' ? (
          <div className={styles.grid}>
            {features.map((feature, idx) => (
              <FeatureCard
                key={idx}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
                delay={feature.delay}
              />
            ))}
          </div>
        ) : (
          <div className={styles.timelineContainer}>
            {agenda.map((item, idx) => (
              <ScrollReveal key={idx} className={styles.timelineItemReveal} delay={idx * 50}>
                <div className={styles.timelineItem}>
                  <div className={styles.timelineTime}>
                    <span className={styles.timeBadge}>{item.time}</span>
                  </div>
                  <div className={styles.timelineDotContainer}>
                    <span className={styles.timelineDot}></span>
                    {idx !== agenda.length - 1 && <span className={styles.timelineLine}></span>}
                  </div>
                  <div className={`${styles.timelineContent} glass-panel`}>
                    <h3 className={styles.timelineTitle}>{item.title}</h3>
                    <div className={styles.timelineSpeaker}>
                      <span className={styles.speakerIcon}>👤</span> {item.speaker}
                    </div>
                    <p className={styles.timelineDescription}>{item.description}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        )}

        {/* Club Details Block */}
        <ScrollReveal className={styles.clubBlockReveal} delay={200}>
          <div className={`${styles.clubBlock} glass-panel`}>
            <div className={styles.clubBlockContent}>
              <div className={styles.clubBlockText}>
                <h3 className={styles.clubBlockTitle}>AWS Student Builders Group at REC</h3>
                <p className={styles.clubBlockPara}>
                  We are a student-led organization at Rajalakshmi Engineering College affiliated with AWS. Our mission is to build cloud skills through hands-on technical labs, peer-to-peer mentoring, hackathons, and certifications bootcamps. Whether you are completely new to the cloud or scaling serverless microservices, there is a place for you to build here.
                </p>
              </div>
              <div className={styles.logoBadgeContainer}>
                <img
                  src="/club-logo.png"
                  alt="REC AWS Club"
                  className={styles.clubBlockLogo}
                />
              </div>
            </div>
          </div>
        </ScrollReveal>

      </div>
    </section>
  );
}
