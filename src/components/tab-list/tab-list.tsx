import { CITIES } from '../../constants';
import TabItem from '../tab-item/tab-item';

function TabList(): JSX.Element {
  return (
    <div className="tabs">
      <section className="locations container">
        <ul className="locations__list tabs__list">
          {CITIES.map((city) => (
            <TabItem city={city} key={city} />
          ))}
        </ul>
      </section>
    </div>
  );
}

export default TabList;
