const mongoose = require('mongoose');

const reviewSchema = new mongoose.Schema(
  {
    user: {
      type: String,
      required: [true, 'Name of the user is required'],
    },
    rating: {
      type: Number,
      min: 1,
      max: 5,
      enum: [1, 2, 3, 4, 5],
    },
    comment: {
      type: String,
    },
    product: {
      type: mongoose.Schema.ObjectId,
      ref: 'Perfume',
      required: [true, 'Product id is required to post a review'],
    },
  },
  {
    timestamps: true,
  }
);

const Review = mongoose.model('Review', reviewSchema);
module.exports = Review;
