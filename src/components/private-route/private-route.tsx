import { Navigate } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../constants';
import { useAppSelector } from '../../hooks';
import { selectAuthStatus } from '../../store/selectors/selectors';

type PrivateRouteProps = {
  children: JSX.Element;
};

function PrivateRoute({ children }: PrivateRouteProps): JSX.Element {
  const authorizationStatus = useAppSelector(selectAuthStatus);
  const isAuth = authorizationStatus === AuthorizationStatus.Auth;

  return isAuth ? children : <Navigate to={AppRoute.Login} />;
}

export default PrivateRoute;
