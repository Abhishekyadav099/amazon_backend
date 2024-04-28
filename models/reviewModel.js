const mongoose = require('mongoose');

const reviewSchema = mongoose.Schema({
    productid: {
        type: String,
        required: true,
    },
    userid: {
        type: String,
        required: true,
    },
    rating: {
        type: Number,
        required: true,
    },
    review: {
        type: String,
    },
    createdAt: {
        type: Date,
        default: new Date(),
    },

});

const reviewModel = mongoose.model('reviews', reviewSchema);

module.exports = reviewModel;