import 'express-async-errors'
import express from 'express'
const app = express()
import dotenv from 'dotenv'
dotenv.config()

//database and auth
import connectDB from './db/connect.js'

//routes
import authRoutes from './routes/authRoutes.js'
import bookRoutes from './routes/bookRoutes.js'

//middleware imports
import notFound from './middleware/not-found.js'
import ErrorHandler from './middleware/error-handler.js'
import auth from './middleware/auth.js'

//middleware
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

//routes
//routes
app.get('/', (req, res) => {
  res.json({ msg: 'Welcome!' })
})
app.use('/api/v1/auth', authRoutes)
// will use auth soon, want to text first
app.use('/api/v1/books', bookRoutes)
// app.use('api/v1', auth, bookRoutes);

//custom middleware
app.use(notFound)
app.use(ErrorHandler)

const port = process.env.PORT || 5000

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URL)
    app.listen(port, () => {
      console.log(`Server is listening on port ${port}`)
    })
  } catch (error) {
    console.log(error)
  }
}

start()
