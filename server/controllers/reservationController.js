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
  const userId = req.params.id;
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
  const bookId = req.params.id;
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

const getNumberReservations = async (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  const bookId = req.params.id;
  try {
    if (!bookId) {
      throw new CustomAPIError(
        'UserId missing to find reservation',
        StatusCodes.BAD_REQUEST
      );
    }
    const reservations = await Reservation.find({ bookId: bookId });
    res.status(StatusCodes.OK).json({ numOfReservations: reservations.length });
  } catch (error) {
    throw new CustomAPIError(
      `Couldn't retrieve reservation list. Try again soon...`,
      StatusCodes.INTERNAL_SERVER_ERROR
    );
  }
};

const getReservation = async (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  const reservationId = req.params.id;
  try {
    if (!reservationId) {
      throw new CustomAPIError(
        'ReservationId missing to find reservation',
        StatusCodes.BAD_REQUEST
      );
    }
    const reservation = await Reservation.find({ _id: reservationId });
    res.status(StatusCodes.OK).json({ reservation });
  } catch (error) {
    throw new CustomAPIError(
      `Couldn't retrieve reservation list. Try again soon...`,
      StatusCodes.INTERNAL_SERVER_ERROR
    );
  }
};

const createReservation = async (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  //get all input sent from login page
  const { userId, bookId } = req.body;
  try {
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
  } catch (error) {
    throw new CustomAPIError(
      `Couldn't create reservation. Try again soon...`,
      StatusCodes.INTERNAL_SERVER_ERROR
    );
  }
};

const deleteReservation = async (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  try {
    const deletedReservation = await Reservation.findOneAndDelete({
      _id: req.params.id,
    });
    if (!deletedReservation) {
      throw new CustomAPIError(
        `No reservation with id ${req.params.id}`,
        StatusCodes.NOT_FOUND
      );
    }
    console.log(deletedReservation);
    res.status(StatusCodes.OK).json({ msg: 'Success! Reservation deleted' });
  } catch (error) {
    throw new CustomAPIError(
      `Couldn't delete reservation. Try again soon...`,
      StatusCodes.INTERNAL_SERVER_ERROR
    );
  }
};

export {
  getAllReservations,
  getReservation,
  deleteReservation,
  createReservation,
  getBookReservations,
  getUserReservations,
  getNumberReservations,
};
