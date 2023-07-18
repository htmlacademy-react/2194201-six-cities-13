import { Helmet } from 'react-helmet-async';
import { Card } from '../../types';
import Header from '../../components/header/header';
import PlaceCard from '../../components/place-card/place-card';
import Footer from '../../components/footer/footer';

type FavoritesProps = {
  favoritesList: Card[];
};

function Favorites({ favoritesList }: FavoritesProps): JSX.Element {
  const favoritesListTemp = [...favoritesList];

  return (
    <div className="page">
      <Helmet>
        <title>Избранные гостиницы</title>
      </Helmet>
      <Header isUserNav />
      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          <section className="favorites">
            <h1 className="favorites__title">Saved listing</h1>
            <ul className="favorites__list">
              {favoritesList.map((card1) => {
                const favoritesSortCity = favoritesListTemp.filter(
                  (card2) => card1.city.name === card2.city.name
                );

                console.log(
                  favoritesListTemp.findIndex(
                    (card4) => card1.city.name === card4.city.name
                  )
                );

                // favoritesListTemp.splice(
                //   favoritesListTemp.findIndex(
                //     (card4) => card1.city.name === card4.city.name
                //   ),
                //   1
                // );

                console.log(favoritesListTemp);

                return (
                  <li className="favorites__locations-items" key={card1.id}>
                    <div className="favorites__locations locations locations--current">
                      <div className="locations__item">
                        <a className="locations__item-link" href="#">
                          <span>{card1.city.name}</span>
                        </a>
                      </div>
                    </div>
                    <div className="favorites__places">
                      {favoritesSortCity.map((card3) => (
                        <PlaceCard
                          card={card3}
                          className="favorites"
                          key={card3.id}
                        />
                      ))}
                    </div>
                  </li>
                );
              })}

              <li className="favorites__locations-items">
                <div className="favorites__locations locations locations--current">
                  <div className="locations__item">
                    <a className="locations__item-link" href="#">
                      <span>Cologne</span>
                    </a>
                  </div>
                </div>
                <div className="favorites__places"></div>
              </li>
            </ul>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default Favorites;
