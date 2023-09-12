import { Tile as TileLayer } from 'ol/layer';
import TileJSON from 'ol/source/TileJSON';
import { memo, useMemo } from 'react';
import { TLayerComponentProps } from './layer-types';

const attributions =
  '<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> ' +
  '<a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>';


const BaseLayer = memo((props:TLayerComponentProps<any>) => {
  const {map} = props
  const layer = useMemo(() => new TileLayer({
    source: new TileJSON({
     url: 'https://api.maptiler.com/maps/basic-v2/tiles.json?key=pKZZptLfdOLREyAbjgBu',
    attributions: attributions,
    tileSize: 512,
    }),
  }), [map])
  map.addLayer(layer)
  return null;
});
export default BaseLayer