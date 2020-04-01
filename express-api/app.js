import express from 'express';
import path from 'path';
import cookieParser from 'cookie-parser';

// Express App instantiate
const app = express();

// Security orientated middleware
import logger from 'morgan';
import helmet from 'helmet';
import jsonwebtoken from 'jsonwebtoken';

// Modules from this repository
import indexRouter from './routes/indexRouter';
import thingsRouter from './routes/thingsRouter';
import authRouter from './routes/authRouter';

// Redis & MongoAtlas bespoke database connection imports
import MongoAtlasClient from './mongoAtlas';
import RedisLabsClient from './redisLabs';

// Dotenv import and run config
require('dotenv').config();

// Set up data-store
const databaseName = 'mern-template-v1'
const mongo = new MongoAtlasClient(databaseName);
const redis = new RedisLabsClient();
mongo.connect();
redis.connect();

// Set up middleware
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(helmet());

// Set up JWT
// Check for headers and required elements for JWT
app.use((req, res, next) => {
  if (req.headers && req.headers.authorization && req.headers.authorization.split(' ')[0] === 'JWT') {
    jsonwebtoken.verify(req.headers.authorization.split(' ')[1], process.env.JWT_KEY, (err, decode) => {
      if (err) req.user = undefined;
      req.user = decode;
      next();
    });
  } else {
    req.user = undefined;
    next();
  }
});

// Use bespoke routers - as many as you like
app.use('/', indexRouter);
app.use('/things', thingsRouter);
app.use('/auth', authRouter);

// Must keep the ES5 syntax for now
module.exports = app;

// The app is launched from a different file you will find here: ./bin/www
// This is the way Express-Generator does it. Alternatively you can put the 
// listening code here.
