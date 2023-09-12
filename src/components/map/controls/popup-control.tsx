import Overlay from 'ol/Overlay.js';
import { TControlsProps } from '../layers/layer-types';
import { useEffect, useRef, useState } from 'react';
import { Control } from 'ol/control';
import { createRoot } from 'react-dom/client';
import './popup-style.scss';

const featureInfoButton = document.createElement('button');
featureInfoButton.className = "homebutton";
featureInfoButton.innerHTML = '<img src="/info.svg" alt="" />';

const featureInfoElement = document.createElement('div');
featureInfoElement.className = "featureInfoDiv"
featureInfoElement.appendChild(featureInfoButton);

const PopupControl = (props: TControlsProps) => {
  const { map } = props;
  const popupRef = useRef(null);

  const featureInfoControl = new Control({
    element: featureInfoElement
  })
  const [featureInfoFlag, setFeatureInfoFlag] = useState(false)

  map.addControl(featureInfoControl);

  useEffect(() => {

    featureInfoButton.addEventListener("click", () => {
      setFeatureInfoFlag(!featureInfoFlag);
      const buttonClass = featureInfoFlag ? "homebutton" : "homebutton clicked";
      featureInfoButton.className = buttonClass;
    })
    const overlay = new Overlay({
      element: popupRef.current!,
      autoPan: false,
    });
    map.addOverlay(overlay);

    map.on('singleclick', (event) => {
      if (featureInfoFlag) {
        const coordinate = event.coordinate;
        map.forEachFeatureAtPixel(event.pixel, (feature) => {
          const attributes = feature.getProperties();
          const popupContent = (
            <div>
              <button className="popup-closer" onClick={() => overlay.setPosition(undefined)}></button>
              {Object.keys(attributes).slice(1).map((key) => (
                <p key={key}>
                  <strong>{key}: </strong>
                  {JSON.stringify(attributes[key])}
                </p>
              ))}
            </div>
          );
          createRoot(popupRef.current!).render(popupContent)
          overlay.setPosition(coordinate);
        });
      } else {
        overlay.setPosition(undefined);
      }
    });
  }, [featureInfoFlag]);

  return (
    <div>
      <div ref={popupRef} className="popup">
        <div className="popup-content" />
      </div>
    </div>
  );
};

export default PopupControl;