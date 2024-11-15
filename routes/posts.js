const express = require('express');
const Post = require('../models/Post');
const jwt = require('jsonwebtoken');
const router = express.Router();


// Get all posts (public route)
router.get('/', async (req, res) => {
  try {
    const posts = await Post.find(); // Fetch all posts from DB
    res.status(200).json(posts); // Return posts as JSON response
  } catch (error) {
    res.status(400).json({ error: 'Failed to fetch posts' });
  }
});

// Create a new post (protected route)
router.post('/', async (req, res) => {
  try {
    const { title, content, author } = req.body;
    const newPost = new Post({ title, content, author });
    await newPost.save();
    res.status(201).json(newPost);
  } catch (error) {
    res.status(400).json({ error: 'Failed to create post' });
  }
});


module.exports = router;
