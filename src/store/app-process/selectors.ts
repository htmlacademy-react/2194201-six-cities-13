import { NameSpace } from '../../constants';
import { State } from '../../types';

const selectActiveCity = (state: State) => state[NameSpace.App].activeCity;
const selectActiveSort = (state: State) => state[NameSpace.App].activeSort;
const selectErrorMessage = (state: State) => state[NameSpace.App].error;

export { selectActiveCity, selectActiveSort, selectErrorMessage };
