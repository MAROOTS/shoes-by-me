const Product = require('../models/productModel.jsx');
const Stripe = require('stripe');
const stripe = Stripe(process.env.STRIPE_KEY);

const getAllProducts = async (req, res) => {
    try {
        const products = await Product.find({});
        res.json(products);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const getFeaturedProducts = async (req, res) => {
    try {
        const products = await Product.find({ featured: true });
        res.json(products);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const addProduct = async (req, res) => {
    try {
        const product = new Product({
            name: req.body.name,
            price: req.body.price,
            image: req.body.image,
            description: req.body.description,
            featured: req.body.featured,
            category: req.body.category,
        });
        const savedProduct = await product.save();
        res.status(201).json(savedProduct);
    } catch (error) {
        res.status(400).send(error);
    }
};

const getProductById = async (req, res) => {
    console.log(`Fetching product with ID: ${req.params.id}`);
    try {
        const product = await Product.findById(req.params.id);
        if (product) {
            res.json(product);
        } else {
            console.log('Product not found');
            res.status(404).json({ message: 'Product not found' });
        }
    } catch (error) {
        console.error('Error fetching product:', error);
        res.status(500).send(error);
    }
};

const getProductByCategory = async (req, res) => {
    try {
        const products = await Product.find({ category: req.params.category });
        res.json(products);
        console.log(products);
    } catch (error) {
        res.status(500).send({ error: error.message });
    }
};

const deleteProduct = async (req, res) => {
    try {
        const product = await Product.findByIdAndDelete(req.params.id);
        if (product) {
            res.json({message:'Product deleted successfully'});
        }else {
            res.status(404).json({ message: 'Product not found' });
        }
    }catch (error) {
        res.status(500).send({ error: error.message });
    }
}

const addReview = async (req, res) => {
    const { id } = req.params;
    const { user, rating, comment } = req.body;

    try {
        const product = await Product.findById(id);

        if (product) {
            const review = {
                user,
                rating: Number(rating),
                comment,
            };

            product.reviews.push(review);
            await product.save();
            res.status(201).json({ message: 'Review added' });
        } else {
            res.status(404).json({ message: 'Product not found' });
        }
    } catch (error) {
        res.status(500).send(error);
    }
};

const createPayment = async (req, res) => {
    try {
        const { price } = req.body;

        const paymentIntent = await stripe.paymentIntents.create({
            amount: Math.round(price * 100), // Stripe expects the amount to be in cents
            currency: 'usd',
            automatic_payment_methods: {
                enabled: true,
            },
        });
        res.send({
            clientSecret: paymentIntent.client_secret,
        });
    } catch (error) {
        res.status(500).send({ error: error.message });
    }
};

module.exports = {
    getFeaturedProducts,
    getAllProducts,
    addProduct,
    getProductById,
    addReview,
    createPayment,
    getProductByCategory,
    deleteProduct
};
