import { useState, useEffect } from 'react';
import axios from 'axios';
import ShimmerProductList from '../components/ShimmerProductList';
import ProductCard from '../components/ProductCard';
import { backendApiUrl } from '../services/constants';

const ProductList = () => {
  const [sort, setSort] = useState('-rating');
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const perfumeData = await axios.get(
          `${backendApiUrl}/perfume?sort=${encodeURIComponent(
            sort
          )}&page=${encodeURIComponent(page)}&max=12`
        );
        setData(perfumeData.data.data);
        setTotalPages(Math.ceil(perfumeData.data.data.totalPerfumes / 12));
        setLoading(false);
      } catch (error) {
        console.error('Error fetching perfumes:', error);
      }
    };
    fetchData();
  }, [sort, page]);

  const handlePageChange = (newPage) => {
    setLoading(true);
    setPage(newPage);
  };

  return (
    <div className="bg-gray-50 min-h-screen p-4">
      <div className="max-w-screen-xl mx-auto flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Our Products</h1>
        <select
          className="p-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={sort}
          onChange={(e) => setSort(e.target.value)}
        >
          <option value="price">Price: Low to High</option>
          <option value="-price">Price: High to Low</option>
          <option value="-rating">Rating: High to Low</option>
        </select>
      </div>

      {loading && <ShimmerProductList />}

      {!loading && (
        <div className="max-w-screen-xl mx-auto grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {data.perfumes.map((perfume) => (
            <ProductCard key={perfume._id} product={perfume} />
          ))}
        </div>
      )}

      {!loading && (
        <div className="max-w-screen-xl mx-auto flex justify-center items-center mt-8">
          <button
            className={`px-4 py-2 border rounded-md shadow-sm mx-1 ${
              page === 1 ? 'cursor-not-allowed text-gray-400' : 'text-blue-600'
            }`}
            onClick={() => handlePageChange(page - 1)}
            disabled={page === 1}
          >
            Previous
          </button>

          <span className="px-4 py-2 font-medium text-gray-700">
            Page {page} of {totalPages}
          </span>

          <button
            className={`px-4 py-2 border rounded-md shadow-sm mx-1 ${
              page === totalPages
                ? 'cursor-not-allowed text-gray-400'
                : 'text-blue-600'
            }`}
            onClick={() => handlePageChange(page + 1)}
            disabled={page === totalPages}
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
};

export default ProductList;
