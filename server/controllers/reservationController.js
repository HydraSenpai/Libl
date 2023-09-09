import Reservation from '../models/Reservation.js';
import { StatusCodes } from 'http-status-codes';
import CustomAPIError from '../errors/customAPIError.js';

const getAllReservations = async (req, res) => {
  res.send('get all reservations');
};

const getReservation = async (req, res) => {
  res.send('get single reservation');
};

const deleteReservation = async (req, res) => {
  res.send('delete single reservation');
};

export { getAllReservations, getReservation, deleteReservation };
