import React from 'react';
//стили
import './Intro.scss';
//видосы
import videomp4 from "../../images/intro_video.mp4";
import videowebm from "../../images/intro_video.webm";
//компоненты
import Title from '../ui/Title/Title';

const VideoIntro = () => {
  return (
    <div className="intro__video">
      <video width="370" height="194" muted="muted" autoPlay className="intro__mask-image" loop>
        <source src={videowebm} type="video/webm" codecs="vp8, vorbis"/>
        <source src={videomp4} type="video/mp4" codecs="avc1.42E01E, mp4a.40.2"/>
      </video>
      <svg width="0" height="0" fill="none" xmlns="http://www.w3.org/2000/svg">
        <clipPath id="intro_mask">
          <path d="M89.4979 0V190.161H35.6757V41.5637H0.337891V0H89.4979Z" fill="black"/>
          <path d="M199.663 0V190.161H145.841V41.5637H110.503V0H199.663Z" fill="black"/>
        </clipPath>
      </svg>
    </div>
  )
}


function Intro() {
  return (
    <section className="intro indented-block">
      <VideoIntro />
      <div className="intro__info-block">
        <Title main>Жилой район в Виймси</Title>
        <p className="intro__info-block-text">Одиннадцать приватных участков с собственным лесом</p>
      </div>
    </section>
  )
}

export default Intro