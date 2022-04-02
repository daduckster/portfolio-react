import React from 'react'
import {AiFillForward, AiFillGithub} from 'react-icons/ai'
import {SiCss3, SiSass, SiJavascript, SiHtml5, SiAdobeillustrator} from 'react-icons/si'
import {FaReact, FaGitAlt} from 'react-icons/fa'
import {CgFigma} from 'react-icons/cg'
import styles from './Tech.module.scss';

function Tech() {
  return (
    <section className={styles.techContainer} id={'tech'}>
      <header className={styles.headerContainer}>
        <h2>tech</h2>
        <AiFillForward className={styles.forwardIcon} />
      </header>

      <div className={styles.iconsContainer}>
        <div className={styles.column}>
          <div className={styles.item}>
            <SiHtml5 className={styles.icon} />
            <p>HTML</p>
          </div>
          <div className={styles.item}>
            <SiCss3 className={styles.icon} />
            <p>CSS</p>
          </div>
          <div className={styles.item}>
            <SiSass className={styles.icon} />
            <p>SCSS</p>
          </div>
        </div>

        <div className={styles.column}>
          <div className={styles.item}>
            <SiJavascript className={styles.icon} />
            <p>Javascript</p>
          </div>
          <div className={styles.item}>
            <FaReact className={styles.icon} />
            <p>React</p>
          </div>
          <div className={styles.item}>
            <SiAdobeillustrator className={styles.icon} />
            <p>Illustrator</p>
          </div>
        </div>

        <div className={styles.column}>
          <div className={styles.item}>
            <FaGitAlt className={styles.icon} />
            <p>Git</p>
          </div>
          <div className={styles.item}>
            <AiFillGithub className={styles.icon} />
            <p>GitHub</p>
          </div>
          <div className={styles.item}>
            <CgFigma className={styles.icon} />
            <p>Figma</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Tech