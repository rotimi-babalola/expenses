import express from 'express';

const router = express.Router();

router.route('/')
  .get((req, res) => {
    res.status(200).json({
      message: 'Welcome to Gastos!',
      info: 'A GraphQL server',
    });
  });

export default router;
