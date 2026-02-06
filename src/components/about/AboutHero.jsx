import React from "react";

const AboutHero = () => {
  return (
    <div className="w-full">
      {/* HERO SECTION */}
      <section
        className="relative w-full h-[80vh] bg-cover bg-center flex items-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1503387762-592deb58ef4e')",
        }}
      >
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/70"></div>
        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">

          {/* LEFT CONTENT */}
          <div className="text-white">
            <p className="text-orange-500 font-semibold uppercase mb-3">
              About Our Company
            </p>

            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-5">
              Building Strong Foundations <br />
              That Last Forever
            </h1>

            <p className="text-gray-300 mb-6 max-w-lg">
              We provide high-quality concrete solutions that combine
              strength, durability, and reliability for modern construction
              projects.
            </p>

            <div className="flex gap-4">
              <button className="bg-[#B13F1A]  hover:bg-orange-600 text-white px-6 py-3 rounded-md font-semibold transition">
                Our Services
              </button>

              <button className="border border-white px-6 py-3 rounded-md font-semibold hover:bg-white hover:text-black transition">
                Contact Us
              </button>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="hidden md:block">
            <img
              src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c"
              alt="Worker"
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* ABOUT CONTENT */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          {/* LEFT IMAGE */}
          <div>
            <img
              src="https://images.unsplash.com/photo-1503387762-592deb58ef4e"
              alt="Urban Mix Concrete Plant"
              className="rounded-lg shadow-lg"
            />
          </div>

          {/* RIGHT CONTENT */}
          <div>
            <p className="text-[#B13F1A] font-semibold uppercase mb-2">
              Who We Are
            </p>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Urban Mix Concrete – Building Strength for Tomorrow
            </h2>
            <p className="text-gray-600 mb-4">
              Urban Mix Concrete is a leading provider of premium ready-mix concrete
              solutions, committed to delivering consistent quality, reliability,
              and performance for every construction project.
            </p>
            <p className="text-gray-600 mb-6">
              With modern batching plants, skilled professionals, and advanced
              technology, we ensure timely delivery and superior concrete that meets
              the highest industry standards.
            </p>
            {/* FEATURES */}
            <div className="space-y-3 mb-6">
              <div className="flex items-center gap-3">
                <span className="text-orange-500 font-bold">✔</span>
                <p className="text-gray-700">High-quality raw materials</p>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-orange-500 font-bold">✔</span>
                <p className="text-gray-700">On-time delivery assurance</p>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-orange-500 font-bold">✔</span>
                <p className="text-gray-700">Custom concrete mix designs</p>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-orange-500 font-bold">✔</span>
                <p className="text-gray-700">Experienced technical team</p>
              </div>
            </div>
            {/* BUTTON */}
            <button className="bg-[#B13F1A] hover:bg-orange-600 text-white px-6 py-3 rounded-md font-semibold transition">
              Learn More About Us
            </button>

          </div>

        </div>
      </section>


    </div>
  );
};

export default AboutHero;
