import mongoose from 'mongoose';
import appConfig from './config';
/* eslint no-undef: 0 */
mongoose.Promise = require('bluebird');

const connect = (config = appConfig) => {
  return mongoose.connect(config.db.url);
};

export default connect;
