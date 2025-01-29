import PostReview from './PostReview';

const ProductReviews = ({ reviews, onAddReview }) => {
  return (
    <div className="w-full">
      <h3 className="text-lg font-bold text-gray-900 mb-4 max-sm:text-base">
        Customer Reviews: {reviews.length}
      </h3>

      <div className="flex flex-col gap-6">
        {reviews.length ? (
          reviews.map((review, index) => (
            <div
              key={index}
              className="border border-gray-300 rounded-lg p-4 shadow-sm bg-gray-50 hover:bg-gray-100 transition duration-200"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="font-bold text-orange-600">
                    {review.rating.toFixed(1)} / 5
                  </span>
                  <div className="flex">
                    {Array.from({ length: 5 }, (_, i) => (
                      <svg
                        key={i}
                        xmlns="http://www.w3.org/2000/svg"
                        fill={
                          i < Math.round(review.rating)
                            ? 'currentColor'
                            : 'none'
                        }
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        className="w-5 h-5 text-orange-600"
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
                <span className="text-sm text-gray-500 italic">
                  {new Date(review.createdAt).toLocaleDateString('en-US', {
                    month: 'short',
                    day: 'numeric',
                    year: 'numeric',
                  })}
                </span>
              </div>

              <p className="mt-2 text-base text-gray-900">{review.comment}</p>

              <span className="mt-2 text-sm font-bold text-orange-600">
                - {review.user}
              </span>
            </div>
          ))
        ) : (
          <p className="text-sm text-gray-900">
            No reviews yet. Be the first to review!
          </p>
        )}
      </div>

      <PostReview onSubmit={onAddReview} />
    </div>
  );
};

export default ProductReviews;
