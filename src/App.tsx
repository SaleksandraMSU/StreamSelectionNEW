import { useDispatch } from "react-redux"
import Spin from "./components/Spin"
import CalcOrder from "./components/calcOrder"
import ChangeWidth from "./components/changeWidth"
import { ControlsCollection } from "./components/map/controls/control-collection"
import { LayersCollection } from "./components/map/layers/layers-collection"
import MapComponent from "./components/map/map"
import { LOADER_DISPLAY_ON } from "./redux/actions"


function App() {
  const dispatch = useDispatch();
  dispatch(LOADER_DISPLAY_ON());

  return (
    <div className="grid-container">
      <div className="grid-1">
        <div className="sidebar">
          <h2 className="title">Расчет порядков водотоков</h2>
          <CalcOrder />
          <br />
          <hr />
          <h2 className="title">Выбор толщины линий</h2>
          <ChangeWidth />
        </div>
      </div>
      <div className='grid-2'>
        <Spin />
        <div><MapComponent>
          <LayersCollection />
          <ControlsCollection />
        </MapComponent></div>
      </div>
    </div>
  )
}

export default App
