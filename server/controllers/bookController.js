import Book from '../models/Book.js';
import { StatusCodes } from 'http-status-codes';
import CustomAPIError from '../errors/customAPIError.js';

const getAllBooks = async (req, res) => {
  try {
    const books = await Book.find({});
    res.status(StatusCodes.OK).json({ books, numOfBooks: books.length });
  } catch (error) {
    throw new CustomAPIError(
      `Couldn't retrieve book list. Try again soon...`,
      StatusCodes.INTERNAL_SERVER_ERROR
    );
  }
};

const getBook = async (req, res) => {
  try {
    const id = req.params.id;
    const book = await Book.findById(id);
    if (!book) {
      throw new CustomAPIError(
        `Couldn't retrieve book. Try again soon...`,
        StatusCodes.NOT_FOUND
      );
    }
    res.status(StatusCodes.OK).json({ book });
  } catch (error) {
    throw new CustomAPIError(
      `Couldn't retrieve book. Try again soon...`,
      StatusCodes.INTERNAL_SERVER_ERROR
    );
  }
};

export { getAllBooks, getBook };