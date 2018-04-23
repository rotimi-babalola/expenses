/* eslint no-undef: 0 */
import mongoose from 'mongoose';
import appConfig from './config';
mongoose.Promise = global.Promise;

const connect = (config = appConfig) => {
  return mongoose.connect(config.db.url);
};

export default connect;
