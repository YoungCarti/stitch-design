import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components/UI';
import styles from './Home.module.css';

export const Home: React.FC = () => {
  return (
    <div className={styles.container}>
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1 className={styles.title}>
            Design with <span className={styles.accent}>Intelligence</span>
          </h1>
          <p className={styles.subtitle}>
            Stitch is the first design system built for the next generation of web applications. 
            Beautiful, accessible, and fast.
          </p>
          <div className={styles.cta}>
            <Link to="/auth">
              <Button size="large">Get Started</Button>
            </Link>
            <Button variant="secondary" size="large">View Components</Button>
          </div>
        </div>
        <div className={styles.heroImage}>
          {/* Glassmorphism card placeholder */}
          <div className={styles.glassCard}>
            <div className={styles.cardHeader}>
              <div className={styles.dot} style={{ backgroundColor: '#ff5f56' }}></div>
              <div className={styles.dot} style={{ backgroundColor: '#ffbd2e' }}></div>
              <div className={styles.dot} style={{ backgroundColor: '#27c93f' }}></div>
            </div>
            <div className={styles.cardContent}>
              <div className={styles.line} style={{ width: '60%' }}></div>
              <div className={styles.line} style={{ width: '80%' }}></div>
              <div className={styles.line} style={{ width: '40%' }}></div>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.features}>
        <div className={styles.featureGrid}>
          <div className={styles.featureCard}>
            <h3>Atomic Design</h3>
            <p>Built from the ground up with atomic design principles for maximum reusability.</p>
          </div>
          <div className={styles.featureCard}>
            <h3>Type Safe</h3>
            <p>First-class TypeScript support ensures your designs are as robust as your code.</p>
          </div>
          <div className={styles.featureCard}>
            <h3>Accessible</h3>
            <p>WCAG 2.1 compliant components that look great and feel even better.</p>
          </div>
        </div>
      </section>
    </div>
  );
};
