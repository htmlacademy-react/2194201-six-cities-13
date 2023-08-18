import { Status } from '../../constants';
import { makeFakeActiveOffer } from '../../utils/mocks/active-offer';
import { makeFakeOffers } from '../../utils/mocks/offers';
import {
  changeFavoriteStatusAction,
  fetchFavoritesAction,
} from '../api-actions';
import { favoritesData } from './favorites-data';

vi.mock('../root-reducer', () => ({ rootReducer: vi.fn() }));

describe('FavoritesData Slice', () => {
  const offerId = 'adj4ag4k6a4jk6da8';

  it('should return initial state with empty action', () => {
    const emptyAction = { type: '' };
    const expectedState = {
      favorites: [],
      statusAll: Status.Success,
      statusChange: Status.Error,
    };
    const result = favoritesData.reducer(expectedState, emptyAction);

    expect(result).toEqual(expectedState);
  });

  it('should return default initial state with empty action and undefined state', () => {
    const emptyAction = { type: '' };
    const expectedState = {
      favorites: [],
      statusAll: Status.Idle,
      statusChange: Status.Idle,
    };

    const result = favoritesData.reducer(undefined, emptyAction);

    expect(result).toEqual(expectedState);
  });

  it('The value of the "statusAll" property should change to "Status.Loading" witch fetchFavoritesAction.pending', () => {
    const expectedState = {
      favorites: [],
      statusAll: Status.Loading,
      statusChange: Status.Idle,
    };

    const result = favoritesData.reducer(
      undefined,
      fetchFavoritesAction.pending
    );

    expect(result).toEqual(expectedState);
  });

  it('The value of the "statusAll" property should change to "Status.Success" and load an array of selected offers witch fetchFavoritesAction.fulfilled', () => {
    const mockOffers = makeFakeOffers({
      id: offerId,
      isFavorite: false,
    });

    const expectedState = {
      favorites: mockOffers,
      statusAll: Status.Success,
      statusChange: Status.Idle,
    };

    const result = favoritesData.reducer(
      undefined,
      fetchFavoritesAction.fulfilled(mockOffers, '', undefined)
    );

    expect(result).toEqual(expectedState);
  });

  it('The value of the "statusAll" property should change to "Status.Error" witch fetchFavoritesAction.rejected', () => {
    const expectedState = {
      favorites: [],
      statusAll: Status.Error,
      statusChange: Status.Idle,
    };

    const result = favoritesData.reducer(
      undefined,
      fetchFavoritesAction.rejected
    );

    expect(result).toEqual(expectedState);
  });

  it('The value of the "statusChange" property should change to "Status.Loading" witch changeFavoriteStatusAction.pending', () => {
    const expectedState = {
      favorites: [],
      statusAll: Status.Idle,
      statusChange: Status.Loading,
    };

    const result = favoritesData.reducer(
      undefined,
      changeFavoriteStatusAction.pending
    );

    expect(result).toEqual(expectedState);
  });

  it('If "isFavorite: true", then the selected offer should be added to the array and the value of the "statusChange" property should change to "Status.Success" witch changeFavoriteStatusAction.fulfilled', () => {
    const mockOffers = [
      makeFakeActiveOffer({
        id: offerId,
        isFavorite: true,
      }),
    ];
    const mockFavoriteOffer = mockOffers[0];

    const expectedState = {
      favorites: mockOffers,
      statusAll: Status.Idle,
      statusChange: Status.Success,
    };

    const result = favoritesData.reducer(
      undefined,
      changeFavoriteStatusAction.fulfilled(mockFavoriteOffer, '', {
        offerId,
        status: 1,
      })
    );

    expect(result).toEqual(expectedState);
  });

  it('If "isFavorite: false", then the selected offer should be removed from the array and the value of the "statusChange" property should change to "Status.Success" witch changeFavoriteStatusAction.fulfilled', () => {
    const mockFavoriteOffer = makeFakeActiveOffer({
      id: offerId,
      isFavorite: false,
    });

    const expectedState = {
      favorites: [],
      statusAll: Status.Idle,
      statusChange: Status.Success,
    };

    const result = favoritesData.reducer(
      undefined,
      changeFavoriteStatusAction.fulfilled(mockFavoriteOffer, '', {
        offerId,
        status: 0,
      })
    );

    expect(result).toEqual(expectedState);
  });

  it('The value of the "statusChange" property should change to "Status.Error" witch changeFavoriteStatusAction.rejected', () => {
    const expectedState = {
      favorites: [],
      statusAll: Status.Idle,
      statusChange: Status.Error,
    };

    const result = favoritesData.reducer(
      undefined,
      changeFavoriteStatusAction.rejected
    );

    expect(result).toEqual(expectedState);
  });
});
