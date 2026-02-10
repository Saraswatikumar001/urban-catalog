import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";


const slides = [
  {
    image: "../../src/assets/tiles-1.png",
    title: "TILES & PAVER BLOCKS",
    subtitle:
      "We provide checker katali block, brick guti tiles, polish tiles, and tuff tiles suitable for daily construction use.",
  },
  {
    image: "../../src/assets/tiles-2.png",
    title: "PAVER BLOCK DESIGNS",
    subtitle:
      "Available designs include damru paver block, arch paver block, floral block, and diamond paver blocks.",
  },
  {
    image: "../../src/assets/tiles-3.png",
    title: "OUTDOOR & FLOORING PRODUCTS",
    subtitle:
      "Our products are suitable for flooring, pathways, parking areas, and outdoor construction applications.",
  },
];

const AboutHero = () => {
  const [current, setCurrent] = useState(0);

  // Auto slide
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-[90vh] overflow-hidden">
      {/* Background Images */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${index === current ? "opacity-100" : "opacity-0"
            }`}
        >
          <img
            src={slide.image}
            alt={slide.title}
            className="w-full h-full object-cover"
          />
          {/* Dark overlay */}
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
      ))}

      {/* Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="max-w-7xl mx-auto px-6">
          <div
            key={current}
            className="max-w-xl animate-fadeUp"
          >
            <h1 className="text-white text-4xl md:text-5xl font-bold mb-4 tracking-wide">
              {slides[current].title}
            </h1>

            <p className="text-gray-200 text-lg mb-6">
              {slides[current].subtitle}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutHero;
