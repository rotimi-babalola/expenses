import React from 'react';
import ReactDOM from 'react-dom';

import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import gql from 'graphql-tag';

import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const client = new ApolloClient({
  uri: 'http://localhost:5000/graphql',
});


client
  .query({
    query: gql`
      {
        Expense {
          id
          name
        }
      }
    `,
  })
  .then(result => console.log(result));

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
