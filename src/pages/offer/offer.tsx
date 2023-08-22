import cn from 'classnames';
import { useEffect } from 'react';
import Header from '../../components/header/header';
import NotFound from '../not-found/not-found';
import Map from '../../components/map/map';
import { Helmet } from 'react-helmet-async';
import { useParams } from 'react-router-dom';
import { Reviews } from '../../components/reviews/reviews';
import { ONE_STAR_RATIO, Status } from '../../constants';
import { Card, ParamsId } from '../../types';
import { MAX_OFFER_IMAGES, MAX_OFFERS_NEARBY } from '../../constants';
import { getOffersLocation } from '../../helpers/get-offers-location';
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import {
  fetchActiveOfferAction,
  fetchOffersNearbyAction,
} from '../../store/api-actions';

import {
  selectActiveOffer,
  selectOffersNearby,
  selectStatusOffer,
} from '../../store/offers-data/selectors';
import Loading from '../loading/loading';
import ButtonFavorites from '../../components/button-favorites/button-favorites';
import PlaceCard from '../../components/place-card/place-card';
import { pluralize } from '../../helpers/pluralize';
import { increaseFirstLetter } from '../../helpers/increase-first-letter';

function Offer(): JSX.Element {
  const { id: offerId } = useParams() as ParamsId;
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchActiveOfferAction(offerId));
    dispatch(fetchOffersNearbyAction(offerId));
  }, [offerId, dispatch]);

  const status = useAppSelector(selectStatusOffer);
  const currentOffer = useAppSelector(selectActiveOffer);
  const offersNearbyAll = useAppSelector(selectOffersNearby);
  const offersNearbySlice = offersNearbyAll.slice(0, MAX_OFFERS_NEARBY);

  if (status === Status.Idle || status === Status.Loading) {
    return <Loading />;
  }

  if (status === Status.Error || !currentOffer) {
    return <NotFound />;
  }

  const currentNearbyOffers = getOffersLocation([
    currentOffer,
    ...offersNearbySlice,
  ]);

  const {
    isFavorite,
    isPremium,
    price,
    rating,
    title,
    type,
    bedrooms,
    maxAdults,
    description,
    goods,
    host,
    images,
  } = currentOffer;

  const { name, avatarUrl, isPro } = host;

  return (
    <div className="page">
      <Helmet>
        <title>Гостиница &quot;{title}&quot;</title>
      </Helmet>
      <Header isUserNav />
      <main className="page__main page__main--offer">
        <section className="offer">
          <div className="offer__gallery-container container">
            <div className="offer__gallery">
              {images.map((image: string, index) => {
                if (MAX_OFFER_IMAGES > index) {
                  return (
                    <div className="offer__image-wrapper" key={image}>
                      <img
                        className="offer__image"
                        src={image}
                        alt="Photo studio"
                      />
                    </div>
                  );
                }
              })}
            </div>
          </div>
          <div className="offer__container container">
            <div className="offer__wrapper">
              {isPremium && (
                <div className="offer__mark">
                  <span>Premium</span>
                </div>
              )}
              <div className="offer__name-wrapper">
                <h1 className="offer__name">{title}</h1>
                <ButtonFavorites
                  className="offer"
                  isFavorite={isFavorite}
                  offerId={offerId}
                  width={31}
                  height={33}
                />
              </div>
              <div className="offer__rating rating">
                <div className="offer__stars rating__stars">
                  <span
                    style={{ width: `${Math.round(rating) * ONE_STAR_RATIO}%` }}
                  />
                  <span className="visually-hidden">Rating</span>
                </div>
                <span className="offer__rating-value rating__value">
                  {rating}
                </span>
              </div>
              <ul className="offer__features">
                <li className="offer__feature offer__feature--entire">
                  {increaseFirstLetter(type)}
                </li>
                <li className="offer__feature offer__feature--bedrooms">
                  {bedrooms} {pluralize('Bedroom', bedrooms)}
                </li>
                <li className="offer__feature offer__feature--adults">
                  Max {maxAdults} {pluralize('adult', maxAdults)}
                </li>
              </ul>
              <div className="offer__price">
                <b className="offer__price-value">€{price}</b>
                <span className="offer__price-text">&nbsp;night</span>
              </div>
              <div className="offer__inside">
                <h2 className="offer__inside-title">What&apos;s inside</h2>
                <ul className="offer__inside-list">
                  {goods.map((good: string) => (
                    <li className="offer__inside-item" key={good}>
                      {good}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="offer__host">
                <h2 className="offer__host-title">Meet the host</h2>
                <div className="offer__host-user user">
                  <div
                    className={cn(
                      'offer__avatar-wrapper',
                      'user__avatar-wrapper',
                      { 'offer__avatar-wrapper--pro': isPro }
                    )}
                  >
                    <img
                      className="offer__avatar user__avatar"
                      src={avatarUrl}
                      width={74}
                      height={74}
                      alt="Host avatar"
                    />
                  </div>
                  <span className="offer__user-name">{name}</span>
                  {isPro && <span className="offer__user-status">Pro</span>}
                </div>
                <div className="offer__description">
                  <p className="offer__text">{description}</p>
                </div>
              </div>
              <Reviews />
            </div>
          </div>
          <Map
            className="offer"
            height="579px"
            cityInfo={currentOffer.city}
            offers={currentNearbyOffers}
            offerId={offerId}
          />
        </section>
        <div className="container">
          <section className="near-places places">
            <h2 className="near-places__title">
              Other places in the neighbourhood
            </h2>
            <div className="near-places__list places__list">
              {offersNearbySlice.map((offer: Card) => (
                <PlaceCard
                  key={offer.id}
                  className="near-places"
                  card={offer}
                />
              ))}
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

export default Offer;
