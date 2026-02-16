import React, { useState } from "react";

const ProductCard = ({ product, hoverEffect }) => {
  const [active, setActive] = useState(false);
  const handleTap = () => {
    setActive((prev) => !prev);
  };

  return (
    <div
      onClick={handleTap}
      className={`relative overflow-hidden rounded-2xl shadow-xl cursor-pointer ${hoverEffect}`}
    >
      {/* IMAGE */}
      <img
        src={product.image}
        alt={product.name}
        className={`w-full h-[380px] object-cover transition-transform duration-500
          ${active ? "scale-105" : "hover:scale-108"}
        `}
      />
      {/* DARK OVERLAY */}
      <div className="absolute inset-0 bg-black/30" />
      {/* SLIDE-UP CONTENT */}
      <div
        className={`
    absolute bottom-0 left-0 w-full
    bg-white text-center
    overflow-hidden
    transition-all duration-600 ease-in-out
    ${active ? "max-h-[200px] py-6" : "max-h-0 py-0"}
  `}
      >
        <h3 className="text-[#B3421D] text-4xl font-bold mb-2">
          {product.name}
        </h3>
        <p className="text-black text-xl font-semibold">
          {product.price}
        </p>
      </div>
    </div>
  );
};

export default ProductCard;
