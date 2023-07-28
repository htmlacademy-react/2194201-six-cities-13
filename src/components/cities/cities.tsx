import { useState } from 'react';
import PlaceCard from '../../components/place-card/place-card';
import Map from '../../components/map/map';
import { Card, CityNames } from '../../types';
import { getOffersLocation } from '../../helpers/get-offers-location';
import SortOffers from '../sort-offers/sort-offers';

type CitiesProps = {
  activeCity: CityNames;
  offers: Card[];
};

function Cities({ activeCity, offers }: CitiesProps): JSX.Element {
  const [cardId, setCardId] = useState<string>('');

  const offersLocation = getOffersLocation(offers);

  const handlePlaceCardMouseOver = (id: string) => setCardId(id);
  const handlePlaceCardMouseLeave = () => setCardId('');

  return (
    <div className="cities__places-container container">
      <section className="cities__places places">
        <h2 className="visually-hidden">Places</h2>
        <b className="places__found">
          {offers.length} places to stay in {activeCity}
        </b>
        <SortOffers />
        <div className="cities__places-list places__list tabs__content">
          {offers.map((offer) => (
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
