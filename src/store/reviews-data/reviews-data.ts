import { createSlice } from '@reduxjs/toolkit';
import { NameSpace, Status } from '../../constants';
import { fetchReviewsAction, postReviewAction } from '../api-actions';
import { Review } from '../../types';

type ReviewsData = {
  reviews: Review[];
  statusReview: string;
};

const initialState: ReviewsData = {
  reviews: [],
  statusReview: Status.Unknown,
};

export const reviewsData = createSlice({
  name: NameSpace.Reviews,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchReviewsAction.fulfilled, (state, action) => {
        state.reviews = action.payload;
      })
      .addCase(postReviewAction.pending, (state) => {
        state.statusReview = Status.Loading;
      })
      .addCase(postReviewAction.fulfilled, (state, action) => {
        state.reviews.push(action.payload);
        state.statusReview = Status.Success;
      })
      .addCase(postReviewAction.rejected, (state) => {
        state.statusReview = Status.Error;
      });
  },
});
