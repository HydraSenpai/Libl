import User from '../models/User.js';
import { StatusCodes } from 'http-status-codes';

const register = async (req, res) => {
  res.send('register');
};

const login = async (req, res) => {
  res.send('login');
};

export { register, login };
