import SortForm from '../../components/sort-form/sort-form';
import PlaceCard from '../../components/place-card/place-card';
import Map from '../../components/map/map';
import { CardList } from '../../constants';

type MainProps = {
  numberOffers: number;
};

function Cities({ numberOffers }: MainProps): JSX.Element {
  return (
    <div className="cities">
      <div className="cities__places-container container">
        <section className="cities__places places">
          <h2 className="visually-hidden">Places</h2>
          <b className="places__found">
            {numberOffers} places to stay in Amsterdam
          </b>
          <SortForm />
          <div className="cities__places-list places__list tabs__content">
            {CardList.map((card) => (
              <PlaceCard card={card} key={card.id} />
            ))}
          </div>
        </section>
        <div className="cities__right-section">
          <Map />
        </div>
      </div>
    </div>
  );
}

export default Cities;
