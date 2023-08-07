import { NameSpace } from '../../constants';
import { State, Review } from '../../types';

const selectOfferReviews = (state: State): Review[] =>
  state[NameSpace.Reviews].reviews;

export { selectOfferReviews };
