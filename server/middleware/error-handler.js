import { StatusCodes } from 'http-status-codes';

const errorHandlerMiddleWare = (err, req, res, next) => {
  console.log(err);
  const defaultError = {
    statusCode: err.statusCode || StatusCodes.INTERNAL_SERVER_ERROR,
    msg: err.message || 'Something went wrong. Try again later',
  };
  res.status(defaultError.statusCode).json({ msg: defaultError.msg });
};

export default errorHandlerMiddleWare;
