import express from 'express';
import cors from 'cors';

const setGlobalMiddleware = (app) => {
  app.use(express.json());
  app.use(express.urlencoded({ extended: false, }));
  app.use(cors());
};

export default setGlobalMiddleware;
