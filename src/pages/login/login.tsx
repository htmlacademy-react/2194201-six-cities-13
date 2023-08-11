import { Helmet } from 'react-helmet-async';
import { Navigate, Link } from 'react-router-dom';
import Header from '../../components/header/header';
import { AppRoute, AuthorizationStatus } from '../../constants';
import FormLogin from '../../components/form-login/form-login';
import { selectAuthStatus } from '../../store/user-process/selectors';
import { useAppSelector } from '../../hooks';
import { selectActiveCity } from '../../store/app-process/selectors';

function Login(): JSX.Element {
  const activeCity = useAppSelector(selectActiveCity);
  const authorizationStatus = useAppSelector(selectAuthStatus);
  const isAuth = authorizationStatus === AuthorizationStatus.Auth;

  if (isAuth) {
    return <Navigate to={AppRoute.Root} />;
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
              <Link className="locations__item-link" to={AppRoute.Root}>
                <span>{activeCity}</span>
              </Link>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

export default Login;
