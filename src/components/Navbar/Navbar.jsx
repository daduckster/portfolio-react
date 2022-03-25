import React  from 'react'
import {GiHamburgerMenu} from 'react-icons/gi'
import styles from './Navbar.module.scss';

function Navbar() {

  return (
    <div className={styles.navContainer}>
      <div className={styles.hamburgerContainer}>
        <GiHamburgerMenu className={styles.hamburgerIcon}/>
      </div>
      <div className={styles.linkContainer}>
        <a href="#" className={styles.link}>home</a>
        <a href="#" className={styles.link}>tech</a>
        <a href="#" className={styles.link}>projects</a>
        <a href="#" className={styles.link}>about me</a>
        <a href="#" className={styles.link}>contact</a>
      </div>
    </div>

  )
}

export default Navbar