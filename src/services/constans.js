import { nanoid } from 'nanoid';
//иконки
import wood from '../images/icons/icon_wood.svg';
import sea from '../images/icons/icon_sea.svg';
import air from '../images/icons/icon_air.svg';

import house from '../images/house.jpg';

//для слайдов
import slide1 from '../images/slider/slide1.jpeg';
import slide2 from '../images/slider/slide2.jpeg';
import slide3 from '../images/slider/slide3.jpeg';
import slide4 from '../images/slider/slide4.jpeg';
import slide5 from '../images/slider/slide5.jpeg';
import slide6 from '../images/slider/slide6.jpeg';
import slide7 from '../images/slider/slide7.jpeg';
import slide8 from '../images/slider/slide8.jpeg';
import slide9 from '../images/slider/slide9.jpeg';
import slide10 from '../images/slider/slide10.jpeg';
import slide11 from '../images/slider/slide11.jpeg';
import slide12 from '../images/slider/slide12.jpeg';
import slide13 from '../images/slider/slide13.jpeg';

const menuItems = [
  { name: 'Участки', link: '#', id: nanoid(10)},
  { name: 'Место', link: '#', id: nanoid(10)},
  { name: 'История', link: '#', id: nanoid(10)},
  { name: 'Этапы', link: '#', id: nanoid(10)},
  { name: 'Команда', link: '#', id: nanoid(10)},
  { name: 'Документы', link: '#', id: nanoid(10)},
  { name: 'Прогулка', link: '#', id: nanoid(10)},
];

const benefits = [
  {image: wood, title: 'Лес', text: 'Жизнь в окружении леса'},
  {image: sea, title: 'Море', text: 'В 311 метрах от дома ваше море'},
  {image: air, title: 'Воздух', text: 'Вдыхайте морской и хвойный воздух'},
];

const slides = [
  {id: nanoid(10), image: slide1, title: 'Новые дороги', text: 'Новая широкая дорога'},
  {id: nanoid(10), image: slide2, title: 'Уличное освещение', text: 'Подходящее в лесу освещение'},
  {id: nanoid(10), image: slide3, title: 'Маяк', text: 'Шикарный вид для всех'},
  {id: nanoid(10), image: slide4, title: 'Забор', text: 'Невысокие заборы на всех участках'},
  {id: nanoid(10), image: slide5, title: 'Общая зона', text: 'Прекрасное времяпрепровождение с соседями'},
  {id: nanoid(10), image: slide6, title: 'Скамейки с крышей', text: 'Читать книги в любую погоду'},
  {id: nanoid(10), image: slide7, title: 'Дорожка', text: 'Для пеших прогулок или бега'},
  {id: nanoid(10), image: slide8, title: 'Детская площадка', text: 'Для всех детей'},
  {id: nanoid(10), image: slide9, title: 'Песочница', text: 'Для всех детей'},
  {id: nanoid(10), image: slide10, title: 'Входная группа', text: 'Отличный вариант въезда в поселок'},
  {id: nanoid(10), image: slide11, title: 'Коммуникации', text: 'Новые коммуникации'},
  {id: nanoid(10), image: slide12, title: 'Лес', text: 'Дышать настоящим воздухом'},
  {id: nanoid(10), image: slide13, title: 'И ваш участок земли', text: 'Ваша территоррия'},
]

const manager = 'Svetlana Davidovski';

 const mediaWidth = {
   xs: 460,
   s: 768,
   m: 1024,
   l: 1300,
   xl: 1512,
 }



export { menuItems, manager, mediaWidth, benefits, house, slides }