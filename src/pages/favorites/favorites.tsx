import cn from 'classnames';
import { Helmet } from 'react-helmet-async';
import { Card } from '../../types';
import Header from '../../components/header/header';
import FavoritesEmpty from '../../components/favorites-empty/favorites-empty';
import Footer from '../../components/footer/footer';
import FavoriteList from '../../components/favorite-list/favorite-list';

type FavoritesProps = {
  favoriteList: Card[];
};

function Favorites({ favoriteList }: FavoritesProps): JSX.Element {
  const isNotEmpty = !!favoriteList.length;

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
              <FavoriteList favoriteList={favoriteList} />
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
