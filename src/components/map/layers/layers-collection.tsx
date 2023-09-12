import React from 'react';
import { useMapContext } from '../map-context';
import BaseLayer from './base-layer';
import Streams from './vector-layer';
import { ELayerType, TLayerComponentProps } from './layer-types';
import { useSelector } from 'react-redux';
import { RootState } from '../../../redux/rootReducer';


// const LAYERS_COMPONENTS: {
//   [key in ELayerType]?: React.ComponentType<TLayerComponentProps<any>>;
// } = {
//   [ELayerType.Basemap]: BaseLayer,
//   [ELayerType.Vector]: Streams,
// };


export const LayersCollection = () => {
  const layers = [BaseLayer, Streams];
  const mapContext = useMapContext();

  const streamorder = useSelector((state: RootState) => {
    return state.order.streamorder;
  });

  return (
    <>
      {layers.map((LayerComponent:TLayerComponentProps<any>, index) => {
        return <LayerComponent key={streamorder+ '-' + index} map={mapContext.map} />;
      })}
    </>
  );
};
