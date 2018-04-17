var graphqlHTTP = require('express-graphql');
var { graphql, buildSchema } = require('graphql');
import express from 'express';
const app = express();

const port = 3000;
var schema = buildSchema(`
  type Query {
    hello: String
    abiodun: String
  }
`);

// The root provides a resolver function for each API endpoint
var root = {
  hello: () => {
    return 'Hello world!';
  },
  abiodun: () => {
    return 'abidoun';
  },
};
app.use('/graphql', graphqlHTTP({
  schema: schema,
  rootValue: root,
  graphiql: true,
}));
app.listen(3000);
// Construct a schema, using GraphQL schema language


// Run the GraphQL query '{ hello }' and print out the response
graphql(schema, 'query { hello }', root).then((response) => {
  console.log(response);
});

// import router from './routes';
// import { graphQLRouter } from './routes/graphQLRouter';
// import connect from './db';
// import appConfig from './config';
// import setUpMiddWare from './middleware';


// // middlewares mounted
// setUpMiddWare(app);
// // connect to DB
// connect();

// app.use(router);

// /* eslint no-undef:0 */

