"use client"
import styles from './index.module.css'
import React from "react";
import logo from '../../../public/pap_logo.png' 
import Image from 'next/image';
import Link from 'next/link';

const Header = () => {

  return (
    <div className={styles.container}>
      <div className={styles.logo}>
        <Link href='/'>
        <Image 
        src={logo} 
        width = {120}
        height={32}
        alt='paprika-logo'
        />
        </Link>
      </div>
        <div className={styles.navLinks}>
          <Link href='/about' className={styles.btns}>About Us</Link>
          <Link href='/contactUs' className={styles.btns}>Contact Us</Link>
          <Link href='/faqs' className={styles.btns}>FAQs</Link>
          <Link href='/blogs' className={styles.btns}>Blogs</Link>
        </div>
      <div className={styles.ctaContainer}>
        <button className={styles.cta}>Download Now</button>
      </div>
    </div>

  )
}

export default Header;