import { useState } from 'react';
import PlaceCard from '../../components/place-card/place-card';
import Map from '../../components/map/map';
import { Card } from '../../types';
import { getOffersLocation } from '../../helpers/get-offers-location';
import SortOffers from '../sort-offers/sort-offers';
import { useAppSelector } from '../../hooks';
import { selectActiveSort, selectActiveCity } from '../../store/action';
import { useSortOffers } from '../../hooks/use-sort-offers/use-sort-offers';

type CitiesProps = {
  offers: Card[];
};

function Cities({ offers }: CitiesProps): JSX.Element {
  const [cardId, setCardId] = useState<string>('');
  const activeCity = useAppSelector(selectActiveCity);
  const activeSort = useAppSelector(selectActiveSort);

  const sortOffers = useSortOffers(activeSort, offers);
  const offersLocation = getOffersLocation(offers);

  const handlePlaceCardMouseOver = (id: string) => setCardId(id);
  const handlePlaceCardMouseLeave = () => setCardId('');

  return (
    <div className="cities__places-container container">
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
      <div className="cities__right-section">
        <Map
          className="cities"
          height="100%"
          cityInfo={offers[0].city}
          offers={offersLocation}
          cardId={cardId}
        />
      </div>
    </div>
  );
}

export default Cities;
