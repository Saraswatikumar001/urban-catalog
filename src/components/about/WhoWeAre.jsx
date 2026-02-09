import React from "react";

const WhoWeAreSection = () => {
  return (
    <section className="md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        {/* LEFT IMAGES */}
        <div className="relative">
          {/* Big Image */}
          <img
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c"
            alt="Engineer"
            className="rounded-lg md:w-3/4 w-full"
          />
          {/* Small Image */}
          <img
            src="https://images.unsplash.com/photo-1503387762-592deb58ef4e"
            alt="Construction"
            className="rounded-lg w-1/2 absolute md:bottom-[-40px] bottom-[-101px] md:right-0 shadow-lg"
          />
          {/* Experience Box */}
          <div className="md:mt-0 mt-1 absolute md:top-6 md:right-6 right-0 bg-[#B13F1A] text-white p-6 rounded-lg text-center shadow-lg">
            <h2 className="text-3xl font-bold">25+</h2>
            <p className="text-sm">Years Experience</p>
          </div>
        </div>

        {/* RIGHT CONTENT */}
        <div class="md:py-0 py-20">
          <p className="text-[#D96E4F] font-semibold mb-2 uppercase">
            Who We Are
          </p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            We Always Think On <br /> Your Dream
          </h2>
          <p className="text-gray-600 mb-6">
            We are a professional concrete solutions company delivering
            innovative and sustainable building materials.
          </p>

          {/* FEATURES */}
          <div className="space-y-4 mb-6">
            <div className="flex gap-3">
              <span className="text-orange-500 font-bold">✔</span>
              <div>
                <h4 className="font-semibold">Worldwide Services</h4>
                <p className="text-gray-600 text-sm">
                  Delivering concrete solutions across regions.
                </p>
              </div>
            </div>

            <div className="flex gap-3">
              <span className="text-orange-500 font-bold">✔</span>
              <div>
                <h4 className="font-semibold">Best Company Award Winner</h4>
                <p className="text-gray-600 text-sm">
                  Recognized for quality and excellence.
                </p>
              </div>
            </div>
          </div>

          {/* BUTTON */}
          <button className="bg-[#B13F1A] hover:bg-orange-600 text-white px-6 py-3 rounded-md font-semibold transition">
            More About Us
          </button>
        </div>
      </div>
    </section>
  );
};

export default WhoWeAreSection;
