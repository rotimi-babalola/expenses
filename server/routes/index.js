import express from 'express';
import cors from 'cors';

const whitelist = ['http://localhost:3000', 'http://localhost:5000'];
const corsOptions = {
  origin(origin, callback) {
    if (whitelist.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
};

const router = express.Router();

router.route('/', cors(corsOptions))
  .get((req, res) => {
    res.status(200).json({
      message: 'Welcome to Gastos!',
      info: 'A GraphQL server',
    });
  });

export default router;
