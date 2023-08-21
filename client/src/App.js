import { useEffect } from 'react';
import {
  Home,
  Catalogue,
  Dashboard,
  Book,
  Login,
  Error,
  ProtectedRoute,
} from './pages/';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/catalogue' element={<Catalogue />} />
        <Route path='/book/:id' element={<Book />} />
        {/* Profile route will be protected route */}
        <Route
          path='/profile'
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />
        <Route path='/register' element={<Login />} />
        <Route path='*' element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
