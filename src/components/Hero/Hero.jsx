import React from 'react'
import {BiLinkExternal} from 'react-icons/bi'
import styles from './Hero.module.scss';

function Hero() {
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

      <div className={`${styles.cube1}`}></div>
      <div className={`${styles.cube2}`}></div>
      <div className={`${styles.cube3}`}></div>
      <div className={`${styles.cube4}`}></div>
      <div className={`${styles.cube5}`}></div>
      <div className={`${styles.cube6}`}></div>
      <div className={`${styles.cube7}`}></div>
      <div className={`${styles.cube8}`}></div>
      <div className={`${styles.cube9}`}></div>
      <div className={`${styles.cube10}`}></div>
      <div className={`${styles.cube11}`}></div>
      <div className={`${styles.cube12}`}></div>
      <div className={`${styles.cube13}`}></div>
      <div className={`${styles.cube14}`}></div>
      <div className={`${styles.cube15}`}></div>
      <div className={`${styles.cube16}`}></div>
      <div className={`${styles.cube17}`}></div>
      <div className={`${styles.cube18}`}></div>
      <div className={`${styles.cube19}`}></div>
      <div className={`${styles.cube20}`}></div>
      <div className={`${styles.cube21}`}></div>
      <div className={`${styles.cube22}`}></div>
      <div className={`${styles.cube23}`}></div>
      <div className={`${styles.cube24}`}></div>
      <div className={`${styles.cube25}`}></div>
      <div className={`${styles.cube26}`}></div>

    </div>
  )
}

export default Hero