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
import { Card, Review } from '../../types';
import { useAppSelector } from '../../hooks';
import { getAuthStatus, isOffersLoading } from '../../store/action';

type AppProps = {
  cardList: Card[];
  reviewList: Review[];
  favoriteList: Card[];
};

function App({ cardList, reviewList, favoriteList }: AppProps): JSX.Element {
  const authorizationStatus = useAppSelector(getAuthStatus);
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
              <PrivateRoute authorizationStatus={authorizationStatus}>
                <Favorites favoriteList={favoriteList} />
              </PrivateRoute>
            }
          />
          <Route
            path={AppRoute.Offer}
            element={<Offer cardList={cardList} reviewList={reviewList} />}
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </HistoryRouter>
    </HelmetProvider>
  );
}

export default App;
