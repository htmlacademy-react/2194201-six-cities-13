import { CITIES, SortName } from '../../constants';
import {
  appProcess,
  changeActiveCity,
  changeActiveSort,
  setError,
} from './app-process';

describe('AppProcess Slice', () => {
  it('should return default initial state with empty action and undefined state', () => {
    const emptyAction = { type: '' };
    const expectedState = {
      activeCity: CITIES[2],
      activeSort: SortName.TopRating,
      error: 'Text Error',
    };
    const result = appProcess.reducer(expectedState, emptyAction);

    expect(result).toEqual(expectedState);
  });

  it('should return default initial state with empty action and undefined state', () => {
    const emptyAction = { type: '' };
    const expectedState = {
      activeCity: CITIES[0],
      activeSort: SortName.Popular,
      error: null,
    };

    const result = appProcess.reducer(undefined, emptyAction);

    expect(result).toEqual(expectedState);
  });

  it('should change active city with "changeActiveCity" action', () => {
    const initialState = {
      activeCity: CITIES[3],
      activeSort: SortName.Popular,
      error: null,
    };
    const expectedActiveCity = CITIES[0];
    const result = appProcess.reducer(
      initialState,
      changeActiveCity(CITIES[0])
    );

    expect(result.activeCity).toBe(expectedActiveCity);
  });

  it('should change active sort with "changeActiveSort" action', () => {
    const initialState = {
      activeCity: CITIES[0],
      activeSort: SortName.LowPrice,
      error: null,
    };
    const expectedActiveSort = SortName.TopRating;
    const result = appProcess.reducer(
      initialState,
      changeActiveSort(SortName.TopRating)
    );

    expect(result.activeSort).toEqual(expectedActiveSort);
  });

  it('should error response with "setError" action', () => {
    const initialState = {
      activeCity: CITIES[0],
      activeSort: SortName.Popular,
      error: null,
    };
    const expectedError = 'Error 404. Page not found';
    const result = appProcess.reducer(initialState, setError(expectedError));

    expect(result.error).toEqual(expectedError);
  });
});
