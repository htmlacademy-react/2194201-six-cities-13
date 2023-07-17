import cn from 'classnames';
import { Link } from 'react-router-dom';
import { CITIES } from '../../constants';
import { CityNames } from '../../types';

type TabsProps = {
  activeCity: CityNames;
  setActiveCity: (city: CityNames) => void;
};

function Tabs({ activeCity, setActiveCity }: TabsProps): JSX.Element {
  return (
    <div className="tabs">
      <section className="locations container">
        <ul className="locations__list tabs__list">
          {CITIES.map((city) => (
            <li className="locations__item" key={city}>
              <Link
                className={cn('locations__item-link', 'tabs__item', {
                  'tabs__item--active': activeCity === city,
                })}
                data-city={city}
                onClick={() => setActiveCity(city)}
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
