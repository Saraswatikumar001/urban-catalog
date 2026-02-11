import ProductCard from "../components/ProductCard";
import products from "../data/products";
import React, { useState } from "react";

const Products = () => {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  const filteredProducts = products.filter((item) => {
    const matchName = item.name
      .toLowerCase()
      .includes(search.toLowerCase());
    const matchCategory =
      category === "All" || item.category === category;
    return matchName && matchCategory;
  });

  return (
    <div className="px-6 py-10">
      <h1 className="text-[#BA461C] text-4xl font-bold text-center mb-6 uppercase">
        Our Products
      </h1>

      {/* SEARCH */}
      <div className="max-w-md mx-auto mb-10">
        <input
          type="text"
          placeholder="Search product..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full border border-gray-300 rounded-lg px-4 py-2"
        />
      </div>

      {/* CATEGORY */}
      <div className="flex justify-center gap-4 mb-8 flex-wrap">
        <button onClick={() => setCategory("All")} className="px-4 py-2 rounded-lg bg-gray-200">All</button>
        <button onClick={() => setCategory("Tiles")} className="px-4 py-2 rounded-lg bg-gray-200">Tiles</button>
        <button onClick={() => setCategory("Blocks")} className="px-4 py-2 rounded-lg bg-gray-200">Blocks</button>
        <button onClick={() => setCategory("Pavers")} className="px-4 py-2 rounded-lg bg-gray-200">Pavers</button>
      </div>

      {/* PRODUCTS */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {filteredProducts.map((item) => (
          <ProductCard key={item.id} product={item} />
        ))}
      </div>

    </div>
  );
};

export default Products;
