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
  const [cardId, setCardId] = useState<string>('');
  const offersLocation = getOffersLocation(currentOffers);
  const isNotEmpty = !!currentOffers.length;

  return (
    <div className="cities">
      {isNotEmpty ? (
        <div className="cities__places-container container">
          <Places currentOffers={currentOffers} setCardId={setCardId} />
          <div className="cities__right-section">
            <Map
              className="cities"
              height="100%"
              cityInfo={currentOffers[0].city}
              offers={offersLocation}
              cardId={cardId}
            />
          </div>
        </div>
      ) : (
        <MainEmpty />
      )}
    </div>
  );
}

export default Cities;
