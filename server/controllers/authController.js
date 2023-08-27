import CustomAPIError from '../errors/customAPIError.js'
import User from '../models/User.js'
import { StatusCodes } from 'http-status-codes'

const register = async (req, res) => {
  //get all input sent from login page
  const { name, email, password } = req.body
  //check all fields are present
  if (!name || !email || !password) {
    throw new CustomAPIError(
      'Please provide all register details',
      StatusCodes.BAD_REQUEST
    )
  }
  //email has to be unique so check if email is already in database
  const userAlreadyExists = await User.findOne({ email })
  if (userAlreadyExists) {
    throw new CustomAPIError(
      'This email is already in use',
      StatusCodes.BAD_REQUEST
    )
  }
  //submit user info to database
  const user = await User.create({ name, email, password })
  const token = user.createJWT()
  //send back user data and token
  res.status(StatusCodes.CREATED).json({
    user: {
      name: user.name,
      email: user.email,
    },
    token,
  })
}

const login = async (req, res) => {
  const { email, password } = req.body
  if (!email || !password) {
    throw new CustomAPIError(
      'Please provide all values',
      StatusCodes.BAD_REQUEST
    )
  }
  const user = await User.findOne({ email }).select('+password')
  if (!user) {
    throw new CustomAPIError('Invalid Credentials', StatusCodes.UNAUTHORIZED)
  }
  const isPassword = await user.comparePassword(password)
  if (!isPassword) {
    throw new CustomAPIError('Invalid Credentials', StatusCodes.UNAUTHORIZED)
  }
  const token = user.createJWT()
  user.password = undefined
  res.status(StatusCodes.OK).json({ user, token })
}

const updateUser = async (req, res) => {
  console.log(req.body)
  const { name, email, _id } = req.body
  if (!name || !email || !_id) {
    throw new CustomAPIError(
      'Please provide all values',
      StatusCodes.BAD_REQUEST
    )
  }
  //find user by id and update necessary fields
  let user = await User.findByIdAndUpdate(
    _id,
    { name: name, email: email },
    { new: true }
  )
  res.status(StatusCodes.OK).json({ user })
}

const addToReservedList = async (req, res) => {
  const userId = req.params.id
  const user = await User.findById(userId)

  if (!user) {
    throw new CustomAPIError(
      `Couldn't retrieve user. Try again soon...`,
      StatusCodes.NOT_FOUND
    )
  }

  const userReservedList = user.booksReserved

  const bookId = req.body.bookId

  const dateNow = Date.now()

  user.booksReserved = [...userReservedList, { bookId, dateNow }]

  const updatedUser = await user.save()

  res.status(StatusCodes.OK).json({ updatedUser })
}

export { register, login, updateUser, addToReservedList }
