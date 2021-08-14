import { ChatEngine } from 'react-chat-engine';

import LoginForm from './utils/login';
import './App.css';

<<<<<<< Updated upstream


function App() {
  return (
    <div classname='App'>
       <h1>Hello</h1>
    </div>
   
   
  )
}
=======
// Need projectID

const App = () => {
  if (!localStorage.getItem('username')) return <LoginForm />;

  return (
    <ChatEngine
      height="100vh"
     // projectID={projectID}
      userName={localStorage.getItem('username')}
      userSecret={localStorage.getItem('password')}
    />
  );
};

>>>>>>> Stashed changes

export default App;