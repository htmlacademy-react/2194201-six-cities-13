import { Link } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../constants';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { selectAuthStatus } from '../../store/user-process/selectors';
import { logoutAction } from '../../store/api-actions';
import ProfileLink from '../profile-link/profile-link';

function HeaderNav(): JSX.Element {
  const dispatch = useAppDispatch();
  const authorizationStatus = useAppSelector(selectAuthStatus);
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

  return (
    <nav className="header__nav">
      <ul className="header__nav-list">
        <li className="header__nav-item user">
          {!isAuth ? signInLink : <ProfileLink />}
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
