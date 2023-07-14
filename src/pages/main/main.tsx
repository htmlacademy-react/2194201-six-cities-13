import PlaceCard from '../../components/place-card/place-card';
import Map from '../../components/map/map';
import Header from '../../components/header/header';
import Tabs from '../../components/tabs/tabs';
import { MainEmpty } from '../../components/main-empty/main-empty';
import { Card } from '../../types';

type MainProps = {
  numberOffers: number;
  cardList: Card[];
};

function Main({ numberOffers, cardList }: MainProps): JSX.Element {
  const isCardListNotEmpty = Boolean(cardList.length);
  const EmptyMainClass = isCardListNotEmpty ? '' : 'page__main--index-empty';

  return (
    <div className="page page--gray page--main">
      <Header isUserNav />
      <main className={`page__main page__main--index ${EmptyMainClass}`}>
        <h1 className="visually-hidden">Cities</h1>
        <Tabs />
        <div className="cities">
          {isCardListNotEmpty ? (
            <div className="cities__places-container container">
              <section className="cities__places places">
                <h2 className="visually-hidden">Places</h2>
                <b className="places__found">
                  {numberOffers} places to stay in Amsterdam
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
                  {cardList.map((card) => (
                    <PlaceCard card={card} key={card.id} />
                  ))}
                </div>
              </section>
              <div className="cities__right-section">
                <Map />
              </div>
            </div>
          ) : (
            <MainEmpty />
          )}
        </div>
      </main>
    </div>
  );
}

export default Main;
