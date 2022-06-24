import React from 'react'
import styles from './SubTitle.module.scss';

function SubTitle({children, className}) {
  return <h3 className={styles.subtitle + " " + className}>{children}</h3>
}

export default SubTitle