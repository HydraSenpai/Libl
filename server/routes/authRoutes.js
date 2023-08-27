import express from 'express'
import auth from '../middleware/auth.js'
import {
  register,
  login,
  updateUser,
  addToReservedList,
} from '../controllers/authController.js'

const router = express.Router()

router.route('/register').post(register)
router.route('/login').post(login)
router.route('/update').patch(auth, updateUser)
router.route('/:id').put(addToReservedList)

export default router
