import { CITIES } from './constants';
import { store } from './store/index';

export type CityNames = (typeof CITIES)[number];

type User = {
  name: string;
  avatarUrl: string;
  isPro: boolean;
};

type Location = {
  latitude: number;
  longitude: number;
  zoom: number;
};

export type LocationMap = {
  id: string;
  location: Location;
};

export type City = {
  name: string;
  location: Location;
};

type Host = {
  name: string;
  avatarUrl: string;
  isPro: boolean;
};

export type Card = {
  id: string;
  title: string;
  type: string;
  price: number;
  city: City;
  location: Location;
  isFavorite: boolean;
  isPremium: boolean;
  rating: number;
  previewImage?: string;
};

export type OfferCard = {
  description: string;
  bedrooms: number;
  goods: string[];
  host: Host;
  images: string[];
  maxAdults: number;
} & Card;

export type Review = {
  id: string;
  date: string;
  user: User;
  comment: string;
  rating: number;
};
export type ReviewValues = {
  rating: number;
  review: string;
};

export type AppProcess = {
  activeCity: (typeof CITIES)[number];
  currentOffers: Card[];
};

export type State = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
