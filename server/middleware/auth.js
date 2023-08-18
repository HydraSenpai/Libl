import { StatusCodes } from 'http-status-codes';
import CustomAPIError from '../errors/customAPIError.js';
import jwt from 'jsonwebtoken';

const auth = async (req, res, next) => {
  const authorization = req.headers.authorization;
  if (!authorization || !authorization.startsWith('Bearer')) {
    throw new CustomAPIError(
      'Authentication Invalid',
      StatusCodes.UNAUTHORIZED
    );
  }
  const token = authorization.split(' ')[1];
  try {
    const payload = jwt.verify(token, process.env.JWT_SECRET);
    req.user = { userId: payload.userId };
    next();
  } catch (error) {
    throw new CustomAPIError(
      'Authentication Invalid',
      StatusCodes.UNAUTHORIZED
    );
  }
};

export default auth;
