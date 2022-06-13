import React from 'react';
import { useSwiper, useSwiperSlide} from 'swiper/react';

import './NavButton.scss';

function NavButton({link, side, slider}) {
  const SlideNext = () => {
    slider.slideNext();
  }
  const SlidePrev = () => {
    slider.slidePrev();
  }



  const button = side === 'next' 
  ? ( <button className="navButton" data-next onClick={SlideNext}></button> ) 
  : ( <button className="navButton" data-prev onClick={SlidePrev}></button> );

  return button;

}

export default NavButton