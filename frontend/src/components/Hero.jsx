import React from 'react';
import logo from '../assets/images/logo.jpg'
import ProductList from "../pages/ProductList.jsx";
import {Link} from "react-router-dom";
const Hero = () => {
    return (
        <>
        <div className="bg-cover bg-center h-screen" style={{ backgroundImage: `url(${logo})` }}>
            <div className="flex items-center justify-center h-full bg-gray-700 bg-opacity-50">
                <div className="text-center">
                    <h1 className="text-4xl font-bold text-white">Welcome to Our Store</h1>
                    <p className="text-xl text-gray-300 mt-4">Discover amazing products at great prices!</p>
                    <Link to='/products' className="mt-8 px-4 py-2 bg-blue-600 text-white font-semibold rounded">Shop Now</Link>
                </div>
            </div>
        </div>
        <ProductList/>
    </>
    );
}

export default Hero;
