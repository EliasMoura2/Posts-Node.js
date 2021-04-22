import express from 'express';
import logger from 'morgan';
import postsRoutes from './routes/posts';

const app = express()

// Middlewares
app.use(logger('dev'));

// Routes
app.use('/posts', postsRoutes);

module.exports = app;