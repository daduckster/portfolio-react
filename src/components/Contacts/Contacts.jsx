import React from 'react'
import styles from './Contacts.module.scss';
import {AiFillForward, AiFillLinkedin} from "react-icons/ai";
import {BiLinkExternal} from "react-icons/bi";
import {MdEmail} from "react-icons/md";
import {FaGithub} from "react-icons/fa";
import {MdOutlineContentCopy} from "react-icons/md";

function Contacts() {

  function handleClick() {
    const email = "olyavlasak@gmail.com";
    const emailBtn = document.querySelector('.emailBtn')
    navigator.clipboard.writeText(email).then(function() {
      emailBtn.textContent = 'Email Copied ✓'
    }, function() {
      emailBtn.textContent = 'Error. Copy manually: olyavlasak@gmail.com'
      emailBtn.classList.remove(styles.emailBtn)
      emailBtn.classList.add(styles.emailError)
    });
  }

  return (
    <div className={styles.contactsContainer} id={'contacts'}>
      <div className={styles.headerContainer}>
        <h2>contacts</h2>
        <AiFillForward className={styles.forwardIcon} />
      </div>
      <div className={styles.linksContainer}>
        <div className={styles.element}>
          <FaGithub className={styles.networkIcon} />
          <a target="_blank" rel="noopener noreferrer" href="https://github.com/daduckster">/daduckster <BiLinkExternal className={styles.linkIcon}/></a>
        </div>
        <div className={styles.element}>
          <AiFillLinkedin className={styles.networkIcon} />
          <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/olyavlasak/">/olyavlasak <BiLinkExternal className={styles.linkIcon}/></a>
        </div>
        <div className={styles.element}>
          <MdEmail className={styles.networkIcon} />
          <button type={"button"} onClick={handleClick} className={`emailBtn ${styles.emailBtn}`}>Copy Email <MdOutlineContentCopy className={styles.linkIcon}/></button>
        </div>
      </div>
    </div>
  )
}

export default Contacts