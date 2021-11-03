import dotenv from 'dotenv';
import 'reflect-metadata';
import 'express-async-errors';


import express, { Request, Response, NextFunction } from 'express';
import cors from 'cors';
import { errors } from 'celebrate';

import '../typeorm/index';
import '../../container';

import AppError from '../../errors/AppError';
import routes from './routes';

dotenv.config();

const app = express();
const port = process.env.PORT || 3334;

app.use(express.json());
app.use(cors());
app.use(errors());
app.use(routes);

app.use((err: Error, request: Request, response: Response, _: NextFunction) => {
  if (err instanceof AppError) {
    return response.status(err.statusCode).json({
      status: 'error',
      message: err.message,
    });
  }

  console.log(err);

  return response.status(500).json({
    status: 'error',
    message: 'Internal server error',
  });
});

app.listen(port, () => {
    console.log(`🚀 Server started on port ${port}`);
});
