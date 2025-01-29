const ShimmerProduct = () => {
  return (
    <div className="flex flex-col md:flex-row items-start p-4 md:p-8 bg-gray-50 min-h-screen animate-pulse">
      {/* Image Placeholder */}
      <div className="w-full md:w-1/2 flex justify-center mb-6 md:mb-0">
        <div className="h-64 w-64 bg-gray-300 rounded-lg"></div>
      </div>

      {/* Details Placeholder */}
      <div className="w-full md:w-1/2 space-y-4 px-4">
        {/* Title Placeholder */}
        <div className="h-6 bg-gray-300 rounded w-3/4"></div>

        {/* Price Placeholder */}
        <div className="h-6 bg-gray-300 rounded w-1/3"></div>

        {/* Sizes Placeholder */}
        <div className="flex space-x-2 mt-4">
          <div className="h-8 w-8 bg-gray-300 rounded-full"></div>
          <div className="h-8 w-8 bg-gray-300 rounded-full"></div>
          <div className="h-8 w-8 bg-gray-300 rounded-full"></div>
        </div>

        {/* Ratings Placeholder */}
        <div className="h-4 bg-gray-300 rounded w-1/4"></div>

        {/* Description Placeholder */}
        <div className="space-y-2">
          <div className="h-4 bg-gray-300 rounded w-full"></div>
          <div className="h-4 bg-gray-300 rounded w-5/6"></div>
          <div className="h-4 bg-gray-300 rounded w-4/6"></div>
        </div>

        {/* Buttons Placeholder */}
        <div className="flex space-x-4 mt-6">
          <div className="h-10 w-32 bg-gray-300 rounded"></div>
          <div className="h-10 w-32 bg-gray-300 rounded"></div>
        </div>
      </div>
    </div>
  );
};

export default ShimmerProduct;
