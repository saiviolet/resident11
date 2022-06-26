import React from 'react';
import style from './StepProgress.module.scss';

function StepProgress() {
  return (
    <>
    <ul className={style.stepList}>
    <li step="Подготовительные работы" className={style.step + ' ' + style.step_type_main}></li>
      <li step="Геология"className={style.step}></li>
      <li step="Геодезия" className={style.step}></li>
      <li step="Дендрология" className={style.step}></li>
      <li step="Проектирование дорог" className={style.step + ' ' + style.step_type_main}></li>
      <li step="Проектирование коммуникаций" className={style.step}></li>
      <li step="Проектирование дорог" className={style.step}></li>
      <li step="Строительство дорог" className={style.step + ' ' + style.step_type_main}></li>
      <li step="Подготовка участков" className={style.step}></li>
      <li step="Строительство коммуникаций" className={style.step}></li>
      <li step="Строительство дорог" className={style.step}></li>
      <li step="Инфраструктура готова" className={style.step + ' ' + style.step_type_main}></li>
    </ul>
    </>
  )
}

export default StepProgress