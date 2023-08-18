import { getAllBooks, getBook } from '../controllers/bookController.js';
import express from 'express';

const router = express.Router();

router.route('/').get(getAllBooks);
router.route('/:id').get(getBook);

export default router;
