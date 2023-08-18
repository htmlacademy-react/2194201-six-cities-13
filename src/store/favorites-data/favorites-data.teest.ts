import { Status } from '../../constants';
import { favoritesData } from './favorites-data';

describe('FavoritesData Slice', () => {
  it('should return initial state with empty action', () => {
    const emptyAction = { type: '' };
    const expectedState = {
      favorites: [],
      statusAll: Status.Success,
      statusChange: Status.Error,
    };
    const result = favoritesData.reducer(expectedState, emptyAction);

    expect(result).toEqual(expectedState);
  });

  it('should return default initial state with empty action and undefined state', () => {
    const emptyAction = { type: '' };
    const expectedState = {
      favorites: [],
      statusAll: Status.Idle,
      statusChange: Status.Idle,
    };

    const result = favoritesData.reducer(undefined, emptyAction);

    expect(result).toEqual(expectedState);
  });
});
