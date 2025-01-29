import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSprayCanSparkles } from '@fortawesome/free-solid-svg-icons';
import { Link, NavLink } from 'react-router-dom';
import { useState } from 'react';
import NavbarLink from './NavbarLink';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="bg-gray-900 w-full z-20 top-0 left-0 border-b border-gray-700 shadow-lg">
      <div className="max-w-screen-xl mx-auto flex items-center justify-between p-4">
        <Link to="/" className="flex items-center space-x-3">
          <FontAwesomeIcon
            icon={faSprayCanSparkles}
            size="2xl"
            style={{ color: '#ff6347' }}
          />
          <span className="text-2xl font-semibold text-white">Essenza</span>
        </Link>
        <div className="hidden md:flex items-center space-x-8">
          <NavbarLink redirectTo="/" text="Home" />
          <NavbarLink redirectTo="/product" text="Products" />
        </div>

        <button
          className="md:hidden text-gray-300 hover:text-white focus:outline-none"
          aria-label="Toggle menu"
          onClick={toggleMobileMenu}
        >
          {isMobileMenuOpen ? (
            <svg
              className="h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              className="h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden bg-gray-800">
          <ul className="flex flex-col space-y-2 p-4">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `block text-gray-300 font-medium py-2 px-3 rounded transition duration-300 ${
                    isActive
                      ? 'text-white bg-orange-500'
                      : 'hover:bg-gray-700 hover:text-white'
                  }`
                }
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/product"
                className={({ isActive }) =>
                  `block text-gray-300 font-medium py-2 px-3 rounded transition duration-300 ${
                    isActive
                      ? 'text-white bg-orange-500'
                      : 'hover:bg-gray-700 hover:text-white'
                  }`
                }
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Products
              </NavLink>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
