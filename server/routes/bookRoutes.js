import {
  getAllBooks,
  getBook,
  addUserToReserve,
} from '../controllers/bookController.js'
import express from 'express'

const router = express.Router()

router.route('/').get(getAllBooks)
router.route('/:id').get(getBook)
router.route('/:id').put(addUserToReserve)
export default router
