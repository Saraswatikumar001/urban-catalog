import React from "react";

const services = [
    {
        title: "Paver Block Manufacturing",
        desc: "High strength interlocking paver blocks produced using modern machinery.",
        color: "bg-pink-500",
    },
    {
        title: "Tiles Production",
        desc: "Durable and attractive concrete tiles for indoor and outdoor spaces.",
        color: "bg-orange-500",
    },
    {
        title: "Custom Designs",
        desc: "Multiple patterns, colors and finishes as per customer requirement.",
        color: "bg-purple-500",
    },
    {
        title: "Bulk Supply",
        desc: "Large scale production capacity for commercial and residential projects.",
        color: "bg-sky-500",
    },
    {
        title: "Quality Testing",
        desc: "Each product tested for strength, durability and finish.",
        color: "bg-red-500",
    },
    {
        title: "Eco Friendly Products",
        desc: "Sustainable manufacturing with minimum environmental impact.",
        color: "bg-green-500",
    },
];

const Services = () => {
    return (
        <section className="py-20 bg-gray-100">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-12">
                    <p className="text-orange-500 font-semibold uppercase">
                        Our Services
                    </p>
                    <h2 className="text-4xl font-bold mt-2">
                        A Wide Range Of Our Services
                    </h2>
                </div>

                {/* Grid */}
                <div className="grid md:grid-cols-3 gap-8">
                    {services.map((item, index) => (
                        <div
                            key={index}
                            className="bg-white p-8 rounded-xl shadow hover:shadow-lg transition text-center"
                        >
                            {/* Icon */}
                            <div
                                className={`w-16 h-16 ${item.color} text-white rounded-full flex items-center justify-center mx-auto text-2xl`}
                            >
                                ⚙
                            </div>
                            <h3 className="text-xl font-semibold mt-5">
                                {item.title}
                            </h3>
                            <p className="text-gray-600 mt-3 text-sm">
                                {item.desc}
                            </p>
                            <button className="mt-5 text-orange-500 font-medium hover:underline">
                                READ MORE →
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
