import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { ApolloProvider } from 'react-apollo';
import { CssBaseline, Container } from '@material-ui/core';
import './App.scss';
import { client } from './client';
import Header from './components/Header';
import Home from './pages/Home';
import ArticleList from './pages/ArticleList';
import ArticleDetail from './pages/ArticleDetail';
import ArticleEdit from './pages/ArticleEdit';

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
            <Route path="/article" exact component={ArticleDetail} />
            <Route path="/article/new" component={ArticleEdit} />
            <Route path="/article/edit/:id" component={ArticleEdit} />
          </Switch>
        </BrowserRouter>
      </Container>
    </ApolloProvider>
  );
}

export default App;
