import React from 'react';
import { Input, Textarea, Button } from '@nextui-org/react';

const ContactPage = () => {
    return (
        <div className="min-h-screen bg-gradient-to-r from-blue-100 to-purple-100 pt-16 sm:pt-20 md:pt-24 lg:pt-32 pb-12 px-4 sm:px-6 lg:px-8">
            <div className="bg-white p-8 rounded-xl shadow-2xl w-full max-w-7xl mx-auto border border-blue-200">
                <div className="flex items-center justify-between mb-12">
                    <h1 className="text-4xl font-bold text-blue-600">Contact Us</h1>
                    <img
                        alt="Logo of IEEE Ashoka"
                        className="w-24 h-24 rounded-full shadow-md"
                        src="/images/logo.png"
                        width="96"
                        height="96"
                    />
                </div>
                <div className="flex flex-col lg:flex-row gap-8">
                    <div className="lg:w-2/3">
                        <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="mb-4">
                                <label className="block text-gray-700 font-bold mb-2" htmlFor="first-name">
                                    First Name
                                    <span className="text-red-500">*</span>
                                </label>
                                <Input
                                    className="w-full px-3 py-2 border border-blue-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    id="first-name"
                                    placeholder="Enter First Name"
                                    type="text"
                                    required
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700 font-bold mb-2" htmlFor="last-name">
                                    Last Name
                                    <span className="text-red-500">*</span>
                                </label>
                                <Input
                                    className="w-full px-3 py-2 border border-blue-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    id="last-name"
                                    placeholder="Enter Last Name"
                                    type="text"
                                    required
                                />
                            </div>
                            <div className="mb-4 col-span-2">
                                <label className="block text-gray-700 font-bold mb-2" htmlFor="email">
                                    Email
                                    <span className="text-red-500">*</span>
                                </label>
                                <Input
                                    className="w-full px-3 py-2 border border-blue-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    id="email"
                                    placeholder="Enter Email"
                                    type="email"
                                    required
                                />
                            </div>
                            <div className="mb-4 col-span-2">
                                <label className="block text-gray-700 font-bold mb-2" htmlFor="query">
                                    Query
                                    <span className="text-red-500">*</span>
                                </label>
                                <Textarea
                                    className="w-full px-3 py-2 border border-blue-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    id="query"
                                    placeholder="Your Query here..."
                                    rows={4}
                                    required
                                />
                            </div>
                            <div className="col-span-2 flex justify-center mt-6">
                                <Button className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300 ease-in-out transform hover:scale-105" type="submit">
                                    Submit
                                </Button>
                            </div>
                        </form>
                    </div>
                    <div className="lg:w-1/3">
                        <div className="bg-gray-50 p-6 rounded-lg h-full">
                            <h2 className="text-2xl font-bold mb-4 text-blue-600">Contact Information</h2>
                            <p className="text-gray-700">
                                <i className="fas fa-map-marker-alt mr-2 text-blue-500"></i>
                                <a 
                                    href="https://www.google.com/maps/place/Ashoka+University/@28.9469475,77.1031697,17z/data=!3m1!4b1!4m6!3m5!1s0x390dadd1aaaa9d5d:0xb7a3d4d03b0e0fde!8m2!3d28.9469475!4d77.1057446!16s%2Fm%2F0_1n0yd"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="hover:text-blue-500 transition-colors duration-300"
                                >
                                    Ashoka University, Rajiv Gandhi Education City, Sonipat, Haryana 131029
                                </a>
                            </p>
                            <p className="text-gray-700 mt-2">
                                <i className="fas fa-envelope mr-2 text-blue-500"></i> contact@ieeeashoka.com
                            </p>
                            <p className="text-gray-700 mt-2">
                                <i className="fas fa-phone mr-2 text-blue-500"></i> +91 1234567890
                            </p>
                            <div className="mt-4 h-64 w-full">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3494.9261976237996!2d77.10316971505713!3d28.946947582311683!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390dadd1aaaa9d5d%3A0xb7a3d4d03b0e0fde!2sAshoka%20University!5e0!3m2!1sen!2sin!4v1650456844399!5m2!1sen!2sin"
                                    width="100%"
                                    height="100%"
                                    style={{ border: 0 }}
                                    allowFullScreen={true}
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                ></iframe>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactPage;
