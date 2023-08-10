import cn from 'classnames';
import ButtonFavorites from '../button-favorites/button-favorites';
import { Link, generatePath } from 'react-router-dom';
import { Card } from '../../types';
import { ONE_STAR_RATIO, AppRoute } from '../../constants';

type PlaceCardProps = {
  card: Card;
  className: 'cities' | 'favorites' | 'near-places';
  handlePlaceCardMouseOver?: (id: string) => void;
  handlePlaceCardMouseLeave?: () => void;
};

function PlaceCard({
  card,
  className,
  handlePlaceCardMouseOver,
  handlePlaceCardMouseLeave,
}: PlaceCardProps): JSX.Element {
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

  return (
    <article
      className={`${className}__card place-card`}
      onMouseOver={() => handlePlaceCardMouseOver?.(id)}
      onMouseLeave={handlePlaceCardMouseLeave}
    >
      {isPremium && (
        <div className="place-card__mark">
          <span>Premium</span>
        </div>
      )}
      <div className={`${className}__image-wrapper place-card__image-wrapper`}>
        <Link to={generatePath(AppRoute.Offer, { id: id })}>
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
          <ButtonFavorites
            className="place-card"
            isFavorite={isFavorite}
            offerId={id}
            width={18}
            height={19}
          />
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
          <Link to={generatePath(AppRoute.Offer, { id: id })}>{title}</Link>
        </h2>
        <p className="place-card__type">{type}</p>
      </div>
    </article>
  );
}

export default PlaceCard;
