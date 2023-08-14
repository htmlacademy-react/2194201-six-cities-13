import { useMemo } from 'react';
import { Card, SortNames } from '../../types';
import { SortName } from '../../constants';

function useSortOffers(sort: SortNames, offers: Card[]) {
  const sortOffers = useMemo(() => {
    switch (sort) {
      case SortName.LowPrice:
        return offers.slice().sort((a, b) => a.price - b.price);
      case SortName.HighPrice:
        return offers.slice().sort((a, b) => b.price - a.price);
      case SortName.TopRating:
        return offers.slice().sort((a, b) => b.rating - a.rating);
      default:
        return offers;
    }
  }, [sort, offers]);

  return sortOffers;
}

export { useSortOffers };
