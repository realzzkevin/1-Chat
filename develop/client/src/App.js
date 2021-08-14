import { ChatEngine } from 'react-chat-engine';

import LoginForm from './utils/login';
import './App.css';

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


export default App;