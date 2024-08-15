const mongoose = require('mongoose');

const reviewSchema = new mongoose.Schema({
    user: { type: String, required: true },
    rating: { type: Number, required: true },
    comment: { type: String, required: true },
    date: { type: Date, default: Date.now },
});

const productSchema= new mongoose.Schema({
    name:String,
    price:Number,
    description:String,
    image:String,
    featured:Boolean,
    reviews: [reviewSchema],
    category:{type:String, required:true},
});



const Product =mongoose.model('Product',productSchema);

module.exports = Product;