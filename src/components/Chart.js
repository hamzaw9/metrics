import { PropTypes } from 'prop-types';
import graphImage from '../assets/graph.png';

const Chart = ({ title1, title2, count }) => (
  <div className="flex justify-between items-center px-5 py-2 gap-5 bg-[#5385E1]">
    <div>
      <img src={graphImage} alt="chart" />
    </div>
    <div className="chart-text">
      <h1 className="text-2xl font-bold">
        {title1}
        <br />
        {title2}
      </h1>
      <p>{count}</p>
      git
    </div>
  </div>
);

Chart.propTypes = {
  title1: PropTypes.string,
  title2: PropTypes.string,
  count: PropTypes.string.isRequired,
};
Chart.defaultProps = {
  title1: null,
  title2: null,
};

export default Chart;
