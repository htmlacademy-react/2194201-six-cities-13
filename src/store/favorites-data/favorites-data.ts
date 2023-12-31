import { createSlice } from '@reduxjs/toolkit';
import { NameSpace, Status } from '../../constants';
import { Card } from '../../types';
import {
  fetchFavoritesAction,
  changeFavoriteStatusAction,
} from '../api-actions';

type FavoritesData = {
  favorites: Card[];
  statusAll: string;
  statusChange: string;
};

const initialState: FavoritesData = {
  favorites: [],
  statusAll: Status.Idle,
  statusChange: Status.Idle,
};

export const favoritesData = createSlice({
  name: NameSpace.Favorites,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchFavoritesAction.pending, (state) => {
        state.statusAll = Status.Loading;
      })
      .addCase(fetchFavoritesAction.fulfilled, (state, action) => {
        state.favorites = action.payload;
        state.statusAll = Status.Success;
      })
      .addCase(fetchFavoritesAction.rejected, (state) => {
        state.statusAll = Status.Error;
      })
      .addCase(changeFavoriteStatusAction.pending, (state) => {
        state.statusChange = Status.Loading;
      })
      .addCase(changeFavoriteStatusAction.fulfilled, (state, action) => {
        const favoriteOffers = state.favorites;
        const { id, isFavorite } = action.payload;
        state.statusChange = Status.Success;

        if (!isFavorite) {
          state.favorites = favoriteOffers.filter((data) => data.id !== id);
        } else {
          state.favorites.push(action.payload);
        }
      })
      .addCase(changeFavoriteStatusAction.rejected, (state) => {
        state.statusChange = Status.Error;
      });
  },
});
