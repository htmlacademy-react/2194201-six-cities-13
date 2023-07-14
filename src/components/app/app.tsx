import { HelmetProvider } from 'react-helmet-async';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from '../../pages/main/main';
import Login from '../../pages/login/login';
import Favorites from '../../pages/favorites/favorites';
import Offer from '../../pages/offer/offer';
import NotFound from '../../pages/not-found/not-found';
import { AppRoute } from '../../constants';
import PrivateRoute from '../private-route/private-route';
import { AuthorizationStatus } from '../../constants';
import { Card } from '../../types';

type AppProps = {
  numberOffers: number;
  cardList: Card[];
};

function App({ numberOffers, cardList }: AppProps): JSX.Element {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          <Route
            index
            element={<Main numberOffers={numberOffers} cardList={cardList} />}
          />
          <Route path={AppRoute.Login} element={<Login />} />
          <Route
            path={AppRoute.Favorites}
            element={
              <PrivateRoute authorizationStatus={AuthorizationStatus.NoAuth}>
                <Favorites />
              </PrivateRoute>
            }
          />
          <Route path={AppRoute.Offer} element={<Offer />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;
