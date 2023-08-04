import { Link } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../constants';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { getAuthStatus, getUserEmail } from '../../store/action';
import { logoutAction } from '../../store/api-actions';

function HeaderNav() {
  const dispatch = useAppDispatch();
  const authorizationStatus = useAppSelector(getAuthStatus);
  const userEmail = useAppSelector(getUserEmail);
  const isAuth = authorizationStatus === AuthorizationStatus.Auth;

  const signInLink = (
    <Link
      className="header__nav-link header__nav-link--profile"
      to={AppRoute.Login}
    >
      <div className="header__avatar-wrapper user__avatar-wrapper"></div>
      <span className="header__login">Sign in</span>
    </Link>
  );

  const profileLink = (
    <Link
      className="header__nav-link header__nav-link--profile"
      to={AppRoute.Favorites}
    >
      <div className="header__avatar-wrapper user__avatar-wrapper" />
      <span className="header__user-name user__name">{userEmail}</span>
      <span className="header__favorite-count">3</span>
    </Link>
  );

  return (
    <nav className="header__nav">
      <ul className="header__nav-list">
        <li className="header__nav-item user">
          {!isAuth ? signInLink : profileLink}
        </li>
        {isAuth && (
          <li className="header__nav-item">
            <Link
              className="header__nav-link"
              to={AppRoute.Root}
              onClick={(evt) => {
                evt.preventDefault();
                dispatch(logoutAction());
              }}
            >
              <span className="header__signout">Sign out</span>
            </Link>
          </li>
        )}
      </ul>
    </nav>
  );
}

export default HeaderNav;
