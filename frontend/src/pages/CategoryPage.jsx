import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import axios from "axios";

const CategoryPage = () => {
    const {category} = useParams();
    const [products, setProducts] = useState([]);

    useEffect(() => {
        axios.get(`http://localhost:3000/api/products/category/${category}`)
            .then(response => {
                setProducts(response.data);
            })
            .catch(error => console.error('Error fetching category products:', error));
    }, [category]);

    return (
        <div className="max-w-screen-lg mx-auto my-12">
            <h2 className="text-3xl font-bold mb-8">{category.replace('-', ' ').toUpperCase()}</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {products.map(product => (
                    <div key={product._id} className="border p-4 rounded-lg">
                        <img src={product.image} alt={product.name} className="w-full h-48 object-cover mb-4"/>
                        <h3 className="text-lg font-semibold">{product.name}</h3>
                        <p className="text-gray-500">{product.description}</p>
                        <p className="mt-2 font-bold">${product.price}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}
export default CategoryPage;