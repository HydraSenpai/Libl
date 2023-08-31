import axios from 'axios'

const getUniqueValues = (data, type) => {
  let unique = data.map((item) => item[type])
  if (type === 'audience') {
    unique.unshift('all')
    return [...new Set(unique)]
  }
  return ['all', ...new Set(unique)]
}

const reserveBook = (userId, bookId) => {
  try {
    const body = { bookId: bookId }
    axios
      .put(`http://localhost:4000/api/v1/auth/borrow/${userId}`, body)
      .then((response) => {
        console.log(response)
      })
  } catch (error) {
    console.log(error)
  }
}

const addBookToWaitingList = (userId, bookId) => {
  try {
    const body = { bookId: bookId }
    axios
      .put(`http://localhost:4000/api/v1/auth/wait/${userId}`, body)
      .then((response) => {
        console.log(response)
      })
  } catch (error) {
    console.log(error)
  }
}

const addUserToBookWaitingList = (userId, bookId) => {
  try {
    const body = { userId: userId }
    axios
      .put(`http://localhost:4000/api/v1/books/${bookId}`, body)
      .then((response) => {
        console.log(response)
      })
  } catch (error) {
    console.log(error)
  }
}

export {
  getUniqueValues,
  reserveBook,
  addBookToWaitingList,
  addUserToBookWaitingList,
}
