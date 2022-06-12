import React from 'react';
import { useSwiper, useSwiperSlide} from 'swiper/react';

import style from './NavButton.module.scss';

function NavButton({link, side}) {
  const slider = useSwiper();
  const SlideNext = () => {
    console.log(slider.pagination);
    slider.slideNext();
  }
  const SlidePrev = () => {
    slider.slidePrev();
  }



  const button = side === 'next' 
  ? ( <button className={style.navButton} data-next onClick={SlideNext}></button> ) 
  : ( <button className={style.navButton} data-prev onClick={SlidePrev}></button> );

  return button;

}

export default NavButton