import { useNavigate } from 'react-router-dom';
import { backendBaseUrl } from '../services/constants';
import { Star } from 'lucide-react';

const ProductCard = ({ product }) => {
  const navigate = useNavigate();

  const handleProductPage = () => {
    navigate(`/product/${product._id}`);
  };

  return (
    <div
      onClick={handleProductPage}
      className="flex flex-col bg-white rounded-lg shadow-md overflow-hidden transition-transform transform hover:scale-105 w-full max-w-[18rem] mx-auto cursor-pointer"
    >
      <img
        src={`${backendBaseUrl}/${product.imageCover}`}
        alt={product.name}
        className="h-36 sm:h-48 w-full object-cover"
      />
      <div className="p-4 space-y-2">
        <h3 className="text-lg font-semibold text-gray-800 truncate">
          {product.name}
        </h3>
        <p className="text-sm text-gray-600 truncate">{product.brand}</p>
        <p className="text-lg font-bold text-orange-500">${product.price}</p>
        <div className="flex items-center space-x-1">
          {[...Array(5)].map((_, index) => (
            <Star
              key={index}
              className={`h-4 w-4 ${
                index < product.rating ? 'text-yellow-400' : 'text-gray-300'
              }`}
              fill={index < product.rating ? 'currentColor' : 'none'}
            />
          ))}
          <span className="text-sm text-gray-600">
            ({product.rating.toFixed(1)})
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
