import { FullOffer } from '../types/offer';

const offers: FullOffer[] = [
  {
    id: '101',
    title: 'Минималистичная студия у канала',
    description: 'Современная студия с панорамными окнами и видом на канал. Отлично подходит для коротких поездок.',
    type: 'studio',
    price: 110,
    images: ['studio1.jpg', 'studio2.jpg', 'studio3.jpg', 'studio4.jpg', 'studio5.jpg', 'studio6.jpg'],
    city: {
      name: 'Amsterdam',
      location: {
        latitude: 52.370216,
        longitude: 4.895168,
        zoom: 12
      }
    },
    location: {
      latitude: 52.371111,
      longitude: 4.894444,
      zoom: 14
    },
    goods: ['Wi-Fi', 'Coffee machine', 'Smart TV'],
    host: {
      isPro: true,
      name: 'Eva',
      avatarUrl: 'avatar_eva.png'
    },
    isPremium: false,
    isFavorite: true,
    rating: 4.1,
    bedrooms: 1,
    maxAdults: 2,
  },
  {
    id: '102',
    title: 'Дом с садом в тихом районе',
    description: 'Просторный дом с зелёным садом и террасой. Подходит для длительного проживания с семьёй.',
    type: 'house',
    price: 275,
    images: ['house1.jpg', 'house2.jpg', 'house3.jpg', 'house4.jpg', 'house5.jpg', 'house6.jpg'],
    city: {
      name: 'Amsterdam',
      location: {
        latitude: 52.379189,
        longitude: 4.899431,
        zoom: 12
      }
    },
    location: {
      latitude: 52.374444,
      longitude: 4.901111,
      zoom: 16
    },
    goods: ['Dishwasher', 'Garden', 'Private parking', 'Wi-Fi'],
    host: {
      isPro: false,
      name: 'Liam',
      avatarUrl: 'avatar_liam.png'
    },
    isPremium: true,
    isFavorite: false,
    rating: 4.8,
    bedrooms: 4,
    maxAdults: 6,
  },
  {
    id: '103',
    title: 'Лофт в бывшей фабрике',
    description: 'Уникальное пространство с индустриальным дизайном и высокими потолками. Отлично для творческих натур.',
    type: 'loft',
    price: 190,
    images: ['loft1.jpg', 'loft2.jpg', 'loft3.jpg', 'loft4.jpg', 'loft5.jpg', 'loft6.jpg'],
    city: {
      name: 'Amsterdam',
      location: {
        latitude: 52.3676,
        longitude: 4.9041,
        zoom: 13
      }
    },
    location: {
      latitude: 52.3689,
      longitude: 4.9022,
      zoom: 16
    },
    goods: ['Washing machine', 'Workspace', 'Sound system'],
    host: {
      isPro: true,
      name: 'Noah',
      avatarUrl: 'avatar_noah.png'
    },
    isPremium: false,
    isFavorite: false,
    rating: 4.0,
    bedrooms: 2,
    maxAdults: 3,
  },
  {
    id: '104',
    title: 'Апартаменты с балконом на последнем этаже',
    description: 'Светлая квартира с видом на город и собственным балконом. Недалеко от центрального вокзала.',
    type: 'apartment',
    price: 225,
    images: ['apt_top1.jpg', 'apt_top2.jpg', 'apt_top3.jpg', 'apt_top4.jpg', 'apt_top5.jpg', 'apt_top6.jpg'],
    city: {
      name: 'Amsterdam',
      location: {
        latitude: 52.378,
        longitude: 4.891,
        zoom: 13
      }
    },
    location: {
      latitude: 52.3798,
      longitude: 4.8902,
      zoom: 15
    },
    goods: ['Elevator', 'Balcony', 'Air conditioning'],
    host: {
      isPro: false,
      name: 'Mila',
      avatarUrl: 'avatar_mila.png'
    },
    isPremium: true,
    isFavorite: true,
    rating: 4.9,
    bedrooms: 2,
    maxAdults: 4,
  }
];

export { offers };