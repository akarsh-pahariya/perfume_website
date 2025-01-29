import ProductReviews from './ProductReviews';

const ProductDescription = ({ productDetails, onAddReview }) => {
  return (
    <div className="w-1/2 max-lg:w-4/5 max-sm:w-full px-4">
      <h2 className="text-orange-600 font-bold text-sm max-sm:text-xs">
        {productDetails.brand}
      </h2>
      <h1 className="text-5xl mt-4 mb-8 text-gray-900 max-sm:text-3xl max-sm:mb-4">
        {productDetails.name}
      </h1>
      <p className="text-base text-gray-700 max-sm:text-sm">
        {productDetails.description}
      </p>

      <div className="flex flex-col items-start gap-4 mt-4 mb-5 max-sm:flex-row max-sm:justify-between max-sm:items-center max-sm:gap-2">
        <div className="flex items-center gap-4">
          <span className="font-bold text-4xl text-orange-600 max-sm:text-2xl">
            ${productDetails.price}
          </span>
        </div>
      </div>

      <div className="mt-6">
        <h3 className="text-lg font-bold text-gray-900 mb-2 max-sm:text-base">
          Available Sizes:
        </h3>
        <div className="flex gap-4">
          {productDetails.size.map((size, index) => (
            <span
              key={index}
              className="border border-orange-200 rounded-md px-4 py-2 text-sm cursor-pointer hover:bg-orange-50 hover:border-orange-600 text-gray-900 transition-all"
            >
              {size}
            </span>
          ))}
        </div>
      </div>

      <div className="mt-6">
        <h3 className="text-lg font-bold text-gray-900 mb-2 max-sm:text-base">
          Rating:
        </h3>
        <div className="flex items-center">
          <span className="text-xl font-bold text-orange-600">
            {productDetails.rating.toFixed(1)} / 5
          </span>
          <div className="ml-3 flex">
            {Array.from({ length: 5 }, (_, i) => (
              <svg
                key={i}
                xmlns="http://www.w3.org/2000/svg"
                fill={
                  i < Math.round(productDetails.rating)
                    ? 'currentColor'
                    : 'none'
                }
                viewBox="0 0 24 24"
                stroke="currentColor"
                className={`w-6 h-6 ${
                  i < Math.round(productDetails.rating)
                    ? 'text-orange-600'
                    : 'text-gray-300'
                }`}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
                />
              </svg>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-6">
        <ProductReviews
          reviews={productDetails.reviews}
          onAddReview={onAddReview}
        />
      </div>
    </div>
  );
};

export default ProductDescription;
