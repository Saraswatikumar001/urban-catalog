import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import products from "../../data/products";
import ProductCard from "../ProductCard";

const PurposeGoals = () => {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const navigate = useNavigate();

  const filteredProducts = products.filter((item) => {
    const matchName = item.name
      .toLowerCase()
      .includes(search.toLowerCase());
    const matchCategory =
      category === "All" || item.category === category;
    return matchName && matchCategory;
  });

  const displayedProducts = filteredProducts.slice(0, 6);

  return (
    <section className="px-6 py-16 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* TITLE */}
        <h1 className="text-[#BA461C] text-5xl font-bold text-center mb-6 uppercase">
          Our Products
        </h1>
        <p className="text-gray-600 text-center max-w-2xl mx-auto mb-10">
          We provide tiles, paver blocks, and concrete products suitable for
          residential, commercial, and outdoor construction use.
        </p>
        {/* SEARCH */}
        <div className="max-w-md mx-auto mb-8">
          <input
            type="text"
            placeholder="Search product..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full border border-gray-300 rounded-lg px-4 py-3"
          />
        </div>

        {/* CATEGORY FILTER */}
        <div className="flex justify-center gap-4 mb-12 flex-wrap">
          {["All", "Tiles", "Blocks", "Pavers"].map((cat) => (
            <button
              key={cat}
              onClick={() => setCategory(cat)}
              className={`px-5 py-2 rounded-full border transition
                ${
                  category === cat
                    ? "bg-[#BA461C] text-white border-[#BA461C]"
                    : "bg-gray-100 hover:bg-gray-200"
                }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* PRODUCTS GRID (ONLY 6) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {displayedProducts.map((item) => (
            <ProductCard key={item.id} product={item} />
          ))}
        </div>

        {/* EXPLORE MORE BUTTON */}
        <div className="flex justify-center mt-14">
          <button
            onClick={() => navigate("/products")}
            className="px-8 py-4 rounded-full
                       bg-[#BA461C] text-white font-semibold
                       hover:bg-[#a53c18] transition"
          >
            Explore More Products →
          </button>
        </div>

      </div>
    </section>
  );
};

export default PurposeGoals;
