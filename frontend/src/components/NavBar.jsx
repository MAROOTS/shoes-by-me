
import logo from '../assets/images/logo.jpg'
import {Link} from "react-router-dom";
import {useEffect, useState} from "react";
import {FaShoppingCart} from "react-icons/fa";


const NavBar = () => {
    const [cartCount, setCartCount] = useState(0);

    useEffect(() => {
        const cart = JSON.parse(localStorage.getItem('cart')) || [];
        const count = cart.reduce((acc, item)=> acc +item.quantity, 0);
        setCartCount(count);
    }, []);
  return (
      <nav className="bg-white shadow-lg">
          <div className="max-w-6xl mx-auto px-4">
              <div className="flex justify-between">
                  <div className="flex space-x-7">
                      <div>
                          <button  className="flex items-center py-4 px-2">
                              <img src={logo} alt="Logo" className="h-8 w-8 mr-2"/>
                              <span className="font-bold text-gray-900 text-lg">Shoes By Me</span>
                          </button>
                      </div>
                      <div className="hidden md:flex items-center space-x-1">
                          <Link
                                className="py-4 px-2 text-blue-500 border-b-4 border-blue-500 font-semibold" to='/'>Home</Link>
                          <Link
                                className="py-4 px-2 text-gray-500 font-semibold hover:text-blue-500 transition duration-300" to='/products'>Shop</Link>
                          <Link
                                className="py-4 px-2 text-gray-500 font-semibold hover:text-blue-500 transition duration-300" to='/about'>About</Link>
                          <Link
                                className="py-4 px-2 text-gray-500 font-semibold hover:text-blue-500 transition duration-300" to='/contact'>Contact</Link>
                          <Link to="/cart" className="flex items-center">
                              <FaShoppingCart size={24} color='red'/>
                              {cartCount > 0 && (
                                  <span className="bg-red-500 text-white rounded-full ml-2 px-2 py-1 text-xs">
                        {cartCount}
                    </span>
                              )}
                          </Link>
                      </div>
                  </div>
                  <div className="hidden md:flex items-center space-x-3 ">
                      <button
                            className="py-2 px-2 font-medium text-gray-500 rounded hover:bg-gray-200 transition duration-300">Log
                          In</button>
                      <button
                            className="py-2 px-2 font-medium text-white bg-blue-500 rounded hover:bg-blue-400 transition duration-300">Sign
                          Up</button>
                  </div>
              </div>
          </div>
      </nav>

  );
}

export default NavBar;
