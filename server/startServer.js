import app from './server';
import appConfig from './config';
const port = appConfig.port || 5000;

/* eslint no-unused-vars: 0*/
/* eslint no-console: 0*/

app.listen(port, () => console.log(`App running on port ${port}`));
