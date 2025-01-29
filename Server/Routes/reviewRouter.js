const express = require('express');
const reviewController = require('../Controllers/reviewController');

const router = express.Router();

router.route('/').post(reviewController.createReview);

module.exports = router;
