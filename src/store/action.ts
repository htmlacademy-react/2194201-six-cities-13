import { createAction } from '@reduxjs/toolkit';
import { AppRoutes } from '../types';
import { REDIRECT_ACTION_NAME } from '../constants';

const redirectToRoute = createAction<AppRoutes>(REDIRECT_ACTION_NAME);

export { redirectToRoute };
