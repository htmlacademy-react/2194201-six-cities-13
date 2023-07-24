import { useRef, useEffect } from 'react';
import leaflet, { Icon, Marker } from 'leaflet';
import useMap from '../../hooks/useMap';
import { Card, City } from '../../types';
import 'leaflet/dist/leaflet.css';
import { URL_PIN_CURRENT, URL_PIN_DEFAULT } from '../../constants';

type MapProps = {
  className: 'cities' | 'offer';
  cityInfo: City;
  pins: Card[];
  height: string;
  cardId?: string;
};

const defaultCustomPin = new Icon({
  iconUrl: URL_PIN_DEFAULT,
  iconSize: [27, 39],
  iconAnchor: [13, 39],
});

const currentCustomPin = new Icon({
  iconUrl: URL_PIN_CURRENT,
  iconSize: [27, 39],
  iconAnchor: [13, 39],
});

function Map({
  className,
  cityInfo,
  pins,
  height,
  cardId,
}: MapProps): JSX.Element {
  const mapRef = useRef<HTMLElement | null>(null);
  const map = useMap(mapRef, cityInfo);

  useEffect(() => {
    const markers = leaflet.layerGroup();

    if (map) {
      pins.forEach((pin) => {
        const { latitude, longitude } = pin.location;

        const marker = new Marker({
          lat: latitude,
          lng: longitude,
        });

        marker.setIcon(
          cardId && cardId === pin.id ? currentCustomPin : defaultCustomPin
        );
        marker.addTo(markers);
      });

      markers.addTo(map);
    }
    return () => {
      markers.clearLayers();
    };
  }, [cardId, map, pins]);

  return (
    <section
      className={`${className}__map map`}
      ref={mapRef}
      style={{ height: height }}
    />
  );
}

export default Map;
