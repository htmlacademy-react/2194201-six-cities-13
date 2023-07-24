import { useRef } from 'react';
import useMap from '../../hooks/useMap';
import { CardList } from '../../mocks/offers';

type MapProps = {
  className: 'cities' | 'offer';
};

function Map({ className }: MapProps): JSX.Element {
  const mapRef = useRef<HTMLElement | null>(null);
  const map = useMap(mapRef, CardList);

  return (
    <section
      className={`${className}__map map`}
      ref={mapRef}
      style={{ height: 500 }}
    />
  );
}

export default Map;
