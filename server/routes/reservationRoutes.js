import express from 'express';
import {
  getAllReservations,
  getReservation,
  deleteReservation,
  createReservation,
} from '../controllers/reservationController.js';

const router = express.Router();

router.route('/').get(getAllReservations).post(createReservation);
router.route('/:id').get(getReservation).delete(deleteReservation);
export default router;
