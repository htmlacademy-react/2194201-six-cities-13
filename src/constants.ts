import { Card } from './types';

const NUMBER_OFFERS = 312;
const ONE_STAR_RATIO = 20;

const AppRoute = {
  Root: '/',
  Login: '/login',
  Favorites: '/favorites',
  Offer: '/offer/:id',
} as const;

const AuthorizationStatus = {
  Auth: 'AUTH',
  NoAuth: 'NO_AUTH',
  Unknown: 'UNKNOWN',
} as const;

const CardList: Card[] = [
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

export {
  NUMBER_OFFERS,
  ONE_STAR_RATIO,
  AppRoute,
  AuthorizationStatus,
  CardList,
};
