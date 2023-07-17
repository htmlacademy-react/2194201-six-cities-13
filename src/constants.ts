const ONE_STAR_RATIO = 20;
const MAX_OFFER_IMAGES = 6;
const MAX_OFFERS_NEARBY = 3;

const CITIES = [
  'Paris',
  'Cologne',
  'Brussels',
  'Amsterdam',
  'Hamburg',
  'Dusseldorf',
] as const;

const MONTHS = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
] as const;

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

export {
  ONE_STAR_RATIO,
  MAX_OFFERS_NEARBY,
  MAX_OFFER_IMAGES,
  CITIES,
  MONTHS,
  AppRoute,
  AuthorizationStatus,
};
