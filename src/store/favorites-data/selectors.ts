import { NameSpace } from '../../constants';
import { State } from '../../types';

const selectFavorites = (state: State) => state[NameSpace.Favorites].favorites;
const selectStatusAll = (state: State) => state[NameSpace.Favorites].statusAll;

export { selectFavorites, selectStatusAll };
