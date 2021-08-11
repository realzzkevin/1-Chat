import React from 'react';
// import Form from '../../Form';
import Popup from '../Popup.js';
import {useState} from 'react';

import'../../App.css'


function Chat() {
  const [buttonPopup, setButtonPopup] = useState(false);
  return (
    <div>
      <main>
      <button onClick={() =>setButtonPopup(true)}>Open Popups</button>
</main>

      <Popup trigger={buttonPopup} setTrigger={setButtonPopup}>
        <h3>My Popup</h3>
  <div class="chat-popup" id="message-container">
  <form id="send-container" action="/action_page.php" class="form-container">
    <h1 style={{fontFamily: 'Merriweather'}} >1 <span style={{fontFamily: 'Cursive'}}>Chat</span></h1>
    <label for="msg"><b></b></label>
    <textarea input type="text" id="message-input" placeholder="Type message.." name="msg" required></textarea>
    <button type="submit" id="send-button" class="btn">Send</button>
  </form>
</div>
</div>
      </Popup>
    </div>


  );
}
export default Chat;