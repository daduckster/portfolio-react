import React, {useState, useEffect} from 'react';
import {BiLinkExternal} from 'react-icons/bi'
import {createRandomShapeClass} from './heroHelper.js'
import styles from './Hero.module.scss';

function HeroCubes(props) {

  let screenWidth = 0;
  let screenHeight = 0;

  const [screenSize, getDimension] = useState({
    dynamicWidth: window.innerWidth,
    dynamicHeight: window.innerHeight
  });

  const setDimension = () => {
    getDimension({
      dynamicWidth: window.innerWidth,
      dynamicHeight: window.innerHeight
    })
  }

  useEffect(() => {
    window.addEventListener('resize', setDimension);
    return(() => {
      window.removeEventListener('resize', setDimension);
    })
  }, [screenSize])

  screenWidth = screenSize.dynamicWidth
  screenHeight = screenSize.dynamicHeight

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

      <div className={`${styles.cube} ${styles.cube1} ${styles.cubesMobile} ${styles[createRandomShapeClass()]}`}></div>
      <div className={`${styles.cube} ${styles.cube2} ${styles.cubesMobile} ${styles[createRandomShapeClass()]}`}></div>
      <div className={`${styles.cube} ${styles.cube3} ${styles.cubesMobile} ${styles[createRandomShapeClass()]}`}></div>
      <div className={`${styles.cube} ${styles.cube4} ${styles.cubesMobile} ${styles[createRandomShapeClass()]}`}></div>
      <div className={`${styles.cube} ${styles.cube5} ${styles.cubesMobile} ${styles[createRandomShapeClass()]}`}></div>
      <div className={`${styles.cube} ${styles.cube6} ${styles.cubesMobile} ${styles[createRandomShapeClass()]}`}></div>
      <div className={`${styles.cube} ${styles.cube7} ${styles.cubesMobile} ${styles[createRandomShapeClass()]}`}></div>
      <div className={`${styles.cube} ${styles.cube8} ${styles.cubesMobile} ${styles[createRandomShapeClass()]}`}></div>
      <div className={`${styles.cube} ${styles.cube9} ${styles.cubesMobile} ${styles[createRandomShapeClass()]}`}></div>
      <div className={`${styles.cube} ${styles.cube10} ${styles.cubesMobile} ${styles[createRandomShapeClass()]}`}></div>
      <div className={`${styles.cube} ${styles.cube11} ${styles.cubesMobile} ${styles[createRandomShapeClass()]}`}></div>
      <div className={`${styles.cube} ${styles.cube12} ${styles.cubesMobile} ${styles[createRandomShapeClass()]}`}></div>
      <div className={`${styles.cube} ${styles.cube13} ${styles.cubesTablet} ${styles[createRandomShapeClass()]}`}></div>
      <div className={`${styles.cube} ${styles.cube14} ${styles.cubesTablet} ${styles[createRandomShapeClass()]}`}></div>
      <div className={`${styles.cube} ${styles.cube15} ${styles.cubesTablet} ${styles[createRandomShapeClass()]}`}></div>
      <div className={`${styles.cube} ${styles.cube16} ${styles.cubesTablet} ${styles[createRandomShapeClass()]}`}></div>
      <div className={`${styles.cube} ${styles.cube17} ${styles.cubesTablet} ${styles[createRandomShapeClass()]}`}></div>
      <div className={`${styles.cube} ${styles.cube18} ${styles.cubesTablet} ${styles[createRandomShapeClass()]}`}></div>
      <div className={`${styles.cube} ${styles.cube19} ${styles.cubesTablet} ${styles[createRandomShapeClass()]}`}></div>
      <div className={`${styles.cube} ${styles.cube20} ${styles.cubesTablet} ${styles[createRandomShapeClass()]}`}></div>
      <div className={`${styles.cube} ${styles.cube21} ${styles.cubesDesktop} ${styles[createRandomShapeClass()]}`}></div>
      <div className={`${styles.cube} ${styles.cube22} ${styles.cubesDesktop} ${styles[createRandomShapeClass()]}`}></div>
      <div className={`${styles.cube} ${styles.cube23} ${styles.cubesDesktop} ${styles[createRandomShapeClass()]}`}></div>
      <div className={`${styles.cube} ${styles.cube24} ${styles.cubesDesktop} ${styles[createRandomShapeClass()]}`}></div>
      <div className={`${styles.cube} ${styles.cube25} ${styles.cubesDesktop} ${styles[createRandomShapeClass()]}`}></div>
      <div className={`${styles.cube} ${styles.cube26} ${styles.cubesDesktop} ${styles[createRandomShapeClass()]}`}></div>
      <div className={`${styles.cube} ${styles.cube27} ${styles.cubesDesktop} ${styles[createRandomShapeClass()]}`}></div>
      <div className={`${styles.cube} ${styles.cube28} ${styles.cubesDesktop} ${styles[createRandomShapeClass()]}`}></div>
      <div className={`${styles.cube} ${styles.cube29} ${styles.cubesDesktop} ${styles[createRandomShapeClass()]}`}></div>
      <div className={`${styles.cube} ${styles.cube30} ${styles.cubesDesktop} ${styles[createRandomShapeClass()]}`}></div>
      <div className={`${styles.cube} ${styles.cube31} ${styles.cubesDesktop} ${styles[createRandomShapeClass()]}`}></div>
      <div className={`${styles.cube} ${styles.cube32} ${styles.cubesDesktop} ${styles[createRandomShapeClass()]}`}></div>
    </div>
  );
}

export default HeroCubes;