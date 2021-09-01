import '@shared/container';
import createConnection from '@shared/typeorm';
import express from 'express';
import 'express-async-errors';
import { errors } from 'celebrate';
import cors from 'cors';
import routes from './routers';
import rateLimiter from './middlewares/rateLimiter';
import errorApi from '@shared/api/middlewares/errorApi';
import path from 'path';

createConnection();
const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));

app.use(cors());
app.use(express.json(), express.urlencoded({ extended: true }));
app.use(rateLimiter);
app.use(routes);
app.use(errors());

app.use(errorApi);

export default app;
