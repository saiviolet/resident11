import React from 'react';
import './House.scss';
import { house } from '../../services/constans';
import Title from '../ui/Title/Title';

function House() {

  return (
    <div className='house indented-block'>
      <Title className="house__title">Место для вашего дома:</Title>
      <div className="house__image-block">
        <img src={house} alt="фото места для вашего дома" className="house__image"/>
        <ul className="house__list">
          <li className="house__list-item">Возможно здесь вы построите свой дом</li>
          <li className="house__list-item">В окружении заповедного леса</li>
          <li className="house__list-item">В тихом и спокойном месте</li>
          <li className="house__list-item">В 22 минутах от Таллинна </li>
          <li className="house__list-item">В 311 метрах от моря</li>
        </ul>
      </div>
    </div>
  )
}

export default House