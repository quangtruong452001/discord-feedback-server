'use strict';

import mongoose from 'mongoose';
import config from '../configs/config.mongodb.js';


// const connectString = `mongodb://${host}:${port}/${name}`;
const connectString = config.connectString;
class Database {
  constructor() {
    this.connect();
  }

  // connect
  connect(type = 'mongodb') {
    if (1 === 1) {
      // dev mode
      mongoose.set('debug', true);
      mongoose.set('debug', { color: true });
    }
    mongoose
      .connect(connectString)
      .then(() => {
        console.log('Connected to MongoDB');
      })
      .catch((err) => {
        console.log('Failed to connect to MongoDB', err);
      });
  }

  static getInstance() {
    if (!Database.instance) {
      Database.instance = new Database();
    }
    return Database.instance;
  }
}

const instanceMongodb = Database.getInstance();
export default instanceMongodb;