import 'express-async-errors';
import express from 'express';
const app = express();
import dotenv from 'dotenv';
dotenv.config();
import cors from 'cors';

//database and auth
import connectDB from './db/connect.js';

//routes
import authRoutes from './routes/authRoutes.js';
import bookRoutes from './routes/bookRoutes.js';
import reservationRoutes from './routes/reservationRoutes.js';

//middleware imports
import notFound from './middleware/not-found.js';
import ErrorHandler from './middleware/error-handler.js';
import auth from './middleware/auth.js';

//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors(), (req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'http://localhost:3000'); // update to match the domain you will make the request from
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  );
  next();
});

//routes
//routes
app.get('/', (req, res) => {
  res.json({ msg: 'Welcome!' });
});
app.use('/api/v1/auth', authRoutes);
// will use auth soon, want to text first
app.use('/api/v1/books', auth, bookRoutes);
// app.use('api/v1', auth, bookRoutes);
app.use('/api/v1/reservations', auth, reservationRoutes);

//custom middleware
app.use(notFound);
app.use(ErrorHandler);

const port = process.env.PORT || 5000;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URL);
    app.listen(port, () => {
      console.log(`Server is listening on port ${port}`);
    });
  } catch (error) {
    console.log(error);
  }
};

start();
