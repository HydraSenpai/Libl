import { Navbar, Footer } from '../components/';

const Dashboard = () => {
  return (
    <div>
      <div className='full-page_without-footer'>
        <Navbar />
        <div className='center'>
          <h1>Dashboard</h1>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Dashboard;
