import { useDispatch, useSelector } from "react-redux";
import { R_DECREMENT, R_INCREMENT, W_DECREMENT, W_INCREMENT, M_DECREMENT, M_INCREMENT,  } from "../redux/actions";
import { RootState } from "../redux/rootReducer";
import './changeWidth-styles.scss'

const ChangeWidth = () => {
  let range = useSelector((state: RootState) => {
    return state.width.range;
  });

  let min_width = useSelector((state: RootState) => {
    return state.width.min_w;
  });
  let max_width = useSelector((state: RootState) => {
    return state.width.max_w;
  });
  const dispatch = useDispatch();


    return (
        <>
        <div className="subtitle">Количество классов толщины</div>
        <button className="btn" onClick={() => dispatch(R_DECREMENT())}> − </button>
        <input className="input" value={range} readOnly />
        <button className="btn" onClick={() => dispatch(R_INCREMENT())}> + </button>
        <br/>
        <div className="subtitle">Минимальная толщина линии</div>
        <button className="btn" onClick={() => dispatch(W_DECREMENT())}> − </button>
        <input className="input" value={min_width} readOnly/>
        <button className="btn" onClick={() => dispatch(W_INCREMENT())}> + </button>
        <br/>
        <div className="subtitle">Максимальная толщина линии</div>
        <button className="btn" onClick={() => dispatch(M_DECREMENT())}> − </button>
        <input className="input" value={max_width} readOnly/>
        <button className="btn" onClick={() => dispatch(M_INCREMENT())}> + </button>
        </>
    )
}
export default ChangeWidth