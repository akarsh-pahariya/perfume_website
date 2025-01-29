const { default: mongoose } = require('mongoose');
const Perfume = require('../Models/perfumeModel');
const Review = require('../Models/reviewModel');

const createReview = async (req, res) => {
  try {
    const perfumeId = req.body.product;
    const newReview = await Review.create(req.body);
    const result = await Review.aggregate([
      { $match: { product: new mongoose.Types.ObjectId(perfumeId) } },
      { $group: { _id: null, averageRating: { $avg: '$rating' } } },
    ]);
    const averageRating = result.length > 0 ? result[0].averageRating : 0;

    const updatedPerfume = await Perfume.findByIdAndUpdate(
      perfumeId,
      {
        rating: averageRating,
        $push: { reviews: newReview._id },
      },
      { new: true }
    ).populate('reviews');

    updatedPerfume.images = updatedPerfume.images.map(
      (image) => `/Images/Perfumes/${image}`
    );
    updatedPerfume.imageCover = `/Images/Perfumes/${updatedPerfume.imageCover}`;

    res.status(201).json({
      status: 'Success',
      data: {
        result: 1,
        perfume: updatedPerfume,
      },
    });
  } catch (error) {
    console.error(error);
    res.status(400).json({
      status: 'Fail',
      message: error.message || 'Error creating review',
    });
  }
};

module.exports = { createReview };
