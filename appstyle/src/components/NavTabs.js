import React from 'react';

// Here we are using object destructuring assignment to pluck off our variables from the props object
// We assign them to their own variable names

function NavTabs({ currentPage, handlePageChange }) {
  return (
    <ul className="nav nav-tabs">
 <div>
 <p style={{fontFamily: 'Merriweather'}} >1 <span style={{fontFamily: 'Cursive'}}>Chat</span></p>     
    </div>
    
      <li className="nav-item">
        <a
          href="#chat"
          onClick={() => handlePageChange('Chat')}
          // Check to see if the currentPage is `Chat`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
          className={currentPage === 'Chat' ? 'nav-link active' : 'nav-link'}
        >
          Chat
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#Chat"
          onClick={() => handlePageChange('Chat')}
          // This is a conditional (ternary) operator that checks to see if the current page is "Home"
          // If it is, we set the current page to 'nav-link-active', otherwise we set it to 'nav-link'
          className={currentPage === 'Portfolio' ? 'nav-link active' : 'nav-link'}
        >
          Friends
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#friends"
          onClick={() => handlePageChange('Friends')}
          // Check to see if the currentPage is `Blog`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
          className={currentPage === 'Friends' ? 'nav-link active' : 'nav-link'}
        >
          Login
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#signup"
          onClick={() => handlePageChange('Signup')}
          // Check to see if the currentPage is `Contact`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
          className={currentPage === 'Signup' ? 'nav-link active' : 'nav-link'}
        >
          Signup
        </a>
      </li>
    </ul>
  );
}

export default NavTabs;
