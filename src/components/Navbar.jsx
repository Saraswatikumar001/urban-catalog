import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png"

const Navbar = () => {
    const [open, setOpen] = useState(false);

    return (
        <>
            {/* NAVBAR */}
            <nav className="bg-[#B17851] text-white px-6 py-4 flex justify-between items-center">
                <img src={logo}
                    alt="logo"
                    className="text-xl w-15 h-15 font-bold" />

                {/* Menu */}
                <ul className="hidden md:flex gap-8 font-semibold text-lg">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About Us</Link></li>
                    <li><Link to="/products">Products</Link></li>
                    <li><Link to="/contact">Contact Us</Link></li>
                </ul>

                {/* Enquiry Button */}
                <button
                    onClick={() => setOpen(true)}
                    className="bg-white text-lg text-black px-6 py-3 rounded"
                >
                    Enquiry
                </button>
            </nav>

            {/* MODAL POPUP */}
            {open && (
                <div className="fixed inset-0 bg-black/50 flex justify-center items-center">
                    <div className="bg-white w-[350px] p-6 rounded relative">
                        {/* Close */}
                        <button
                            className="absolute right-3 top-2 text-lg"
                            onClick={() => setOpen(false)}
                        >
                            ✖
                        </button>

                        <h2 className="text-xl font-semibold mb-4 text-center">
                            Enquiry Form
                        </h2>

                        <input
                            className="border w-full p-2 mb-2"
                            placeholder="Name"
                        />

                        <input
                            className="border w-full p-2 mb-2"
                            placeholder="Mobile"
                        />

                        <input
                            className="border w-full p-2 mb-2"
                            placeholder="Email"
                        />

                        <input
                            className="border w-full p-2 mb-2"
                            placeholder="Product Name"
                        />

                        <textarea
                            className="border w-full p-2 mb-3"
                            placeholder="Message"
                        ></textarea>

                        <button className="bg-blue-700 text-white w-full py-2 rounded">
                            Submit
                        </button>

                    </div>
                </div>
            )}
        </>
    );
};

export default Navbar;
