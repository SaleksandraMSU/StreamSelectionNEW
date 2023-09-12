import GeoJSON from 'ol/format/GeoJSON.js';
import VectorLayer from 'ol/layer/Vector.js';
import VectorSource from 'ol/source/Vector.js';
import { useDispatch, useSelector } from 'react-redux';
import { memo, useLayoutEffect, useMemo } from "react";
import { emptystyle, update_styles, getStyle } from './style-vector-layer';
import { RootState } from '../../../redux/rootReducer';
import { IVectorLayerConfig, TLayerComponentProps } from './layer-types';
import { Hack, Horton, Shreve, Strahler } from '../streamorder-constants';
import { LOADER_DISPLAY_OFF } from '../../../redux/actions';

type TWFSLayerComponentProps = TLayerComponentProps<IVectorLayerConfig>;

const Streams = memo((props: TWFSLayerComponentProps) => {
  const { map } = props
  const dispatch = useDispatch()

  let N = useSelector((state: RootState) => {
    return state.width.range;
  });
  let W = useSelector((state: RootState) => {
    return state.width.min_w;
  });
  let M = useSelector((state: RootState) => {
    return state.width.max_w;
  });
  let streamorder = useSelector((state: RootState) => {
    return state.order.streamorder;
  });

  const vector = useMemo(() => {
    return new VectorLayer({
    source: new VectorSource({
      url: 'https://raw.githubusercontent.com/SaleksandraMSU/StreamSelection/main/ClippedStreams.geojson',
      format: new GeoJSON(),
    }),
    style: (feature, resolution) => {
      const order: number = feature.get(streamorder)
      if (streamorder === Hack && order <= 52.292 * (resolution ** (-0.529)) ||
        streamorder === Strahler && order >= 0.0602 * (resolution ** (0.6276)) ||
        streamorder === Horton && order >= (1.64 * Math.log(resolution)) - 6.5196 ||
        streamorder === Shreve && order >= 0.0000000002 * (resolution ** 4) - 0.0000001 * (resolution ** 3) + 0.00004 * (resolution ** 2) + 0.0132 * resolution - 0.9973
      ) {
        return getStyle(order, streamorder, N)
      } else {
        return emptystyle
      }
    }
  })}, [streamorder, N, W, M])

  setTimeout(() => {
    map.addLayer(vector);
    dispatch(LOADER_DISPLAY_OFF());
  }, 1000)

  useLayoutEffect(() => {
    update_styles(N, W, M);
  }, [N, W, M]);

  return null;
});
export default Streams


