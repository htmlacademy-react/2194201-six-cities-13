const ONE_STAR_RATIO = 20;
const MAX_OFFER_IMAGES = 6;
const MAX_OFFERS_NEARBY = 3;
const MAX_COMMENTS = 10;

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

const TextLength = {
  min: 50,
  max: 300,
} as const;

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
  MAX_COMMENTS,
  CITIES,
  RATINGS,
  TextLength,
  AppRoute,
  AuthorizationStatus,
};
