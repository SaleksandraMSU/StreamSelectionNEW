import React, { PropsWithChildren, useEffect, useRef, useState } from 'react';
import { Map, View } from 'ol';
import { fromLonLat } from 'ol/proj';
import { defaults as defaultControls } from 'ol/control.js';
import { IMapContext, MapContext } from './map-context';

type TMapComponentProps = PropsWithChildren<{
  className?: string;
}>;

const MapComponent = (props: TMapComponentProps) => {
  const [mapContext, setMapContext] = useState<IMapContext>()

  const mapEl = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const map = new Map({
      target: mapEl.current!,
      controls: defaultControls(),
      layers: [],
      view: new View({
        center: fromLonLat([-59.000000, -3.026387]),
        zoom: 7,
      }),
    });

    setMapContext({ map });

  }, []);

  return (
    <MapContext.Provider value={mapContext}>
      <div ref={mapEl} style={{ width: '80vw', height: '100vh' }}>{mapContext && props.children}</div>
    </MapContext.Provider>
  );
};

export default MapComponent;


