import { Helmet } from 'react-helmet-async';
import { Navigate, Link } from 'react-router-dom';
import Header from '../../components/header/header';
import { AppRoute, CITIES, AuthorizationStatus } from '../../constants';
import FormLogin from '../../components/form-login/form-login';
import { getAuthStatus } from '../../store/action';
import { useAppSelector } from '../../hooks';

function Login(): JSX.Element {
  const authorizationStatus = useAppSelector(getAuthStatus);

  if (authorizationStatus === AuthorizationStatus.Auth) {
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
                <span>{CITIES[3]}</span>
              </Link>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

export default Login;
