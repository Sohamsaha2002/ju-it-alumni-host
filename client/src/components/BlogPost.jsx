import React from 'react';

const BlogPost = ({ blog }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:scale-105">
      <h3 className="text-2xl font-bold mb-2">{blog.title}</h3>
      <p className="text-gray-700 mb-4">{blog.content}</p>
      <p className="text-gray-500 text-sm">By {blog.author}</p>
    </div>
  );
};

export default BlogPost;