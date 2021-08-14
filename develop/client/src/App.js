import { ChatEngine } from 'react-chat-engine';

import LoginForm from './utils/login';
import './App.css';

const projectID='91bdc97f 65b7-466a-b21e-1fd7b4fb154c';

const App = () => {
  if (!localStorage.getItem('username')) return <LoginForm />;

  return (
    <ChatEngine
      height="100vh"
      projectID={projectID}
      userName={localStorage.getItem('username')}
      userSecret={localStorage.getItem('password')}
    />
  );
};


export default App;