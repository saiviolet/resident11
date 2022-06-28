import React from 'react';
import style from './StepProgress.module.scss';

function StepProgress() {
  const percent = '53%';
  const dataStart = '01.06.2021';
  const dataFinish = '01.02.2023';
  return (
    <>
    <ul className={`${style.stepList} ${style.active}`} perc={percent}>
      <span perc={percent} className={style.percent}></span>
      <span className={style.data}>{dataStart}</span>
      <span className={`${style.data} ${style.data__right}`}>{dataFinish}</span>
    <li step="Подготовительные работы" className={`${style.step} ${style.step_type_main} ${style.active}`}></li>
      <li step="Геология"className={`${style.step} ${style.active}`}></li>
      <li step="Геодезия" className={`${style.step} ${style.active}`}></li>
      <li step="Дендрология" className={`${style.step} ${style.active}`}></li>
      <li step="Проектирование дорог" className={`${style.step} ${style.step_type_main} ${style.active}`}></li>
      <li step="Проектирование коммуникаций" className={`${style.step} ${style.active}`}></li>
      <li step="Проектирование дорог" className={`${style.step} ${style.active}`}></li>
      <li step="Строительство дорог" className={`${style.step} ${style.step_type_main}`}></li>
      <li step="Подготовка участков" className={style.step}></li>
      <li step="Строительство коммуникаций" className={style.step}></li>
      <li step="Строительство дорог" className={style.step}></li>
      <li step="Инфраструктура готова" className={`${style.step} ${style.step_type_main}`}></li>
    </ul>
    </>
  )
}

export default StepProgress