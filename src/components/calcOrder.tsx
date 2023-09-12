import { useDispatch, useSelector } from "react-redux";
import { SET_STREAM_ORDER } from "../redux/actions";
import { RootState } from "../redux/rootReducer";
import { Hack, Horton, Shreve, Strahler } from "./map/streamorder-constants";

const CalcOrder = () => {
  let streamorder = useSelector((state: RootState) => {
    return state.order.streamorder;
  });
  const dispatch = useDispatch();

  const handleMethodChange = (e: any) => {
    dispatch(SET_STREAM_ORDER(e.target.value));
  };


  return (
    <div onChange={handleMethodChange}>
      <label>
        <input type="radio" value={Hack} checked={streamorder === Hack} className="radiogroup" readOnly/>Метод Хака
      </label><br/>
      <label>
        <input type="radio" value={Strahler} checked={streamorder === Strahler} className="radiogroup" readOnly/>Метод Стралера
      </label><br/>
      <label>
        <input type="radio" value={Horton} checked={streamorder === Horton} className="radiogroup" readOnly/>Метод Хортона
      </label><br/>
      <label>
        <input type="radio" value={Shreve} checked={streamorder === Shreve} readOnly/>Метод Шриве
      </label><br/>
    </div>
  );
}

export default CalcOrder
