import React from 'react';
import {showMoreText, showLessText} from "./projectsHelper";
import {AiFillPlayCircle, AiFillGithub} from 'react-icons/ai'
import styles from './ProjectsCards.module.scss'

function ProjectsCards() {

  return (
    <div className={styles.cardsContainer}>
      <article className={styles.card}>
        <img src={"assets/doNOTEforget preview.png"} alt="laptop"/>

        <h3>Do NOTE Forget</h3>

        <p className={`${styles.tech}`}>React, TypeScript, SCSS, Figma</p>

        <p className={styles.shortText}>A note keeping app. Aside from functionality and user-experience, a core focus is on style. This meant the inclusion of custom Vector-Graphics (SVG) made in Adobe Illustrator and
          <button type={'button'} onClick={showMoreText} className={`moreBtn ${styles.moreBtn}`}>read more</button>
          <span className={`moreSpan ${styles.moreSpan} ${styles.hidden}`}>custom  animations. The user can create new notes and easily navigate through existing notes with the keyword-search feature.</span>
          <button type={'button'} onClick={showLessText} className={`lessBtn ${styles.moreBtn} ${styles.hidden}`}>
            show less</button>
        </p>

        <div className={styles.btnContainer}>
          <div className={styles.buttons}>
            <a className={styles.demoBtn} target="_blank" rel="noopener noreferrer" href="https://inquisitive-kashata-2bd212.netlify.app/"><AiFillPlayCircle
              className={styles.demoIcon}/> Demo</a>
            <a className={styles.gitBtn} target="_blank" rel="noopener noreferrer" href="https://github.com/daduckster/note_app-react-typescript"><AiFillGithub
              className={styles.gitIcon}/> GitHub</a>
          </div>
        </div>
      </article>

      <article className={styles.card}>
        <img src={"assets/Shop'n'Cook preview.png"} alt="laptop"/>

        <h3>Shop'n'Cook</h3>

        <p className={`${styles.tech}`}>Javascript, SCSS, Figma</p>

        <p className={styles.shortText}>Cookbook and shopping list in one app! Users can store their favourite recipes including the instructions here. If they need to stock up on any of the ingredients, they can mark them for
          <button type={'button'} onClick={showMoreText} className={`moreBtn ${styles.moreBtn}`}>read more</button>
          <span className={`moreSpan ${styles.moreSpan} ${styles.hidden}`}>the next trip to the grocery store. Users can also search by dish or specific ingredients.</span>
          <button type={'button'} onClick={showLessText} className={`lessBtn ${styles.moreBtn} ${styles.hidden}`}>
            show less</button>
        </p>

        <div className={styles.btnContainer}>
          <div className={styles.buttons}>
            <a className={styles.demoBtn} target="_blank" rel="noopener noreferrer" href="https://infallible-wright-becd35.netlify.app/"><AiFillPlayCircle
              className={styles.demoIcon}/> Demo</a>
            <a className={styles.gitBtn} target="_blank" rel="noopener noreferrer" href="https://github.com/daduckster/shop-n-cook"><AiFillGithub
              className={styles.gitIcon}/> GitHub</a>
          </div>
        </div>
      </article>

      <article className={styles.card}>
        <img src={"assets/Bookshelf preview.png"} alt="laptop"/>

        <h3>Bookshelf</h3>

        <p className={`${styles.tech}`}>Javascript, SCSS, Figma</p>

        <p className={styles.shortText}>A new approach to the personal library tracker. Depending on the amount of text supplied to the entry, the books are placed in dynamically shifting columns, ensuring an even
          <button type={'button'} onClick={showMoreText} className={`moreBtn ${styles.moreBtn}`}>read more</button>
          <span className={`moreSpan ${styles.moreSpan} ${styles.hidden}`}>spread across the screen. The application allows the user to search their collection using the supplied meta-data (such as author, personal rating, and many more), or filter by reading status.</span>
          <button type={'button'} onClick={showLessText} className={`lessBtn ${styles.moreBtn} ${styles.hidden}`}>
            show less</button>
        </p>

        <div className={styles.btnContainer}>
          <div className={styles.buttons}>
            <a className={styles.demoBtn} target="_blank" rel="noopener noreferrer" href="https://laughing-galileo-6719bd.netlify.app/"><AiFillPlayCircle
              className={styles.demoIcon}/> Demo</a>
            <a className={styles.gitBtn} target="_blank" rel="noopener noreferrer" href="https://github.com/daduckster/bookshelf"><AiFillGithub
              className={styles.gitIcon}/> GitHub</a>
          </div>
        </div>
      </article>

      <article className={styles.card}>
        <img src={"assets/Restaurant Page preview.png"} alt="laptop"/>

        <h3>Restaurant Page</h3>

        <p className={`${styles.tech}`}>Javascript, SCSS, Figma</p>

        <p className={styles.shortText}>A whole restaurant page concept the content of which is dynamically generated everytime the users moves between the pages. This effect is achieved through
          <button type={'button'} onClick={showMoreText} className={`moreBtn ${styles.moreBtn}`}>read more</button>
          <span className={`moreSpan ${styles.moreSpan} ${styles.hidden}`}>"DOM-Manipulation". The design of the website was made to recreate the website of a fictional modern bistro with a cozy and friendly atmosphere.</span>
          <button type={'button'} onClick={showLessText} className={`lessBtn ${styles.moreBtn} ${styles.hidden}`}>
            show less</button>
        </p>

        <div className={styles.btnContainer}>
          <div className={styles.buttons}>
            <a className={styles.demoBtn} target="_blank" rel="noopener noreferrer" href="https://focused-euler-a34b1f.netlify.app/"><AiFillPlayCircle
              className={styles.demoIcon}/> Demo</a>
            <a className={styles.gitBtn} target="_blank" rel="noopener noreferrer" href="https://github.com/daduckster/restaurant"><AiFillGithub
              className={styles.gitIcon}/> GitHub</a>
          </div>
        </div>
      </article>
    </div>
  );
}

export default ProjectsCards;