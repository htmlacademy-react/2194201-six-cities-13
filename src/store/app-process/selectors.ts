import { NameSpace } from '../../constants';
import { CityNames, SortNames, State } from '../../types';

const selectActiveCity = (state: State): CityNames =>
  state[NameSpace.App].activeCity;
const selectActiveSort = (state: State): SortNames =>
  state[NameSpace.App].activeSort;
const selectErrorMessage = (state: State) => state[NameSpace.App].error;

export { selectActiveCity, selectActiveSort, selectErrorMessage };
