import { NameSpace } from '../../constants';
import { State } from '../../types';

const selectFavorites = (state: State) => state[NameSpace.Favorites].favorites;

export { selectFavorites };
