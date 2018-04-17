import express from 'express';
import router from './routes';
import connect from './db';
import appConfig from './config';
import setUpMiddWare from './middleware';

const app = express();

// middlewares mounted
setUpMiddWare(app);
// connect to DB
connect();

app.use(router);

/* eslint no-undef:0 */
const port = appConfig.port || 3000;

app.listen(port, () => console.log(`App running on port ${port}`));
export default app;
