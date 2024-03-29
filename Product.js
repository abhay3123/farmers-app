// models/Book.js

const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
  title: {
    type: String,
    // required: true
  },
  isbn: {
    type: String,
    // required: true
  },
  author: {
    type: String,
    // required: true
  },
  description: {
    type: String
  },
  published_date: {
    type: Date
  },
  publisher: {
    type: String
  },
  updated_date: {
    type: Date,
    default: Date.now
  },
  photo:
  { 
    type: String
  }
});

module.exports = Book = mongoose.model('book', ProductSchema);