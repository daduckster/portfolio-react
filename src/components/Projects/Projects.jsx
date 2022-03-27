import React from 'react'
import styles from './Projects.module.scss';
import {AiFillForward} from "react-icons/ai";
import ProjectCards from "./ProjectCards";

function Projects() {
  return (
    <div className={styles.projectsContainer}>
      <div className={styles.headerContainer}>
        <h2>projects</h2>
        <AiFillForward className={styles.forwardIcon} />
      </div>

      <div className={styles.contentsContainer}>
        <ProjectCards />

        <div className={styles.pinkSquare}></div>
        <div className={styles.blueSquare}></div>
      </div>
    </div>
  )
}

export default Projects