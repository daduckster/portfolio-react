import React from 'react'
import styles from './About.module.scss';
import {AiFillForward} from "react-icons/ai";

function About() {
  return (
    <div className={styles.aboutContainer} id={'about'}>
      <div className={styles.headerContainer}>
        <h2>about me</h2>
        <AiFillForward className={styles.forwardIcon} />
      </div>
      <div className={styles.textContainer}>
        <p className={styles.text}>
        Viverra in interdum elementum aliquam. Amet quis ac malesuada
        elementum augue sit maecenas tincidunt sit. Id odio eleifend
        tincidunt vivamus scelerisque. Eget odio in semper sed nunc eget.
        Turpis aliquet egestas nulla elementum vitae at at vulputate vitae.
        Arcu vehicula dui, quis purus tincidunt nibh. At vitae, tempus mattis
        vestibulum suspendisse morbi pulvinar. Ut nam tortor duis quis ac et.
        </p>
        <div className={styles.whySection}>
          <h3>WHY ME?</h3>
          <div className={styles.elementContainer}>
            <div className={styles.element}>
              <div className={styles.elementBox}></div>
              <p>Est morbi fermentum fgzfg.</p>
            </div>
            <div className={styles.element}>
              <div className={styles.elementBox}></div>
              <p>Netus aliquet.</p>
            </div>
            <div className={styles.element}>
              <div className={styles.elementBox}></div>
              <p>Commodo nisl arcu.</p>
            </div>
            <div className={styles.element}>
              <div className={styles.elementBox}></div>
              <p>Est morbi fermentumdfffgx.</p>
            </div>
            <div className={styles.element}>
              <div className={styles.elementBox}></div>
              <p>Diam egestas in amet dfdfg.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About