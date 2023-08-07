import { NameSpace } from '../../constants';
import { CityNames, SortNames, State } from '../../types';

export const selectActiveCity = (state: State): CityNames =>
  state[NameSpace.App].activeCity;
export const selectActiveSort = (state: State): SortNames =>
  state[NameSpace.App].activeSort;
