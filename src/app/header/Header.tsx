"use client"
import styles from './index.module.css'
import React from "react";
import logo from '../../../public/pap_logo.png' 
import Image from 'next/image';

const Header = () => {

  const handleClick = () => {
    console.log ("Wow you clicked here")
  }

  return (
    <div className={styles.container}>
      <div className={styles.logo}>
        <Image 
        src={logo} 
        width = {120}
        height={32}
        alt='paprika-logo'
        />
      </div>
        <div className={styles.navLinks}>
          <button className={styles.btns} onClick={handleClick}>About Us</button>
          <button className={styles.btns} onClick={handleClick}>Contact Us</button>
          <button className={styles.btns} onClick={handleClick}>FAQs</button>
          <button className={styles.btns} onClick={handleClick}>Blogs</button>
        </div>
      <div className={styles.ctaContainer}>
        <button className={styles.cta}>Download Now</button>
      </div>
    </div>

  )
}

export default Header;