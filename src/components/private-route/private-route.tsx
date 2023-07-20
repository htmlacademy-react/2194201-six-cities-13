import { PropsWithChildren } from 'react';
import { Navigate } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../constants';

type PrivateRouteProps = PropsWithChildren<{
  authorizationStatus: (typeof AuthorizationStatus)[keyof typeof AuthorizationStatus];
}>;

function PrivateRoute(props: PrivateRouteProps): React.ReactNode {
  const { authorizationStatus, children } = props;

  return authorizationStatus === AuthorizationStatus.Auth ? (
    children
  ) : (
    <Navigate to={AppRoute.Login} />
  );
}

export default PrivateRoute;
