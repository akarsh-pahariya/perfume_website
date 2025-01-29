import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ShimmerProduct from '../components/ShimmerProduct';
import { backendApiUrl } from '../services/constants';
import axios from 'axios';
import ProductImage from '../components/ProductImage';
import ProductDescription from '../components/ProductDescription';
import { Share2 } from 'lucide-react'; // Icon for the share button

const Product = () => {
  const [loading, setLoading] = useState(true);
  const [productData, setProductData] = useState(null);
  const params = useParams();

  useEffect(() => {
    const fetchProductData = async () => {
      try {
        const url = `${backendApiUrl}/perfume/${params.id}`;
        const res = await axios.get(url);
        setProductData(res.data.data.perfume);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching product data:', error);
      }
    };
    fetchProductData();
  }, [params.id]);

  const handleAddReview = async (data) => {
    try {
      setLoading(true);
      const url = `${backendApiUrl}/review`;
      data.product = params.id;
      const res = await axios.post(url, data);
      console.log(res.data.data.perfume);
      setProductData(res.data.data.perfume);
      setLoading(false);
    } catch (error) {}
  };

  const handleShare = () => {
    const productUrl = window.location.href; // Get the current URL
    if (navigator.share) {
      navigator
        .share({
          title: productData.name,
          text: `Check out this amazing perfume: ${productData.name}`,
          url: productUrl,
        })
        .then(() => console.log('Product shared successfully'))
        .catch((error) => console.error('Error sharing product:', error));
    } else {
      // Fallback for browsers that don't support the Web Share API
      alert(`Copy and share this link: ${productUrl}`);
    }
  };

  if (loading) {
    return <ShimmerProduct />;
  }

  if (!productData) {
    return <div className="text-center text-gray-500">Product not found</div>;
  }

  return (
    <section className="flex lg:gap-16 px-36 py-14 max-lg:flex-col max-sm:py-4 max-sm:px-4 mb-10 relative">
      <ProductImage
        productImages={productData.images}
        imageCover={productData.imageCover}
      />
      <ProductDescription
        productDetails={productData}
        onAddReview={handleAddReview}
      />
      <div>
        <button
          onClick={handleShare}
          className="absolute top-8 right-8 lg:top-12 lg:right-12 bg-blue-500 text-white font-semibold px-4 py-2 rounded-full shadow-lg hover:bg-blue-600 focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 transition duration-200 z-20"
        >
          <Share2 className="w-5 h-5 inline-block mr-2" />
          <span className="hidden sm:inline">Share</span>
        </button>
      </div>
    </section>
  );
};

export default Product;
