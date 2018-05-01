import React from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';

const FooComp = () => (
  <Query
    query = {
      gql` {
        Expense {
          id
          name
        }
      }
    `}
  >
  {({ loading, error, data }) => {
    if (loading) {
      return (<p>Loading...</p>);
    } else if (error) {
      return (<p>Error :(</p>);
    }
    return data.Expense.map(({ id, name }) => (
      <div key={id}>
        <p>{name}</p>
      </div>
    ));
  }}
  </Query>
);

export default FooComp;
