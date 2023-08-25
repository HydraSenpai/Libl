import mongoose from 'mongoose'

const BookSchema = mongoose.Schema({
  bookTitle: {
    type: String,
    required: [true, 'Please provide a book title'],
    minLength: 1,
    maxLength: 200,
    trim: true,
  },
  author: {
    type: String,
    required: [true, 'Please provide an author'],
    maxLength: 100,
  },
  bookDescription: {
    type: String,
    maxLength: 700,
  },
  bookReleaseDate: {
    type: Date,
  },
  isbn: {
    type: String,
    minLength: 10,
    maxLength: 13,
  },
  audience: {
    type: String,
    enum: ['adults', 'teens', 'children', 'all'],
    default: 'all',
  },
  language: {
    type: String,
    default: 'english',
    maxLength: 50,
  },
  genre: {
    type: String,
    maxLength: 100,
  },
  availability: {
    type: String,
    enum: ['available', 'onloan', 'nocopies'],
  },
  cover: {
    type: String,
  },
  url: {
    type: String,
  },
  rating: {
    type: Number,
  },
  timesReserved: {
    type: Number,
  },
  reservedList: {
    type: Array,
    default: [],
  },
})

export default mongoose.model('Book', BookSchema)
