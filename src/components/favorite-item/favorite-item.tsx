import { Link } from 'react-router-dom';
import { AppRoute } from '../../constants';
import { Card, CityNames } from '../../types';
import PlaceCard from '../place-card/place-card';
import { useAppDispatch } from '../../hooks/hooks';
import { changeActiveCity } from '../../store/app-process/app-process';

type FavoriteItemProps = {
  favoritesSortCity: Card[];
  city: CityNames;
};

function FavoriteItem({
  favoritesSortCity,
  city,
}: FavoriteItemProps): JSX.Element {
  const dispatch = useAppDispatch();

  return (
    <li className="favorites__locations-items">
      <div className="favorites__locations locations locations--current">
        <div className="locations__item">
          <Link
            onClick={() => dispatch(changeActiveCity(city))}
            className="locations__item-link"
            to={AppRoute.Root}
          >
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
