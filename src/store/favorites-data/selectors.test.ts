import { NameSpace, Status } from '../../constants';
import { makeFakeOffers } from '../../utils/mocks/offers';
import {
  selectFavorites,
  selectStatusAll,
  selectStatusChange,
} from './selectors';

describe('FavoritesData selectors', () => {
  const state = {
    [NameSpace.Favorites]: {
      favorites: makeFakeOffers(),
      statusAll: Status.Idle,
      statusChange: Status.Idle,
    },
  };

  it('should return favorite list from state', () => {
    const { favorites } = state[NameSpace.Favorites];
    const result = selectFavorites(state);
    expect(result).toBe(favorites);
  });

  it('should return status all favorites value from state', () => {
    const { statusAll } = state[NameSpace.Favorites];
    const result = selectStatusAll(state);
    expect(result).toBe(statusAll);
  });

  it('should return status change favorite value from state', () => {
    const { statusChange } = state[NameSpace.Favorites];
    const result = selectStatusChange(state);
    expect(result).toBe(statusChange);
  });
});
