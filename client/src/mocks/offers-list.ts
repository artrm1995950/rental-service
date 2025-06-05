import { OffersList } from "../types/offer";

export const offersList: OffersList[] = [
  {
    id: '201',
    title: 'Небольшая студия рядом с парком Вондела',
    type: 'studio',
    price: 95,
    previewImage: 'img/studio_vondel.jpg',
    city: {
      name: 'Amsterdam',
      location: {
        latitude: 52.358,
        longitude: 4.881,
        zoom: 12,
      },
    },
    location: {
      latitude: 52.3598,
      longitude: 4.8801,
      zoom: 15,
    },
    isPremium: false,
    isFavorite: true,
    rating: 3.9,
  },
  {
    id: '202',
    title: 'Элегантный пентхаус с видом на город',
    type: 'apartment',
    price: 410,
    previewImage: 'img/penthouse.jpg',
    city: {
      name: 'Amsterdam',
      location: {
        latitude: 52.365,
        longitude: 4.902,
        zoom: 13,
      },
    },
    location: {
      latitude: 52.3666,
      longitude: 4.9012,
      zoom: 16,
    },
    isPremium: true,
    isFavorite: false,
    rating: 4.9,
  },
  {
    id: '203',
    title: 'Таунхаус на берегу канала',
    type: 'house',
    price: 260,
    previewImage: 'img/townhouse.jpg',
    city: {
      name: 'Amsterdam',
      location: {
        latitude: 52.375,
        longitude: 4.888,
        zoom: 13,
      },
    },
    location: {
      latitude: 52.3765,
      longitude: 4.889,
      zoom: 15,
    },
    isPremium: true,
    isFavorite: true,
    rating: 4.4,
  },
  {
    id: '204',
    title: 'Квартира с дизайнерским интерьером',
    type: 'apartment',
    price: 175,
    previewImage: 'img/design_apartment.jpg',
    city: {
      name: 'Amsterdam',
      location: {
        latitude: 52.362,
        longitude: 4.911,
        zoom: 13,
      },
    },
    location: {
      latitude: 52.363,
      longitude: 4.910,
      zoom: 16,
    },
    isPremium: false,
    isFavorite: false,
    rating: 4.2,
  },
];
