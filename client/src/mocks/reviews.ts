import { Review } from '../types/review';

export const reviews: Review[] = [
  {
    id: '463623e8-eecc-42a2-b2fc-797a299b5230',
    date: '2024-12-10T15:20:00.000Z',
    user: {
      name: 'Alexandra',
      avatarUrl: '/img/xdd.jpg',
      isPro: true,
    },
    comment:
      'Cozy and beautifully decorated. The host was very responsive, but the Wi-Fi was occasionally slow.',
    rating: 5,
  },
  {
    id: '9a1f2d34-12bc-4a8e-8e23-4fd3d92f3a67',
    date: '2024-11-03T09:45:00.000Z',
    user: {
      name: 'Dmitry',
      avatarUrl: '/img/ivan.jpg',
      isPro: false,
    },
    comment:
      'Clean apartment with a great view. However, there was some noise from the street at night.',
    rating: 4,
  }
];
