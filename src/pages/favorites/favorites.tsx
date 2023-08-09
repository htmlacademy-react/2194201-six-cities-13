import cn from 'classnames';
import { Helmet } from 'react-helmet-async';
import Header from '../../components/header/header';
import FavoritesEmpty from '../../components/favorites-empty/favorites-empty';
import Footer from '../../components/footer/footer';
import FavoriteList from '../../components/favorite-list/favorite-list';
import { useAppSelector } from '../../hooks';
import { selectFavorites } from '../../store/favorites-data/selectors';

function Favorites(): JSX.Element {
  const favorites = useAppSelector(selectFavorites);
  const isNotEmpty = !!favorites.length;

  return (
    <div className={cn('page', { 'page--favorites-empty': !isNotEmpty })}>
      <Helmet>
        <title>Избранные гостиницы</title>
      </Helmet>
      <Header isUserNav />
      <main
        className={cn('page__main', 'page__main--favorites', {
          'page__main--favorites-empty': !isNotEmpty,
        })}
      >
        <div className="page__favorites-container container">
          <section
            className={cn('favorites', {
              'favorites--empty': !isNotEmpty,
            })}
          >
            {isNotEmpty ? (
              <FavoriteList favoriteList={favorites} />
            ) : (
              <FavoritesEmpty />
            )}
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default Favorites;
