import React from 'react';
import {BiLinkExternal} from 'react-icons/bi'
import styles from './Hero.module.scss';

function HeroCubes(props) {
  return (
    <div className={styles.heroContainer}>
      <div className={styles.headerContainer}>
        <p>Olya Vlasak,</p>
        <h1>WEB DEVELOPER</h1>
        <div className={styles.btnContainer}>
          <a href="#" className={styles.projectBtn}>PROJECTS</a>
          <div className={styles.contactContainer}>
            <BiLinkExternal className={styles.contactIcon}/>
            <a href="#" className={styles.contactBtn}> Contact Me</a>
          </div>
        </div>
      </div>

      <div className={`${styles.cube1} ${styles.cubesMobile}`}></div>
      <div className={`${styles.cube2} ${styles.cubesMobile}`}></div>
      <div className={`${styles.cube3} ${styles.cubesMobile}`}></div>
      <div className={`${styles.cube4} ${styles.cubesMobile}`}></div>
      <div className={`${styles.cube5} ${styles.cubesMobile}`}></div>
      <div className={`${styles.cube6} ${styles.cubesMobile}`}></div>
      <div className={`${styles.cube7} ${styles.cubesMobile}`}></div>
      <div className={`${styles.cube8} ${styles.cubesMobile}`}></div>
      <div className={`${styles.cube9} ${styles.cubesMobile}`}></div>
      <div className={`${styles.cube10} ${styles.cubesMobile}`}></div>
      <div className={`${styles.cube11} ${styles.cubesMobile}`}></div>
      <div className={`${styles.cube12} ${styles.cubesMobile}`}></div>
      <div className={`${styles.cube13} ${styles.cubesTablet}`}></div>
      <div className={`${styles.cube14} ${styles.cubesTablet}`}></div>
      <div className={`${styles.cube15} ${styles.cubesTablet}`}></div>
      <div className={`${styles.cube16} ${styles.cubesDesktop}`}></div>
      <div className={`${styles.cube17} ${styles.cubesDesktop}`}></div>
      <div className={`${styles.cube18} ${styles.cubesDesktop}`}></div>
      <div className={`${styles.cube19} ${styles.cubesDesktop}`}></div>
      <div className={`${styles.cube20} ${styles.cubesDesktop}`}></div>
      <div className={`${styles.cube21} ${styles.cubesDesktop}`}></div>
      <div className={`${styles.cube22} ${styles.cubesDesktop}`}></div>
      <div className={`${styles.cube23} ${styles.cubesDesktop}`}></div>
      <div className={`${styles.cube24} ${styles.cubesDesktop}`}></div>
      <div className={`${styles.cube25} ${styles.cubesDesktop}`}></div>
      <div className={`${styles.cube26} ${styles.cubesDesktop}`}></div>
    </div>
  );
}

export default HeroCubes;