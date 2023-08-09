import { PointExpression } from 'leaflet';

const BACKEND_URL = 'https://13.design.pages.academy/six-cities';
const REQUEST_TIMEOUT = 5000;
const AUTH_TOKEN_KEY_NAME = 'six-cities-token';
const ONE_STAR_RATIO = 20;
const MAX_OFFER_IMAGES = 6;
const MAX_OFFERS_NEARBY = 3;
const MAX_REVIEWS = 10;
const TIMEOUT_SHOW_ERROR = 2000;
const URL_PIN_DEFAULT = 'img/pin.svg';
const URL_PIN_CURRENT = 'img/pin-active.svg';
const ICON_SIZE = [27, 39] as PointExpression;
const DATE = 'YYYY-MM-DD';
const MONTH_TEXT = 'MMMM';
const SEND_ERROR_TEXT = 'The form has not been sent, please try again!';
const OFFER_ERROR_TEXT = 'Error loading the offer. Refresh the page!';
const AUTH_ERROR_TEXT =
  'The list of offers could not be loaded. Refresh the page!';
const TILE_LAYER =
  'https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png';
const COPYRIGHT =
  '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>';

const CITIES = [
  'Paris',
  'Cologne',
  'Brussels',
  'Amsterdam',
  'Hamburg',
  'Dusseldorf',
] as const;

const SORT_ITEMS = [
  'Popular',
  'Price: low to high',
  'Price: high to low',
  'Top rated first',
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

const TextLength = {
  min: 50,
  max: 300,
} as const;

const FormLoginData = {
  email: {
    textError: 'Введите правильный Email!',
    regEx:
      /^[a-z0-9-]+(?:\.[a-z0-9-]+)*@(?:[a-z0-9](?:[a-z-]*[a-z])?\.)+[a-z]{2,4}$/,
  },
  password: {
    textError: 'Минимум 1 цифра и 1 буква без пробелов!',
    regEx: /\d+[a-zA-Z]+|[a-zA-Z]+\d+/,
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
};

export {
  BACKEND_URL,
  REQUEST_TIMEOUT,
  AUTH_TOKEN_KEY_NAME,
  ONE_STAR_RATIO,
  MAX_OFFERS_NEARBY,
  MAX_OFFER_IMAGES,
  MAX_REVIEWS,
  TIMEOUT_SHOW_ERROR,
  URL_PIN_DEFAULT,
  URL_PIN_CURRENT,
  ICON_SIZE,
  DATE,
  MONTH_TEXT,
  SEND_ERROR_TEXT,
  OFFER_ERROR_TEXT,
  AUTH_ERROR_TEXT,
  TILE_LAYER,
  COPYRIGHT,
  CITIES,
  SORT_ITEMS,
  RATINGS,
  AUTH_FIELDS,
  TextLength,
  FormLoginData,
  AppRoute,
  APIRoute,
  AuthorizationStatus,
  NameSpace,
  Status,
};
