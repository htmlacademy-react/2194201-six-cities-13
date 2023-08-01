import SortOffers from '../sort-offers/sort-offers';
import PlaceCard from '../place-card/place-card';
import { useSortOffers } from '../../hooks/use-sort-offers/use-sort-offers';
import { useAppSelector } from '../../hooks';
import { selectActiveSort, selectActiveCity } from '../../store/action';
import { Card } from '../../types';

type CitiesProps = {
  currentOffers: Card[];
  setCardId: (id: string) => void;
};

function Places({ currentOffers, setCardId }: CitiesProps): JSX.Element {
  const activeSort = useAppSelector(selectActiveSort);
  const activeCity = useAppSelector(selectActiveCity);
  const sortOffers = useSortOffers(activeSort, currentOffers);

  const handlePlaceCardMouseOver = (id: string) => setCardId(id);
  const handlePlaceCardMouseLeave = () => setCardId('');

  return (
    <section className="cities__places places">
      <h2 className="visually-hidden">Places</h2>
      <b className="places__found">
        {sortOffers.length} places to stay in {activeCity}
      </b>
      <SortOffers />
      <div className="cities__places-list places__list tabs__content">
        {sortOffers.map((offer) => (
          <PlaceCard
            card={offer}
            className="cities"
            key={offer.id}
            handlePlaceCardMouseOver={handlePlaceCardMouseOver}
            handlePlaceCardMouseLeave={handlePlaceCardMouseLeave}
          />
        ))}
      </div>
    </section>
  );
}

export default Places;