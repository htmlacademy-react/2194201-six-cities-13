import { Outlet } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';

function LayoutOffer(): JSX.Element {
  return (
    <div className="page page--gray page--main">
      <Helmet>
        <title>Список отелей</title>
      </Helmet>
      <Header userNav />
      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Список отелей</h1>
        <Outlet />
        <p>
          Чтобы перейти на страницу гостиницы введите ее id в адресной строке
          после <code>/offer/</code>.
        </p>
      </main>
      <Footer />
    </div>
  );
}

export default LayoutOffer;
