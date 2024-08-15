import React from 'react';

const CartItem = ({ item, updateQuantity, removeItem }) => {
    return (
        <div className="flex items-center justify-between p-4 border-b border-gray-200">
            <div className="flex items-center">
                <img src={item.image} alt={item.name} className="w-20 h-20 object-cover rounded" />
                <div className="ml-4">
                    <h3 className="text-lg font-semibold">{item.name}</h3>
                    <p className="text-gray-600">${item.price}</p>
                </div>
            </div>
            <div className="flex items-center">
                <button
                    onClick={() => updateQuantity(item._id, item.quantity - 1)}
                    className="px-2 py-1 bg-gray-300 rounded"
                    disabled={item.quantity === 1}
                >
                    -
                </button>
                <span className="mx-2">{item.quantity}</span>
                <button
                    onClick={() => updateQuantity(item._id, item.quantity + 1)}
                    className="px-2 py-1 bg-gray-300 rounded"
                >
                    +
                </button>
                <button
                    onClick={() => removeItem(item._id)}
                    className="ml-4 px-2 py-1 bg-red-500 text-white rounded"
                >
                    Remove
                </button>
            </div>
        </div>
    );
};

export default CartItem;
