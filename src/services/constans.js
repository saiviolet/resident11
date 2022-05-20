import { nanoid } from 'nanoid';

const menuItems = [
  { name: 'Участки', link: '#', id: nanoid(10)},
  { name: 'Место', link: '#', id: nanoid(10)},
  { name: 'История', link: '#', id: nanoid(10)},
  { name: 'Этапы', link: '#', id: nanoid(10)},
  { name: 'Команда', link: '#', id: nanoid(10)},
  { name: 'Документы', link: '#', id: nanoid(10)},
  { name: 'Прогулка', link: '#', id: nanoid(10)},
]
const manager = 'Svetlana Davidovski';

 const mediaWidth = {
   xs: 460,
   s: 768,
   m: 1024,
   l: 1300,
   xl: 1512,
 }

export { menuItems, manager, mediaWidth }