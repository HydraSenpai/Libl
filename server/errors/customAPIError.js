import { StatusCodes } from 'http-status-codes';

class CustomAPIError extends Error {
  constructor(message, statusCode) {
    super(message);
    this.statusCode = statusCode || StatusCodes.INTERNAL_SERVER_ERROR;
  }
}

export default CustomAPIError;
