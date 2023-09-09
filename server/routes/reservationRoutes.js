import express from 'express';
import {
  getAllReservations,
  getReservation,
  deleteReservation,
} from '../controllers/reservationController.js';

const router = express.Router();

router.route('/').get(getAllReservations);
router.route('/:id').get(getReservation);
router.route('/:id').delete(deleteReservation);
export default router;
