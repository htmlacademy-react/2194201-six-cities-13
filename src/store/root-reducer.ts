import { combineReducers } from '@reduxjs/toolkit';
import { NameSpace } from '../constants';
import { appProcess } from './app-process/app-process';
import { offersData } from './offers-data/offers-data';
import { reviewsData } from './reviews-data/reviews-data';
import { userProcess } from './user-process/user-process';

const rootReducer = combineReducers({
  [NameSpace.User]: userProcess.reducer,
  [NameSpace.Offers]: offersData.reducer,
  [NameSpace.Reviews]: reviewsData.reducer,
  [NameSpace.App]: appProcess.reducer,
});

export { rootReducer };
