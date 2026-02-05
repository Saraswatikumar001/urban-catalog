import React from "react";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";


const Footer = () => {
    return (
        <footer className="bg-black text-white pt-16">
            <div className="max-w-7xl mx-auto px-6 pb-14 border-b border-white/10">
                <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                    {/* Left */}
                    <h2 className="text-3xl font-semibold uppercase">
                        Get instant industrial updates!
                    </h2>
                    {/* Right */}
                    <div className="flex w-full md:w-auto bg-white rounded-full overflow-hidden">
                        <input
                            type="email"
                            placeholder="Enter your email address"
                            className="px-5 py-3 text-black outline-none w-full md:w-72"
                        />
                        <button className="bg-[#B33F18] px-6 py-3 font-medium hover:bg-orange-600">
                            Subscribe
                        </button>
                    </div>
                </div>
            </div>

            {/* Footer Links */}
            <div className="max-w-7xl mx-auto px-6 py-14 grid md:grid-cols-4 gap-10">
                <div>
                    <h3 className="text-2xl font-bold mb-4">Urban Mix Concrete</h3>
                    <p className="text-gray-300 text-lg mb-4">
                        Manufacturer of premium paver blocks, tiles and concrete products.
                    </p>
                    {/* Social Icons */}
                    <div className="flex gap-4">
                        <div className="w-10 h-10 flex items-center justify-center rounded-full bg-[#B33F18] hover:bg-orange-600 cursor-pointer">
                            <FaFacebookF className="text-white" />
                        </div>
                        <div className="w-10 h-10 flex items-center justify-center rounded-full bg-[#B33F18] hover:bg-orange-600 cursor-pointer">
                            <FaTwitter className="text-white" />
                        </div>
                        <div className="w-10 h-10 flex items-center justify-center rounded-full bg-[#B33F18] hover:bg-orange-600 cursor-pointer">
                            <FaLinkedinIn className="text-white" />
                        </div>
                        <div className="w-10 h-10 flex items-center justify-center rounded-full bg-[#B33F18] hover:bg-orange-600 cursor-pointer">
                            <FaInstagram className="text-white" />
                        </div>
                    </div>
                </div>

                {/* Our Services */}
                <div>
                    <h4 className="font-semibold text-xl mb-4">Our Services</h4>
                    <ul className="space-y-2 text-gray-300 text-lg">
                        <li>Paver Blocks</li>
                        <li>Designer Tiles</li>
                        <li>Kerb Stones</li>
                        <li>Concrete Bricks</li>
                    </ul>
                </div>

                {/* Quick Links */}
                <div>
                    <h4 className="font-semibold text-xl mb-4">Quick Links</h4>
                    <ul className="space-y-2 text-gray-300 text-lg">
                        <li>About Us</li>
                        <li>Products</li>
                        <li>Gallery</li>
                        <li>Contact</li>
                    </ul>
                </div>

                {/* Contact */}
                <div>
                    <h4 className="font-semibold text-xl mb-4">Contact</h4>
                    <ul className="space-y-4 text-gray-300 text-lg">

                        <li className="flex items-center gap-3">
                            <span className="w-10 h-10 flex items-center justify-center rounded-full bg-[#B33F18]">
                                <FaMapMarkerAlt className="text-white" />
                            </span>
                            <span>Amdobe, Patkelpotamore</span>
                        </li>

                        <li className="flex items-center gap-3">
                            <span className="w-10 h-10 flex items-center justify-center rounded-full bg-[#B33F18]">
                                <FaPhoneAlt className="text-white" />
                            </span>
                            <span>+91 75850 57759</span>
                        </li>

                        <li className="flex items-center gap-3">
                            <span className="w-10 h-10 flex items-center justify-center rounded-full bg-[#B33F18]">
                                <FaEnvelope className="text-white" />
                            </span>
                            <span>urbanmix@gmail.com</span>
                        </li>

                    </ul>

                </div>
            </div>

            {/* Bottom Bar */}
            <div className="bg-gray-800 py-4 text-center text-gray-400 text-sm">
                © {new Date().getFullYear()} Urban Mix Concrete. All Rights Reserved.
            </div>

        </footer>
    );
};

export default Footer;
