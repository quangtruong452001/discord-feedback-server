import express from 'express';
import morgan from 'morgan';
import helmet from 'helmet';
import 'dotenv/config';
import router from './routes/index.js';
const app = express();

// init middlewares
app.use(morgan('dev')); // combined, common, short, tiny
app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// init database connection
import './dbs/mongodb.init.js';

// routes
app.use('/api', router);

// middleware for handling error
app.use((req, res, next) => {
  const error = new Error('Not found');
  error.status = 404;
  error.message = 'Invalid route';
  next(error);
});
// manage error function
app.use((error, req, res, next) => {
  res.status(error.status || 500);
  res.json({
      status: 'error',
      code: error.status || 500,
      message: error.message || 'Internal Server Error',
      stack: error.stack,
  });
});

export default app;