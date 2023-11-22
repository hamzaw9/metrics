import { useSelector } from 'react-redux';
import Chart from '../components/Chart';
import Header from '../components/Header';
import './style.css';

const CoinDetails = () => {
  const { coinDetails } = useSelector((state) => state.coins);
  const {
    name,
    symbol,
    changePercent24Hr,
    rank,
    supply,
    marketCapUsd,
    volumeUsd24Hr,
    priceUsd,
    vwap24Hr,
  } = coinDetails;

  return (
    <div className="details h-screen space-y-5 mx-auto p-2">
      <Header />
      <Chart
        title1={name}
        title2={symbol}
        count={`${parseInt(changePercent24Hr, 10).toFixed(4)}%`}
      />
      <h3 className="px-2 py-5 text-gray-800 font-medium text-2xl">
        Coin Description
      </h3>
      <ul className="font-medium text-lg">
        <li className="flex justify-between py-3">
          <span>Name :</span>
          <span>{name}</span>
        </li>
        <li className="flex justify-between py-3 bg-teal-500">
          <span>Symbol :</span>
          <span>{symbol}</span>
        </li>
        <li className="flex justify-between py-3">
          <span>Rank :</span>
          <span>{rank}</span>
        </li>
        <li className="flex justify-between py-3 bg-teal-500">
          <span>Supply :</span>
          <span>{supply}</span>
        </li>
        <li className="flex justify-between py-3">
          <span>Market Capital(USD) :</span>
          <span>{marketCapUsd}</span>
        </li>
        <li className="flex justify-between py-3 bg-teal-500">
          <span>Volume(USD) 24Hrs :</span>
          <span>{volumeUsd24Hr}</span>
        </li>
        <li className="flex justify-between py-3">
          <span>Price(USD) :</span>
          <span>{priceUsd}</span>
        </li>
        <li className="flex justify-between py-3 bg-teal-500">
          <span>Change Percent(24Hr) :</span>
          <span>{changePercent24Hr}</span>
        </li>
        <li className="flex justify-between py-3">
          <span>VWAP(24Hr) :</span>
          <span>{vwap24Hr}</span>
        </li>
      </ul>
    </div>
  );
};

export default CoinDetails;
