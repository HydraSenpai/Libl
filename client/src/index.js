import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { UserProvider } from './context/user_context';
import { BookProvider } from './context/book_context';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <UserProvider>
      <BookProvider>
        <App />
      </BookProvider>
    </UserProvider>
  </React.StrictMode>
);
