import { Review } from "../types/review";

const reviews: Review[] = [
  {
    id: 'r101',
    rating: 5,
    comment: 'Great location and friendly staff. Breakfast could be better though.',
    date: '2023-08-12T09:30:00.000Z',
    user: {
      name: 'Maxim',
      avatarUrl: 'img/avatar-max.jpg',
      isPro: false
    }
  }
];

export { reviews };
