import { CITIES } from '../../constants';
import FavoriteItem from '../favorite-item/favorite-item';
import { useAppSelector } from '../../hooks/hooks';
import { selectFavorites } from '../../store/favorites-data/selectors';

function FavoriteList(): JSX.Element {
  const favorites = useAppSelector(selectFavorites);

  return (
    <>
      <h1 className="favorites__title">Saved listing</h1>
      <ul className="favorites__list">
        {CITIES.map((city) => {
          const favoritesSortCity = favorites.filter(
            (card) => city === card.city.name
          );

          if (favoritesSortCity.length) {
            return (
              <FavoriteItem
                favoritesSortCity={favoritesSortCity}
                city={city}
                key={city}
              />
            );
          }
        })}
      </ul>
    </>
  );
}

export default FavoriteList;
