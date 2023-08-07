import { useAppSelector } from '../../hooks';
import { selectActiveCity } from '../../store/app-process/selectors';

function MainEmpty(): JSX.Element {
  const activeCity = useAppSelector(selectActiveCity);

  return (
    <div className="cities__places-container cities__places-container--empty container">
      <section className="cities__no-places">
        <div className="cities__status-wrapper tabs__content">
          <b className="cities__status">No places to stay available</b>
          <p className="cities__status-description">
            We could not find any property available at the moment in{' '}
            {activeCity}
          </p>
        </div>
      </section>
      <div className="cities__right-section" />
    </div>
  );
}

export { MainEmpty };
