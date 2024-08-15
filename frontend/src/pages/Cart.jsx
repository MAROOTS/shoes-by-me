import React, { useEffect, useState } from 'react';
import CartItem from '../components/CartItem';

const Cart = () => {
    const [cart, setCart] = useState([]);

    useEffect(() => {
        const storedCart = JSON.parse(localStorage.getItem('cart')) || [];
        setCart(storedCart);
    }, []);

    const updateQuantity = (id, quantity) => {
        const updatedCart = cart.map(item =>
            item._id === id ? { ...item, quantity } : item
        );
        setCart(updatedCart);
        localStorage.setItem('cart', JSON.stringify(updatedCart));
    };

    const removeItem = (id) => {
        const updatedCart = cart.filter(item => item._id !== id);
        setCart(updatedCart);
        localStorage.setItem('cart', JSON.stringify(updatedCart));
    };

    const getTotalPrice = () => {
        return cart.reduce((total, item) => total + item.price * item.quantity, 0);
    };

    return (
        <div className="max-w-6xl mx-auto px-4 py-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Shopping Cart</h2>
            {cart.length > 0 ? (
                <>
                    <div>
                        {cart.map(item => (
                            <CartItem
                                key={item._id}
                                item={item}
                                updateQuantity={updateQuantity}
                                removeItem={removeItem}
                            />
                        ))}
                    </div>
                    <div className="mt-8">
                        <h3 className="text-xl font-bold text-gray-800">Total: ${getTotalPrice().toFixed(2)}</h3>
                        <button
                            className="mt-4 bg-green-600 text-white py-2 px-4 rounded hover:bg-green-500"
                            onClick={() => alert('Proceeding to checkout...')}
                        >
                            Proceed to Checkout
                        </button>
                    </div>
                </>
            ) : (
                <p>Your cart is empty.</p>
            )}
        </div>
    );
};

export default Cart;
