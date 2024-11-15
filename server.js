const express = require('express');
const cors = require('cors');
const connectDB = require('./db');
const postRoutes = require('./routes/posts'); // Ensure this exports an Express router
const userRoutes = require('./routes/users'); // Ensure this exports an Express router
const authenticateToken = require('./middlewares/authenticateToken'); // Ensure this exports a middleware function

const app = express();

// const commentRoutes = require('./routes/comments'); // Adjust the path if needed

// Middleware to handle JSON data from the frontend
app.use(cors()); // Enable CORS for cross-origin requests
app.use(express.json());

// Connect to the database
connectDB();

// Use routes
app.use('/api/posts', postRoutes); // For post-related routes
app.use('/api/users', userRoutes); // For user-related routes
// app.use('/api/comments', commentRoutes); // Prefix the routes with '/api/comments'

// Protected route example (requires authentication)
app.get('/protected', authenticateToken, (req, res) => {
  res.send({ message: 'This is a protected route' });
});

// Start the server
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});



// abc:
// {
//   "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NzMyMWZmYjY2NzhjYWY5YjA3NTdmZWQiLCJpYXQiOjE3MzEzMzgyNDcsImV4cCI6MTczMTUxMTA0N30.LXvjZeG1P2xi-C8bpE4lBgX-eLPNcbJHPvqWHgL_SWs"
// }