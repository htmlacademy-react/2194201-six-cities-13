import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './store';
import App from './components/app/app';
import ErrorMessage from './components/error-message/error-message';
import { fetchOffersAction, checkAuthAction } from './store/api-actions';
import { makeFakeOffers } from './utils/mocks/offers';

store.dispatch(fetchOffersAction());
store.dispatch(checkAuthAction());
console.log(
  makeFakeOffers({
    id: 'adj4ag4k6a4jk6da8',
    isFavorite: false,
    isOneIdLiteral: true,
  })
);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ErrorMessage />
      <App />
    </Provider>
  </React.StrictMode>
);
