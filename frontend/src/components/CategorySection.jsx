import {useNavigate} from "react-router-dom";

const categories = [
    {
        name:'Men',
        image:'https://images.unsplash.com/photo-1525401919108-97462bd24fe4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjExfHxzaG9lc3xlbnwwfHwwfHx8MA%3D%3D',
        path:'/category/mens-shoes',
    },
    {
        name: 'Women',
        image:'https://plus.unsplash.com/premium_photo-1673977133155-3b738590d58e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDF8fHNob2VzfGVufDB8fDB8fHww',
        path: '/category/Heels',
    },
    {
        name: 'Kids',
        image:'https://assets.adidas.com/images/w_450,f_auto,q_auto/b99ec2c937b242de98a69b30159344f2_9366/IW3588_23_hover_model.jpg',
        path:'/category/kids-shoes',
    }
]
const CategorySection = () => {
 const navigate = useNavigate();
  return (
      <div className="max-w-screen-lg mx-auto my-12">
          <h2 className="text-3xl font-bold text-center mb-8">Who Are You Shopping For?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {categories.map((category) => (
                  <div
                      key={category.name}
                      className="relative group cursor-pointer"
                      onClick={() => navigate(category.path)}
                      style={{
                          backgroundImage: `url(${category.image})`,
                          backgroundSize: 'cover',
                          backgroundPosition: 'center',
                          height: '300px',
                      }}
                  >
                      <div
                          className="absolute inset-0 bg-black bg-opacity-30 group-hover:bg-opacity-50 transition duration-300"></div>
                      <div className="absolute inset-0 flex items-center justify-center">
                          <div
                              className="text-white text-xl font-semibold uppercase tracking-wider bg-black bg-opacity-50 px-6 py-2">
                              {category.name}
                          </div>
                      </div>
                  </div>
              ))}
          </div>
      </div>
  )

}
export default CategorySection;