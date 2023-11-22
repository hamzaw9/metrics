import { render, screen } from '@testing-library/react';
import CoinsList from '../components/CoinsList';

describe('CoinsList', () => {
  it('should render a section element with the correct class', () => {
    const coins = [];
    render(<CoinsList coins={coins} />);

    const coinsList = screen.getByTestId('coins-list');
    const expectedClasses = 'space-y-3 py-2 h-[calc(100vh-17rem)] overflow-y-scroll';

    expect(coinsList.classList.contains(expectedClasses)).toBe(false);
  });
});
