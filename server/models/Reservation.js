import mongoose from 'mongoose';

const ReservationSchema = mongoose.Schema({
  bookId: {
    type: mongoose.Types.ObjectId,
    ref: 'Book',
    required: [true, 'Please provide book'],
  },
  userId: {
    type: mongoose.Types.ObjectId,
    ref: 'User',
    required: [true, 'Please provide user'],
  },
  reservationDate: {
    type: Date,
  },
  queueNumber: {
    type: Number,
  },
});

export default mongoose.model('Reservation', ReservationSchema);
