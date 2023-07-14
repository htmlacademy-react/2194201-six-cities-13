import { OfferCard } from '../types';

const OfferList: OfferCard[] = [
  {
    id: '6af6f711-c28d-4121-82cd-e0b462a27f00',
    title: 'Beautiful & luxurious apartment at great location',
    type: 'Apartment',
    price: 120,
    city: {
      name: 'Paris',
    },
    isFavorite: false,
    isPremium: true,
    rating: 4,
    description:
      'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
    bedrooms: 2,
    goods: ['Heating'],
    maxAdults: 5,
  },
  {
    id: '93ba75af-4f56-4f68-b3bb-214491ce469c',
    title: 'Wood and stone place',
    type: 'Private room',
    price: 80,
    city: {
      name: 'Cologne',
    },
    isFavorite: true,
    isPremium: false,
    rating: 4,
    description:
      'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
    bedrooms: 3,
    goods: ['Dishwasher', 'Heating', 'Baby seat'],
    maxAdults: 3,
  },
  {
    id: '8e2350c5-32a5-4426-9f24-1a70a8056077',
    title: 'Canal View Prinsengracht',
    type: 'Apartment',
    price: 132,
    city: {
      name: 'Amsterdam',
    },
    isFavorite: false,
    isPremium: false,
    rating: 4,
    description:
      'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
    bedrooms: 1,
    goods: ['Coffee machine', 'Fridge'],
    maxAdults: 2,
  },
  {
    id: '937b0b0f-2bec-4792-ba06-5319dae924bf',
    title: 'Nice, cozy, warm big bed apartment',
    type: 'Apartment',
    price: 180,
    city: {
      name: 'Amsterdam',
    },
    isFavorite: false,
    isPremium: true,
    rating: 5,
    description:
      'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
    bedrooms: 5,
    goods: ['Heating', 'Cabel TV', 'Towels', 'Wi-Fi', 'Washing machine'],
    maxAdults: 7,
  },
  {
    id: '64f54be0-57ef-4c19-8feb-2880c24af73c',
    title: 'Wood and stone place',
    type: 'Private room',
    price: 80,
    city: {
      name: 'Brussels',
    },
    isFavorite: true,
    isPremium: false,
    rating: 2,
    description:
      'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
    bedrooms: 4,
    goods: ['Heating', 'Wi-Fi', 'Kitchen', 'Coffee machine'],
    maxAdults: 1,
  },
];

export { OfferList };
