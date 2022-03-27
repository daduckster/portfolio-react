import React from 'react';
import {AiFillPlayCircle, AiFillGithub} from 'react-icons/ai'
import styles from './ProjectCards.module.scss'

function ProjectCards(props) {
  return (
    <div className={styles.cardsContainer}>
      <div className={styles.card}>
        <img src="./assets/images/projectImg.png" alt="laptop"/>
          <h3>PROJECT NAME</h3>
        <p>Sed commodo nunc dignissim facilisis aliquam amet dictum dolor risus. Semper dui venenatis, egestas neque, tempus. Enim aliquet
          <button>...read more</button>
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

export default ProjectCards;