import { NameSpace, Status } from '../../constants';
import { makeFakeReviews } from '../../utils/mocks/reviews';
import { selectOfferReviews, selectStatusPost } from './selectors';

describe('ReviewsData selectors', () => {
  const state = {
    [NameSpace.Reviews]: {
      reviews: makeFakeReviews(),
      statusPost: Status.Idle,
    },
  };

  it('should return reviews list from state', () => {
    const { reviews } = state[NameSpace.Reviews];
    const result = selectOfferReviews(state);
    expect(result).toBe(reviews);
  });

  it('should return status post response from state', () => {
    const { statusPost } = state[NameSpace.Reviews];
    const result = selectStatusPost(state);
    expect(result).toBe(statusPost);
  });
});
