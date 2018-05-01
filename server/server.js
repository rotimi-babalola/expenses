import express from 'express';
import graphqlHTTP from 'express-graphql';
import cors from 'cors';
import corsOptions from './corsOptions';
import expenseSchema from './schemas/index';
import connect from './db';
import setUpMiddWare from './middleware';
import router from './routes';
import appConfig from './config';
const port = appConfig.port || 5000;


const app = express();

/* eslint no-unused-vars: 0*/

// the position of this middleware es muy importante 😭😅
app.use(cors());

app.use('/graphql', graphqlHTTP(req => ({
  schema: expenseSchema,
  graphiql: true,
})));

// mount middleware
setUpMiddWare(app);
// connect to DB
connect();

app.use(router);

export default app;
