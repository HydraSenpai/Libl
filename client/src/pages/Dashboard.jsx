import { useEffect, useState } from 'react';
import { Navbar, Footer } from '../components/';
import { useUserContext } from '../context/user_context';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import profile from '../assets/profileblank.png';
import DetailsForm from '../components/profile/DetailsForm';
import BorrowingTable from '../components/profile/BorrowingTable';
import ReservedTable from '../components/profile/ReservedTable';
import { useBookContext } from '../context/book_context';

const Dashboard = () => {
  const { logoutUser, user } = useUserContext();
  const { books } = useBookContext();
  const [displayOption, setDisplayOption] = useState('details');
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate('/');
    }
  }, [user, navigate]);

  return (
    <Wrapper>
      <div className='full-page_footer'>
        <Navbar />
        <div className='center'>
          {/* TOP SECTION */}
          <div className='top-section'>
            <button
              type='button'
              className='btn logout-btn'
              onClick={logoutUser}
            >
              Logout
            </button>
            <img src={profile} className='profile' />
            <h3>Profile</h3>
            <h4>{user.name}</h4>
          </div>
          {/* BUTTON SECTION */}
          <div className='buttons'>
            <button
              className={displayOption === 'details' ? 'btn btn-accent' : 'btn'}
              onClick={() => setDisplayOption('details')}
            >
              Details
            </button>
            <button
              className={
                displayOption === 'borrowing' ? 'btn btn-accent' : 'btn'
              }
              onClick={() => setDisplayOption('borrowing')}
            >
              Borrowing
            </button>
            <button
              className={
                displayOption === 'reserved' ? 'btn btn-accent' : 'btn'
              }
              onClick={() => setDisplayOption('reserved')}
            >
              Waiting List
            </button>
          </div>
          {/* MAIN SECTION */}
          <div className='bottom-section'>
            {displayOption === 'details' && (
              <div className='details'>
                <DetailsForm user={user} />
              </div>
            )}
            {displayOption === 'borrowing' && (
              <div className='borrowing'>
                <BorrowingTable />
              </div>
            )}
            {displayOption === 'reserved' && (
              <div className='reserved'>
                <ReservedTable />
              </div>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </Wrapper>
  );
};

export default Dashboard;

const Wrapper = styled.div`
  /* .full-page_footer {
    min-height: 100vh;
    height: 100vh;
    margin: 0 auto;
  } */
  .top-section {
    height: 200px;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
  }
  .logout-btn {
    position: absolute;
    right: 20%;
  }
  .profile {
    height: 100px;
    width: 100px;
  }
  .buttons {
    display: flex;
    justify-content: center;
    margin: 1em 0em;
    gap: 1em;
  }
  .buttons > .btn {
    width: 200px;
    border-radius: 50px;
  }
  .bottom-section {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 2em;
  }
`;
