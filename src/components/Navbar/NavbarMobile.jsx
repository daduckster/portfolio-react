import React from 'react';
import {handleClick, handleCloseMenu, smoothScroll} from "./navbarHelper";
import styles from "./NavbarMobile.module.scss";
import {GiHamburgerMenu} from "react-icons/gi";

function NavbarMobile(props) {

  return (
    <div className={styles.hamburgerContainer}>
      <div className={styles.circle}>
        <GiHamburgerMenu onClick={handleClick} className={`hamburgerIcon ${styles.hamburgerIcon}`}/>
      </div>

      <div className={`mobileMenu ${styles.container} ${styles.hidden}`}>
        <div onClick={handleCloseMenu} className={`darken ${styles.darken}`}></div>
        <div className={styles.mobileMenuContainer}>
          <div className={styles.mobileLinksContainer}>
            <a href="#home" className={styles.link} onClick={(e) => {
              smoothScroll(e);
              handleCloseMenu();
            }}>home</a>
            <a href="#tech" className={styles.link} onClick={(e) => {
              smoothScroll(e);
              handleCloseMenu();
            }}>tech</a>
            <a href="#projects" className={styles.link} onClick={(e) => {
              smoothScroll(e);
              handleCloseMenu();
            }}>projects</a>
            <a href="#about" className={styles.link} onClick={(e) => {
              smoothScroll(e);
              handleCloseMenu();
            }}>about me</a>
            <a href="#contacts" className={styles.link} onClick={(e) => {
              smoothScroll(e);
              handleCloseMenu();
            }}>contacts</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NavbarMobile;