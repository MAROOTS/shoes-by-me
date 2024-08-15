import React, { useEffect, useState } from 'react';
import CategorySection from "./CategorySection.jsx";

const FeaturedProducts = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3000/api/products/featured')
            .then(response => response.json())
            .then(data => setProducts(data))
            .catch(error => console.error('Error fetching featured products:', error));
    }, []);

    return (
        <>
            <div className="max-w-6xl mx-auto px-4 py-8">
                <h2 className="text-2xl font-bold text-gray-800">Featured Products</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-6">
                    {products.map(product => (
                        <div key={product._id} className="bg-white shadow-md rounded-lg p-4">
                            <img src={product.image} alt={product.name}
                                 className="w-full h-48 object-cover rounded-t-lg"/>
                            <h3 className="text-lg font-semibold mt-2">{product.name}</h3>
                            <p className="text-gray-600 mt-1">${product.price}</p>
                        </div>
                    ))}
                </div>
            </div>

            <CategorySection/>
        </>

    );
}

export default FeaturedProducts;
