import { Navigate } from 'react-router-dom';
import { AppRoute } from '../../constants';
import { AuthorizationStatus } from '../../constants';

type PrivateRouteProps = {
  authorizationStatus: string;
  children: JSX.Element;
};

function PrivateRoute(props: PrivateRouteProps): JSX.Element {
  const { authorizationStatus, children } = props;

  return authorizationStatus === AuthorizationStatus.Auth ? (
    children
  ) : (
    <Navigate to={AppRoute.Root} />
  );
}

export default PrivateRoute;
