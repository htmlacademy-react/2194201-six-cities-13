import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';
import { AppRoute } from '../../constants';
import styles from './not-found.module.css';

function NotFound(): JSX.Element {
  return (
    <div className="page page--main">
      <Helmet>
        <title>Страница не найдена!</title>
      </Helmet>
      <Header isUserNav />
      <main className={`page__main ${styles['page__main--not-found']}`}>
        <h1 className="visually-hidden">Ошибка 404. Страница не найдена!</h1>
        <p>Страница не найдена! Попробуйте воспользоваться поиском.</p>
        <b className={styles['page__status']}>404</b>
        <Link to={AppRoute.Root} className={styles['page__link']}>
          Перейти на главную страницу.
        </Link>
      </main>
      <Footer />
    </div>
  );
}

export default NotFound;
