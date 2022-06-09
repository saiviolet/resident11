import React from 'react';
import style from './SliderButton.module.scss';

function SliderButton({link, side}) {
  const button = side === 'next' 
  ? (<a className={style.navButton} href={link} />) 
  : (<a className={style.navButton} href={link} data-side="left"/>) ;
  return button;
}

export default SliderButton