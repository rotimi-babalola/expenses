import express from 'express';
import cors from 'cors';
import corsOptions from '../corsOptions';

const router = express.Router();

router.route('/', cors(corsOptions))
  .get((req, res) => {
    res.status(200).json({
      message: 'Welcome to Gastos!',
      info: 'A GraphQL server',
    });
  });

export default router;
