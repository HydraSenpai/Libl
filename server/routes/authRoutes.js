import express from 'express';
import auth from '../middleware/auth.js';
import { register, login, updateUser } from '../controllers/authController.js';

const router = express.Router();

router.route('/register').post(register);
router.route('/login').post(login);
router.route('/update').patch(auth, updateUser);

export default router;
