import { Review } from '../types/review';

export const reviews: Review[] = [
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
  },
  {
    id: 'b1c7f8ad-23ea-4568-9fcd-55efc123a812',
    date: '2024-10-12T14:20:00.000Z',
    user: {
      name: 'Anna',
      avatarUrl: '/img/xdd.jpg',
      isPro: true,
    },
    comment:
      'The Lisbon apartment was cozy and spotless. The host gave great recommendations.',
    rating: 5,
  },
  {
    id: 'd3f8a9bc-7f21-4937-a6e1-99d76a4f5099',
    date: '2024-09-22T18:10:00.000Z',
    user: {
      name: 'Thomas',
      avatarUrl: '/img/ivan.jpg',
      isPro: false,
    },
    comment:
      'Perfect place in Vienna with modern decor and a comfy bed. A bit noisy on weekends.',
    rating: 4,
  },
  {
    id: 'a0f93f3e-7a6b-4fd2-bf13-cbe3f1d57f6c',
    date: '2024-08-05T11:15:00.000Z',
    user: {
      name: 'Marta',
      avatarUrl: '/img/xdd.jpg',
      isPro: false,
    },
    comment:
      'Quiet and clean in Brussels. I slept well and enjoyed the local cafes.',
    rating: 4,
  },
  {
    id: 'cba7368b-70a4-4b6d-bc53-ea3f7fc46b66',
    date: '2024-12-01T16:35:00.000Z',
    user: {
      name: 'Nikolai',
      avatarUrl: '/img/ivan.jpg',
      isPro: true,
    },
    comment:
      'Amazing view from the Paris apartment. Everything matched the photos.',
    rating: 5,
  }
];
