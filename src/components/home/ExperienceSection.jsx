import React, { useState } from "react";
import img1 from "../../assets/tiles-1.png";
import img2 from "../../assets/product21.png";
import img3 from "../../assets/product5.png";
import { Link } from "react-router-dom";
import useInViewAnimation from "../../hooks/useInViewAnimation";

const ExperienceSection = () => {
  const { ref, isVisible } = useInViewAnimation();
  const [activeImg, setActiveImg] = useState(null);

  const captions = {
    1: "Affordable floor tiles for everyday living spaces",
    2: "Budget-friendly kitchen wall tiles with simple design",
    3: "Durable and economical tiles for practical interiors",
  };

  const images = [
    { id: 1, src: img1, style: "w-64 md:w-72 z-10" },
    {
      id: 2,
      src: img2,
      style:
        "w-48 md:w-56 absolute -top-8 md:-top-10 -right-2 md:-right-6",
    },
    {
      id: 3,
      src: img3,
      style:
        "w-44 md:w-48 absolute -bottom-6 md:-bottom-8 left-0",
    },
  ];

  return (
    <section ref={ref} className="py-24 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">

        {/* LEFT CONTENT */}
        <div className={isVisible ? "animate-slideUp" : "opacity-0"}>
          <span className="text-[#B1441D] font-semibold uppercase tracking-wide">
            About Our Tiles
          </span>

          <h2 className="text-3xl md:text-4xl font-bold mt-3 leading-tight">
            Affordable Tiles for <br /> Home & Outdoor Use
          </h2>

          <p className="text-gray-600 mt-5 max-w-xl font-medium">
            We supply normal quality tiles designed for everyday flooring
            and construction needs at an affordable price.
          </p>

          <div className="mt-8 space-y-5 text-lg">
            {[
              "Simple and practical designs",
              "Reliable strength for daily use",
              "Suitable for indoor & outdoor areas",
            ].map((text, i) => (
              <div key={i} className="flex items-start gap-4">
                <div className="w-10 h-10 flex items-center justify-center rounded-full bg-orange-100 text-[#B1441D]">
                  ✔
                </div>
                <p className="text-gray-700">{text}</p>
              </div>
            ))}
          </div>

          <Link to="/products">
            <button className="mt-10 bg-[#B1441D] hover:bg-[#B33F18] text-white px-8 py-3 rounded-md transition">
              Explore Tile Collection
            </button>
          </Link>
        </div>

        {/* RIGHT IMAGE COLLAGE */}
        <div
          className={`relative flex justify-center ${
            isVisible ? "animate-fadeIn" : "opacity-0"
          }`}
        >
          {/* IMAGES */}
          {images.map((img) => (
            <img
              key={img.id}
              src={img.src}
              alt="Tile preview"
              onClick={() => setActiveImg(img.id)}
              className={`rounded-xl shadow-lg cursor-zoom-in transition-transform duration-300 hover:scale-105 ${img.style}`}
            />
          ))}
        </div>
      </div>

      {/* FULL SCREEN MODAL */}
      {activeImg && (
        <div
          onClick={() => setActiveImg(null)}
          className="fixed inset-0 z-50 bg-black/70 flex flex-col items-center justify-center px-6"
        >
          <img
            src={images.find((i) => i.id === activeImg).src}
            alt="Zoomed tile"
            className="max-w-[90%] max-h-[80vh] rounded-xl shadow-2xl animate-zoomIn"
          />

          <p className="mt-6 text-white text-center bg-black/50 px-4 py-2 rounded-lg">
            {captions[activeImg]}
          </p>

          <span className="mt-2 text-gray-300 text-xs">
            Tap anywhere to close
          </span>
        </div>
      )}
    </section>
  );
};

export default ExperienceSection;