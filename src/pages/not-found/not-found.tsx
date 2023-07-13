import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';
import { AppRoute } from '../../constants';

function NotFound(): JSX.Element {
  return (
    <div className="page page--gray page--main">
      <Helmet>
        <title>Страница не найдена!</title>
      </Helmet>
      <Header isUserNav />
      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Ошибка 404. Страница не найдена!</h1>
        <p>Страница не найдена! Попробуйте воспользоваться поиском.</p>
        <Link to={AppRoute.Root}>Перейти на главную страницу.</Link>
      </main>
      <Footer />
    </div>
  );
}

export default NotFound;
