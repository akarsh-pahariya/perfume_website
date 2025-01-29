import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebookF,
  faTwitter,
  faInstagram,
  faLinkedinIn,
} from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';
import { faSprayCanSparkles } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-8 border-t border-gray-700">
      <div className="max-w-screen-xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Brand Section */}
          <div className="mb-6 md:mb-0 flex flex-col items-center md:items-start">
            <Link to="/" className="flex items-center space-x-3 mb-4">
              <FontAwesomeIcon
                icon={faSprayCanSparkles}
                size="2xl"
                style={{ color: '#ff6347' }}
              />
              <span className="text-2xl font-semibold text-white">Essenza</span>
            </Link>
            <p className="text-center md:text-left text-sm">
              Experience the essence of luxury with our exclusive perfumes.
            </p>
          </div>

          <div className="flex flex-col md:flex-row md:space-x-12 items-center md:items-start mb-6 md:mb-0">
            <div className="flex flex-col space-y-2 text-center md:text-left">
              <Link to="/" className="hover:text-white transition duration-300">
                Home
              </Link>
              <Link
                to="/product"
                className="hover:text-white transition duration-300"
              >
                Products
              </Link>
            </div>
          </div>

          <div className="flex space-x-4">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition duration-300"
              aria-label="Facebook"
            >
              <FontAwesomeIcon icon={faFacebookF} size="lg" />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition duration-300"
              aria-label="Twitter"
            >
              <FontAwesomeIcon icon={faTwitter} size="lg" />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition duration-300"
              aria-label="Instagram"
            >
              <FontAwesomeIcon icon={faInstagram} size="lg" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition duration-300"
              aria-label="LinkedIn"
            >
              <FontAwesomeIcon icon={faLinkedinIn} size="lg" />
            </a>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="mt-8 text-center text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} Essenza. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
