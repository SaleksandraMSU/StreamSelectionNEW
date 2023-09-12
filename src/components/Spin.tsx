import { TailSpin } from 'react-loader-spinner';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/rootReducer';
import './spin-style.scss';

const Spin = () => {
    const spinner = useSelector((state: RootState) => {
        return state.loader.loading;
      });

    return (
        <>
        {spinner ? <div className='modal'></div> : null }
        <div className='loader'>
            <TailSpin
                height="80"
                width="80"
                color="#0096FF"
                ariaLabel="tail-spin-loading"
                radius="2"
                wrapperStyle={{}}
                wrapperClass=""
                visible={spinner}
            />
        </div>
        </>
    )
}

export default Spin