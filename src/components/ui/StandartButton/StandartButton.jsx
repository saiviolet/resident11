import React from 'react';
import styles from './StandartButton.module.scss';

function StandartButton({children, link, className}) {
  return (
  <a className={styles.button + " " + className} href={link} data-text={children}>{children}</a>
  )
}

export default StandartButton