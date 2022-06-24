import React from 'react';
import styles from './Origins.module.scss';
import Title from '../ui/Title/Title';

function Origins() {
  return (
    <section className={styles.origins}>
      <Title className={styles.origins__title + " indented-block"}>Истоки</Title>
      <p className={styles.origins__subtitle}>Эта земля формировалась больше 11 миллиардов лет. 11 семей построят здесь 11 современных домов.</p>
    </section>
  )
}

export default Origins