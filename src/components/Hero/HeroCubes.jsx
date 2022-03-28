import React, {useState, useEffect} from 'react';
import {BiLinkExternal} from 'react-icons/bi'
import {createRandomShapeClass} from './heroHelper.js'
import useWindowSize from "../../hooks/useWindowSize"
import styles from './Hero.module.scss';

function HeroCubes(props) {

  const [deviceType, setDeviceType] = useState('')

  function handleMouseOver(e) {
    const div = e.target
    const classes = e.target.classList;
    classes.forEach((classItem) => {
      if (classItem.includes('shape')) {
        e.target.classList.remove(classItem);
        e.target.classList.add(styles[createRandomShapeClass()]);
      }
    })
  }

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

      <div onMouseOver={handleMouseOver}  className={`${styles.cube1} ${styles.cubesMobile} ${styles[createRandomShapeClass()]}`}></div>
      <div onMouseOver={handleMouseOver} className={`${styles.cube2} ${styles.cubesMobile} ${styles[createRandomShapeClass()]}`}></div>
      <div onMouseOver={handleMouseOver} className={`${styles.cube3} ${styles.cubesMobile} ${styles[createRandomShapeClass()]}`}></div>
      <div onMouseOver={handleMouseOver} className={`${styles.cube4} ${styles.cubesMobile} ${styles[createRandomShapeClass()]}`}></div>
      <div onMouseOver={handleMouseOver} className={`${styles.cube5} ${styles.cubesMobile} ${styles[createRandomShapeClass()]}`}></div>
      <div onMouseOver={handleMouseOver} className={`${styles.cube6} ${styles.cubesMobile} ${styles[createRandomShapeClass()]}`}></div>
      <div onMouseOver={handleMouseOver} className={`${styles.cube7} ${styles.cubesMobile} ${styles[createRandomShapeClass()]}`}></div>
      <div onMouseOver={handleMouseOver} className={`${styles.cube8} ${styles.cubesMobile} ${styles[createRandomShapeClass()]}`}></div>
      <div onMouseOver={handleMouseOver} className={`${styles.cube9} ${styles.cubesMobile} ${styles[createRandomShapeClass()]}`}></div>
      <div onMouseOver={handleMouseOver} className={`${styles.cube10} ${styles.cubesMobile} ${styles[createRandomShapeClass()]}`}></div>
      <div onMouseOver={handleMouseOver} className={`${styles.cube11} ${styles.cubesMobile} ${styles[createRandomShapeClass()]}`}></div>
      <div onMouseOver={handleMouseOver} className={`${styles.cube12} ${styles.cubesMobile} ${styles[createRandomShapeClass()]}`}></div>
      <div onMouseOver={handleMouseOver} className={`${styles.cube13} ${styles.cubesTablet} ${styles[createRandomShapeClass()]}`}></div>
      <div onMouseOver={handleMouseOver} className={`${styles.cube14} ${styles.cubesTablet} ${styles[createRandomShapeClass()]}`}></div>
      <div onMouseOver={handleMouseOver} className={`${styles.cube15} ${styles.cubesTablet} ${styles[createRandomShapeClass()]}`}></div>
      <div onMouseOver={handleMouseOver} className={`${styles.cube16} ${styles.cubesTablet} ${styles[createRandomShapeClass()]}`}></div>
      <div onMouseOver={handleMouseOver} className={`${styles.cube17} ${styles.cubesTablet} ${styles[createRandomShapeClass()]}`}></div>
      <div onMouseOver={handleMouseOver} className={`${styles.cube18} ${styles.cubesTablet} ${styles[createRandomShapeClass()]}`}></div>
      <div onMouseOver={handleMouseOver} className={`${styles.cube19} ${styles.cubesTablet} ${styles[createRandomShapeClass()]}`}></div>
      <div onMouseOver={handleMouseOver} className={`${styles.cube20} ${styles.cubesTablet} ${styles[createRandomShapeClass()]}`}></div>
      <div onMouseOver={handleMouseOver} className={`${styles.cube21} ${styles.cubesTablet} ${styles[createRandomShapeClass()]}`}></div>
      <div onMouseOver={handleMouseOver} className={`${styles.cube22} ${styles.cubesTablet} ${styles[createRandomShapeClass()]}`}></div>
      <div onMouseOver={handleMouseOver} className={`${styles.cube23} ${styles.cubesTablet} ${styles[createRandomShapeClass()]}`}></div>
      <div onMouseOver={handleMouseOver} className={`${styles.cube24} ${styles.cubesTablet} ${styles[createRandomShapeClass()]}`}></div>
      <div onMouseOver={handleMouseOver} className={`${styles.cube25} ${styles.cubesTablet} ${styles[createRandomShapeClass()]}`}></div>
      <div onMouseOver={handleMouseOver} className={`${styles.cube26} ${styles.cubesTablet} ${styles[createRandomShapeClass()]}`}></div>
      <div onMouseOver={handleMouseOver} className={`${styles.cube27} ${styles.cubesDesktop} ${styles[createRandomShapeClass()]}`}></div>
      <div onMouseOver={handleMouseOver} className={`${styles.cube28} ${styles.cubesDesktop} ${styles[createRandomShapeClass()]}`}></div>
      <div onMouseOver={handleMouseOver} className={`${styles.cube29} ${styles.cubesDesktop} ${styles[createRandomShapeClass()]}`}></div>
      <div onMouseOver={handleMouseOver} className={`${styles.cube30} ${styles.cubesDesktop} ${styles[createRandomShapeClass()]}`}></div>
      <div onMouseOver={handleMouseOver} className={`${styles.cube31} ${styles.cubesDesktop} ${styles[createRandomShapeClass()]}`}></div>
      <div onMouseOver={handleMouseOver} className={`${styles.cube32} ${styles.cubesDesktop} ${styles[createRandomShapeClass()]}`}></div>
    </div>
  );
}

export default React.memo(HeroCubes);
// export default HeroCubes;