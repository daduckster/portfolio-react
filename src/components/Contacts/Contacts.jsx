import React from 'react'
import styles from './Contacts.module.scss';
import {AiFillForward, AiFillLinkedin} from "react-icons/ai";
import {BiLinkExternal} from "react-icons/bi";
import {MdEmail} from "react-icons/md";
import {FaGithub} from "react-icons/fa";
import {MdOutlineContentCopy} from "react-icons/md";

function Contacts() {
  return (
    <div className={styles.contactsContainer}>
      <div className={styles.headerContainer}>
        <h2>contacts</h2>
        <AiFillForward className={styles.forwardIcon} />
      </div>
      <div className={styles.linksContainer}>
        <div className={styles.element}>
          <FaGithub className={styles.networkIcon} />
          <a target="_blank" rel="noopener noreferrer" href="#">/daduckster <BiLinkExternal className={styles.linkIcon}/></a>
        </div>
        <div className={styles.element}>
          <AiFillLinkedin className={styles.networkIcon} />
          <a target="_blank" rel="noopener noreferrer" href="#">/olyavlasak <BiLinkExternal className={styles.linkIcon}/></a>
        </div>
        <div className={styles.element}>
          <MdEmail className={styles.networkIcon} />
          <a target="_blank" rel="noopener noreferrer" href="#">/olyavlasak <MdOutlineContentCopy className={styles.linkIcon}/></a>
        </div>
      </div>
    </div>
  )
}

export default Contacts