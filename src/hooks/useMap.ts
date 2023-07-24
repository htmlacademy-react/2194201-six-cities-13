import { useEffect, useRef, useState } from 'react';
import leaflet from 'leaflet';
import { Card } from '../types';

function useMap(mapRef, cardList: Card[]) {
  const [map, setMap] = useState(null);
  const isRenderedRef = useRef(false);

  useEffect(() => {}, []);

  return map;
}

export default useMap;
