import { Card } from '../types';

const changeOfferFavorite = (
  offerArray: Card[][],
  activeOffer: Card | null,
  favoriteOffer: Card
) => {
  offerArray.forEach((offers) => {
    offers.map((offer) => {
      if (offer.id === favoriteOffer.id) {
        offer.isFavorite = favoriteOffer.isFavorite;
      }
    });
  });

  if (activeOffer && activeOffer.isFavorite !== favoriteOffer.isFavorite) {
    activeOffer.isFavorite = favoriteOffer.isFavorite;
  }
};

export { changeOfferFavorite };
