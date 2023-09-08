import Book from '../models/Book.js';
import { StatusCodes } from 'http-status-codes';
import CustomAPIError from '../errors/customAPIError.js';

const getAllBooks = async (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
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
  res.setHeader('Access-Control-Allow-Origin', '*');
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

const addUserToReserve = async (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  console.log('trying to set user in book');
  try {
    const bookId = req.params.id;
    const book = await Book.findById(bookId);

    if (!book) {
      throw new CustomAPIError(
        `Couldn't retrieve book. Try again soon...`,
        StatusCodes.NOT_FOUND
      );
    }

    const reservedList = book.reservedList;
    const userId = req.body.id;

    // checks user hasn't already reserved/borrowed the book
    for (let x = 0; x < reservedList.length; x++) {
      if (reservedList[x] === userId) {
        throw new CustomAPIError(
          'You are already added to this waiting list...',
          StatusCodes.BAD_REQUEST
        );
      }
    }

    book.reservedList = [...reservedList, req.body.userId];

    const updatedBook = await book.save();

    res.status(StatusCodes.OK).json({ updatedBook });
  } catch (error) {
    throw new CustomAPIError(
      `Couldn't retrieve book. Try again soon...`,
      StatusCodes.INTERNAL_SERVER_ERROR
    );
  }
};

export { getAllBooks, getBook, addUserToReserve };
