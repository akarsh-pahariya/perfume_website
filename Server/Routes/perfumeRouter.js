const express = require('express');
const perfumeController = require('../Controllers/perfumeController');

const router = express.Router();

router.route('/').get(perfumeController.getPerfume);
router.route('/:id').get(perfumeController.getPerfumeById);

module.exports = router;
