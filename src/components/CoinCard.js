import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { fetchCoinDetails } from '../redux/coins/coinsSlice';

const CoinCard = ({ coin }) => {
  const dispatch = useDispatch();
  const {
    id, name, symbol, priceUsd,
  } = coin;

  return (
    <div data-testid="coin-card" className="p-2 space-y-2 card">
      <NavLink to={`details/${id}`} className="flex items-center space-x-2">
        <svg
          width="30"
          height="30"
          viewBox="0 0 96 96"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="ml-auto cursor-pointer"
          onClick={() => dispatch(fetchCoinDetails(id))}
        >
          <path
            d="M16 48C16 30.36 30.36 16 48 16C65.64 16 80 30.36 80 48C80 65.64 65.64 80 48 80C30.36 80 16 65.64 16 48ZM8 48C8 70.08 25.92 88 48 88C70.08 88 88 70.08 88 48C88 25.92 70.08 8 48 8C25.92 8 8 25.92 8 48ZM48 44H32V52H48V64L64 48L48 32V44Z"
            fill="white"
          />
        </svg>
      </NavLink>
      <h3 className="text-xl font-medium">{name}</h3>
      <h3 className="text-lg font-medium">{symbol}</h3>
      <p className="text-gray-800">
        $
        {parseInt(priceUsd, 10).toFixed(4)}
      </p>
    </div>
  );
};

CoinCard.propTypes = {
  coin: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    symbol: PropTypes.string.isRequired,
    priceUsd: PropTypes.string.isRequired,
  }).isRequired,
};

export default CoinCard;
