import React, { useState } from "react";

const ProductCard = ({ product, hoverEffect }) => {
  const [active, setActive] = useState(false);

  const handleTap = (e) => {
    // Mobile tap behavior
    if (window.innerWidth < 768) {
      e.preventDefault();
      setActive((prev) => !prev);
    }
  };

  return (
    <div
      onClick={handleTap}
      className={`group relative overflow-hidden rounded-2xl shadow-xl cursor-pointer ${hoverEffect}`}
    >
      {/* IMAGE */}
      <img
        src={product.image}
        alt={product.name}
        className={`w-full h-[380px] object-cover transition-transform duration-500
          ${active ? "scale-110" : "group-hover:scale-110"}
        `}
      />

      {/* OVERLAY */}
      <div
        className={`
          absolute inset-0
          bg-black/60
          flex items-center justify-center text-center
          transition-all duration-300
          ${active ? "opacity-100" : "opacity-0 group-hover:opacity-100"}
        `}
      >
        <div>
          <h3 className="text-white text-2xl font-bold mb-2">
            {product.name}
          </h3>
          <p className="text-[#F5BA78] text-xl font-semibold">
            {product.price}
          </p>
          <p className="text-gray-300 text-sm mt-2 md:hidden">
            Tap again to close
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;