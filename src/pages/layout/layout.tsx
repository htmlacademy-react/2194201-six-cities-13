import { Outlet } from 'react-router-dom';
import Header from '../../components/header/header';
import Tabs from '../../components/tabs/tabs';

function Layout(): JSX.Element {
  return (
    <div className="page page--gray page--main">
      <Header />
      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <Tabs />
        <Outlet />
      </main>
    </div>
  );
}

export default Layout;
