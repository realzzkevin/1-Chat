import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ApolloClient, ApolloProvider, InMemoryCache, createHttpLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
//import { ChatEngine } from 'react-chat-engine';
//import LoginForm from './utils/login';
import SignUpPage from './pages/signup';
import Login from './pages/login';
import './App.css';

const httpLink = createHttpLink({
  uri: 'graphql',
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('id_token');

  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});


        //<ChatEngine
          //height="100vh"
          // projectID={projectID}
          //userName={localStorage.getItem('username')}
          //userSecret={localStorage.getItem('password')}
          ///>
// Need projectID

const App = () => {
  //if (!localStorage.getItem('username')) return <LoginForm />;

  return (
    <ApolloProvider client={client}>
      <Router>
        <Switch>
          <Route exact path='/' component={Login} />
          <Route exact path='/signup' component={SignUpPage} />
          <Route render = { () => <h1>Wrong Page</h1>} />
        </Switch>
      </Router>
    </ApolloProvider>
  );
};


export default App;