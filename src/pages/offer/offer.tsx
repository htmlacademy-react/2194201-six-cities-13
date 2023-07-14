import { Helmet } from 'react-helmet-async';
import { useParams } from 'react-router-dom';
import Header from '../../components/header/header';
import { Reviews } from '../../components/reviews/reviews';
import { ONE_STAR_RATIO } from '../../constants';
import { Card, OfferCard } from '../../types';
import NotFound from '../not-found/not-found';
import PlaceCard from '../../components/place-card/place-card';
import { MAX_OFFERS_NEARBY } from '../../constants';

type OfferProps = {
  cardList: Card[];
  offerList: OfferCard[];
};

function Offer({ cardList, offerList }: OfferProps): JSX.Element {
  const { id } = useParams();
  const card = offerList.find((item: OfferCard) => item.id === id);

  if (!card) {
    return <NotFound />;
  }

  const {
    isFavorite,
    isPremium,
    price,
    rating,
    title,
    type,
    city,
    bedrooms,
    maxAdults,
    description,
    goods,
    host,
    images,
  } = card;

  const { name, avatarUrl, isPro } = host;

  const offersNearby = cardList
    .filter((offer) => offer.city.name === city.name && offer.id !== id)
    .sort(() => Math.random() - 0.5)
    .slice(0, MAX_OFFERS_NEARBY);

  const favoriteActiveClass = isFavorite
    ? 'place-card__bookmark-button--active'
    : '';
  const proActiveClass = isPro ? 'offer__avatar-wrapper--pro' : '';

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
              {images.map((image) => (
                <div className="offer__image-wrapper" key={crypto.randomUUID()}>
                  <img
                    className="offer__image"
                    src={image}
                    alt="Photo studio"
                  />
                </div>
              ))}
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
                <button
                  className={`offer__bookmark-button ${favoriteActiveClass} button`}
                  type="button"
                >
                  <svg className="offer__bookmark-icon" width={31} height={33}>
                    <use xlinkHref="#icon-bookmark" />
                  </svg>
                  <span className="visually-hidden">
                    {isFavorite ? 'In bookmarks' : 'To bookmarks'}
                  </span>
                </button>
              </div>
              <div className="offer__rating rating">
                <div className="offer__stars rating__stars">
                  <span style={{ width: `${rating * ONE_STAR_RATIO}%` }} />
                  <span className="visually-hidden">Rating</span>
                </div>
                <span className="offer__rating-value rating__value">
                  {rating}
                </span>
              </div>
              <ul className="offer__features">
                <li className="offer__feature offer__feature--entire">
                  {type}
                </li>
                <li className="offer__feature offer__feature--bedrooms">
                  {bedrooms} Bedrooms
                </li>
                <li className="offer__feature offer__feature--adults">
                  Max {maxAdults} adults
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
                    <li
                      className="offer__inside-item"
                      key={crypto.randomUUID()}
                    >
                      {good}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="offer__host">
                <h2 className="offer__host-title">Meet the host</h2>
                <div className="offer__host-user user">
                  <div
                    className={`offer__avatar-wrapper ${proActiveClass} user__avatar-wrapper`}
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
          <section className="offer__map map" />
        </section>
        <div className="container">
          <section className="near-places places">
            <h2 className="near-places__title">
              Other places in the neighbourhood
            </h2>
            <div className="near-places__list places__list">
              {offersNearby.map((offer) => (
                <PlaceCard key={offer.id} card={offer} />
              ))}
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

export default Offer;
