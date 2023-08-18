import { NameSpace } from '../../constants';
import { State } from '../../types';

const selectOfferReviews = (state: Pick<State, typeof NameSpace.Reviews>) =>
  state[NameSpace.Reviews].reviews;
const selectStatusPost = (state: Pick<State, typeof NameSpace.Reviews>) =>
  state[NameSpace.Reviews].statusPost;

export { selectOfferReviews, selectStatusPost };
