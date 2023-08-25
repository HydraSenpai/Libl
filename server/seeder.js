import dotenv from 'dotenv'
import books from './data/bookdata.js'
import Book from './models/Book.js'
import colors from 'colors'
import connectDB from './db/connect.js'

dotenv.config()

connectDB(process.env.MONGO_URL)

const importData = async () => {
  try {
    await Book.deleteMany()

    const sampleBooks = books.map((b) => {
      return { ...b }
    })

    await Book.insertMany(sampleBooks)

    // console.log(sampleBooks[0])

    console.log('Data Imported!'.green.inverse)
    process.exit()
  } catch (error) {
    console.log(`${error}`.red.inverse)
    process.exit(1)
  }
}

const destroyData = async () => {
  try {
    await Book.deleteMany()

    console.log('Data Destroyed'.red.inverse)
    process.exit()
  } catch (error) {
    console.log(`${error}`.red.inverse)
    process.exit(1)
  }
}

if (process.argv[2] === '-d') {
  destroyData()
} else {
  importData()
}
