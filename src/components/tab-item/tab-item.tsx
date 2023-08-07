import cn from 'classnames';
import { Link } from 'react-router-dom';
import { useAppDispatch } from '../../hooks';
import { changeActiveCity } from '../../store/action';
import { useAppSelector } from '../../hooks';
import { selectActiveCity } from '../../store/selectors/selectors';
import { CityNames } from '../../types';

type TabItemProps = {
  city: CityNames;
};

function TabItem({ city }: TabItemProps): JSX.Element {
  const activeCity = useAppSelector(selectActiveCity);
  const dispatch = useAppDispatch();

  return (
    <li className="locations__item">
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
  );
}

export default TabItem;
