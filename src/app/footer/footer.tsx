"use client"

// Import necessary modules and styles
import React from 'react';
import styles from './index.module.css';
import Link from 'next/link';
import Image from 'next/image';
import logo from '../../../public/pap_logo.png';

// Footer component definition
const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>
        
        {/* Left container with logo and description */}
        <div className={styles.leftContainer}>
          <div className={styles.logo}>
            <Image src={logo} height={32} width={120} alt='Logo Image' />
          </div>
          <p className={styles.footerDescription}>
            We help people with dietary preferences find delicious restaurants.
          </p>
        </div>

        {/* Right container with navigation links */}
        <div className={styles.rightContainer}>
          <nav className={styles.footerNav}>
            <Link href="/about">About</Link>
            <Link href="/waitList">Join Our Waitlist</Link>
            <Link href="/contactUs">Contact Us</Link>
            <Link href="/TnC">Terms and Conditions</Link>
            <Link href="/faqs">FAQs</Link>
            <Link href="/privacy">Privacy Policy</Link>
          </nav>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
