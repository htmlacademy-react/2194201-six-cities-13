import { createAction } from '@reduxjs/toolkit';
import { AppRoutes } from '../types';

const redirectToRoute = createAction<AppRoutes>('app/redirectToRoute');

export { redirectToRoute };
