import React from "react";
import { Link } from "react-router-dom";
import img1 from "../../assets/news1.jpg";
import img2 from "../../assets/news2.jpg";
import img3 from "../../assets/news3.jpg";
import newsData from "../../data/newsData";



const LatestNews = () => {
  return (
    <section className="md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="flex items-center justify-between mb-10">
          <div>
            <p className="text-orange-500 font-semibold uppercase">
              Our Blog
            </p>
            <h2 className="text-4xl font-bold text-gray-900 mt-2">
              Our Latest News
            </h2>
          </div>

          <Link to="/news" className="hidden md:flex items-center gap-2 px-6 py-3 rounded-full border text-gray-700 hover:bg-gray-100 transition">
            View All →
          </Link>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {newsData.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition"
            >
              {/* Image */}
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-[220px] object-cover"
              />

              {/* Content */}
              <div className="p-6">
                {/* Meta */}
                <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                  <span>👤 {item.author}</span>
                  <span>💬 {item.comments}</span>
                </div>

                {/* Title */}
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 mb-4">
                  {item.desc}
                </p>

                {/* ✅ READ MORE (WORKING) */}
                <Link
                  to={`/news/${item.slug}`}
                  className="text-blue-600 font-semibold hover:underline flex items-center gap-1"
                >
                  READ MORE →
                </Link>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default LatestNews;
