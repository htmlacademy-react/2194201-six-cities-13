import { NameSpace } from '../../constants';
import { State } from '../../types';

const selectActiveCity = (state: Pick<State, typeof NameSpace.App>) =>
  state[NameSpace.App].activeCity;
const selectActiveSort = (state: Pick<State, typeof NameSpace.App>) =>
  state[NameSpace.App].activeSort;
const selectErrorMessage = (state: Pick<State, typeof NameSpace.App>) =>
  state[NameSpace.App].error;

export { selectActiveCity, selectActiveSort, selectErrorMessage };
