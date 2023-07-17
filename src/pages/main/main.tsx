import cn from 'classnames';
import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import Header from '../../components/header/header';
import Tabs from '../../components/tabs/tabs';
import PlaceCard from '../../components/place-card/place-card';
import Map from '../../components/map/map';
import { MainEmpty } from '../../components/main-empty/main-empty';
import { CITIES } from '../../constants';
import { Card, CityNames } from '../../types';

type MainProps = {
  cardList: Card[];
};

function Main({ cardList }: MainProps): JSX.Element {
  const [activeCity, setActiveCity] = useState<CityNames>(CITIES[0]);

  const currentOffers = cardList.filter(({ city }) => activeCity === city.name);

  return (
    <div className="page page--gray page--main">
      <Helmet>
        <title>Онлайн-бронирование гостиниц</title>
      </Helmet>
      <Header isUserNav />
      <main
        className={cn('page__main', 'page__main--index', {
          'page__main--index-empty': !currentOffers.length,
        })}
      >
        <h1 className="visually-hidden">Cities</h1>
        <Tabs activeCity={activeCity} setActiveCity={setActiveCity} />
        <div className="cities">
          {currentOffers.length ? (
            <div className="cities__places-container container">
              <section className="cities__places places">
                <h2 className="visually-hidden">Places</h2>
                <b className="places__found">
                  {currentOffers.length} places to stay in {activeCity}
                </b>
                <form className="places__sorting" action="#" method="get">
                  <span className="places__sorting-caption">Sort by</span>
                  <span className="places__sorting-type" tabIndex={0}>
                    Popular
                    <svg className="places__sorting-arrow" width={7} height={4}>
                      <use xlinkHref="#icon-arrow-select" />
                    </svg>
                  </span>
                  <ul className="places__options places__options--custom places__options--opened">
                    <li
                      className="places__option places__option--active"
                      tabIndex={0}
                    >
                      Popular
                    </li>
                    <li className="places__option" tabIndex={0}>
                      Price: low to high
                    </li>
                    <li className="places__option" tabIndex={0}>
                      Price: high to low
                    </li>
                    <li className="places__option" tabIndex={0}>
                      Top rated first
                    </li>
                  </ul>
                </form>
                <div className="cities__places-list places__list tabs__content">
                  {currentOffers.map((offer) => (
                    <PlaceCard card={offer} key={offer.id} />
                  ))}
                </div>
              </section>
              <div className="cities__right-section">
                <Map />
              </div>
            </div>
          ) : (
            <MainEmpty activeCity={activeCity} />
          )}
        </div>
      </main>
    </div>
  );
}

export default Main;
