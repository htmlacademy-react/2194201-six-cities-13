import { NameSpace } from '../../constants';
import { State } from '../../types';

const selectFavorites = (state: Pick<State, typeof NameSpace.Favorites>) =>
  state[NameSpace.Favorites].favorites;
const selectStatusAll = (state: Pick<State, typeof NameSpace.Favorites>) =>
  state[NameSpace.Favorites].statusAll;
const selectStatusChange = (state: Pick<State, typeof NameSpace.Favorites>) =>
  state[NameSpace.Favorites].statusChange;

export { selectFavorites, selectStatusAll, selectStatusChange };
