import cn from 'classnames';
import { Link } from 'react-router-dom';
import { CITIES } from '../../constants';
import { useAppDispatch } from '../../hooks';
import { changeActiveCity } from '../../store/action';
import { useAppSelector } from '../../hooks';
import { selectActiveCity } from '../../store/action';

function Tabs(): JSX.Element {
  const activeCity = useAppSelector(selectActiveCity);
  const dispatch = useAppDispatch();

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
                onClick={() => dispatch(changeActiveCity(city))}
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
