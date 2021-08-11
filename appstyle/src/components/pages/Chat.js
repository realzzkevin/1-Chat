import React from 'react';
// import MessageBox from '../MessageBox.js';
import Popup from '../Popup.js';
import {useState} from 'react';

import'../../App.css'
import { MessageBox } from 'react-chat-elements';


function Chat() {
  const [buttonPopup, setButtonPopup] = useState(false);
  return (
    <div>
      <main>
      <button onClick={() =>setButtonPopup(true)}>Open Popups</button>
</main>

      <Popup trigger={buttonPopup} setTrigger={setButtonPopup}>
        <h3>My Popup</h3>
        <MessageBox
    position={'left'}
    type={'photo'}
    text={'react.svg'}
    data={{
        uri: 'https://facebook.github.io/react/img/logo.svg',
        status: {
            click: false,
            loading: 0,
        }
    }}/>
      </Popup>
    </div>


  );
}
export default Chat;