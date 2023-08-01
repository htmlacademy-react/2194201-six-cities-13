import cn from 'classnames';
import { Helmet } from 'react-helmet-async';
import Header from '../../components/header/header';
import Tabs from '../../components/tabs/tabs';
import { MainEmpty } from '../../components/main-empty/main-empty';
import Cities from '../../components/cities/cities';
import { useAppSelector } from '../../hooks';
import { selectActiveCity, getOffers } from '../../store/action';

function Main(): JSX.Element {
  const activeCity = useAppSelector(selectActiveCity);
  const offers = useAppSelector(getOffers);
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
        <Tabs />
        <div className="cities">
          {isNotEmpty ? <Cities offers={currentOffers} /> : <MainEmpty />}
        </div>
      </main>
    </div>
  );
}

export default Main;
