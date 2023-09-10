import Reservation from '../models/Reservation.js';
import { StatusCodes } from 'http-status-codes';
import CustomAPIError from '../errors/customAPIError.js';

const getAllReservations = async (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  try {
    const reservations = await Reservation.find({});
    res
      .status(StatusCodes.OK)
      .json({ reservations, numOfReservations: reservations.length });
  } catch (error) {
    throw new CustomAPIError(
      `Couldn't retrieve reservation list. Try again soon...`,
      StatusCodes.INTERNAL_SERVER_ERROR
    );
  }
};

const getUserReservations = async (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  const { userId } = req.body;
  try {
    if (!userId) {
      throw new CustomAPIError(
        'UserId missing to find reservation',
        StatusCodes.BAD_REQUEST
      );
    }
    const reservations = await Reservation.find({ userId: userId });
    res
      .status(StatusCodes.OK)
      .json({ reservations, numOfReservations: reservations.length });
  } catch (error) {
    throw new CustomAPIError(
      `Couldn't retrieve reservation list. Try again soon...`,
      StatusCodes.INTERNAL_SERVER_ERROR
    );
  }
};

const getBookReservations = async (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  const { bookId } = req.body;
  try {
    if (!bookId) {
      throw new CustomAPIError(
        'UserId missing to find reservation',
        StatusCodes.BAD_REQUEST
      );
    }
    const reservations = await Reservation.find({ bookId: bookId });
    res
      .status(StatusCodes.OK)
      .json({ reservations, numOfReservations: reservations.length });
  } catch (error) {
    throw new CustomAPIError(
      `Couldn't retrieve reservation list. Try again soon...`,
      StatusCodes.INTERNAL_SERVER_ERROR
    );
  }
};

const getReservation = async (req, res) => {
  res.send('get single reservation');
};

const createReservation = async (req, res) => {
  //get all input sent from login page
  const { userId, bookId } = req.body;
  //check all fields are present
  if (!userId || !bookId) {
    throw new CustomAPIError(
      'Id values missing to create reservation',
      StatusCodes.BAD_REQUEST
    );
  }
  // check a reservation with same userId and bookId doesn't already exist
  const reservationExists = await Reservation.findOne({
    userId: userId,
    bookId: bookId,
  });
  if (reservationExists) {
    throw new CustomAPIError(
      'Reservation already exists for this book and user',
      StatusCodes.BAD_REQUEST
    );
  }
  //create date from current date
  const date = new Date();
  //search reservations and find next queue number for given bookId
  //check reservations do exist for bookId or there will be no queue number to find
  const reservationForBookExists = await Reservation.findOne({
    bookId: bookId,
  });
  let maxQueueNumber = 1;
  if (reservationForBookExists) {
    //find max queue number in reservations for given book then add 1 to create next queue
    maxQueueNumber = await Reservation.find({})
      .sort({ queueNumber: -1 })
      .limit(1)
      .then((reservations) => reservations[0].queueNumber);
    maxQueueNumber += 1;
  }
  //add entry
  const reservation = await Reservation.create({
    bookId,
    userId,
    reservationDate: date,
    queueNumber: maxQueueNumber,
  });
  //send back reservation data and token
  res.status(StatusCodes.CREATED).json({
    reservation,
  });
};

const deleteReservation = async (req, res) => {
  res.send('delete single reservation');
};

export {
  getAllReservations,
  getReservation,
  deleteReservation,
  createReservation,
  getBookReservations,
  getUserReservations,
};
