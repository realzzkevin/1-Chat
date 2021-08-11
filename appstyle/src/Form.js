// import React, { useState } from 'react';
// // Here we import a helper function that will check if the email is valid
// // import { checkPassword, validateEmail } from '../../utils/helpers';

// function Form() {
//   // Create state variables for the fields in the form
//   // We are also setting their initial values to an empty string
//   const [message, setMessage] = useState('');
//   const [errorMessage, setErrorMessage] = useState('');

//   const handleInputChange = (e) => {
//     // Getting the value and name of the input which triggered the change
//     const { target } = e;
//     const inputType = target.name;
//     // const inputValue = target.value;

//     // Based on the input type, we set the state of either email, username, and password
//     if (inputType === 'message') {
  
//     }
//   };

//   const handleFormSubmit = (e) => {
//     // Preventing the default behavior of the form submit (which is to refresh the page)
//     e.preventDefault();

//     // First we check to see if the email is not valid or if the userName is empty. If so we set an error message to be displayed on the page.
//     if (!message) {
//       setErrorMessage('Fields cannot be empty');
//     //   // We want to exit out of this code block if something is wrong so that the user can correct it
//       return;
//     }
//     // If everything goes according to plan, we want to clear out the input after a successful contact.
  
//     setMessage('');
//   };

//   return (
//     <div>
//       <div className="chat-popup" id="message-container">
//       <form id="send-container" action="/action_page.php" className="form-container">
//         <input
//           value={message}
//           name="message"
//           onChange={handleInputChange}
//           type="textarea"
//           placeholder="Message"
//         />
//         <button type="button" id="send-button" onClick={handleFormSubmit}>Submit</button>
//       </form>
//       {errorMessage && (
//         <div>
//           <p className="error-text">{errorMessage}</p>
//         </div>
//       )}
//     </div>
//     </div>
//   );
// }

// export default Form;

// /* <div class="chat-popup" id="message-container">
//   <form id="send-container" action="/action_page.php" class="form-container">
//     <h1 style="font-family: 'Merriweather', serif;">1<span style="font-family: 'Marck Script', cursive;">Chat</h1>
//     <label for="msg"><b></b></label>
//     <textarea input type="text" id="message-input" placeholder="Type message.." name="msg" required></textarea>
//     <button type="submit"  class="btn">Send</button>
//   </form>
// </div>
// </div> */