import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import App from '../App';
import '@testing-library/jest-dom/extend-expect';
import store from '../redux/store';

describe('app routes', () => {
  it('app elements', () => {
    render(
      <Provider store={store}>
        <App />
      </Provider>,
    );
    expect(screen.getByTestId('home')).toBeInTheDocument();
  });
});
