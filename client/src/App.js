import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ApolloClient, ApolloProvider, InMemoryCache, createHttpLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

//import LoginForm from './utils/login';
import Auth from './utils/auth';
import SignUpPage from './pages/signup';
import Login from './pages/login';
import MainPage from './pages/maincontainer';
import './App.css';


const httpLink = createHttpLink({
  uri: '/graphql',
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

const App = () => {

  const isLogin = Auth.loggedIn();

  return (
    <ApolloProvider client={client}>
      <Router>
        <Switch>
          <Route exact path = "/Home">
            { isLogin ? <MainPage /> : <Login/>  } 
          </Route>
          <Route exact path='/'>
            { isLogin ? <MainPage /> : <Login/>}
          </Route>
          <Route exact path='/signup'>
          { isLogin ? <MainPage /> : <SignUpPage/>}
          </Route>
          <Route render = { () => <h1>Please login or signup</h1>} />
        </Switch>
      </Router>
    </ApolloProvider>
  );
};


export default App;