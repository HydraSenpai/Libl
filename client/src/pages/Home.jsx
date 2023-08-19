import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import BookSection from '../components/BookSection';

const Home = () => {
  const books = [
    {
      _id: 0,
      book_title: 'From Blood and Ash',
      authors: {
        author: {
          first_name: 'Jennifer L.',
          second_name: 'Armentrou',
        },
      },
      book_description:
        'Chosen from birth to usher in a new era, Poppy’s life has never been her own. The life of the Maiden is solitary. Never to be touched. Never to be looked upon. Never to be spoken to. Never to experience pleasure. Waiting for the day of her Ascension, she would rather be with the guards, fighting back the evil that took her family, than preparing to be found worthy by the gods. But the choice has never been hers.',
      book_release_date: '25/12/1999',
      isbn: '9781848869345',
      audience: 'adults',
      language: 'english',
      genre: 'fantasy',
      availability: 'available',
      cover:
        'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1588843906l/52861201._SY475_.jpg',
      url: 'https://www.goodreads.com/book/show/52861201-from-blood-and-ash?from_choice=true',
      rating: 2,
      times_reserved: 5,
    },
    {
      _id: 1,
      book_title: 'In Five Years',
      authors: {
        author: {
          first_name: 'Rebecca',
          second_name: 'Serl',
        },
      },
      book_description:
        "Where do you see yourself in five years? When Type-A Manhattan lawyer Dannie Kohan is asked this question at the most important interview of her career, she has a meticulously crafted answer at the ready. Later, after nailing her interview and accepting her boyfriend's marriage proposal, Dannie goes to sleep knowing she is right on track to achieve her five-year plan. But when she wakes up, she’s suddenly in a different apartment, with a different ring on her finger, and beside a very different man. The television news is on in the background, and she can just make out the scrolling date. It’s the same night—December 15—but 2025, five years in the future.",
      book_release_date: '25/12/1999',
      isbn: '9781982137441',
      audience: 'adults',
      language: 'english',
      genre: 'romance',
      availability: 'available',
      cover:
        'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1586399012l/50093704._SY475_.jpg',
      url: 'https://www.goodreads.com/book/show/50093704-in-five-years?from_choice=true',
      rating: 2,
      times_reserved: 5,
    },
  ];
  return (
    <>
      <Navbar />
      <Hero />
      <BookSection heading={'Trending'} books={books} />
      <BookSection heading={'Top 10'} books={books} />
    </>
  );
};

export default Home;
