import express from 'express';
import cors from 'cors';
import router from './routes';

const app = express();

// middlewares mounted
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

app.use(router);

/* eslint no-undef:0 */
const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`App running on port ${port}`));
export default app;
