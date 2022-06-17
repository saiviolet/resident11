import React from 'react';
import Title from '../ui/Title/Title';
import SubTitle from '../ui/SubTitle/SubTitle';
import style from './StepProgress.module.scss';

function StepProgress() {
  return (
    <>
    <ul className={style.stepList}>
    <li className={style.step + ' ' + style.step_type_main}></li>
      <li className={style.step}>Геология</li>
      <li className={style.step}>Геодезия</li>
      <li className={style.step}>Дендрология</li>
      <li className={style.step + ' ' + style.step_type_main}></li>
      <li className={style.step}>Проектирование коммуникаций</li>
      <li className={style.step}>Проектирование дорог</li>
      <li className={style.step + ' ' + style.step_type_main}></li>
      <li className={style.step}>Подготовка участков</li>
      <li className={style.step}>Строительство коммуникаций</li>
      <li className={style.step + ' ' + style.step_type_main}></li>
    </ul>
    </>
  )
}

export default StepProgress