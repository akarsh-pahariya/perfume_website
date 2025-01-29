import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { backendApiUrl, backendBaseUrl } from '../services/constants';

const Home = () => {
  const [topRatedProduct, setTopRatedProduct] = useState([]);
  const [mostAffordableProduct, setMostAffordableProduct] = useState([]);
  const [mostPremiumProduct, setMostPremiumProduct] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchMostAffordable = async () => {
      try {
        const sort = 'price';
        const url = `${backendApiUrl}/perfume?sort=${sort}&max=5`;
        const res = await axios.get(url);
        setMostAffordableProduct(res.data.data.perfumes);
      } catch (error) {
        console.error('Error fetching most affordable products', error);
      }
    };

    const fetchMostPremium = async () => {
      try {
        const sort = '-price';
        const url = `${backendApiUrl}/perfume?sort=${sort}&max=5`;
        const res = await axios.get(url);
        setMostPremiumProduct(res.data.data.perfumes);
      } catch (error) {
        console.error('Error fetching most premium products', error);
      }
    };

    const fetchTopRated = async () => {
      try {
        const sort = '-rating';
        const url = `${backendApiUrl}/perfume?sort=${sort}&max=5`;
        const res = await axios.get(url);
        setTopRatedProduct(res.data.data.perfumes);
      } catch (error) {
        console.error('Error fetching top rated products', error);
      }
    };

    fetchMostAffordable();
    fetchMostPremium();
    fetchTopRated();
  }, []);

  const handleProductPage = (productId) => {
    navigate(`/product/${productId}`);
  };

  const renderProducts = (products) => {
    return products.map((product) => (
      <div
        key={product._id}
        onClick={() => handleProductPage(product._id)}
        className="w-64 p-4 bg-white shadow-md rounded-lg flex-shrink-0 cursor-pointer"
      >
        <img
          src={`${backendBaseUrl}/${product.imageCover}`}
          alt={product.name}
          className="w-full h-40 object-cover rounded-md mb-4"
        />
        <h3 className="text-lg font-semibold text-gray-700">{product.name}</h3>
        <p className="text-sm text-gray-500">{product.brand}</p>
        <p className="text-lg font-bold text-orange-600 mt-2">
          ${product.price.toFixed(2)}
        </p>
      </div>
    ));
  };

  return (
    <div className="flex flex-col items-center w-full">
      <div className="w-full">
        <picture>
          <source media="(min-width: 768px)" srcSet="/banner-desktop.png" />
          <img
            src="/banner-mobile.png"
            alt="Banner"
            className="w-full h-auto"
          />
        </picture>
      </div>

      <div className="w-full px-4 py-8 space-y-12">
        <div>
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            Highest Rated Perfumes
          </h2>
          <div className="overflow-x-auto">
            <div className="flex gap-4">
              {topRatedProduct.length > 0
                ? renderProducts(topRatedProduct)
                : 'Loading...'}
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            Most Affordable Perfumes
          </h2>
          <div className="overflow-x-auto">
            <div className="flex gap-4">
              {mostAffordableProduct.length > 0
                ? renderProducts(mostAffordableProduct)
                : 'Loading...'}
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            Most Premium Perfumes
          </h2>
          <div className="overflow-x-auto">
            <div className="flex gap-4">
              {mostPremiumProduct.length > 0
                ? renderProducts(mostPremiumProduct)
                : 'Loading...'}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
