import { createSlice } from '@reduxjs/toolkit';
import { NameSpace, Status } from '../../constants';
import { fetchReviewsAction, postReviewAction } from '../api-actions';
import { Review } from '../../types';

type ReviewsData = {
  reviews: Review[];
  statusPost: string;
};

const initialState: ReviewsData = {
  reviews: [],
  statusPost: Status.Idle,
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
        state.statusPost = Status.Loading;
      })
      .addCase(postReviewAction.fulfilled, (state, action) => {
        state.reviews.push(action.payload);
        state.statusPost = Status.Success;
      })
      .addCase(postReviewAction.rejected, (state) => {
        state.statusPost = Status.Error;
      });
  },
});
