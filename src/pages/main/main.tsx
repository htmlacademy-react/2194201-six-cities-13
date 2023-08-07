import cn from 'classnames';
import { Helmet } from 'react-helmet-async';
import Header from '../../components/header/header';
import TabList from '../../components/tab-list/tab-list';
import Cities from '../../components/cities/cities';
import { useAppSelector } from '../../hooks';
import {
  selectActiveCity,
  selectOffers,
} from '../../store/selectors/selectors';

function Main(): JSX.Element {
  const activeCity = useAppSelector(selectActiveCity);
  const offers = useAppSelector(selectOffers);
  const currentOffers = offers.filter(({ city }) => activeCity === city.name);
  const isNotEmpty = !!currentOffers.length;

  return (
    <div className="page page--gray page--main">
      <Helmet>
        <title>Онлайн-бронирование гостиниц</title>
      </Helmet>
      <Header isUserNav />
      <main
        className={cn('page__main', 'page__main--index', {
          'page__main--index-empty': !isNotEmpty,
        })}
      >
        <h1 className="visually-hidden">Cities</h1>
        <TabList />
        <Cities currentOffers={currentOffers} />
      </main>
    </div>
  );
}

export default Main;
