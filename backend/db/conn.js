const express = require("express");
const app = express();
const mongoose = require('mongoose');

async function connectToMongoDB() {
  try {
    // Connect to the MongoDB server
    await mongoose.connect('mongodb://127.0.0.1:27017/BankingSystem', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Connected to MongoDB');
  } catch (error) {
    console.log('Error connecting to MongoDB:', error);
  }
}

// Call the function to establish the connection
connectToMongoDB();
