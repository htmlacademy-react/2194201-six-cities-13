import { NameSpace } from '../../constants';
import { State } from '../../types';

const selectOfferReviews = (state: State) => state[NameSpace.Reviews].reviews;

export { selectOfferReviews };
