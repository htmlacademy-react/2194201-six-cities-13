import SortOffers from '../sort-offers/sort-offers';
import { useSortOffers } from '../../hooks/use-sort-offers/use-sort-offers';
import { useAppSelector } from '../../hooks';
import { Card } from '../../types';
import {
  selectActiveCity,
  selectActiveSort,
} from '../../store/app-process/selectors';
import { PlaceCardMemo } from '../place-card/place-card-memo';
import { useCallback } from 'react';

type CitiesProps = {
  currentOffers: Card[];
  setOfferId: (id: string) => void;
};

function Places({ currentOffers, setOfferId }: CitiesProps): JSX.Element {
  const activeSort = useAppSelector(selectActiveSort);
  const activeCity = useAppSelector(selectActiveCity);
  const sortOffers = useSortOffers(activeSort, currentOffers);

  const handlePlaceCardMouseOver = useCallback(
    (id: string) => setOfferId(id),
    [setOfferId]
  );
  const handlePlaceCardMouseLeave = useCallback(
    () => setOfferId(' '),
    [setOfferId]
  );

  return (
    <section className="cities__places places">
      <h2 className="visually-hidden">Places</h2>
      <b className="places__found">
        {sortOffers.length} places to stay in {activeCity}
      </b>
      <SortOffers />
      <div className="cities__places-list places__list tabs__content">
        {sortOffers.map((offer) => (
          <PlaceCardMemo
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
