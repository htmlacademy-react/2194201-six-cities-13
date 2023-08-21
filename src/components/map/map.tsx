import { useRef, useEffect } from 'react';
import leaflet, { Icon, Marker } from 'leaflet';
import useMap from '../../hooks/use-map/use-map';
import { City, LocationMap } from '../../types';
import { MapConfig } from '../../constants';
import 'leaflet/dist/leaflet.css';

type MapProps = {
  className: string;
  cityInfo: City;
  offers: LocationMap[];
  height: string;
  offerId?: string;
};

const { IconSize, IconAnchor, UrlPinDefault, UrlPinCurrent } = MapConfig;

const defaultCustomPin: Icon = new Icon({
  iconUrl: UrlPinDefault,
  iconSize: IconSize,
  iconAnchor: IconAnchor,
});

const currentCustomPin: Icon = new Icon({
  iconUrl: UrlPinCurrent,
  iconSize: IconSize,
  iconAnchor: IconAnchor,
});

function Map({
  className,
  cityInfo,
  offers,
  height,
  offerId,
}: MapProps): JSX.Element {
  const mapRef = useRef<HTMLElement | null>(null);
  const map = useMap(mapRef, cityInfo);

  useEffect(() => {
    const markers = leaflet.layerGroup();

    if (map) {
      offers.forEach((offer) => {
        const { latitude, longitude } = offer.location;

        const marker = new Marker({
          lat: latitude,
          lng: longitude,
        });

        marker.setIcon(
          offerId && offerId === offer.id ? currentCustomPin : defaultCustomPin
        );
        marker.addTo(markers);
      });

      markers.addTo(map);
    }
    return () => {
      markers.clearLayers();
    };
  }, [offerId, map, offers]);

  return (
    <section
      className={`${className}__map map`}
      ref={mapRef}
      style={{ height: height }}
    />
  );
}

export default Map;
