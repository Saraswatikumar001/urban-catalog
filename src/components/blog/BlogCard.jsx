import { Link } from "react-router-dom";
import React from "react";
const BlogCard = ({ blog }) => {
  return (
    <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition overflow-hidden">
      <img
        src={blog.image}
        alt={blog.title}
        className="w-full h-48 object-cover"
      />
      <div className="p-5">
        <p className="text-sm text-gray-500 mb-2">{blog.date}</p>
        <h3 className="text-xl font-semibold text-gray-800 mb-2">
          {blog.title}
        </h3>
        <p className="text-gray-600 text-lg mb-4">
          {blog.excerpt}
        </p>
        <Link to={`/blog/${blog.slug}`}>
          <button className="text-[#BA461C] font-semibold text-lg hover:underline">
            Read More →
          </button>
        </Link>
      </div>
    </div>
  );
};

export default BlogCard;
