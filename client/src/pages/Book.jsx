import styled from 'styled-components';
import React, { useEffect, useState } from 'react';
import moment from 'moment';
import { Loading, Navbar, Footer, BookAlert } from '../components';
import BookSection from '../components/BookSection';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { Card, Image, Button } from 'react-bootstrap';
import Rating from '../components/Rating';
import {
  reserveBook,
  addBookToWaitingList,
  addUserToBookWaitingList,
} from '../utils/helpers';
import { useUserContext } from '../context/user_context';
import { useBookContext } from '../context/book_context';

const Book = () => {
  const navigate = useNavigate();

  const {
    getSingleBook,
    singleBook,
    isLoading,
    getBookReservation,
    createReservation,
    displayAlert,
  } = useBookContext();

  const { user, updateUserReserving, updateUserWaitingList } = useUserContext();

  const { id: bookId } = useParams();
  const [book, setBook] = useState([]);
  const [similarBooks, setSimilarBooks] = useState([]);

  const [availabilityCol, setAvailabiltyCol] = useState('red');
  const [availabilityText, setAvailabiltyText] = useState('No Copies');
  const [availabilityBool, setAvailabiltyBool] = useState(false);

  const createReservationHandler = () => {
    if (user) {
      createReservation(singleBook._id);
    } else {
      navigate('/register');
    }
  };

  useEffect(() => {
    getSingleBook(bookId);
    getBookReservation(bookId);
  }, []);

  useEffect(() => {
    setBook(singleBook);
  }, [singleBook]);

  useEffect(() => {
    if (singleBook.status) {
      window.scrollTo(0, 0);
      try {
        if (singleBook.status === 'available') {
          setAvailabiltyCol('#dd933c');
          setAvailabiltyText('Reserve');
          setAvailabiltyBool(true);
        } else if (singleBook.status === 'waiting') {
          setAvailabiltyCol('#c3d103');
          setAvailabiltyText('Join Waiting List');
          setAvailabiltyBool(true);
        }
      } catch (error) {
        console.log(error);
      }
    }
  }, [
    bookId,
    singleBook.status,
    availabilityCol,
    availabilityBool,
    availabilityText,
    singleBook,
  ]);

  if (isLoading) {
    return <Loading center />;
  }
  return (
    <Wrapper>
      <Navbar />
      <div className='hero'>
        <div className='back'>
          <Link to='/catalogue' className='btn'>
            Back
          </Link>
        </div>
        <Image src={book.cover} className='book-img' />
        <div className='book-details'>
          <h3>{book.book_title}</h3>
          <p>
            <strong>Author: </strong> {book.author}
          </p>
          <p>
            <strong>Release Date: </strong>
            {moment(book.bookReleaseDate).utc().format('YYYY-MM-DD')}
          </p>
          <p>
            <Rating
              value={book.rating}
              text={`Reserved ${book.timesReserved} times`}
            />
          </p>
        </div>
      </div>

      <div className='summary-div'>
        <div className='summary-text'>
          <div className='summary-header'>
            <h4>Description:</h4>
            <p>{book.bookDescription}</p>
          </div>

          <div className='details-div'>
            <h4>Details</h4>
            <ul className='details-list'>
              <li>
                <strong>Author: </strong>
                {book.author}
              </li>
              <li>
                <strong>Release Date: </strong>
                {moment(book.bookReleaseDate).utc().format('YYYY-MM-DD')}
              </li>
              <li>
                <strong>ISBN: </strong>
                {book.isbn}
              </li>
              <li>
                <strong>Audience: </strong>
                {book.audience}
              </li>
              <li>
                <strong>Language: </strong>
                {book.language}
              </li>
              <li>
                <strong>Genre: </strong>
                {book.genre}
              </li>
            </ul>
          </div>
        </div>
        <div className='availabilty-div'>
          <Card className='availabilty-card'>
            <Card.Body>
              <Card.Title as='div' className='availabilty-card-title'>
                {book.bookTitle}
              </Card.Title>
              {displayAlert && <BookAlert />}
              <Card.Text as='div'>
                <Button
                  disabled={!availabilityBool}
                  style={{ backgroundColor: `${availabilityCol}` }}
                  className='availabilty-card-btn'
                  onClick={createReservationHandler}
                >
                  {availabilityText}
                </Button>
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
      </div>

      <div className='more-books-div'>
        <h4>More Books Like This</h4>
        <BookSection books={similarBooks.slice(0, 4)} />
      </div>

      <Footer />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .hero {
    height: 70vh;
    background-color: 'white';
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    padding: 5rem;
    background-color: lightgray;
    position: relative;
  }
  .back {
    position: absolute;
  }
  .book-img {
    margin: 0 15rem;
    width: 20rem;
  }

  .book-details {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    font-size: 1.5rem;
  }

  .book-details > * {
    margin: 0;
  }

  .book-details > h3 {
    font-size: 2rem;
    font-weight: 600;
    color: #dd933c;
  }

  .book-details > p {
    font-weight: 200;
  }

  .summary-div {
    margin: 5rem 3rem;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
  }

  .availabilty-card {
    background-color: #dddddd;
    padding: 4rem;
    border-radius: 2rem;
    text-align: center;
    box-shadow: 5px 5px#e6af71;
  }

  .availabilty-card-title {
    margin: 0.5rem 0;
    font-size: 1.5rem;
    color: #dd933c;
    font-weight: 400;
  }

  .more-books-div {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .more-books-div > * {
    padding: 1rem 0;
  }
`;

export default Book;
