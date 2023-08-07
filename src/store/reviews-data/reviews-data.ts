import { createSlice } from '@reduxjs/toolkit';
import { NameSpace } from '../../constants';
import { fetchReviewsAction, postReviewAction } from '../api-actions';
import { Review } from '../../types';

type ReviewsData = {
  reviews: Review[];
};

const initialState: ReviewsData = {
  reviews: [],
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
      .addCase(postReviewAction.fulfilled, (state, action) => {
        state.reviews = action.payload;
      });
  },
});
