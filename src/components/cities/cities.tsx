import { useState } from 'react';
import Places from '../places/places';
import Map from '../../components/map/map';
import { getOffersLocation } from '../../helpers/get-offers-location';
import { MainEmpty } from '../../components/main-empty/main-empty';
import { Card } from '../../types';

type currentOffersProps = {
  currentOffers: Card[];
};

function Cities({ currentOffers }: currentOffersProps): JSX.Element {
  const [offerId, setOfferId] = useState<string>('');
  const offersLocation = getOffersLocation(currentOffers);
  const isEmpty = !currentOffers.length;

  const citiesContainer = (
    <div className="cities__places-container container">
      <Places currentOffers={currentOffers} setOfferId={setOfferId} />
      <div className="cities__right-section">
        <Map
          className="cities"
          height="100%"
          cityInfo={currentOffers[0]?.city}
          offers={offersLocation}
          offerId={offerId}
        />
      </div>
    </div>
  );

  return (
    <div className="cities">{isEmpty ? <MainEmpty /> : citiesContainer}</div>
  );
}

export default Cities;
