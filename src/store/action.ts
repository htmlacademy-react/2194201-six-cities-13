import { createAction } from '@reduxjs/toolkit';
import { AppRoutes } from '../types';

const setOffersLoadingStatus = createAction<boolean>(
  'data/setOffersLoadingStatus'
);
const setUserEmail = createAction<string | null>('user/setUserEmail');
const redirectToRoute = createAction<AppRoutes>('app/redirectToRoute');

export { setOffersLoadingStatus, setUserEmail, redirectToRoute };
