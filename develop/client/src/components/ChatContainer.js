import React, { useState } from 'react';
import Chat from '../Chat';
import LoginPage from './pages/LoginPage';
import NavTabs from '../../NavTabs';
import Footer from '../../Footer';

export default function ChatContainer() {

  const [currentPage, setCurrentPage] = useState('Chat');

  // This method is checking to see what the value of `currentPage` is. Depending on the value of currentPage, we return the corresponding component to render.
  const renderPage = () => {
    if (currentPage === 'LoginPage') {
      return <LoginPage />;
    }
    if (currentPage === 'Chat') {
      return <Chat />;
    };

  const handlePageChange = (page) => setCurrentPage(page);
  
  return (

    
    <div>
        <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
      <Footer currentPage={currentPage} handlePageChange={handlePageChange} />
    </div>

  
  );
}
  
  
  }
