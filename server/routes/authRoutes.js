import express from 'express';
import auth from '../middleware/auth.js';
import {
  register,
  login,
  updateUser,
  addToBorrowedList,
  addToWaitingList,
} from '../controllers/authController.js';

const router = express.Router();

router.route('/register').post(register);
router.route('/login').post(login);
router.route('/update').patch(auth, updateUser);
router.route('/borrow/:id').patch(auth, addToBorrowedList);
router.route('/wait/:id').patch(auth, addToWaitingList);

export default router;
