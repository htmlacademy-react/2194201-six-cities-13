import { HelmetProvider } from 'react-helmet-async';
import { Routes, Route } from 'react-router-dom';
import Loading from '../../pages/loading/loading';
import HistoryRouter from '../history-route/history-route';
import browserHistory from '../../browser-history';
import ScrollToTop from '../scroll-to-top/scroll-to-top';
import Main from '../../pages/main/main';
import Login from '../../pages/login/login';
import Favorites from '../../pages/favorites/favorites';
import Offer from '../../pages/offer/offer';
import NotFound from '../../pages/not-found/not-found';
import { AppRoute } from '../../constants';
import PrivateRoute from '../private-route/private-route';
import { AuthorizationStatus } from '../../constants';
import { Card } from '../../types';
import { useAppSelector } from '../../hooks';
import { isOffersLoading } from '../../store/selectors/selectors';
import { selectAuthStatus } from '../../store/user-process/selectors';

type AppProps = {
  favoriteList: Card[];
};

function App({ favoriteList }: AppProps): JSX.Element {
  const authorizationStatus = useAppSelector(selectAuthStatus);
  const isOffersLoad = useAppSelector(isOffersLoading);

  if (authorizationStatus === AuthorizationStatus.Unknown || isOffersLoad) {
    return <Loading />;
  }

  return (
    <HelmetProvider>
      <HistoryRouter history={browserHistory}>
        <ScrollToTop />
        <Routes>
          <Route index element={<Main />} />
          <Route path={AppRoute.Login} element={<Login />} />
          <Route
            path={AppRoute.Favorites}
            element={
              <PrivateRoute>
                <Favorites favoriteList={favoriteList} />
              </PrivateRoute>
            }
          />
          <Route path={AppRoute.Offer} element={<Offer />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </HistoryRouter>
    </HelmetProvider>
  );
}

export default App;
