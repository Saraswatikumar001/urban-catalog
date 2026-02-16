import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import products from "../../data/products";
import ProductCard from "../ProductCard";

/*
 Equivalent hover effects:
 imghvr-fold-right      → hvr-sweep-to-right
 imghvr-zoom-in         → hvr-grow
 imghvr-fold-left       → hvr-sweep-to-left
 imghvr-zoom-out-left   → hvr-shrink
 imghvr-flip-horiz      → hvr-flip-horizontal 
 imghvr-flip-vert       → hvr-flip-vertical
*/

const hoverEffects = [
  "hvr-sweep-to-right",
  "hvr-grow",
  "hvr-sweep-to-left",
  "hvr-shrink",
  "hvr-flip-horizontal",
  "hvr-flip-vertical",
];

const PurposeGoals = () => {
  const navigate = useNavigate();
  const [activeCard, setActiveCard] = useState(null);

  return (
    <div className="py-16 sm:py-24 w-full px-4 sm:px-6 lg:px-0">
      <h1 className="text-[#BA461C] text-2xl sm:text-4xl font-bold text-center mb-8 sm:mb-10 uppercase">
        Our Products
      </h1>

      {/* PRODUCTS GRID */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-10">
        {products.slice(0, 6).map((item, index) => (
          <ProductCard
            key={item.id}
            product={item}
            hoverEffect={hoverEffects[index % hoverEffects.length]}
            isActive={activeCard === item.id}
            onClick={() =>
              setActiveCard(activeCard === item.id ? null : item.id)
            }
          />
        ))}
      </div>    
      {/* EXPLORE MORE */}
      <div className="flex justify-center mt-10 sm:mt-14">
        <button
          onClick={() => navigate("/products")}
          className="px-6 sm:px-8 py-3 sm:py-4 rounded-full bg-[#BA461C] text-white font-semibold hover:bg-[#a53c18] transition"
        >
          Explore More Products →
        </button>
      </div>
    </div>
  );
};

export default PurposeGoals;
