import { useState } from 'react';
import Places from '../places/places';
import Map from '../../components/map/map';
import { getOffersLocation } from '../../helpers/get-offers-location';
import { MainEmpty } from '../../components/main-empty/main-empty';
import { useAppSelector } from '../../hooks';
import {
  selectStatusAll,
  selectCurrentOffers,
} from '../../store/offers-data/selectors';
import { Status } from '../../constants';

function Cities(): JSX.Element {
  const [offerId, setOfferId] = useState<string>('');
  const status = useAppSelector(selectStatusAll);
  const currentOffers = useAppSelector(selectCurrentOffers);
  const offersLocation = getOffersLocation(currentOffers);

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
    <div className="cities">
      {status === Status.Error ? <MainEmpty /> : citiesContainer}
    </div>
  );
}

export default Cities;
