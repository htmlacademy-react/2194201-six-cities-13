import cn from 'classnames';
import { useState, MouseEvent } from 'react';
import { Link, generatePath } from 'react-router-dom';
import { Card } from '../../types';
import { ONE_STAR_RATIO, AppRoute } from '../../constants';

type PlaceCardProps = {
  card: Card;
  className: 'cities' | 'favorites' | 'near-places';
};

function PlaceCard({ card, className }: PlaceCardProps): JSX.Element {
  const {
    id,
    title,
    type,
    price,
    isFavorite,
    isPremium,
    rating,
    previewImage,
  } = card;

  const [cardId, setCardId] = useState('');

  const handlePlaceCardMouseOver = (evt: MouseEvent<HTMLElement>) => {
    setCardId(evt.currentTarget.id);
  };

  return (
    <article
      className={`${className}__card place-card`}
      onMouseOver={handlePlaceCardMouseOver}
      id={id}
    >
      {isPremium && (
        <div className="place-card__mark">
          <span>Premium</span>
        </div>
      )}
      <div className={`${className}__image-wrapper place-card__image-wrapper`}>
        <Link to={generatePath(AppRoute.Offer, { id: `${id}` })}>
          <img
            className="place-card__image"
            src={previewImage}
            width={260}
            height={200}
            alt="Place image"
          />
        </Link>
      </div>
      <div
        className={cn('place-card__info', {
          'favorites__card-info': className === 'favorites',
        })}
      >
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">€{price} </b>
            <span className="place-card__price-text">/&nbsp;night</span>
          </div>
          <button
            className={cn('place-card__bookmark-button', 'button', {
              'place-card__bookmark-button--active': isFavorite,
            })}
            type="button"
          >
            <svg className="place-card__bookmark-icon" width={18} height={19}>
              <use xlinkHref="#icon-bookmark" />
            </svg>
            <span className="visually-hidden">
              {isFavorite ? 'In bookmarks' : 'To bookmarks'}
            </span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span
              style={{ width: `${Math.round(rating) * ONE_STAR_RATIO}%` }}
            />
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={generatePath(AppRoute.Offer, { id: `${id}` })}>
            {title}
          </Link>
        </h2>
        <p className="place-card__type">{type}</p>
      </div>
    </article>
  );
}

export default PlaceCard;
