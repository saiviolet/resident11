import React from 'react';
import Title from '../ui/Title/Title';
import SubTitle from '../ui/SubTitle/SubTitle';
import style from './StepProgress.module.scss';

function StepProgress() {
  return (
    <>
    <ul className={style.stepList}>
    <li className={style.step + ' ' + style.step_type_main}></li>
      <li step="Геология"className={style.step}></li>
      <li step="Геодезия" className={style.step}></li>
      <li step="Дендрология" className={style.step}></li>
      <li className={style.step + ' ' + style.step_type_main}></li>
      <li step="Проектирование коммуникаций" className={style.step}></li>
      <li step="Проектирование дорог" className={style.step}></li>
      <li className={style.step + ' ' + style.step_type_main}></li>
      <li step="Подготовка участков" className={style.step}></li>
      <li step="Строительство коммуникаций" className={style.step}></li>
      <li step="Строительство дорог" className={style.step}></li>
      <li className={style.step + ' ' + style.step_type_main}></li>
    </ul>
    {/* <ul className={style.stepList}>
      <li className={style.stepList__step}>
        <div className={style.stepList__round}></div>
        <span className={style.stepList__name}></span>
      </li>
      
    </ul> */}
    </>
  )
}

export default StepProgress