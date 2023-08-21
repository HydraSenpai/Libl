import { useEffect } from 'react';
import { Navbar, Footer } from '../components/';
import { useUserContext } from '../context/user_context';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const { logoutUser, user } = useUserContext();
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate('/');
    }
  }, [user, navigate]);

  return (
    <div>
      <div className='full-page_without-footer'>
        <Navbar />
        <div className='center'>
          <h1>Dashboard</h1>
          <button className='btn' onClick={logoutUser}>
            Log out
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Dashboard;
