import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import { fetchCoins, fetchCoinDetails } from '../redux/coins/coinsSlice';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

const mock = new MockAdapter(axios);

describe('coinsSlice async thunks', () => {
  afterEach(() => {
    mock.reset();
  });

  it('should dispatch fetchCoins actions correctly', async () => {
    const store = mockStore({ coins: [] });
    const mockData = [{ coinId: '1', name: 'Bitcoin' }];

    mock
      .onGet('https://api.coincap.io/v2/assets')
      .reply(200, { data: mockData });

    await store.dispatch(fetchCoins());

    const actions = store.getActions();
    expect(actions[0].type).toEqual(fetchCoins.pending.type);
    expect(actions[1].type).toEqual(fetchCoins.fulfilled.type);
    expect(actions[1].payload).toEqual(mockData);
  });

  it('should dispatch fetchCoinDetails actions correctly', async () => {
    const store = mockStore({ coins: [] });
    const coinId = '1';
    const mockData = { coinId, name: 'Bitcoin' };

    mock
      .onGet(`https://api.coincap.io/v2/assets/${coinId}`)
      .reply(200, { data: mockData });

    await store.dispatch(fetchCoinDetails(coinId));

    const actions = store.getActions();
    expect(actions[0].type).toEqual(fetchCoinDetails.pending.type);
    expect(actions[1].type).toEqual(fetchCoinDetails.fulfilled.type);
    expect(actions[1].payload).toEqual(mockData);
  });

  it('should handle fetchCoins rejection correctly', async () => {
    const store = mockStore({ coins: [] });

    mock
      .onGet('https://api.coincap.io/v2/assets')
      .reply(500, { message: 'Internal Server Error' });

    await store.dispatch(fetchCoins());

    const actions = store.getActions();
    expect(actions[0].type).toEqual(fetchCoins.pending.type);
    expect(actions[1].type).toEqual(fetchCoins.rejected.type);
  });

  it('should handle fetchCoinDetails rejection correctly', async () => {
    const store = mockStore({ coins: [] });
    const coinId = '1';

    mock
      .onGet(`https://api.coincap.io/v2/assets/${coinId}`)
      .reply(500, { message: 'Internal Server Error' });

    await store.dispatch(fetchCoinDetails(coinId));

    const actions = store.getActions();
    expect(actions[0].type).toEqual(fetchCoinDetails.pending.type);
    expect(actions[1].type).toEqual(fetchCoinDetails.rejected.type);
  });
});
