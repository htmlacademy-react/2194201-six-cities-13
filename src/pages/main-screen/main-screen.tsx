import Header from '../../components/header/header';
import Tabs from '../../components/tabs/tabs';
import SortForm from '../../components/sort-form/sort-form';
import PlaceCard from '../../components/place-card/place-card';
import Map from '../../components/map/map';
import { CardList } from '../../components/consts';

function MainScreen(): JSX.Element {
  return (
    <div className="page page--gray page--main">
      <Header />
      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <Tabs />
        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">312 places to stay in Amsterdam</b>
              <SortForm />
              <div className="cities__places-list places__list tabs__content">
                {CardList.map((card) => (
                  <PlaceCard card={card} key={Math.random()} />
                ))}
              </div>
            </section>
            <div className="cities__right-section">
              <Map />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default MainScreen;
