import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const ContactUs = () => {
    return (
        <div className="bg-gray-50 text-gray-800 py-10 px-5">
            <div className="max-w-7xl mx-auto">
                <div className="text-center">
                    <h1 className="text-4xl font-bold mb-5">Contact Us</h1>
                    <p className="text-xl leading-relaxed max-w-2xl mx-auto mb-10">
                        We’d love to hear from you! Whether you have a question about our products, pricing, or anything else,
                        our team is ready to answer all your questions.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    <div className="bg-white shadow-lg rounded-lg p-8">
                        <h2 className="text-2xl font-semibold mb-5">Get In Touch</h2>
                        <form>
                            <div className="mb-5">
                                <label htmlFor="name" className="block text-lg font-medium mb-2">
                                    Name
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    className="w-full border border-gray-300 rounded-lg p-3"
                                    placeholder="Your Name"
                                />
                            </div>

                            <div className="mb-5">
                                <label htmlFor="email" className="block text-lg font-medium mb-2">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    className="w-full border border-gray-300 rounded-lg p-3"
                                    placeholder="Your Email"
                                />
                            </div>

                            <div className="mb-5">
                                <label htmlFor="message" className="block text-lg font-medium mb-2">
                                    Message
                                </label>
                                <textarea
                                    id="message"
                                    rows="5"
                                    className="w-full border border-gray-300 rounded-lg p-3"
                                    placeholder="Your Message"
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                className="w-full bg-blue-600 text-white font-semibold py-3 rounded-lg hover:bg-blue-500 transition duration-300"
                            >
                                Send Message
                            </button>
                        </form>
                    </div>

                    <div className="flex flex-col justify-center">
                        <h2 className="text-2xl font-semibold mb-5 text-center md:text-left">Reach Us At</h2>
                        <p className="text-lg mb-5 text-center md:text-left">
                            123 Shoe Street, Fashion City, ST 12345 <br />
                            Email: contact@shoesbyme.com <br />
                            Phone: (123) 456-7890
                        </p>
                        <div className="flex justify-center md:justify-start space-x-5 text-3xl">
                            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 transition duration-300">
                                <FaFacebookF />
                            </a>
                            <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-600 transition duration-300">
                                <FaTwitter />
                            </a>
                            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="text-pink-500 hover:text-pink-700 transition duration-300">
                                <FaInstagram />
                            </a>
                            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:text-blue-900 transition duration-300">
                                <FaLinkedinIn />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactUs;
