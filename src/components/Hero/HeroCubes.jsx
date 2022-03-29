import React, {useState, useEffect} from 'react';
import {BiLinkExternal} from 'react-icons/bi'
import {createRandomShapeClass} from './heroHelper.js'
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

      <div className={`cube1 ${styles.cube1} ${styles.cubesMobile} ${styles[createRandomShapeClass()]}`}></div>
      <div className={`cube2 ${styles.cube2} ${styles.cubesMobile} ${styles[createRandomShapeClass()]}`}></div>
      <div className={`cube3 ${styles.cube3} ${styles.cubesMobile} ${styles[createRandomShapeClass()]}`}></div>
      <div className={`cube4 ${styles.cube4} ${styles.cubesMobile} ${styles[createRandomShapeClass()]}`}></div>
      <div className={`cube5 ${styles.cube5} ${styles.cubesMobile} ${styles[createRandomShapeClass()]}`}></div>
      <div className={`cube6 ${styles.cube6} ${styles.cubesMobile} ${styles[createRandomShapeClass()]}`}></div>
      <div className={`cube7 ${styles.cube7} ${styles.cubesMobile} ${styles[createRandomShapeClass()]}`}></div>
      <div className={`cube8 ${styles.cube8} ${styles.cubesMobile} ${styles[createRandomShapeClass()]}`}></div>
      <div className={`cube9 ${styles.cube9} ${styles.cubesMobile} ${styles[createRandomShapeClass()]}`}></div>
      <div className={`cube10 ${styles.cube10} ${styles.cubesMobile} ${styles[createRandomShapeClass()]}`}></div>
      <div className={`cube11 ${styles.cube11} ${styles.cubesMobile} ${styles[createRandomShapeClass()]}`}></div>
      <div className={`cube12 ${styles.cube12} ${styles.cubesMobile} ${styles[createRandomShapeClass()]}`}></div>
      <div className={`cube13 ${styles.cube13} ${styles.cubesMobile} ${styles[createRandomShapeClass()]}`}></div>
      <div className={`cube14 ${styles.cube14} ${styles.cubesMobile} ${styles[createRandomShapeClass()]}`}></div>
      <div className={`cube15 ${styles.cube15} ${styles.cubesTablet} ${styles[createRandomShapeClass()]}`}></div>
      <div className={`cube16 ${styles.cube16} ${styles.cubesTablet} ${styles[createRandomShapeClass()]}`}></div>
      <div className={`cube17 ${styles.cube17} ${styles.cubesTablet} ${styles[createRandomShapeClass()]}`}></div>
      <div className={`cube18 ${styles.cube18} ${styles.cubesTablet} ${styles[createRandomShapeClass()]}`}></div>
      <div className={`cube19 ${styles.cube19} ${styles.cubesTablet} ${styles[createRandomShapeClass()]}`}></div>
      <div className={`cube20 ${styles.cube20} ${styles.cubesTablet} ${styles[createRandomShapeClass()]}`}></div>
      <div className={`cube21 ${styles.cube21} ${styles.cubesTablet} ${styles[createRandomShapeClass()]}`}></div>
      <div className={`cube22 ${styles.cube22} ${styles.cubesTablet} ${styles[createRandomShapeClass()]}`}></div>
      <div className={`cube23 ${styles.cube23} ${styles.cubesTablet} ${styles[createRandomShapeClass()]}`}></div>
      <div className={`cube24 ${styles.cube24} ${styles.cubesTablet} ${styles[createRandomShapeClass()]}`}></div>
      <div className={`cube25 ${styles.cube25} ${styles.cubesTablet} ${styles[createRandomShapeClass()]}`}></div>
      <div className={`cube26 ${styles.cube26} ${styles.cubesTablet} ${styles[createRandomShapeClass()]}`}></div>
      <div className={`cube27 ${styles.cube27} ${styles.cubesDesktop} ${styles[createRandomShapeClass()]}`}></div>
      <div className={`cube28 ${styles.cube28} ${styles.cubesDesktop} ${styles[createRandomShapeClass()]}`}></div>
      <div className={`cube29 ${styles.cube29} ${styles.cubesDesktop} ${styles[createRandomShapeClass()]}`}></div>
      <div className={`cube30 ${styles.cube30} ${styles.cubesDesktop} ${styles[createRandomShapeClass()]}`}></div>
      <div className={`cube31 ${styles.cube31} ${styles.cubesDesktop} ${styles[createRandomShapeClass()]}`}></div>
      <div className={`cube32 ${styles.cube32} ${styles.cubesDesktop} ${styles[createRandomShapeClass()]}`}></div>
    </div>
  );
}

export default React.memo(HeroCubes);