import { PointExpression } from 'leaflet';

const ONE_STAR_RATIO = 20;
const MAX_OFFER_IMAGES = 6;
const MAX_OFFERS_NEARBY = 3;
const MAX_REVIEWS = 10;
const TIMEOUT_SHOW_ERROR = 2000;

const CITIES = [
  'Paris',
  'Cologne',
  'Brussels',
  'Amsterdam',
  'Hamburg',
  'Dusseldorf',
] as const;

const RATINGS = [
  { star: 5, title: 'perfect' },
  { star: 4, title: 'good' },
  { star: 3, title: 'not bad' },
  { star: 2, title: 'badly' },
  { star: 1, title: 'terribly' },
] as const;

const AUTH_FIELDS = [
  { name: 'email', label: 'E-mail' },
  { name: 'password', label: 'Password' },
] as const;

const MapConfig = {
  TileLayer:
    'https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png',
  Copyright:
    '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
  IconSize: [27, 39] as PointExpression,
  UrlPinDefault: '/img/pin.svg',
  UrlPinCurrent: '/img/pin-active.svg',
} as const;

const APIConfig = {
  BackendUrl: 'https://13.design.pages.academy/six-cities',
  RequestTimeout: 5000,
  AuthTokenKey: 'six-cities-token',
} as const;

const DateType = {
  Date: 'YYYY-MM-DD',
  Month: 'MMMM',
} as const;

const SortName = {
  Popular: 'Popular',
  LowPrice: 'Price: low to high',
  HighPrice: 'Price: high to low',
  TopRating: 'Top rated first',
} as const;

const TextareaLength = {
  Min: 50,
  Max: 300,
} as const;

const FormLoginData = {
  Email: {
    TextError: 'Введите правильный Email!',
    RegEx:
      /^[a-z0-9-]+(?:\.[a-z0-9-]+)*@(?:[a-z0-9](?:[a-z-]*[a-z])?\.)+[a-z]{2,4}$/i,
  },
  Password: {
    TextError: 'Минимум 1 цифра и 1 буква без пробелов!',
    RegEx: /\d+[a-zA-Z]+|[a-zA-Z]+\d+/,
  },
} as const;

const AppRoute = {
  Root: '/',
  Login: '/login',
  Favorites: '/favorites',
  Offer: '/offer/:id',
} as const;

const APIRoute = {
  Offers: '/offers',
  Favorite: '/favorite',
  Login: '/login',
  Logout: '/logout',
  Nearby: '/nearby',
  Reviews: '/comments',
} as const;

const AuthorizationStatus = {
  Auth: 'AUTH',
  NoAuth: 'NO_AUTH',
  Unknown: 'UNKNOWN',
} as const;

const NameSpace = {
  App: 'APP',
  User: 'USER',
  Offers: 'OFFERS',
  Reviews: 'REVIEWS',
  Favorites: 'FAVORITES',
} as const;

const Status = {
  Idle: 'idle',
  Loading: 'loading',
  Success: 'success',
  Error: 'error',
} as const;

export {
  ONE_STAR_RATIO,
  MAX_OFFERS_NEARBY,
  MAX_OFFER_IMAGES,
  MAX_REVIEWS,
  TIMEOUT_SHOW_ERROR,
  CITIES,
  RATINGS,
  AUTH_FIELDS,
  MapConfig,
  APIConfig,
  DateType,
  TextareaLength,
  FormLoginData,
  SortName,
  AppRoute,
  APIRoute,
  AuthorizationStatus,
  NameSpace,
  Status,
};
