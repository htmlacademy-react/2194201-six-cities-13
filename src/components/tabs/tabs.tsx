import { MouseEvent, useState } from 'react';
import { Link } from 'react-router-dom';
import cn from 'classnames';
import { CITIES } from '../../constants';

type TabsProps = {
  cities: typeof CITIES;
};

function Tabs({ cities }: TabsProps): JSX.Element {
  const [activeCity, setActiveCity] = useState('Paris');

  const handleTabClick = (evt: MouseEvent) => {
    const currentCity = (evt.currentTarget as HTMLElement).dataset
      .city as (typeof CITIES)[number];
    setActiveCity(currentCity);
  };

  return (
    <div className="tabs">
      <section className="locations container">
        <ul className="locations__list tabs__list">
          {cities.map((city) => (
            <li className="locations__item" key={city}>
              <Link
                className={cn('locations__item-link', 'tabs__item', {
                  'tabs__item--active': activeCity === city,
                })}
                data-city={city}
                onClick={handleTabClick}
                to="#"
              >
                <span>{city}</span>
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}

export default Tabs;
