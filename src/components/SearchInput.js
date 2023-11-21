import { PropTypes } from 'prop-types';

const SearchInput = ({ onSearchChange }) => (
  <input
    type="search"
    className="w-full rounded p-2 outline-none text-black"
    placeholder="Search by Crypto name eg: Bitcoin"
    onChange={(e) => onSearchChange(e.target.value)}
  />
);

SearchInput.propTypes = {
  onSearchChange: PropTypes.func.isRequired,
};

export default SearchInput;
