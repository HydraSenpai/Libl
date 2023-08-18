import User from '../models/User.js';
import { StatusCodes } from 'http-status-codes';
import CustomAPIError from '../errors/customAPIError.js';

const register = async (req, res) => {
  //get all input sent from login page
  const { name, email, password } = req.body;
  //check all fields are present
  if (!name || !email || !password) {
    throw new CustomAPIError(
      'Please provide all register details',
      StatusCodes.BAD_REQUEST
    );
  }
  //email has to be unique so check if email is already in database
  const userAlreadyExists = await User.findOne({ email });
  if (userAlreadyExists) {
    throw new CustomAPIError(
      'This email is already in use',
      StatusCodes.BAD_REQUEST
    );
  }
  //submit user info to database
  const user = await User.create({ name, email, password });
  const token = user.createJWT();
  //send back user data and token
  res.status(StatusCodes.CREATED).json({
    user: {
      name: user.name,
      email: user.email,
    },
    token,
  });
};

const login = async (req, res) => {
  res.send('login');
};

export { register, login };
