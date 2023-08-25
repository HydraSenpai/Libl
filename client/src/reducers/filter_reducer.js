import {
  LOAD_BOOKS,
  UPDATE_SORT,
  SORT_BOOKS,
  UPDATE_FILTERS,
  FILTER_BOOKS,
  CLEAR_FILTERS,
} from '../actions/filter_actions'

const filter_reducer = (state, action) => {
  if (action.type === LOAD_BOOKS) {
    // we use spread operator here to make sure allBooks and filteredBooks become a new copy of books
    return {
      ...state,
      allBooks: [...action.payload],
      filteredBooks: [...action.payload],
    }
  }
  if (action.type === UPDATE_SORT) {
    return { ...state, sort: action.payload }
  }
  if (action.type === SORT_BOOKS) {
    const { sort, filteredBooks } = state
    let tempBooks = [...filteredBooks]
    if (sort === 'name-a') {
      tempBooks = tempBooks.sort((a, b) => {
        return a.bookTitle.localeCompare(b.bookTitle)
      })
    }
    if (sort === 'name-z') {
      tempBooks = tempBooks.sort((a, b) => {
        return b.bookTitle.localeCompare(a.bookTitle)
      })
    }
    return { ...state, filteredBooks: tempBooks }
  }
  if (action.type === UPDATE_FILTERS) {
    const { name, value } = action.payload
    return { ...state, filters: { ...state.filters, [name]: value } }
  }
  if (action.type === FILTER_BOOKS) {
    const { allBooks } = state
    const { title, author, genre, audience, language } = state.filters
    let tempBooks = [...allBooks]
    // FILTER JUST TITLE
    if (title) {
      let titleFilteredBooks = tempBooks.filter((book) =>
        // can change it so it only filters with start of text (preference)
        // book.book_title.toLowerCase().includes(title.toLowerCase())
        book.bookTitle.toLowerCase().includes(title.toLowerCase())
      )
      let authorFilteredBooks = tempBooks.filter((book) =>
        book.author.toLowerCase().includes(title.toLowerCase())
      )
      tempBooks = titleFilteredBooks.concat(authorFilteredBooks)
      tempBooks = [...new Set(tempBooks)]
    }
    // FILTER GENRE
    if (genre !== 'all') {
      tempBooks = tempBooks.filter((book) => book.genre === genre)
    }
    // FILTER LANGUAGE
    if (language !== 'all') {
      tempBooks = tempBooks.filter((book) => book.language === language)
    }
    // FILTER AUDIENCE
    if (audience !== 'all') {
      tempBooks = tempBooks.filter((book) => book.audience === audience)
    }
    return { ...state, filteredBooks: tempBooks }
  }
  if (action.type === CLEAR_FILTERS) {
    return {
      ...state,
      filters: {
        title: '',
        author: '',
        genre: 'all',
        audience: 'all',
        language: 'all',
      },
    }
  }
  throw new Error(`No Matching "${action.type}" - action type`)
}

export default filter_reducer
