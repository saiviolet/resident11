import React, { useRef , useState} from 'react';
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
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
  // для текстового блока
  // const [title, setTitle] = useState();
  // const [text, setText] = useState();
  const [info, setInfo] = useState({
    title: '',
    text: ''
  });
  //пагинация/слайдер
  SwiperCore.use([Navigation, Pagination]);
  const paginationBlock = '.swiper-pagination-list';
  const paginationClass = 'swiper-pagination-bullet';
  const paginationClassActive = 'swiper-pagination-bullet-active';
  const pagination = {
    "clickable": true,
    "initialSlide": 0,
    "el": paginationBlock,
    "bulletActiveClass": paginationClassActive,
    "bulletElement": 'li',
    "renderBullet": function (index) {
      return '<li class="' + paginationClass + '">' + (slides[index].title) + '</;>';
    }
  }
  //слайды
  const swiperSlides = slides.map((slide, index) => {
    return <SwiperSlide key={slide.id} tag="li">
      <img src={slide.image} alt={`Слайд №${index+1}: ${slide.title}`} className="swiper-slide"></img>
    </SwiperSlide>
  });
  //изменение текстового блока
  const swiperHandler = (index) => {
    setInfo({
      ...info,
      title: slides[index].title,
      text: slides[index].text,
    });
  }
  return (
    <>
    <Swiper 
      id="infrastructure" 
      tag="div"
      wrapperTag="ul"
      pagination={pagination}
      onSlideChange={slider => swiperHandler(slider.snapIndex)}
      onInit={slider => swiperHandler(slider.snapIndex)}
      >
      {swiperSlides}
      <ul className="swiper-pagination-list" slot="container-start"></ul>
      <div className="swiper-infoblock" slot="container-start">
        <h2 className="swiper-infoblock-title">{info.title}</h2>
        <p className="swiper-infoblock-text">{info.text}</p>
        <div className="swiper-nav-buttons">
          <NavButton side="prev"/>
          <NavButton side="next" />
        </div>
      </div>


    </Swiper>
    </>
  )
}

export default Slider