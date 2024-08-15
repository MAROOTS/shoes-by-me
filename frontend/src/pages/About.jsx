

const About = () => {
    return (
        <div className="bg-white text-gray-800 py-10 px-5">
            <div className="max-w-7xl mx-auto">
                <div className="text-center">
                    <h1 className="text-4xl font-bold mb-5">About Shoes by Me</h1>
                    <p className="text-xl leading-relaxed max-w-2xl mx-auto">
                        Welcome to Shoes by Me, where passion meets craftsmanship. We are a dedicated online
                        store committed to offering high-quality, stylish, and comfortable shoes that reflect your
                        unique style. Our mission is to make every step you take a confident one, with shoes that
                        are as unique as you are.
                    </p>
                </div>

                <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-10">
                    <div className="flex flex-col items-center text-center">
                        <img
                            src="https://images.unsplash.com/photo-1529810313688-44ea1c2d81d3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8c2hvZXN8ZW58MHx8MHx8fDA%3D"
                            alt="Our Story"
                            className="w-full h-64 object-cover rounded-lg mb-5"
                        />
                        <h2 className="text-2xl font-semibold mb-3">Our Story</h2>
                        <p className="text-lg leading-relaxed">
                            Shoes by Me started with a simple idea - to provide shoes that not only look good but
                            also feel good. Our journey began in a small workshop where we handpicked the finest
                            materials to create footwear that speaks to the heart of style and comfort.
                        </p>
                    </div>

                    <div className="flex flex-col items-center text-center">
                        <img
                            src="https://plus.unsplash.com/premium_photo-1682435561654-20d84cef00eb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8c2hvZXN8ZW58MHx8MHx8fDA%3D"
                            alt="Our Mission"
                            className="w-full h-64 object-cover rounded-lg mb-5"
                        />
                        <h2 className="text-2xl font-semibold mb-3">Our Mission</h2>
                        <p className="text-lg leading-relaxed">
                            We are committed to designing shoes that cater to the diverse tastes of our customers. Whether
                            you're looking for something casual, formal, or sporty, our collection is tailored to meet your
                            needs without compromising on quality or comfort.
                        </p>
                    </div>
                </div>

                <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-10">
                    <div className="flex flex-col items-center text-center">
                        <img
                            src="https://images.unsplash.com/photo-1519415943484-9fa1873496d4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c2hvZXN8ZW58MHx8MHx8fDA%3D"
                            alt="Our Values"
                            className="w-full h-64 object-cover rounded-lg mb-5"
                        />
                        <h2 className="text-2xl font-semibold mb-3">Our Values</h2>
                        <p className="text-lg leading-relaxed">
                            At Shoes by Me, we believe in sustainability, ethical sourcing, and creating products that
                            are both fashionable and responsible. We work tirelessly to ensure that our shoes are
                            crafted with care for the environment and the communities we serve.
                        </p>
                    </div>

                    <div className="flex flex-col items-center text-center">
                        <img
                            src="https://plus.unsplash.com/premium_photo-1664202526744-516d0dd22932?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjV8fHNob2VzfGVufDB8fDB8fHww"
                            alt="Why Choose Us"
                            className="w-full h-64 object-cover rounded-lg mb-5"
                        />
                        <h2 className="text-2xl font-semibold mb-3">Why Choose Us?</h2>
                        <p className="text-lg leading-relaxed">
                            Choosing Shoes by Me means choosing quality, comfort, and style. Our shoes are designed
                            to last, with every pair being a testament to our dedication to excellence. Join us on
                            this journey and step into the world with confidence.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
