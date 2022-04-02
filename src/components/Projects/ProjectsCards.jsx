import React from 'react';
import {showMoreText, showLessText} from "./projectsHelper";
import {AiFillPlayCircle, AiFillGithub} from 'react-icons/ai'
import styles from './ProjectsCards.module.scss'

function ProjectsCards() {

  return (
    <div className={styles.cardsContainer}>
      <article className={styles.card}>
        <img src={"assets/projectImg.png"} alt="laptop"/>

        <h3>PROJECT NAME1</h3>

        <p>Sed commodo nunc dignissim facilisis aliquam amet dictum dolor risus. Semper dui venenatis, egestas neque,
          tempus. Enim aliquet
          <button type={'button'} onClick={showMoreText} className={`moreBtn ${styles.moreBtn}`}>...read more</button>
          <span className={`moreSpan ${styles.moreSpan} ${styles.hidden}`}>here's more Sed commodo nunc dignissim
            facilisis aliquam amet dictum dolor risus. Semper dui venenatis, egestas neque, tempus. Sed commodo nunc
            dignissim facilisis aliquam amet dictum dolor risus.</span>
          <button type={'button'} onClick={showLessText} className={`lessBtn ${styles.moreBtn} ${styles.hidden}`}>
            show less</button>
        </p>

        <div className={styles.btnContainer}>
          <div className={styles.buttons}>
            <a className={styles.demoBtn} target="_blank" rel="noopener noreferrer" href="#"><AiFillPlayCircle
              className={styles.demoIcon}/> Demo</a>
            <a className={styles.gitBtn} target="_blank" rel="noopener noreferrer" href="#"><AiFillGithub
              className={styles.gitIcon}/> GitHub</a>
          </div>
        </div>
      </article>

      <article className={styles.card}>
        <img src={"assets/projectImg.png"} alt="laptop"/>

        <h3>PROJECT NAME2</h3>

        <p>Sed commodo nunc dignissim facilisis aliquam amet dictum dolor risus. Semper dui venenatis, egestas neque,
          tempus. Enim aliquet
          <button type={'button'} onClick={showMoreText} className={`moreBtn ${styles.moreBtn}`}>...read more</button>
          <span className={`moreSpan ${styles.moreSpan} ${styles.hidden}`}>here's more Sed commodo nunc dignissim
            facilisis aliquam amet dictum dolor risus. Semper dui venenatis, egestas neque, tempus. Sed commodo nunc
            dignissim facilisis aliquam amet dictum dolor risus.</span>
          <button type={'button'} onClick={showLessText} className={`lessBtn ${styles.moreBtn} ${styles.hidden}`}>
            show less</button>
        </p>

        <div className={styles.btnContainer}>
          <div className={styles.buttons}>
            <a className={styles.demoBtn} target="_blank" rel="noopener noreferrer" href="#"><AiFillPlayCircle
              className={styles.demoIcon}/> Demo</a>
            <a className={styles.gitBtn} target="_blank" rel="noopener noreferrer" href="#"><AiFillGithub
              className={styles.gitIcon}/> GitHub</a>
          </div>
        </div>
      </article>

      <article className={styles.card}>
        <img src={"assets/projectImg.png"} alt="laptop"/>

        <h3>PROJECT NAME3</h3>

        <p>Sed commodo nunc dignissim facilisis aliquam amet dictum dolor risus. Semper dui venenatis, egestas neque,
          tempus. Enim aliquet
          <button type={'button'} onClick={showMoreText} className={`moreBtn ${styles.moreBtn}`}>...read more</button>
          <span className={`moreSpan ${styles.moreSpan} ${styles.hidden}`}>here's more Sed commodo nunc dignissim
            facilisis aliquam amet dictum dolor risus. Semper dui venenatis, egestas neque, tempus. Sed commodo nunc
            dignissim facilisis aliquam amet dictum dolor risus.</span>
          <button type={'button'} onClick={showLessText} className={`lessBtn ${styles.moreBtn} ${styles.hidden}`}>
            show less</button>
        </p>

        <div className={styles.btnContainer}>
          <div className={styles.buttons}>
            <a className={styles.demoBtn} target="_blank" rel="noopener noreferrer" href="#"><AiFillPlayCircle
              className={styles.demoIcon}/> Demo</a>
            <a className={styles.gitBtn} target="_blank" rel="noopener noreferrer" href="#"><AiFillGithub
              className={styles.gitIcon}/> GitHub</a>
          </div>
        </div>
      </article>

      <article className={styles.card}>
        <img src={"assets/projectImg.png"} alt="laptop"/>

        <h3>PROJECT NAME4</h3>

        <p>Sed commodo nunc dignissim facilisis aliquam amet dictum dolor risus. Semper dui venenatis, egestas neque,
          tempus. Enim aliquet
          <button type={'button'} onClick={showMoreText} className={`moreBtn ${styles.moreBtn}`}>...read more</button>
          <span className={`moreSpan ${styles.moreSpan} ${styles.hidden}`}>here's more Sed commodo nunc dignissim
            facilisis aliquam amet dictum dolor risus. Semper dui venenatis, egestas neque, tempus. Sed commodo nunc
            dignissim facilisis aliquam amet dictum dolor risus.</span>
          <button type={'button'} onClick={showLessText} className={`lessBtn ${styles.moreBtn} ${styles.hidden}`}>
            show less</button>
        </p>

        <div className={styles.btnContainer}>
          <div className={styles.buttons}>
            <a className={styles.demoBtn} target="_blank" rel="noopener noreferrer" href="#"><AiFillPlayCircle
              className={styles.demoIcon}/> Demo</a>
            <a className={styles.gitBtn} target="_blank" rel="noopener noreferrer" href="#"><AiFillGithub
              className={styles.gitIcon}/> GitHub</a>
          </div>
        </div>
      </article>
    </div>
  );
}

export default ProjectsCards;