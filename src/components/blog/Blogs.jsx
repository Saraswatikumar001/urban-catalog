import React from "react";
import BlogCard from "../../components/blog/BlogCard";
import blogs from "../../data/blogs";

const Blogs = () => {
  return (
    <div className="px-6 py-12">
      <h1 className="text-[#BA461C] text-4xl font-bold text-center mb-10 uppercase">
        Our Blogs
      </h1>
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogs.map((blog) => (
          <BlogCard key={blog.id} blog={blog} />
        ))}
      </div>
    </div>
  );
};

export default Blogs;
