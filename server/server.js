import express from 'express';
const app = express();
import dotenv from 'dotenv';
dotenv.config();

//database and auth
import connectDB from './db/connect.js';

//middleware
app.use(express.json());

//routes
//routes
app.get('/', (req, res) => {
  res.json({ msg: 'Welcome!' });
});

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
