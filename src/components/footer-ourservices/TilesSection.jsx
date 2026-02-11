import React from "react";

import productImg3 from "../../assets/product4.png";
import productImg4 from "../../assets/product5.png";
import productImg6 from "../../assets/product7.png";
import productImg8 from "../../assets/product9.png";
import productImg11 from "../../assets/product11.png";
import productImg19 from "../../assets/product19.png";

const TilesSection = () => {

    const products = [
        { id: 3, name: "Guti Polis Tiles", price: "₹42 / pcs", image: productImg3 },
        { id: 4, name: "Tuff Tiles", price: "₹26 / pcs", image: productImg4 },
        { id: 6, name: "1/1 Polis Tiles", price: "₹35 / pcs", image: productImg6 },
        { id: 8, name: "Cosmis Tiles", price: "₹26 / pcs", image: productImg8 },
        { id: 11, name: "36 Guti / 16 Tiles", price: "₹35 / pcs", image: productImg11 },
        { id: 19, name: "1/1 Chekar Tiles", price: "₹35 / pcs", image: productImg19 },
    ];

    return (
        <section className="bg-[#F5BA78]/10 py-20 px-6 md:px-20">
            <div className="max-w-7xl mx-auto">

                {/* Section Heading */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-[#B33F18]">
                        Designer Tiles
                    </h2>
                    <p className="mt-4 text-gray-600 max-w-2xl mx-auto font-normal">
                        Affordable and durable tile solutions suitable for homes,
                        courtyards, pathways, and outdoor flooring. Designed for
                        long-lasting performance, our concrete tiles provide strength,
                        weather resistance, and easy maintenance. Available in multiple
                        designs and finishes to match both modern and traditional spaces.
                    </p>
                </div>

                {/* Tiles Grid */}
                <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-10">
                    {products.map((product) => (
                        <div
                            key={product.id}
                            className="relative group rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-300"
                        >
                            {/* Image */}
                            <div className="overflow-hidden">
                                <img
                                    src={product.image}
                                    alt={product.name}
                                    className="h-72 w-full object-cover transition duration-500 group-hover:scale-110"
                                />
                            </div>

                            {/* Price Badge */}
                            <span className="absolute top-4 left-4 bg-[#B33F18] text-white text-sm px-4 py-1 rounded-full shadow">
                                {product.price}
                            </span>

                            {/* Overlay */}
                            <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition duration-500 flex items-center justify-center">
                                <div className="text-center text-white px-6">
                                    <h3 className="text-xl font-semibold mb-4">
                                        {product.name}
                                    </h3>
                                    <button className="bg-[#F5BA78] text-black px-5 py-2 rounded-lg font-medium hover:bg-[#e4a85f] transition">
                                        Enquire Now
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default TilesSection;
