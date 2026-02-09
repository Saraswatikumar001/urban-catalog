import React from "react";
import heroImg from "../../assets/hero.png";

const HeroSection = () => {
  return (
    <section
      className="relative pt-24 min-h-[80vh] md:min-h-[90vh] flex items-center text-white pb-40 md:pb-0"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1503387762-592deb58ef4e')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/70"></div>
      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">        
        {/* LEFT CONTENT */}
        <div className="flex flex-col justify-center text-center md:text-left">
          <div className="border-l-4 border-orange-500 pl-4 mb-4 md:pl-4 md:border-l-4 border-l-0 md:border-orange-500">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
              Urban Mix Concrete <br />
              Building Strong Foundations
            </h1>
          </div>

          <p className="text-gray-300 max-w-lg mt-3 mx-auto md:mx-0">
            We manufacture premium quality paver blocks, tiles and construction
            materials with modern technology to build durable and beautiful spaces.
          </p>

          <button className="mt-6 mx-auto md:mx-0 w-fit bg-orange-500 hover:bg-orange-600 px-6 py-3 rounded font-medium">
            Explore Products
          </button>
        </div>

        {/* RIGHT IMAGE AREA (HIDE ON SMALL SCREENS) */}
        <div className="relative hidden md:flex justify-center items-center">
          <div className="absolute w-80 h-80 bg-orange-500 rounded-full blur-3xl opacity-40"></div>
          <div className="absolute w-72 h-72 bg-orange-500 rounded-full"></div>
          <img
            src={heroImg}
            alt="Worker"
            className="relative w-72 md:w-80 object-contain drop-shadow-xl"
          />
        </div>
      </div>

      {/* FEATURE CARDS */}
      <div className="absolute -bottom-20 left-0 right-0 hidden md:block">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-6">
          <div className="bg-white text-black p-8 rounded shadow">
            <h3 className="font-semibold text-2xl">Quality Materials</h3>
            <p className="text-gray-600 text-lg mt-2">
              Strong & long-lasting construction products.
            </p>
          </div>

          <div className="bg-white text-black p-8 rounded shadow">
            <h3 className="font-semibold text-2xl">Modern Manufacturing</h3>
            <p className="text-gray-600 text-lg mt-2">
              Advanced machines & skilled workforce.
            </p>
          </div>

          <div className="bg-white text-black p-8 rounded shadow">
            <h3 className="font-semibold text-2xl">Affordable Pricing</h3>
            <p className="text-gray-600 text-lg mt-2">
              Best quality at competitive rates.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
