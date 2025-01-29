const mongoose = require('mongoose');

const perfumeSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Name of the perfume is required'],
    },
    description: {
      type: String,
      required: [true, 'Description of the perfume is required'],
    },
    price: {
      type: Number,
      reuired: [true, 'Price of the perfume is required'],
    },
    images: [
      {
        type: String,
      },
    ],
    imageCover: {
      type: String,
      required: [true, 'Cover Image of the perfume is required'],
    },
    brand: {
      type: String,
      required: [true, 'Brand of the perfume is required'],
    },
    size: [
      {
        type: String,
        required: [true, 'Size of the perfume is required'],
      },
    ],
    rating: { type: Number, default: 0 },
    reviews: [
      {
        type: mongoose.Schema.ObjectId,
        ref: 'Review',
      },
    ],
  },
  {
    timestamps: true,
  }
);

const Perfume = mongoose.model('Perfume', perfumeSchema);
module.exports = Perfume;
