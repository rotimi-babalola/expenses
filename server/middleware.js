import express from 'express';
import cors from 'cors';

const whitelist = ['http://localhost:3000'];
const corsOptions = {
  origin: function (origin, callback) {
    if (whitelist.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
};

const setGlobalMiddleware = (app) => {
  app.use(express.json());
  app.use(express.urlencoded({ extended: false }));
  app.use(cors(corsOptions));
};

export default setGlobalMiddleware;
