const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config(); // Ensure this is at the top

const postRoutes = require('./routes/posts');
const userRoutes = require('./routes/users');
const authenticateToken = require('./middlewares/authenticateToken');

const app = express();

const cors = require("cors");
app.use(cors({ origin: "http://localhost:5173", credentials: true }));

app.use(express.json());

// MongoDB connection
const uri = process.env.MONGODB_URI;

const connectDB = async () => {
  try {
    await mongoose.connect(uri);
    console.log('MongoDB connected');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
    process.exit(1); // Exit the process if MongoDB connection fails
  }
};

connectDB();
// Add a route to handle favicon requests
app.get('/favicon.ico', (req, res) => res.status(200).send());
app.get('/favicon.png', (req, res) => res.status(200).send());

app.get('/', (req, res) => {
  res.send('backend is deployed');
});

// Test route to check MongoDB connection
app.get('/test-db', (req, res) => {
    const token = req.headers['authorization'];

    if (!token) {
        return res.status(401).send('Token missing');
    }

    jwt.verify(token, 'guptt_raaz', (err, decoded) => {
        if (err) {
            return res.status(401).send('Invalid token');
        }

        // Continue with the request processing if token is valid
        res.send('Success: Token is valid');
    });
});



// Use routes
app.use('/api/posts', postRoutes);
app.use('/api/users', userRoutes);

app.get('/protected', authenticateToken, (req, res) => {
  res.send({ message: 'This is a protected route' });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
