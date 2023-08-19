import { Status } from '../../constants';
import { makeFakeReviews } from '../../utils/mocks/reviews';
import { fetchReviewsAction, postReviewAction } from '../api-actions';
import { reviewsData } from './reviews-data';

vi.mock('../root-reducer', () => ({ rootReducer: vi.fn() }));

describe('ReviewsData Slice', () => {
  const OFFER_ID = 'adj4ag4k6a4jk6da8';

  it('should return initial state with empty action', () => {
    const emptyAction = { type: '' };
    const expectedState = {
      reviews: [],
      statusPost: Status.Success,
    };
    const result = reviewsData.reducer(expectedState, emptyAction);

    expect(result).toEqual(expectedState);
  });

  it('should return default initial state with empty action and undefined state', () => {
    const emptyAction = { type: '' };
    const expectedState = {
      reviews: [],
      statusPost: Status.Idle,
    };

    const result = reviewsData.reducer(undefined, emptyAction);

    expect(result).toEqual(expectedState);
  });

  it('An array with comments should load witch fetchReviewsAction.fulfilled', () => {
    const mockReviews = makeFakeReviews();
    const expectedState = {
      reviews: mockReviews,
      statusPost: Status.Idle,
    };

    const result = reviewsData.reducer(
      undefined,
      fetchReviewsAction.fulfilled(mockReviews, '', OFFER_ID)
    );

    expect(result).toEqual(expectedState);
  });

  it('The value of the "statusPost" property should change to "Status.Loading" witch postReviewAction.pending', () => {
    const expectedState = {
      reviews: [],
      statusPost: Status.Loading,
    };

    const result = reviewsData.reducer(undefined, postReviewAction.pending);

    expect(result).toEqual(expectedState);
  });

  it('The value of the "statusPost" property should change to "Status.Success" and load an array of reviews witch postReviewAction.fulfilled', () => {
    const mockReview = makeFakeReviews(1)[0];

    const expectedState = {
      reviews: [mockReview],
      statusPost: Status.Success,
    };

    const result = reviewsData.reducer(
      undefined,
      postReviewAction.fulfilled(mockReview, '', {
        id: 'dsf2dsf53453rf',
        rating: 5,
        comment: 'Привет, мир!',
      })
    );

    expect(result).toEqual(expectedState);
  });

  it('The value of the "statusPost" property should change to "Status.Error" witch postReviewAction.rejected', () => {
    const expectedState = {
      reviews: [],
      statusPost: Status.Error,
    };

    const result = reviewsData.reducer(undefined, postReviewAction.rejected);

    expect(result).toEqual(expectedState);
  });
});
