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

export { NUMBER_OFFERS, ONE_STAR_RATIO, AppRoute, AuthorizationStatus };
