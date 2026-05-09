import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styles from './Layout.module.css';

export const Navbar: React.FC = () => {
  const navigate = useNavigate();

  return (
    <nav className={styles.navbar}>
      <div className={styles.logo} onClick={() => navigate('/')}>
        STITCH
      </div>
      <div className={styles.links}>
        <Link to="/">Solutions</Link>
        <Link to="/">Resources</Link>
        <Link to="/">Pricing</Link>
      </div>
      <div className={styles.actions}>
        <Link to="/auth">Sign In</Link>
        <button className={styles.getStarted} onClick={() => navigate('/auth')}>
          Get Started
        </button>
      </div>
    </nav>
  );
};

export const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerGrid}>
        <div className={styles.brand}>
          <div className={styles.footerLogo}>STITCH</div>
          <p>The next generation design system for modern web apps.</p>
        </div>
        <div className={styles.footerLinks}>
          <h4>Product</h4>
          <a href="#">Components</a>
          <a href="#">Templates</a>
          <a href="#">Themes</a>
        </div>
        <div className={styles.footerLinks}>
          <h4>Company</h4>
          <a href="#">About</a>
          <a href="#">Careers</a>
          <a href="#">Contact</a>
        </div>
        <div className={styles.footerLinks}>
          <h4>Social</h4>
          <a href="#">Twitter</a>
          <a href="#">GitHub</a>
          <a href="#">Discord</a>
        </div>
      </div>
      <div className={styles.bottomBar}>
        <p>© 2024 Stitch Inc. All rights reserved.</p>
      </div>
    </footer>
  );
};
