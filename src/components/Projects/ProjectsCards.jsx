import React from 'react';
import {showMoreText, showLessText} from "./projectsHelper";
import {AiFillPlayCircle, AiFillGithub} from 'react-icons/ai'
import styles from './ProjectsCards.module.scss'

function ProjectsCards(props) {

  return (
    <div className={styles.cardsContainer}>
      <div className={styles.card}>
        <img src="./assets/images/projectImg.png" alt="laptop"/>
          <h3>PROJECT NAME</h3>
        <p>Sed commodo nunc dignissim facilisis aliquam amet dictum dolor risus. Semper dui venenatis, egestas neque, tempus. Enim aliquet
          <button type={'button'} onClick={showMoreText} className={`moreBtn ${styles.moreBtn}`}>...read more</button>
          <span className={`moreSpan ${styles.moreSpan} ${styles.hidden}`}>here's more Sed commodo nunc dignissim facilisis aliquam amet
            dictum dolor risus. Semper dui venenatis, egestas neque, tempus. Sed commodo nunc dignissim facilisis aliquam amet dictum dolor risus.</span>
          <button type={'button'} onClick={showLessText} className={`lessBtn ${styles.moreBtn} ${styles.hidden}`}>show less</button>
        </p>
        <div className={styles.btnContainer}>
          <div className={styles.buttons}>
            <a className={styles.demoBtn} target="_blank" rel="noopener noreferrer" href="#"><AiFillPlayCircle
              className={styles.demoIcon}/> Demo</a>
            <a className={styles.gitBtn} target="_blank" rel="noopener noreferrer" href="#"><AiFillGithub
              className={styles.gitIcon}/> GitHub</a>
          </div>
        </div>
      </div>

      <div className={styles.card}>
        <img src="./assets/images/projectImg.png" alt="laptop"/>
        <h3>PROJECT NAME</h3>
        <p>Sed commodo nunc dignissim facilisis aliquam amet dictum dolor risus. Semper dui venenatis, egestas neque, tempus. Enim aliquet
          <button type={'button'} onClick={showMoreText} className={`moreBtn ${styles.moreBtn}`}>...read more</button>
          <span className={`moreSpan ${styles.moreSpan} ${styles.hidden}`}>here's more</span>
          <button type={'button'} onClick={showLessText} className={`lessBtn ${styles.moreBtn} ${styles.hidden}`}>show less</button>
        </p>
        <div className={styles.btnContainer}>
          <div className={styles.buttons}>
            <a className={styles.demoBtn} target="_blank" rel="noopener noreferrer" href="#"><AiFillPlayCircle
              className={styles.demoIcon}/> Demo</a>
            <a className={styles.gitBtn} target="_blank" rel="noopener noreferrer" href="#"><AiFillGithub
              className={styles.gitIcon}/> GitHub</a>
          </div>
        </div>
      </div>

      <div className={styles.card}>
        <img src="./assets/images/projectImg.png" alt="laptop"/>
        <h3>PROJECT NAME</h3>
        <p>Sed commodo nunc dignissim facilisis aliquam amet dictum dolor risus. Semper dui venenatis, egestas neque, tempus. Enim aliquet
          <button type={'button'} onClick={showMoreText} className={`moreBtn ${styles.moreBtn}`}>...read more</button>
          <span className={`moreSpan ${styles.moreSpan} ${styles.hidden}`}>here's more</span>
          <button type={'button'} onClick={showLessText} className={`lessBtn ${styles.moreBtn} ${styles.hidden}`}>show less</button>
        </p>
        <div className={styles.btnContainer}>
          <div className={styles.buttons}>
            <a className={styles.demoBtn} target="_blank" rel="noopener noreferrer" href="#"><AiFillPlayCircle
              className={styles.demoIcon}/> Demo</a>
            <a className={styles.gitBtn} target="_blank" rel="noopener noreferrer" href="#"><AiFillGithub
              className={styles.gitIcon}/> GitHub</a>
          </div>
        </div>
      </div>

      <div className={styles.card}>
        <img src="./assets/images/projectImg.png" alt="laptop"/>
        <h3>PROJECT NAME</h3>
        <p>Sed commodo nunc dignissim facilisis aliquam amet dictum dolor risus. Semper dui venenatis, egestas neque, tempus. Enim aliquet
          <button type={'button'} onClick={showMoreText} className={`moreBtn ${styles.moreBtn}`}>...read more</button>
          <span className={`moreSpan ${styles.moreSpan} ${styles.hidden}`}>here's more</span>
          <button type={'button'} onClick={showLessText} className={`lessBtn ${styles.moreBtn} ${styles.hidden}`}>show less</button>
        </p>
        <div className={styles.btnContainer}>
          <div className={styles.buttons}>
            <a className={styles.demoBtn} target="_blank" rel="noopener noreferrer" href="#"><AiFillPlayCircle
              className={styles.demoIcon}/> Demo</a>
            <a className={styles.gitBtn} target="_blank" rel="noopener noreferrer" href="#"><AiFillGithub
              className={styles.gitIcon}/> GitHub</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectsCards;