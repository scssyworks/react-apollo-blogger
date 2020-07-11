import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { ApolloProvider } from 'react-apollo';
import { CssBaseline, Container } from '@material-ui/core';
import './App.scss';
import { client } from './apollo-client';
import Header from './components/Header';
import Home from './containers/Home';
import ArticleList from './containers/ArticleList';

function App() {
  return (
    <ApolloProvider client={client}>
      <CssBaseline />
      <Container>
        <BrowserRouter>
          <Header />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/posts" component={ArticleList} />
          </Switch>
        </BrowserRouter>
      </Container>
    </ApolloProvider>
  );
}

export default App;
