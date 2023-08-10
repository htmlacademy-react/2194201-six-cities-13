import cn from 'classnames';
import { Helmet } from 'react-helmet-async';
import Loading from '../loading/loading';
import Header from '../../components/header/header';
import TabList from '../../components/tab-list/tab-list';
import Cities from '../../components/cities/cities';
import { useAppSelector } from '../../hooks';
import { selectStatusAll } from '../../store/offers-data/selectors';
import { AUTH_ERROR_TEXT, Status } from '../../constants';
import { useStatusError } from '../../hooks/use-status-error/use-status-error';

function Main(): JSX.Element {
  const status = useAppSelector(selectStatusAll);
  const isEmpty = status === Status.Error;

  useStatusError(selectStatusAll, AUTH_ERROR_TEXT);

  if (status === Status.Idle || status === Status.Loading) {
    return <Loading />;
  }

  return (
    <div className="page page--gray page--main">
      <Helmet>
        <title>Онлайн-бронирование гостиниц</title>
      </Helmet>
      <Header isUserNav />
      <main
        className={cn('page__main', 'page__main--index', {
          'page__main--index-empty': isEmpty,
        })}
      >
        <h1 className="visually-hidden">Cities</h1>
        <TabList />
        <Cities />
      </main>
    </div>
  );
}

export default Main;
