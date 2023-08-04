import { useMemo } from 'react';
import { Card, SortNames } from '../../types';

function useSortOffers(sort: SortNames, offers: Card[]) {
  const sortOffers = useMemo(() => {
    switch (sort) {
      case 'Price: low to high':
        return offers.slice().sort((a, b) => a.price - b.price);
      case 'Price: high to low':
        return offers.slice().sort((a, b) => b.price - a.price);
      case 'Top rated first':
        return offers.slice().sort((a, b) => b.rating - a.rating);
      default:
        return offers;
    }
  }, [sort, offers]);

  return sortOffers;
}

export { useSortOffers };
