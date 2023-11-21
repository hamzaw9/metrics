import { useDispatch } from 'react-redux';
import { useEffect } from 'react';

const Home = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(GetCoins());
  }, []);
  return <h1>Home Page</h1>;
};
export default Home;
