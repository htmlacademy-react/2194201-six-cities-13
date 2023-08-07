import { CITIES } from '../../constants';
import { Card } from '../../types';
import FavoriteItem from '../favorite-item/favorite-item';

type FavoriteListProps = {
  favoriteList: Card[];
};

function FavoriteList({ favoriteList }: FavoriteListProps) {
  return (
    <>
      <h1 className="favorites__title">Saved listing</h1>
      <ul className="favorites__list">
        {CITIES.map((city) => {
          const favoritesSortCity = favoriteList.filter(
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
