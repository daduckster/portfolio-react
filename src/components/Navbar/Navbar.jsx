import React  from 'react'
import {smoothScroll} from "./navbarHelper";
import styles from './Navbar.module.scss';
import NavbarMobile from "./NavbarMobile";

function Navbar() {

  return (
    <nav className={styles.navContainer} id={'home'}>
      <NavbarMobile />
      <div className={styles.linkContainer}>
        <a href={"#home"} onClick={(e) => smoothScroll(e)} className={styles.link}>home</a>
        <a href={"#tech"} onClick={(e) => smoothScroll(e)} className={styles.link}>tech</a>
        <a href={"#projects"} onClick={(e) => smoothScroll(e)} className={styles.link}>projects</a>
        <a href={"#about"} onClick={(e) => smoothScroll(e)} className={styles.link}>about me</a>
        <a href={"#contacts"} onClick={(e) => smoothScroll(e)} className={styles.link}>contacts</a>
      </div>
    </nav>

  )
}

export default Navbar