import { PayloadAction } from '@reduxjs/toolkit';
import browserHistory from '../../browser-history';
import { Middleware } from 'redux';
import { rootReducer } from '../root-reducer';
import { REDIRECT_ACTION_NAME } from '../../constants';

type Reducer = ReturnType<typeof rootReducer>;

const redirect: Middleware<unknown, Reducer> =
  () => (next) => (action: PayloadAction<string>) => {
    if (action.type === REDIRECT_ACTION_NAME) {
      browserHistory.push(action.payload);
    }

    return next(action);
  };

export { redirect };
