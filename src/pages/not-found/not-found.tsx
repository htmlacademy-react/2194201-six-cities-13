import { Helmet } from 'react-helmet-async';
import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';

function NotFound(): JSX.Element {
  return (
    <div className="page page--gray page--main">
      <Helmet>
        <title>Страница не найдена!</title>
      </Helmet>
      <Header userNav />
      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Ошибка 404. Страница не найдена!</h1>
        <p>Страница не найдена! Попробуйте воспользоваться поиском.</p>
      </main>
      <Footer />
    </div>
  );
}

export default NotFound;
