import { useEffect, useState } from 'react';
import { Navbar, Footer, Table } from '../components/';
import { useUserContext } from '../context/user_context';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import profile from '../assets/profileblank.png';
import DetailsForm from '../components/profile/DetailsForm';

const Dashboard = () => {
  const { logoutUser, user } = useUserContext();
  const [displayOption, setDisplayOption] = useState('details');
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate('/');
    }
  }, [user, navigate]);

  return (
    <Wrapper>
      <div className='full-page_without-footer'>
        <Navbar />
        <div className='center nav-padding'>
          {/* TOP SECTION */}
          <div className='top-section'>
            <img src={profile} className='profile' />
            <h3>Profile</h3>
            <h4>Name</h4>
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
              Reserved
            </button>
          </div>
          {/* MAIN SECTION */}
          <div className='bottom-section'>
            {displayOption === 'details' && (
              <div className='details'>
                <DetailsForm />
              </div>
            )}
            {displayOption === 'borrowing' && (
              <div className='borrowing'>
                <Table />
              </div>
            )}
            {displayOption === 'reserved' && (
              <div className='reserved'>
                <Table />
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
  .full-page_without-footer {
    height: 180vh;
  }
  .top-section {
    height: 200px;
    width: 80%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .profile {
    height: 100px;
    width: 100px;
  }
  .buttons {
    display: flex;
    margin: 1em 0em;
    gap: 1em;
  }
  .buttons > .btn {
    width: 200px;
    border-radius: 50px;
  }
  .bottom-section {
    min-height: 1000px;
    width: 80%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 2em;
  }
`;
