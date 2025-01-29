const ShimmerProductList = () => {
  const shimmerArray = Array(8).fill(0);

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
      {shimmerArray.map((_, index) => (
        <div
          key={index}
          className="animate-pulse flex flex-col bg-gray-200 rounded-lg shadow p-4 space-y-2"
        >
          <div className="bg-gray-300 rounded-lg h-36 w-full"></div>
          <div className="bg-gray-300 h-4 rounded w-3/4"></div>
          <div className="bg-gray-300 h-4 rounded w-1/2"></div>
        </div>
      ))}
    </div>
  );
};

export default ShimmerProductList;
