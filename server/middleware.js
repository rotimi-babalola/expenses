import express from 'express';

const setGlobalMiddleware = (app) => {
  app.use(express.json());
  app.use(express.urlencoded({ extended: false }));
};

export default setGlobalMiddleware;
