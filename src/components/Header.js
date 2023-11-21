import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const { pathname } = useLocation();

  return (
    <header className="py-2 bg-[#4269B3]">
      <nav>
        <ul className="flex justify-between items-center">
          <li className="flex items-center space-x-3">
            {pathname !== '/' && (
              <Link to="/">
                <svg
                  width="10"
                  height="28"
                  viewBox="0 0 30 48"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M29.64 42.36L11.32 24L29.64 5.64L24 0L0 24L24 48L29.64 42.36Z"
                    fill="white"
                  />
                </svg>
              </Link>
            )}
            <span className="font-bold text-2xl">2023</span>
          </li>
          <li className="text-xl font-bold">Crypto Metrics</li>
          <li className="flex items-center gap-3">
            <svg
              width="25"
              height="25"
              viewBox="0 0 96 96"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M76.56 51.76C76.72 50.56 76.8 49.32 76.8 48C76.8 46.72 76.72 45.44 76.52 44.24L84.64 37.92C85.36 37.36 85.56 36.28 85.12 35.48L77.44 22.2C76.96 21.32 75.96 21.04 75.08 21.32L65.52 25.16C63.52 23.64 61.4 22.36 59.04 21.4L57.6 11.24C57.44 10.28 56.64 9.59998 55.68 9.59998H40.32C39.36 9.59998 38.6 10.28 38.44 11.24L37 21.4C34.64 22.36 32.48 23.68 30.52 25.16L20.96 21.32C20.08 21 19.08 21.32 18.6 22.2L10.96 35.48C10.48 36.32 10.64 37.36 11.44 37.92L19.56 44.24C19.36 45.44 19.2 46.76 19.2 48C19.2 49.24 19.28 50.56 19.48 51.76L11.36 58.08C10.64 58.64 10.44 59.72 10.88 60.52L18.56 73.8C19.04 74.68 20.04 74.96 20.92 74.68L30.48 70.84C32.48 72.36 34.6 73.64 36.96 74.6L38.4 84.76C38.6 85.72 39.36 86.4 40.32 86.4H55.68C56.64 86.4 57.44 85.72 57.56 84.76L59 74.6C61.36 73.64 63.52 72.36 65.48 70.84L75.04 74.68C75.92 75 76.92 74.68 77.4 73.8L85.08 60.52C85.56 59.64 85.36 58.64 84.6 58.08L76.56 51.76ZM48 62.4C40.08 62.4 33.6 55.92 33.6 48C33.6 40.08 40.08 33.6 48 33.6C55.92 33.6 62.4 40.08 62.4 48C62.4 55.92 55.92 62.4 48 62.4Z"
                fill="white"
              />
            </svg>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
