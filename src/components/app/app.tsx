import { HelmetProvider } from 'react-helmet-async';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ScrollToTop from '../scroll-to-top/scroll-to-top';
import Main from '../../pages/main/main';
import Login from '../../pages/login/login';
import Favorites from '../../pages/favorites/favorites';
import Offer from '../../pages/offer/offer';
import NotFound from '../../pages/not-found/not-found';
import { AppRoute } from '../../constants';
import PrivateRoute from '../private-route/private-route';
import { AuthorizationStatus } from '../../constants';
import { Card, OfferCard } from '../../types';

type AppProps = {
  cardList: Card[];
  offerList: OfferCard[];
};

function App({ cardList, offerList }: AppProps): JSX.Element {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route index element={<Main cardList={cardList} />} />
          <Route path={AppRoute.Login} element={<Login />} />
          <Route
            path={AppRoute.Favorites}
            element={
              <PrivateRoute authorizationStatus={AuthorizationStatus.Auth}>
                <Favorites cardList={cardList} />
              </PrivateRoute>
            }
          />
          <Route
            path={AppRoute.Offer}
            element={<Offer cardList={cardList} offerList={offerList} />}
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;
