import React from 'react'
import ProjectsCards from "./ProjectsCards";
import {AiFillForward} from "react-icons/ai";
import styles from './Projects.module.scss';

function Projects() {
  return (
    <main className={styles.projectsContainer} id={'projects'}>
      <header className={styles.headerContainer}>
        <h2>projects</h2>
        <AiFillForward className={styles.forwardIcon} />
      </header>

      <div className={styles.contentsContainer}>
        <ProjectsCards />
        <div className={styles.pinkSquare}/>
        <div className={styles.blueSquare}/>
      </div>
    </main>
  )
}

export default Projects