const express = require('express');
const router = express.Router();
const Blog = require('../models/Blog');
const jwt = require('jsonwebtoken');
const { SECRET_KEY } = process.env;

// Middleware to verify token
const verifyToken = (req, res, next) => {
  const token = req.headers.authorization.split(' ')[1];
  if (!token) {
    return res.status(401).send({ message: 'Unauthorized' });
  }
  try {
    const decoded = jwt.verify(token, SECRET_KEY);
    req.user = decoded;
    next();
  } catch (error) {
    res.status(401).send({ message: 'Unauthorized' });
  }
};

// Get all blogs
router.get('/', async (req, res) => {
  try {
    const blogs = await Blog.find().sort({ createdAt: -1 });
    res.json(blogs);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Create a new blog
router.post('/', verifyToken, async (req, res) => {
  const { title, content } = req.body;
  const blog = new Blog({
    title,
    content,
    author: req.user.name
  });

  try {
    const newBlog = await blog.save();
    res.status(201).json(newBlog);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;