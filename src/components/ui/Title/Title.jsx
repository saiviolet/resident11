import React from 'react'
import styles from './Title.module.scss';

function Title({main, children, className}) {

  const text = main 
  ? (<h1 className={styles.titleMain}>{children}</h1>) 
  : (<h2 className={styles.titleMain + " " + className}>{children}</h2>);
  return text;
}

export default Title