import Loader from 'react-loader-spinner';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';

const Loading = () => (
  <div className="loading">
    <p>
      LOADING
    </p>
    <Loader
      type="MutatingDots"
      color="#000"
      secondaryColor="#000"
      height={100}
      width={100}
    />
    <p>
      PLEASE WAIT
      SERVER MAY BE ASLEEP
    </p>
  </div>
);

export default Loading;
