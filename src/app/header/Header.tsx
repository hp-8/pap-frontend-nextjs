"use client"

// Import necessary modules and styles
import styles from './index.module.css';
import React from "react";
import logo from '../../../public/pap_logo.png'; 
import Image from 'next/image';
import Link from 'next/link';

// Header component definition
const Header = () => {
  return (
    <div className={styles.container}>
      {/* Logo with link to homepage */}
      <div className={styles.logo}>
        <Link href='/'>
          <Image 
            src={logo} 
            width={120}
            height={32}
            alt='paprika-logo'
          />
        </Link>
      </div>

      {/* Navigation links */}
      <div className={styles.navLinks}>
        <Link href='/about' className={styles.btns}>About Us</Link>
        <Link href='/contactUs' className={styles.btns}>Contact Us</Link>
        <Link href='/faqs' className={styles.btns}>FAQs</Link>
        <Link href='/blogs' className={styles.btns}>Blogs</Link>
      </div>

      {/* Call-to-action button container */}
      <div className={styles.ctaContainer}>
        <button className={styles.cta}>Download Now</button>
      </div>
    </div>
  );
};

export default Header;
