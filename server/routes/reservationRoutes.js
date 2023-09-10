import express from 'express';
import {
  getAllReservations,
  getReservation,
  deleteReservation,
  createReservation,
  getBookReservations,
  getUserReservations,
  getNumberReservations,
} from '../controllers/reservationController.js';

const router = express.Router();

router.route('/').get(getAllReservations).post(createReservation);
router.route('/:id').get(getReservation).delete(deleteReservation);
router.route('/user/:id').get(getUserReservations);
router.route('/book/:id').get(getBookReservations);
router.route('/reservations/:id').get(getNumberReservations);
export default router;
