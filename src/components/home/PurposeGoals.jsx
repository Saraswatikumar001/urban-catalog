import React from "react";

import img1 from "../../assets/purpose_image_1.png";
import img2 from "../../assets/purpose_image_2.png";
import img3 from "../../assets/purpose_image_3.png";

const PurposeGoals = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="flex justify-between items-center mb-10">
          <div>
            <p className="text-orange-500 font-semibold uppercase">
              Latest Project
            </p>
            <h2 className="text-4xl font-bold mt-2">
              The Purpose And Goals Of The Project
            </h2>
          </div>
          <button className="hidden md:block border border-gray-300 px-5 py-2 rounded hover:bg-gray-100">
            View All →
          </button>
        </div>
        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="relative group rounded-xl overflow-hidden w-full">
            {/* Image */}
            <img
              src={img1}
              alt="Manufacturing"
              className="w-full h-[260px] object-cover block"
            />
            {/* Black Overlay */}
            <div className="absolute inset-0 bg-black/40"></div>
            {/* Text */}
            <div className="absolute bottom-4 left-4 z-10 text-white">
              <h3 className="font-semibold text-lg">
                Concrete Product Manufacturing
              </h3>
              <p className="text-sm">
                Urban Mix Concrete Plant
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="relative group rounded-xl overflow-hidden w-full">
            <img
              src={img2}
              alt="Paver Blocks"
              className="w-full h-[260px] object-cover block"
            />
            <div className="absolute inset-0 bg-black/40"></div>
            <div className="absolute bottom-4 left-4 z-10 text-white">
              <h3 className="font-semibold text-lg">
                Paver Block Production
              </h3>
              <p className="text-sm text-gray-200">
                High Strength Blocks
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="relative group rounded-xl overflow-hidden w-full">
            <img
              src={img3}
              alt="Tiles"
              className="w-full h-[260px] object-cover block"
            />
            <div className="absolute inset-0 bg-black/40"></div>
            <div className="absolute bottom-4 left-4 z-10 text-white">
              <h3 className="font-semibold text-lg">
                Designer Tiles Manufacturing
              </h3>
              <p className="text-sm text-gray-200">
                Durable & Stylish Tiles
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PurposeGoals;
