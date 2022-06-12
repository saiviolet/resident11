import React from 'react';

import style from './Infrastructure.module.scss';
import Title from '../ui/Title/Title';
import Slider from '../ui/Slider/Slider';

function Infrastructure() {
  return (
    <section className={style.infrastructure + " indented-block"}>
      <Title className={style.infrastructure__title}>Инфраструктура:</Title>
      <Slider />
    </section>
  )
}

export default Infrastructure