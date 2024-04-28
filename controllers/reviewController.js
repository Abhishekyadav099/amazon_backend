const reviewModel = require('../models/reviewModel');

const getAllReviews = async (req, res) => {
    try {
        const reviews = await reviewModel.find();
        res.status(200).json({
            status: 'success',
            message: 'All reviews',
            data: {
                reviews: reviews,
            }
        });
    } catch (err) {
        res.status(500).json({
            status: 'fail',
            message: err.message,
        });
    }
}

const createReview = async (req, res) => {
    try {
        const reviewData = req.body;
        const review = await reviewModel.create(reviewData);
        res.status(201).json({
            status: 'success',
            message: 'review created',
            data: {
                review: review,
            }
        });
    } catch (err) {
        res.status(400).json({
            status: 'fail',
            message: err.message,
        });
    }
}

const updateReview = async (req, res) => {
    try {
        const reviewId = req.params.id;
        const updatedData = req.body;
        const updatedreview = await reviewModel.findByIdAndUpdate(reviewId, updatedData, { new: true });
        if (!updatedreview) {
            res.status(404).json({
                status: 'fail',
                message: 'review not found',
            });
            return;
        }
        res.status(200).json({
            status: 'success',
            message: 'review updated',
            data: {
                review: updatedreview,
            }
        });
    } catch (err) {
        res.status(500).json({
            status: 'fail',
            message: err.message,
        });
    }
}

const deleteReview = async (req, res) => {
    try {
        const reviewId = req.params.id;
        const deletedreview = await reviewModel.findByIdAndDelete(reviewId);
        if (!deletedreview) {
            res.status(404).json({
                status: 'fail',
                message: 'review not found',
            });
            return;
        }
        res.status(200).json({
            status: 'success',
            message: 'review deleted',
        });
    } catch (err) {
        res.status(500).json({
            status: 'fail',
            message: err.message,
        });
    }
}

module.exports = {
    getAllReviews,
    createReview,
    updateReview,
    deleteReview
};