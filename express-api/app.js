// Third party packages
import express from 'express';
import path from 'path';
import cookieParser from 'cookie-parser';
import logger from 'morgan';
import helmet from 'helmet';

// Modules from this repository
import indexRouter from './routes/indexRouter';
import thingsRouter from './routes/thingsRouter';

// This is bespoke class created for this stack
import MongoAtlas from './database';


const app = express();

// Set up database
const databaseName = 'things'
const database = new MongoAtlas(databaseName);
database.connect();

// Set up middleware
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(helmet());

// Use bespoke routers - as many as you like
app.use('/', indexRouter);
app.use('/things', thingsRouter);

// Must keep the non-ES6 syntax for now
module.exports = app;

// The app is launched from a different file you will find here: ./bin/www
// This is the way Express-Generator does it. Alternatively you can put the 
// listening code here.
