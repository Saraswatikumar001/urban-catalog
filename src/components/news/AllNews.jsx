import React from "react";
import newsData from "../../data/newsData1";

const AllNews = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* PAGE TITLE */}
        <h1 className="text-4xl font-bold text-center mb-12">
          All News & Blogs
        </h1>

        {/* GRID → 3 CARDS PER ROW */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {newsData.slice(0, 6).map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition"
            >
              {/* IMAGE */}
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-[220px] object-cover"
              />

              {/* CONTENT */}
              <div className="p-6">
                {/* META */}
                <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                  <span>👤 {item.author}</span>
                  <span>💬 {item.comments}</span>
                </div>

                {/* TITLE */}
                <h3 className="text-xl font-semibold mb-3 text-gray-900">
                  {item.title}
                </h3>

                {/* DESCRIPTION */}
                <p className="text-gray-600">
                  {item.desc}
                </p>

                {/* ❌ NO READ MORE HERE */}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default AllNews;
