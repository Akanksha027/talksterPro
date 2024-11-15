const mongoose = require('mongoose');

const mongoURI = 'mongodb://localhost:27017/blogDB';
const connectDB = async() => {
  try{
    await mongoose.connect(mongoURI, {});
    console.log("MongoDB connected");
  } catch (err) {
    console.error('MongoDB connection error:' , err);
    process.getMaxListeners(1);
  }
};

module.exports = connectDB;