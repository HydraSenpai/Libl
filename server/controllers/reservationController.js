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

const getReservation = async (req, res) => {
  res.send('get single reservation');
};

const createReservation = async (req, res) => {
  res.send('create single reservation');
};

const deleteReservation = async (req, res) => {
  res.send('delete single reservation');
};

export {
  getAllReservations,
  getReservation,
  deleteReservation,
  createReservation,
};
