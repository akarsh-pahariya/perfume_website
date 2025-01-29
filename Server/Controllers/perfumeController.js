const Perfume = require('../Models/perfumeModel');
const Review = require('../Models/reviewModel');

const getPerfume = async (req, res) => {
  try {
    const max = parseInt(req.query.max) || 12;
    const page = parseInt(req.query.page) || 1;
    const skipPerfumes = (page - 1) * max;
    const totalPerfumes = await Perfume.countDocuments();
    const perfumes = await Perfume.find()
      .sort(req.query.sort)
      .limit(max)
      .skip(skipPerfumes);

    perfumes.forEach((perfume) => {
      perfume.images = perfume.images.map(
        (image) => `/Images/Perfumes/${image}`
      );
    });
    perfumes.forEach((perfume) => {
      perfume.imageCover = `/Images/Perfumes/${perfume.imageCover}`;
    });

    res.status(200).json({
      status: 'Success',
      data: {
        result: perfumes.length,
        totalPerfumes,
        perfumes,
      },
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      status: 'Fail',
      message: 'Error fetching perfume',
    });
  }
};

const getPerfumeById = async (req, res) => {
  try {
    let perfume = await Perfume.findById(req.params.id).populate('reviews');
    if (!perfume)
      res.status(404).json({
        status: 'Fail',
        message: 'No perfume found with the given ID',
      });

    perfume.images = perfume.images.map((image) => `/Images/Perfumes/${image}`);
    perfume.imageCover = `/Images/Perfumes/${perfume.imageCover}`;

    res.status(200).json({
      status: 'Success',
      data: {
        result: 1,
        perfume,
      },
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      status: 'Fail',
      message: 'Error fetching perfume',
    });
  }
};

module.exports = { getPerfume, getPerfumeById };
