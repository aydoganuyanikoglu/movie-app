'use client'
import Link from 'next/link';
import React,{useState} from 'react';
import styles from '../styles/navbar.module.scss'
import { useAuth } from '../contexts/AuthContext';

const Navbar = () => {
  const [sideBar, setSideBar] = useState(false)
  const {userLoggedIn} = useAuth()
  
  return (
    <header className={`${styles.navContainer} ${sideBar ? styles.navContainerResponsive : ''}`}>
      <nav className={styles.nav}>
        <div className={styles.navLeft}>
          <Link className={styles.navLeftLogoPart} href="/">
            <img className={styles.logo} loading='lazy' src="/logo.jpg" alt="cinema" />
            <h1><b>neoflema</b><span className='font-light'>TV</span></h1>
          </Link>
          <div className={styles.categories}>
            <div className={styles.categoryTitle}>
              <p>Categories</p>
              <img className={styles.arrow} loading='lazy' src="/arrow-down.svg" alt="" />
            </div>
            <ul className={styles.categoryNames}>
              <li>Coming Soon..</li>
            </ul>
          </div>
        </div>
        <div className={styles.navRight}>
          {
            userLoggedIn 
            ?
            <div className={styles.navRightLinks}>
              <Link className={`${styles.navRightLink} ${styles.navRightProfile}`} href="/profile">Profile</Link>
              <Link className={`${styles.navRightLink} ${styles.navRightCategories}`} href="/categories">Categories</Link>
            </div>
            :
            <div className={styles.navRightLinks}>
              <Link className={styles.navRightLink} href="/register">Register</Link>
              <Link className={styles.navRightLink} href="/login">Login</Link>
              <Link className={`${styles.navRightLink} ${styles.navRightCategories}`} href="/categories">Categories</Link>
            </div>
          }
        </div>
      </nav>
      <img onClick={() => setSideBar(!sideBar)} className={styles.menuOpenClose} src={sideBar ? '/close.svg' : '/menu.svg'} loading='lazy' alt="" />
    </header>
  );
};

export default Navbar;
