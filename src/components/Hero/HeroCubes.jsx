import React from 'react';
import {BiLinkExternal} from 'react-icons/bi'
import {createRandomShapeClass} from './heroHelper.js'
import styles from './Hero.module.scss';
import cubeStyles from './HeroCubes.scss'

function HeroCubes(props) {
  createRandomShapeClass();
  console.log(createRandomShapeClass())

  // array of all classes with shapes

  // function that returns a random class from the array

  // put that function into className -> may need some trying with styles. and so on working
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

      <div className={`${styles.cube} ${styles.cube1} ${styles.cubesMobile} ${cubeStyles.shape1}}`}></div>
      <div className={`${styles.cube} ${styles.cube2} ${styles.cubesMobile}`}></div>
      <div className={`${styles.cube} ${styles.cube3} ${styles.cubesMobile}`}></div>
      <div className={`${styles.cube} ${styles.cube4} ${styles.cubesMobile}`}></div>
      <div className={`${styles.cube} ${styles.cube5} ${styles.cubesMobile}`}></div>
      <div className={`${styles.cube} ${styles.cube6} ${styles.cubesMobile}`}></div>
      <div className={`${styles.cube} ${styles.cube7} ${styles.cubesMobile}`}></div>
      <div className={`${styles.cube} ${styles.cube8} ${styles.cubesMobile}`}></div>
      <div className={`${styles.cube} ${styles.cube9} ${styles.cubesMobile}`}></div>
      <div className={`${styles.cube} ${styles.cube10} ${styles.cubesMobile}`}></div>
      <div className={`${styles.cube} ${styles.cube11} ${styles.cubesMobile}`}></div>
      <div className={`${styles.cube} ${styles.cube12} ${styles.cubesMobile}`}></div>
      <div className={`${styles.cube} ${styles.cube13} ${styles.cubesTablet}`}></div>
      <div className={`${styles.cube} ${styles.cube14} ${styles.cubesTablet}`}></div>
      <div className={`${styles.cube} ${styles.cube15} ${styles.cubesTablet}`}></div>
      <div className={`${styles.cube} ${styles.cube16} ${styles.cubesDesktop}`}></div>
      <div className={`${styles.cube} ${styles.cube17} ${styles.cubesDesktop}`}></div>
      <div className={`${styles.cube} ${styles.cube18} ${styles.cubesDesktop}`}></div>
      <div className={`${styles.cube} ${styles.cube19} ${styles.cubesDesktop}`}></div>
      <div className={`${styles.cube} ${styles.cube20} ${styles.cubesDesktop}`}></div>
      <div className={`${styles.cube} ${styles.cube21} ${styles.cubesDesktop}`}></div>
      <div className={`${styles.cube} ${styles.cube22} ${styles.cubesDesktop}`}></div>
      <div className={`${styles.cube} ${styles.cube23} ${styles.cubesDesktop}`}></div>
      <div className={`${styles.cube} ${styles.cube24} ${styles.cubesDesktop}`}></div>
      <div className={`${styles.cube} ${styles.cube25} ${styles.cubesDesktop}`}></div>
      <div className={`${styles.cube} ${styles.cube26} ${styles.cubesDesktop}`}></div>
    </div>
  );
}

export default HeroCubes;