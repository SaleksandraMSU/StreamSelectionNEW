import { useMapContext } from '../map-context';
import PopupControl from './popup-control';


export const ControlsCollection = () => {
  const controls = [PopupControl];
  const mapContext = useMapContext();

  return (
    <>
      {controls.map((ControlComponent:any, index) => {
        return <ControlComponent key={index} map={mapContext.map} />;
      })}
    </>
  );
};

