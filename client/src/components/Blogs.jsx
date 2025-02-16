import React, { useState, useEffect } from 'react';
import CreateBlog from './CreateBlog';
import BlogPost from './BlogPost';

const Blogs = ({ user }) => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/blogs');
        if (!response.ok) {
          throw new Error('Failed to fetch blogs');
        }
        const data = await response.json();
        setBlogs(data);
      } catch (error) {
        console.error(error.message);
      }
    };

    fetchBlogs();
  }, []);

  const addBlog = async (newBlog) => {
    try {
      const response = await fetch('http://localhost:5000/api/blogs', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        },
        body: JSON.stringify(newBlog)
      });
      if (!response.ok) {
        throw new Error('Failed to add blog');
      }
      const data = await response.json();
      setBlogs([data, ...blogs]);
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="bg-cover bg-center h-40" style={{ backgroundImage: "url('/path/to/your/background-image.jpg')" }}>
        <div className="flex items-center justify-center h-full bg-black bg-opacity-50">
          <h1 className="text-4xl font-bold text-white">Welcome to Our Blogs</h1>
        </div>
      </div>
      <div className="container mx-auto p-6">
        {user && <CreateBlog addBlog={addBlog} />}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
          {blogs.map((blog) => (
            <BlogPost key={blog._id} blog={blog} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blogs;