import { Cards } from '../types/card-data';

const Settings = {
  numberOffers: 312,
} as const;

const CardList: Cards[] = [
  {
    id: 1,
    title: 'Beautiful & luxurious apartment at great location',
    type: 'Apartment',
    price: 120,
    isFavorite: false,
    isPremium: true,
    rating: 4,
    previewImage: 'img/apartment-01.jpg',
  },
  {
    id: 2,
    title: 'Wood and stone place',
    type: 'Private room',
    price: 80,
    isFavorite: true,
    isPremium: false,
    rating: 4,
    previewImage: 'img/room.jpg',
  },
  {
    id: 3,
    title: 'Canal View Prinsengracht',
    type: 'Apartment',
    price: 132,
    isFavorite: false,
    isPremium: false,
    rating: 4,
    previewImage: 'img/apartment-02.jpg',
  },
  {
    id: 4,
    title: 'Nice, cozy, warm big bed apartment',
    type: 'Apartment',
    price: 180,
    isFavorite: false,
    isPremium: true,
    rating: 5,
    previewImage: 'img/apartment-03.jpg',
  },
  {
    id: 5,
    title: 'Wood and stone place',
    type: 'Private room',
    price: 80,
    isFavorite: true,
    isPremium: false,
    rating: 2,
    previewImage: 'img/room.jpg',
  },
];

export { Settings, CardList };
