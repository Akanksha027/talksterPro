// const express = require('express');
// const Comment = require('../models/Comment');
// const Post = require('../models/Post');
// const authenticateToken = require('../middlewares/authenticateToken');

// const router = express.Router();

// // GET all comments for a specific post
// router.get('/:postId', async (req, res) => {
//   try {
//     const comments = await Comment.find({ postId: req.params.postId })
//       .populate('author', 'username');
//     res.status(200).json(comments);
//   } catch (error) {
//     res.status(400).json({ error: 'Failed to fetch comments' });
//   }
// });

// // Post a new comment on a specific post
// router.post('/:postId', authenticateToken, async (req, res) => {
//   // Check if the post exists
//   const post = await Post.findById(req.params.postId);
//   if (!post) {
//     return res.status(404).json({ error: 'Post not found' });
//   }

//   // Log the authenticated user
//   console.log("Authenticated User:", req.user); // Log the user object
  
//   const { content } = req.body;
//   if (!content) {
//     return res.status(400).json({ error: 'Comment content is required' });
//   }

//   try {
//     const newComment = new Comment({
//       content,
//       postId: req.params.postId,
//       author: req.user.userId, // Ensure this is correct, based on how your JWT stores the userId
//     });

//     await newComment.save();
//     res.status(201).json(newComment);
//   } catch (error) {
//     console.error("Error while creating comment:", error); // Log the error for debugging
//     res.status(500).json({ error: 'Internal server error' });
//   }
// });

// module.exports = router;
