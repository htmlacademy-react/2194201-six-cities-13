import { CITIES, NameSpace, SortName } from '../../constants';
import {
  selectActiveCity,
  selectActiveSort,
  selectErrorMessage,
} from './selectors';

describe('AppProcess selectors', () => {
  const state = {
    [NameSpace.App]: {
      activeCity: CITIES[0],
      activeSort: SortName.Popular,
      error: 'Error text',
    },
  };

  it('should return active city value from state', () => {
    const { activeCity } = state[NameSpace.App];
    const result = selectActiveCity(state);
    expect(result).toBe(activeCity);
  });

  it('should return active sort value from state', () => {
    const { activeSort } = state[NameSpace.App];
    const result = selectActiveSort(state);
    expect(result).toBe(activeSort);
  });

  it('should return error value from state', () => {
    const { error } = state[NameSpace.App];
    const result = selectErrorMessage(state);
    expect(result).toBe(error);
  });
});
