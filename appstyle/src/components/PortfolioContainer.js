import React, { useState } from 'react';
import NavTabs from './NavTabs';
import Home from './pages/Portfolio';
import Chat from './pages/Chat';
import Resume from './pages/Resume';
import Contact from './pages/Contact';
// import Footer from '../Footer';

export default function PortfolioContainer() {

  const [currentPage, setCurrentPage] = useState('Chat');

  // This method is checking to see what the value of `currentPage` is. Depending on the value of currentPage, we return the corresponding component to render.
  const renderPage = () => {
    if (currentPage === 'Portfolio') {
      return <Home />;
    }
    if (currentPage === 'Chat') {
      return <Chat />;
    }
    if (currentPage === 'Resume') {
      return <Resume />;
    }
    return <Contact />;
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (

    
    <div>
      {/* We are passing the currentPage from state and the function to update it */}
      <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
      {/* <Footer currentPage={currentPage} handlePageChange={handlePageChange} /> */}
      {/* Here we are calling the renderPage method which will return a component  */}
      {renderPage()}
    </div>

  
  );
}