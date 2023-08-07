import { useState } from 'react';
import Map from '../../components/map/map';
import { Card } from '../../types';
import { getOffersLocation } from '../../helpers/get-offers-location';
import { MainEmpty } from '../../components/main-empty/main-empty';
import Places from '../places/places';

type CitiesProps = {
  currentOffers: Card[];
};

function Cities({ currentOffers }: CitiesProps): JSX.Element {
  const [offerId, setOfferId] = useState<string>('');
  const offersLocation = getOffersLocation(currentOffers);
  const isNotEmpty = !!currentOffers.length;

  const citiesContainer = (
    <div className="cities__places-container container">
      <Places currentOffers={currentOffers} setOfferId={setOfferId} />
      <div className="cities__right-section">
        <Map
          className="cities"
          height="100%"
          cityInfo={currentOffers[0].city}
          offers={offersLocation}
          offerId={offerId}
        />
      </div>
    </div>
  );

  return (
    <div className="cities">{isNotEmpty ? citiesContainer : <MainEmpty />}</div>
  );
}

export default Cities;
