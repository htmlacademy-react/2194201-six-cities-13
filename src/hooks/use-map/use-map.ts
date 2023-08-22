import { useEffect, useRef, useState, MutableRefObject } from 'react';
import { Map, TileLayer, Browser } from 'leaflet';
import { City } from '../../types';
import { MapConfig } from '../../constants';

function useMap(
  mapRef: MutableRefObject<HTMLElement | null>,
  cityInfo: City
): Map | null {
  const [map, setMap] = useState<Map | null>(null);
  const isRenderedRef = useRef<boolean>(false);
  const { latitude, longitude, zoom } = cityInfo.location;

  useEffect(() => {
    let isMounted = true;

    if (isMounted && mapRef.current !== null && !isRenderedRef.current) {
      const instance = new Map(mapRef.current, {
        center: {
          lat: latitude,
          lng: longitude,
        },
        zoom: zoom,
        dragging: !Browser.mobile,
        tap: !Browser.mobile,
        touchZoom: !Browser.mobile,
        scrollWheelZoom: false,
      });

      const layer = new TileLayer(MapConfig.TileLayer, {
        attribution: MapConfig.Copyright,
      });

      instance.addLayer(layer);

      setMap(instance);
      isRenderedRef.current = true;
    } else {
      map?.setView(
        {
          lat: latitude,
          lng: longitude,
        },
        zoom
      );
    }

    return () => {
      isMounted = false;
    };
  }, [mapRef, latitude, longitude, zoom, map]);

  return map;
}

export default useMap;
