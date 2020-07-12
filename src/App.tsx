import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { ApolloProvider } from 'react-apollo';
import { CssBaseline, Container } from '@material-ui/core';
import './App.scss';
import { client } from './apollo-client';
import Header from './components/Header';
import Home from './containers/Home';
import ArticleList from './containers/ArticleList';
import ArticleDetail from './containers/ArticleDetail';
import ArticleEdit from './containers/ArticleEdit';

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
            <Route path="/article" component={ArticleDetail} />
            <Route path="/article/new" component={ArticleEdit} />
            <Route path="/article/edit/:id" component={ArticleEdit} />
          </Switch>
        </BrowserRouter>
      </Container>
    </ApolloProvider>
  );
}

export default App;
