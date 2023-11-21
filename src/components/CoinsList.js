import { PropTypes } from 'prop-types';
import CoinCard from './CoinCard';

const CoinsList = ({ coins }) => (
  <section
    data-testid="coins-list"
    className="space-y-3 py-2 h-[calc(100vh-17rem)] overflow-y-scroll"
  >
    <div className="grid grid-cols-2">
      {coins.map((coin, index) => (
        <CoinCard key={coin.id} coin={coin} index={index} />
      ))}
    </div>
  </section>
);

CoinsList.propTypes = {
  coins: PropTypes.instanceOf(Array).isRequired,
};

export default CoinsList;
