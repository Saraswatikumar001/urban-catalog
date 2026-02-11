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

  return (
    <section
      ref={ref}
      className="py-20 bg-gray-50 overflow-hidden"
    >
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
          className={`relative flex justify-center ${isVisible ? "animate-fadeIn" : "opacity-0"
            }`}
        >

          {/* OVERLAY */}
          {activeImg && (
            <div
              onClick={() => setActiveImg(null)}
              className="fixed inset-0 bg-black/80 z-40 cursor-pointer"
            ></div>
          )}

          {/* IMAGE 1 */}
          <img
            src={img1}
            alt="Tiles interior"
            onClick={() => setActiveImg(activeImg === 1 ? null : 1)}
            className={`rounded-xl shadow-lg cursor-zoom-in transition
            w-64 md:w-72 z-10
            ${activeImg === 1
                ? "fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 zoom-center z-50"
                : ""
              }`}
          />

          {/* IMAGE 2 */}
          <img
            src={img2}
            alt="Tiles flooring"
            onClick={() => setActiveImg(activeImg === 2 ? null : 2)}
            className={`rounded-xl shadow-lg cursor-zoom-in transition
            w-48 md:w-56 absolute -top-8 md:-top-10 -right-2 md:-right-6
            ${activeImg === 2
                ? "fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 zoom-rotate z-50"
                : ""
              }`}
          />

          {/* IMAGE 3 */}
          <img
            src={img3}
            alt="Modern tiles"
            onClick={() => setActiveImg(activeImg === 3 ? null : 3)}
            className={`rounded-xl shadow-lg cursor-zoom-in transition
            w-44 md:w-48 absolute -bottom-6 md:-bottom-8 left-0
            ${activeImg === 3
                ? "fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 zoom-lift z-50"
                : ""
              }`}
          />

          {/* CAPTION */}
          {activeImg && (
            <div className="fixed bottom-10 left-1/2 -translate-x-1/2 z-50 text-center px-6">
              <p className="text-white text-sm md:text-base bg-black/60 rounded-lg px-4 py-2">
                {captions[activeImg]}
              </p>
              <p className="text-gray-300 text-xs mt-2">
                Tap anywhere to close
              </p>
            </div>
          )}

          {/* RECTANGLE EXPERIENCE BADGE */}
          <div
            className={`absolute -bottom-10 right-0 hidden md:block
            bg-white border-l-4 border-[#B1441D]
            shadow-2xl rounded-xl px-8 py-6
            ${isVisible ? "animate-slideUp" : "opacity-0"}`}
          >
            <h3 className="text-3xl font-bold text-[#B1441D]">
              15+
            </h3>
            <p className="text-gray-700 font-medium text-sm mt-1">
              Years of Trusted <br /> Service
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
