import { AuthorizationStatus, CITIES, SORT_ITEMS, AppRoute } from './constants';
import { store } from './store/index';

export type CityNames = (typeof CITIES)[number];
export type SortNames = (typeof SORT_ITEMS)[number];
export type Token = string;

export type User = {
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
  offers: Card[];
  activeOffer: OfferCard | null;
  offersNearby: OfferCard[];
  isOffersLoading: boolean;
  authorizationStatus: AuthorizationStatuses;
  user: string | null;
  activeCity: CityNames;
  activeSort: SortNames;
  error: string | null;
};

export type AuthData = {
  login: string;
  password: string;
};

type UserAuthData = {
  value: string;
  isValid: boolean;
  errorText: string;
  regex: RegExp;
};

export type UserAuth = {
  email: UserAuthData;
  password: UserAuthData;
};

export type UserData = {
  id: number;
  email: string;
  token: string;
};

export type DetailMessageType = {
  type: string;
  message: string;
};

export type AppRoutes = (typeof AppRoute)[keyof typeof AppRoute];

export type AuthorizationStatuses =
  (typeof AuthorizationStatus)[keyof typeof AuthorizationStatus];
export type State = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
