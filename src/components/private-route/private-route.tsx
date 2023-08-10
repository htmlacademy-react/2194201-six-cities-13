import { Navigate } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../constants';
import { useAppSelector } from '../../hooks';
import { selectAuthStatus } from '../../store/user-process/selectors';
import Loading from '../../pages/loading/loading';

type PrivateRouteProps = {
  children: JSX.Element;
};

function PrivateRoute({ children }: PrivateRouteProps): JSX.Element {
  const authorizationStatus = useAppSelector(selectAuthStatus);
  const isAuth = authorizationStatus === AuthorizationStatus.Auth;
  const isAuthUnknown = authorizationStatus === AuthorizationStatus.Unknown;

  if (isAuthUnknown) {
    return <Loading />;
  }

  return isAuth ? children : <Navigate to={AppRoute.Login} />;
}

export default PrivateRoute;
