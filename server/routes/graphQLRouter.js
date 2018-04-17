import { makeExecutableSchema } from 'graphql-tools';
import merge from 'lodash.merge';
import { graphqlExpress } from 'apollo-server-express';
import { expenseType } from '../resources/expenses';

const baseSchema = `
  schema {
    query: Query
    mutation: Mutation
  }
`;

export const schema = makeExecutableSchema({
  typeDefs: [
    baseSchema,
    expenseType,
  ],
});

export const graphQLRouter = graphqlExpress((req) => ({
  schema,
  context: {
    req,
  },
}));