import { useState } from 'react';

const PostReview = ({ onSubmit }) => {
  const [user, setUser] = useState('');
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (user && rating && comment) {
      onSubmit({
        user,
        rating: parseFloat(rating),
        comment,
      });
      setUser('');
      setRating(0);
      setComment('');
    } else {
      alert('Please fill in all fields');
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="mt-6 border-t border-gray-300 pt-6 flex flex-col gap-4"
    >
      <h4 className="text-lg font-bold text-gray-900 mb-2 max-sm:text-base">
        Write a Review
      </h4>

      <input
        type="text"
        placeholder="Your Name"
        value={user}
        onChange={(e) => setUser(e.target.value)}
        className="border border-gray-300 rounded-md p-2 w-full focus:outline-none focus:ring-2 focus:ring-orange-600"
      />

      <select
        value={rating}
        onChange={(e) => setRating(e.target.value)}
        className="border border-gray-300 rounded-md p-2 w-full focus:outline-none focus:ring-2 focus:ring-orange-600"
      >
        <option value="0">Select Rating</option>
        {[1, 2, 3, 4, 5].map((rate) => (
          <option key={rate} value={rate}>
            {rate} Star{rate > 1 ? 's' : ''}
          </option>
        ))}
      </select>

      <textarea
        placeholder="Your Review"
        value={comment}
        onChange={(e) => setComment(e.target.value)}
        className="border border-gray-300 rounded-md p-2 w-full focus:outline-none focus:ring-2 focus:ring-orange-600"
        rows="4"
      ></textarea>

      <button
        type="submit"
        className="bg-orange-600 text-white py-2 px-4 rounded-md hover:bg-orange-700 transition duration-200"
      >
        Submit Review
      </button>
    </form>
  );
};

export default PostReview;
