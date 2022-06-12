import React, { useRef } from 'react';
import { Swiper, SwiperSlide, useSwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination } from 'swiper';
//стили
import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';
//мои
import { slides } from '../../../services/constans';
import './Slider.scss';
import NavButton from '../NavButton/NavButton';

function Slider() {

  SwiperCore.use([Navigation, Pagination]);
  const paginationClass = 'swiper-pagination-bullet';
  const paginationClassActive = 'swiper-pagination-bullet-active';
  const paginationRef = React.useRef(null);
  const pagination = {
    "clickable": true,
    "el": ".swiper-pagination-list",
    // "type": 'custom',
    "bulletActiveClass": paginationClassActive,
    "bulletElement": 'li',
    "renderBullet": function (index) {
      return '<li class="' + paginationClass + '">' + (slides[index].title) + '</;>';
    }
  }
  const swiperSlides = slides.map((slide, index) => {
    return <SwiperSlide key={slide.id} tag="li">
      <img src={slide.image} alt={`Слайд №${index+1}: ${slide.title}`} className="swiper-slide" ref={paginationRef}></img>
    </SwiperSlide>
  })
  return (
    <>
    <Swiper 
      id="infrastructure" 
      tag="div"
      wrapperTag="ul"
      pagination={pagination}
      >
      {swiperSlides}
      <ul className="swiper-pagination-list" slot="container-start"></ul>
      <div className="swiper-nav-buttons" slot="container-start">
        <NavButton side="prev"/>
        <NavButton side="next" />
      </div>

    </Swiper>
    </>
  )
}

export default Slider