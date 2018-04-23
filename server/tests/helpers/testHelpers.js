/* eslint no-undef: 0 */
import '../../models/expense.model';
import mongoose from 'mongoose';

mongoose.Promise = global.Promise;

export const removeModel = (modelName) => {
  const model = mongoose.model(modelName);
  return new Promise((resolve, reject) => {
    if (!model) {
      return resolve();
    }
    model.remove((err) => {
      if (err) {
        reject(err);
      } else {
        resolve();
      }
    });
  });
};

export const dropDb = () => {
  return mongoose.connect('mongodb://localhost/gastos-test')
    .then(() => Promise.all(mongoose.modelNames().map(removeModel)));
};

