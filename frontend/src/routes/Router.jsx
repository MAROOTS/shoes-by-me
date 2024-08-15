import {createBrowserRouter} from "react-router-dom";
import App from "../App.jsx";
import Home from "../pages/Home.jsx";
import ProductList from "../pages/ProductList.jsx";
import ProductDetailsPage from "../pages/ProductDetailsPage.jsx";
import Cart from "../pages/Cart.jsx";
import About from "../pages/About.jsx";
import ContactUs from "../pages/ContactUs.jsx";
import CategoryPage from "../pages/CategoryPage.jsx";

const  router =createBrowserRouter([
    {
        path:'/',
        element:<App/>,
        children:[
            {path:'/',element:<Home/>,},
            {path:'/products',element:<ProductList/>},
            {path:'/products/:id',element:<ProductDetailsPage/>},
            {path:'/cart',element:<Cart/>},
            {path:'/about',element:<About/>},
            {path:'/contact',element:<ContactUs/>},
            {path:'/category/:category',element:<CategoryPage/>}
        ]
    }
])
export default router;