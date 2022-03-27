import React from 'react';
import styles from './Footer.module.scss'

function Footer(props) {
  return (
    <div className={styles.footerContainer}>
      <p>© 2022 by Olya Vlasak - olyavlasak@gmail.com</p>
    </div>
  );
}

export default Footer;