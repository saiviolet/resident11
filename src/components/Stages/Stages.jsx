import React from 'react';
import styles from './Stages.module.scss';
import Title from '../ui/Title/Title';
import StepProgress from '../ui/StepProgress/StepProgress';
import SubTitle from '../ui/SubTitle/SubTitle';
function Stages() {
  return (
    <section className={`${styles.stages} indented-block`}>
      <Title>Этапы</Title>
      <SubTitle className={styles.stages__subtitle}>Срок реализации</SubTitle>
      <StepProgress />
    </section>
  )
}

export default Stages