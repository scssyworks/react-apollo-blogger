import React from 'react';
import { ApolloProvider } from 'react-apollo';
import './App.css';
import { client } from './apollo-client';

function App() {
  return (
    <ApolloProvider client={client}>
      <div className="App">
        This is a blog app
      </div>
    </ApolloProvider>
  );
}

export default App;
