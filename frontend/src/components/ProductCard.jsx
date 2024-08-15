import React from 'react';
import { Link } from 'react-router-dom';

const ProductCard = ({ product }) => {
    return (
        <div className="bg-white shadow-md rounded-lg p-4">
            <Link to={`/products/${product._id}`}>
                <img src={product.image} alt={product.name} className="w-full h-48 object-cover rounded-t-lg" />
                <h3 className="text-lg font-semibold mt-2">{product.name}</h3>
                <p className="text-gray-600 mt-1">${product.price}</p>
            </Link>
        </div>
    );
};

export default ProductCard;

