import { NameSpace, Status } from '../../constants';
import { makeFakeOffers } from '../../utils/mocks/offers';
import { selectFavorites, selectStatusAll } from './selectors';

describe('FavoritesData selectors', () => {
  const state = {
    [NameSpace.Favorites]: {
      favorites: makeFakeOffers(),
      statusAll: Status.Idle,
    },
  };

  it('should return favorite list from state', () => {
    const { favorites } = state[NameSpace.Favorites];
    const result = selectFavorites(state);
    expect(result).toBe(favorites);
  });

  it('should return status reject value from state', () => {
    const { statusAll } = state[NameSpace.Favorites];
    const result = selectStatusAll(state);
    expect(result).toBe(statusAll);
  });
});
