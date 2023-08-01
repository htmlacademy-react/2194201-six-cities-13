import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './store';
import App from './components/app/app';
import { CardList } from './mocks/offers';
import { OfferList } from './mocks/offer';
import { ReviewsList } from './mocks/reviews';
import { FavoritesList } from './mocks/favorites';
import ErrorMessage from './components/error-message/error-message';
import { fetchOffersAction, checkAuthAction } from './store/api-actions';

store.dispatch(fetchOffersAction());
store.dispatch(checkAuthAction());

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ErrorMessage />
      <App
        cardList={CardList}
        offerList={OfferList}
        reviewList={ReviewsList}
        favoriteList={FavoritesList}
      />
    </Provider>
  </React.StrictMode>
);
