import React from "react";
import { useParams } from "react-router-dom";
import blogs from "../../data/blogs";

const BlogDetails = () => {
  const { slug } = useParams();
  const blog = blogs.find((b) => b.slug === slug);

  if (!blog) {
    return (
      <div className="text-center py-20 text-xl">
        Blog not found
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <p className="text-sm text-gray-500 mb-3">{blog.date}</p>

      <h1 className="text-4xl font-bold text-[#BA461C] mb-6">
        {blog.title}
      </h1>

      <img
        src={blog.image}
        alt={blog.title}
        className="w-full rounded-xl mb-8"
      />

      <div className="text-gray-700 text-lg leading-8 whitespace-pre-line">
        {blog.content}
      </div>
    </div>
  );
};

export default BlogDetails;
