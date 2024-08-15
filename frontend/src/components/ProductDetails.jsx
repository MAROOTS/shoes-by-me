import {useState} from 'react';
import axios from 'axios';

const ProductDetails = ({ product }) => {
    const [reviews, setReviews] = useState(product.reviews || []);
    const [user, setUser] = useState('');
    const [rating, setRating] = useState(5);
    const [comment, setComment] = useState('');

    const addToCart = () => {
        let cart = JSON.parse(localStorage.getItem('cart')) || [];
        const item = cart.find(item => item._id === product._id);
        console.log(product._id);

        if (item) {
            item.quantity += 1;
        } else {
            cart.push({ ...product, quantity: 1 });
        }

        localStorage.setItem('cart', JSON.stringify(cart));
        alert(`${product.name} added to cart!`);
    };

    const submitReview = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post(`http://localhost:3000/api/products/${product._id}/review`, {
                user,
                rating,
                comment,
            });

            setReviews([...reviews, { user, rating, comment, date: new Date() }]);
            setUser('');
            setRating(5);
            setComment('');
        } catch (error) {
            console.error('Error adding review:', error);
        }
    };

    return (
        <div className="max-w-4xl mx-auto p-4">
            <img src={product.image} alt={product.name} className="w-full h-96 object-cover rounded-lg mb-4" />
            <h1 className="text-3xl font-bold text-gray-800 mb-2">{product.name}</h1>
            <p className="text-xl text-gray-700 mb-4">${product.price}</p>
            <p className="text-gray-600 mb-6">{product.description}</p>

            <button
                onClick={addToCart}
                className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-500 mb-8"
            >
                Add to Cart
            </button>

            <div className="mt-8">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">Customer Reviews</h2>
                {reviews.length > 0 ? (
                    reviews.map((review, index) => (
                        <div key={index} className="mb-4">
                            <p className="font-semibold">{review.user} - {review.rating} stars</p>
                            <p>{review.comment}</p>
                            <p className="text-gray-500 text-sm">{new Date(review.date).toLocaleDateString()}</p>
                        </div>
                    ))
                ) : (
                    <p>No reviews yet.</p>
                )}
            </div>

            <div className="mt-8">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">Write a Review</h2>
                <form onSubmit={submitReview}>
                    <div className="mb-4">
                        <label className="block text-gray-700">Name</label>
                        <input
                            type="text"
                            value={user}
                            onChange={(e) => setUser(e.target.value)}
                            className="w-full border rounded py-2 px-3"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700">Rating</label>
                        <select
                            value={rating}
                            onChange={(e) => setRating(e.target.value)}
                            className="w-full border rounded py-2 px-3"
                            required
                        >
                            {[1, 2, 3, 4, 5].map(star => (
                                <option key={star} value={star}>{star} star{star > 1 && 's'}</option>
                            ))}
                        </select>
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700">Comment</label>
                        <textarea
                            value={comment}
                            onChange={(e) => setComment(e.target.value)}
                            className="w-full border rounded py-2 px-3"
                            rows="4"
                            required
                        />
                    </div>
                    <button
                        type="submit"
                        className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-500"
                    >
                        Submit Review
                    </button>
                </form>
            </div>
        </div>
    );
};

export default ProductDetails;


