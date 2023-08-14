import { Link } from 'react-router-dom';
import { AppRoute } from '../../constants';
import { Card, CityNames } from '../../types';
import PlaceCard from '../place-card/place-card';

type FavoriteItemProps = {
  favoritesSortCity: Card[];
  city: CityNames;
};

function FavoriteItem({
  favoritesSortCity,
  city,
}: FavoriteItemProps): JSX.Element {
  return (
    <li className="favorites__locations-items">
      <div className="favorites__locations locations locations--current">
        <div className="locations__item">
          <Link className="locations__item-link" to={AppRoute.Root}>
            <span>{city}</span>
          </Link>
        </div>
      </div>
      <div className="favorites__places">
        {favoritesSortCity.map((card) => (
          <PlaceCard card={card} className="favorites" key={card.id} />
        ))}
      </div>
    </li>
  );
}

export default FavoriteItem;
