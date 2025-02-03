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
    <div className="p-6 bg-gray-100 min-h-screen">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-6 text-center">Blogs</h2>
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