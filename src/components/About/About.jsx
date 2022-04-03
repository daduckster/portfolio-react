import React from 'react'
import {AiFillForward} from "react-icons/ai";
import styles from './About.module.scss';

function About() {
  return (
    <section className={styles.aboutContainer} id={'about'}>
      <header className={styles.headerContainer}>
        <h2>about me</h2>
        <AiFillForward className={styles.forwardIcon} />
      </header>

      <div className={styles.textContainer}>
        <div className={styles.textColumn}>
          <p className={styles.text}>
            I am a Frontend JavaScript Developer living in Zurich, Switzerland.
          </p>

          <p className={styles.text}>
            I have a degree in an unrelated field, so I had to teach myself programming mostly without mentoring.
            Throughout all my projects I do not only care for the application's functionality. The design, and the
            resulting User Experience (UX), are integral parts of my planning process.
          </p>

          <p className={styles.text}>
            Since being self-taught comes with certain challenges, I was able to develop life-long skills such as
            constant learning, problem-solving, and project management.
          </p>

          <p className={styles.text}>
            My main technology stack, currently, consists of React and TypeScript on the programming side, as well
            as Figma and Adobe Illustrator for designs.
          </p>
        </div>

        <div className={styles.whySection}>
          <h3>WHY ME?</h3>
          <div className={styles.elementContainer}>
            <div className={styles.element}>
              <div className={styles.elementBox}/>
              <p>High Level of Self-Organization</p>
            </div>

            <div className={styles.element}>
              <div className={styles.elementBox}/>
              <p>Experienced Web Designer</p>
            </div>

            <div className={styles.element}>
              <div className={styles.elementBox}/>
              <p>Carrying Each Project from Start to Finish</p>
            </div>

            <div className={styles.element}>
              <div className={styles.elementBox}/>
              <p>Constant Improvement of Own Tech Stack</p>
            </div>

            <div className={styles.element}>
              <div className={styles.elementBox}/>
              <p>Strong Communication and Teamwork Skills</p>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}

export default About