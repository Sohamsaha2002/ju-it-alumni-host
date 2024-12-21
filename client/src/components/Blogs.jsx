import React from 'react';

const Blogs = () => {
  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-6 text-center">Blogs</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Blog Card 1 */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold mb-2">Blog Title 1</h3>
            <p className="text-gray-700 mb-4">This is a short description of the blog post. More details will be added later.</p>
            <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition duration-300">
              Read More
            </button>
          </div>
          {/* Blog Card 2 */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold mb-2">Blog Title 2</h3>
            <p className="text-gray-700 mb-4">This is a short description of the blog post. More details will be added later.</p>
            <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition duration-300">
              Read More
            </button>
          </div>
          {/* Blog Card 3 */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold mb-2">Blog Title 3</h3>
            <p className="text-gray-700 mb-4">This is a short description of the blog post. More details will be added later.</p>
            <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition duration-300">
              Read More
            </button>
          </div>
          {/* Add more blog cards as needed */}
        </div>
      </div>
    </div>
  );
};

export default Blogs;