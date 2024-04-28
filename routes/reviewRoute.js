const express = require('express');
const reviewController = require('../controllers/reviewController');

const reviewRouter = express.Router();

reviewRouter.route('/')
    .get(reviewController.getAllReviews)
    .post(reviewController.createReview);

reviewRouter.route('/:id')
    .patch(reviewController.updateReview)
    .delete(reviewController.deleteReview);

module.exports = reviewRouter;