import { Helmet } from 'react-helmet-async';
import { Navigate, Link } from 'react-router-dom';
import Header from '../../components/header/header';
import { AppRoute, AuthorizationStatus, CITIES } from '../../constants';
import FormLogin from '../../components/form-login/form-login';
import { selectAuthStatus } from '../../store/user-process/selectors';
import { useAppSelector, useAppDispatch } from '../../hooks';
import { changeActiveCity } from '../../store/app-process/app-process';
import Loading from '../loading/loading';

function Login(): JSX.Element {
  const dispatch = useAppDispatch();
  const authorizationStatus = useAppSelector(selectAuthStatus);
  const isAuth = authorizationStatus === AuthorizationStatus.Auth;
  const isAuthUnknown = authorizationStatus === AuthorizationStatus.Unknown;
  const randomCity = CITIES[Math.floor(Math.random() * CITIES.length)];

  if (isAuth) {
    return <Navigate to={AppRoute.Root} />;
  }

  if (isAuthUnknown) {
    return <Loading />;
  }

  return (
    <div className="page page--gray page--login">
      <Helmet>
        <title>Войдите, используя логин и пароль</title>
      </Helmet>
      <Header />
      <main className="page__main page__main--login">
        <div className="page__login-container container">
          <section className="login">
            <h1 className="login__title">Sign in</h1>
            <FormLogin />
          </section>
          <section className="locations locations--login locations--current">
            <div className="locations__item">
              <Link
                className="locations__item-link"
                to={AppRoute.Root}
                onClick={() => dispatch(changeActiveCity(randomCity))}
              >
                <span>{randomCity}</span>
              </Link>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

export default Login;
