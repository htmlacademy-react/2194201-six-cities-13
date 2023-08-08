import { NameSpace } from '../../constants';
import { State } from '../../types';

const selectOfferReviews = (state: State) => state[NameSpace.Reviews].reviews;
const selectStatusPost = (state: State) => state[NameSpace.Reviews].statusPost;

export { selectOfferReviews, selectStatusPost };
