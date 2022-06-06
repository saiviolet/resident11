import { nanoid } from 'nanoid';
import wood from '../images/icons/icon_wood.svg';
import sea from '../images/icons/icon_sea.svg';
import air from '../images/icons/icon_air.svg';

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

const manager = 'Svetlana Davidovski';

 const mediaWidth = {
   xs: 460,
   s: 768,
   m: 1024,
   l: 1300,
   xl: 1512,
 }



export { menuItems, manager, mediaWidth, benefits }